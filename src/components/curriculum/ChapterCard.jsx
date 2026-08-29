import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useCurriculum } from '../../contexts/CurriculumContext';
import DownloadButton from '../common/DownloadButton';
import { BookOpen, Clock, CheckCircle2, Award, ArrowRight } from 'lucide-react';

export default function ChapterCard({ chapter, subjectId }) {
  const { language, t } = useLanguage();
  const { completedLessons, quizAttempts } = useCurriculum();

  if (!chapter) return null;

  const chapterTitle = language === 'mr' ? chapter.title_mr : language === 'hi' ? chapter.title_hi : chapter.title;
  const chapterDesc = language === 'mr' ? chapter.description_mr : language === 'hi' ? chapter.description_hi : chapter.description;
  const objectives = (language === 'mr' ? chapter.learningObjectives_mr : language === 'hi' ? chapter.learningObjectives_hi : chapter.learningObjectives) || chapter.learningObjectives || [];

  const lessons = chapter.lessons || [];
  let completedLessonCount = 0;
  lessons.forEach(l => {
    if (completedLessons.has(l.id)) completedLessonCount++;
  });
  const isAllLessonsCompleted = lessons.length > 0 && completedLessonCount === lessons.length;
  const quizAttempt = chapter.quiz ? quizAttempts[chapter.quiz.id] : null;

  return (
    <div className="saksham-card p-5 flex flex-col justify-between hover:border-brand-300 transition">
      <div>
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-800 font-extrabold text-xs flex items-center justify-center border border-brand-200">
              {chapter.chapterNumber}
            </span>
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              {t('learn.chapters')} {chapter.chapterNumber}
            </span>
          </div>

          <DownloadButton chapter={chapter} />
        </div>

        <h3 className="text-sm font-bold text-slate-900 mb-1.5">
          {chapterTitle}
        </h3>
        <p className="text-xs text-slate-600 line-clamp-2 mb-3">
          {chapterDesc}
        </p>

        {/* Learning Objectives Preview */}
        {objectives.length > 0 && (
          <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-[11px] text-slate-700 space-y-1 mb-4">
            <p className="font-bold text-slate-800 text-[10px] uppercase tracking-wide">
              {t('learn.objective')}:
            </p>
            <p className="line-clamp-2">• {objectives[0]}</p>
          </div>
        )}
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs font-semibold text-slate-600">
          <span className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-slate-400" />
            {completedLessonCount}/{lessons.length} {t('learn.lessons')}
          </span>
          {chapter.estimatedMinutes && (
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {chapter.estimatedMinutes} {t('learn.estimatedTime')}
            </span>
          )}
        </div>

        <Link
          to={`/chapter/${chapter.id}`}
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-brand-800 hover:bg-brand-900 text-white text-xs font-bold transition shadow-sm"
        >
          <span>{t('startLearning')}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
