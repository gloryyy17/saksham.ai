import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useCurriculum } from '../contexts/CurriculumContext';
import { getChapterById } from '../data/curriculumData';
import DownloadButton from '../components/common/DownloadButton';
import { BookOpen, CheckCircle2, ArrowLeft, ArrowRight, Award, Clock, Sparkles } from 'lucide-react';

export default function ChapterPage() {
  const { chapterId } = useParams();
  const { language, t } = useLanguage();
  const { completedLessons, quizAttempts } = useCurriculum();

  const chapter = getChapterById(chapterId);

  if (!chapter) {
    return (
      <div className="text-center py-16 space-y-4">
        <p className="text-sm font-bold text-slate-700">{t('errors.contentUnavailable')}</p>
        <Link to="/learn" className="text-xs font-bold text-brand-800 underline">{t('back')}</Link>
      </div>
    );
  }

  const chapterTitle = language === 'mr' ? chapter.title_mr : language === 'hi' ? chapter.title_hi : chapter.title;
  const chapterDesc = language === 'mr' ? chapter.description_mr : language === 'hi' ? chapter.description_hi : chapter.description;
  const objectives = (language === 'mr' ? chapter.learningObjectives_mr : language === 'hi' ? chapter.learningObjectives_hi : chapter.learningObjectives) || chapter.learningObjectives || [];

  const lessons = chapter.lessons || [];
  const quiz = chapter.quiz;
  const quizAttempt = quiz ? quizAttempts[quiz.id] : null;

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      
      {/* Back button */}
      <div>
        <Link
          to={`/subject/${chapter.subjectId}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-800 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t('back')}</span>
        </Link>
      </div>

      {/* Chapter Overview Banner */}
      <div className="saksham-card p-6 sm:p-8 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-brand-800 uppercase tracking-wider bg-brand-50 px-3 py-1 rounded-lg border border-brand-200">
              {t('learn.chapters')} {chapter.chapterNumber} • {t('classes.standard')} {chapter.classId}
            </span>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
              {chapterTitle}
            </h1>
          </div>

          <DownloadButton chapter={chapter} />
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {chapterDesc}
        </p>

        {objectives.length > 0 && (
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
            <p className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-accent-500" />
              {t('learn.objective')}
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              {objectives.map((obj, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-brand-800 font-bold">•</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Lessons List */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-brand-800" />
          {t('learn.lessons')} ({lessons.length})
        </h2>

        <div className="space-y-3">
          {lessons.map((lesson, idx) => {
            const isComp = completedLessons.has(lesson.id);
            const lTitle = language === 'mr' ? lesson.title_mr : language === 'hi' ? lesson.title_hi : lesson.title;
            const lTopic = language === 'mr' ? lesson.topic_mr : language === 'hi' ? lesson.topic_hi : lesson.topic;

            return (
              <Link
                key={lesson.id}
                to={`/lesson/${lesson.id}`}
                className="saksham-card p-4 sm:p-5 flex items-center justify-between gap-4 hover:border-brand-300 transition group"
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                    isComp ? 'bg-emerald-100 text-emerald-800' : 'bg-brand-50 text-brand-800'
                  }`}>
                    {isComp ? <CheckCircle2 className="w-5 h-5 text-emerald-600" /> : idx + 1}
                  </div>

                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      {lTopic}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-brand-800 transition">
                      {lTitle}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-brand-800 shrink-0">
                  <span className="hidden sm:inline">{isComp ? t('learn.completedBadge') : t('startLearning')}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Chapter Quiz Card */}
      {quiz && (
        <div className="saksham-card p-6 bg-gradient-to-r from-teal-50 to-brand-50 border-2 border-teal-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-teal-700" />
              <span className="text-xs font-extrabold uppercase text-teal-900 tracking-wider">
                {t('learn.quiz')}
              </span>
            </div>
            <h3 className="text-sm font-bold text-slate-900">
              {language === 'mr' ? quiz.title_mr : language === 'hi' ? quiz.title_hi : quiz.title}
            </h3>
            <p className="text-xs text-slate-600">
              {quizAttempt ? `Score: ${quizAttempt.score} / ${quizAttempt.maxScore}` : `${quiz.questions?.length || 5} Questions • Passing: ${quiz.passingMarks || 3}`}
            </p>
          </div>

          <Link
            to={`/quiz/${quiz.id}`}
            className="px-6 py-2.5 bg-brand-800 hover:bg-brand-900 text-white font-extrabold text-xs rounded-xl shadow-sm transition shrink-0"
          >
            {quizAttempt ? t('learn.retakeQuiz') : t('learn.takeQuiz')}
          </Link>
        </div>
      )}

    </div>
  );
}
