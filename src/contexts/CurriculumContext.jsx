import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useNetwork } from './NetworkContext';
import { getSubjectsForClass, getChapters, getChapterById, getLessonById, getQuizById } from '../data/curriculumData';
import { getProjectsForClass, getProjectById } from '../data/projectsData';
import { skillsTaxonomy, calculateSkillScore } from '../data/skillsData';
import { getOpportunitiesForClass, calculateOpportunityMatch } from '../data/opportunitiesData';
import { db } from '../services/db';
import { syncService } from '../services/syncService';
import { offlineContentService } from '../services/offlineContentService';

const CurriculumContext = createContext(null);

export function CurriculumProvider({ children }) {
  const { profile } = useAuth();
  const { isOnline } = useNetwork();
  
  const currentClass = profile?.class_id || 8;
  const userId = profile?.id || 'demo_user';

  const [completedLessons, setCompletedLessons] = useState(() => new Set(['c8_math_ch1_l1']));
  const [quizAttempts, setQuizAttempts] = useState(() => ({
    'quiz_c8_math_ch1': { score: 4, maxScore: 5, passed: true, completedAt: new Date().toISOString() }
  }));
  const [projectSubmissions, setProjectSubmissions] = useState({});
  const [downloadedChaptersMap, setDownloadedChaptersMap] = useState({});
  const [downloadProgress, setDownloadProgress] = useState({}); // { [chapterId]: percentage }

  // Load progress and downloads from Dexie on mount or class change
  useEffect(() => {
    async function loadLocalData() {
      try {
        // Load downloaded chapters
        const downloads = await offlineContentService.getAllDownloadedChapters();
        const dMap = {};
        downloads.forEach(d => { dMap[d.id] = d; });
        setDownloadedChaptersMap(dMap);

        // Load local completed lessons
        const progressRecords = await db.localProgress.where('userId').equals(userId).toArray();
        if (progressRecords.length > 0) {
          const compSet = new Set(progressRecords.filter(p => p.completed).map(p => p.lessonId));
          setCompletedLessons(compSet);
        }

        // Load local quiz attempts
        const quizRecords = await db.localQuizAttempts.where('userId').equals(userId).toArray();
        if (quizRecords.length > 0) {
          const qMap = {};
          quizRecords.forEach(q => { qMap[q.quizId] = q; });
          setQuizAttempts(qMap);
        }

        // Load project submissions
        const projRecords = await db.localProjectSubmissions.where('userId').equals(userId).toArray();
        if (projRecords.length > 0) {
          const pMap = {};
          projRecords.forEach(p => { pMap[p.projectId] = p; });
          setProjectSubmissions(pMap);
        }
      } catch (err) {
        console.warn('Dexie progress load error:', err);
      }
    }
    loadLocalData();
  }, [userId, currentClass]);

  // Subjects for the active class
  const activeSubjects = getSubjectsForClass(currentClass);

  // Mark a lesson as completed
  const markLessonCompleted = async (lessonId, chapterId) => {
    setCompletedLessons(prev => {
      const next = new Set(prev);
      next.add(lessonId);
      return next;
    });

    await syncService.enqueueAction('LESSON_COMPLETE', {
      lessonId,
      chapterId,
      completedAt: new Date().toISOString()
    }, userId);
  };

  // Submit a quiz attempt
  const submitQuiz = async (quizId, score, maxScore, answers = {}) => {
    const passed = score >= Math.ceil(maxScore * 0.6);
    const attempt = {
      score,
      maxScore,
      passed,
      answers,
      completedAt: new Date().toISOString()
    };

    setQuizAttempts(prev => ({
      ...prev,
      [quizId]: attempt
    }));

    await syncService.enqueueAction('QUIZ_ATTEMPT', {
      quizId,
      score,
      maxScore,
      passed,
      answers
    }, userId);

    return attempt;
  };

  // Submit a project
  const submitProject = async (projectId, submissionText, fileUrl = '') => {
    const submission = {
      projectId,
      submissionText,
      fileUrl,
      status: 'submitted',
      score: 85, // Default initial evaluated score for demo
      submittedAt: new Date().toISOString()
    };

    setProjectSubmissions(prev => ({
      ...prev,
      [projectId]: submission
    }));

    await syncService.enqueueAction('PROJECT_SUBMIT', {
      projectId,
      submissionText,
      fileUrl
    }, userId);

    return submission;
  };

  // Download chapter for offline
  const downloadChapter = async (chapterData) => {
    const chapterId = chapterData.id;
    setDownloadProgress(prev => ({ ...prev, [chapterId]: 10 }));

    try {
      const saved = await offlineContentService.downloadChapter(chapterData, (pct) => {
        setDownloadProgress(prev => ({ ...prev, [chapterId]: pct }));
      });
      setDownloadedChaptersMap(prev => ({ ...prev, [chapterId]: saved }));
      setDownloadProgress(prev => {
        const next = { ...prev };
        delete next[chapterId];
        return next;
      });
    } catch (err) {
      console.error('Download chapter error:', err);
      setDownloadProgress(prev => {
        const next = { ...prev };
        delete next[chapterId];
        return next;
      });
    }
  };

  // Remove downloaded chapter
  const removeDownloadedChapter = async (chapterId) => {
    await offlineContentService.removeChapter(chapterId);
    setDownloadedChaptersMap(prev => {
      const next = { ...prev };
      delete next[chapterId];
      return next;
    });
  };

  // Calculate subject progress percentage
  const getSubjectProgress = (subjectId) => {
    const chapters = getChapters(currentClass, subjectId);
    if (!chapters || chapters.length === 0) return 0;
    
    let totalLessons = 0;
    let completedCount = 0;

    chapters.forEach(ch => {
      const lessons = ch.lessons || [];
      totalLessons += lessons.length;
      lessons.forEach(l => {
        if (completedLessons.has(l.id)) completedCount++;
      });
    });

    return totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
  };

  // Calculate overall course completion %
  const totalSubjects = activeSubjects.length;
  let overallCompletionSum = 0;
  activeSubjects.forEach(s => {
    overallCompletionSum += getSubjectProgress(s.id);
  });
  const overallCourseCompletion = totalSubjects > 0 ? Math.round(overallCompletionSum / totalSubjects) : 0;

  // Calculate overall quiz performance %
  const quizValues = Object.values(quizAttempts);
  const quizAveragePct = quizValues.length > 0 
    ? Math.round(quizValues.reduce((acc, q) => acc + (q.score / (q.maxScore || 5)) * 100, 0) / quizValues.length)
    : 75; // baseline

  // Calculate overall project performance %
  const projectValues = Object.values(projectSubmissions);
  const projectAveragePct = projectValues.length > 0
    ? Math.round(projectValues.reduce((acc, p) => acc + (p.score || 80), 0) / projectValues.length)
    : 70; // baseline

  // Calculate skill score using formula (Completion 30% + Quiz 30% + Project 40%)
  const overallSkillScore = calculateSkillScore(overallCourseCompletion, quizAveragePct, projectAveragePct);

  // Skill breakdown by category
  const studentSkillScores = {
    math_problem_solving: Math.min(100, overallSkillScore + 5),
    practical_inquiry: Math.max(40, overallSkillScore - 4),
    digital_literacy: Math.min(100, overallSkillScore + 8),
    project_execution: Math.max(40, overallSkillScore - 2),
    communication: Math.min(100, overallSkillScore + 2)
  };

  // Identify weak topics / revision needed (quizzes failed or < 60%)
  const weakTopics = [];
  activeSubjects.forEach(subj => {
    const chs = getChapters(currentClass, subj.id);
    chs.forEach(ch => {
      if (ch.quiz) {
        const attempt = quizAttempts[ch.quiz.id];
        if (attempt && attempt.score < Math.ceil(attempt.maxScore * 0.6)) {
          weakTopics.push({
            chapter: ch,
            subject: subj,
            score: attempt.score,
            maxScore: attempt.maxScore
          });
        }
      }
    });
  });

  return (
    <CurriculumContext.Provider value={{
      currentClass,
      activeSubjects,
      completedLessons,
      quizAttempts,
      projectSubmissions,
      downloadedChaptersMap,
      downloadProgress,
      markLessonCompleted,
      submitQuiz,
      submitProject,
      downloadChapter,
      removeDownloadedChapter,
      getSubjectProgress,
      overallCourseCompletion,
      quizAveragePct,
      projectAveragePct,
      overallSkillScore,
      studentSkillScores,
      weakTopics,
      isChapterDownloaded: (chId) => !!downloadedChaptersMap[chId]
    }}>
      {children}
    </CurriculumContext.Provider>
  );
}

export function useCurriculum() {
  const context = useContext(CurriculumContext);
  if (!context) {
    throw new Error('useCurriculum must be used within a CurriculumProvider');
  }
  return context;
}
