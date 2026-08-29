import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { getLessonById } from '../data/curriculumData';
import LessonViewer from '../components/curriculum/LessonViewer';
import { ArrowLeft } from 'lucide-react';

export default function LessonPage() {
  const { lessonId } = useParams();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const lessonData = getLessonById(lessonId);

  if (!lessonData) {
    return (
      <div className="text-center py-16 space-y-4">
        <p className="text-sm font-bold text-slate-700">{t('errors.contentUnavailable')}</p>
        <Link to="/learn" className="text-xs font-bold text-brand-800 underline">{t('back')}</Link>
      </div>
    );
  }

  const chapter = lessonData.chapter;
  const lessons = chapter?.lessons || [];
  const currentIndex = lessons.findIndex(l => l.id === lessonId);

  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

  return (
    <div className="space-y-6 pb-12">
      <div>
        <Link
          to={`/chapter/${chapter?.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-800 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{chapter?.title || t('back')}</span>
        </Link>
      </div>

      <LessonViewer
        lesson={lessonData}
        chapter={chapter}
        onPrevious={prevLesson ? () => navigate(`/lesson/${prevLesson.id}`) : null}
        onNext={nextLesson ? () => navigate(`/lesson/${nextLesson.id}`) : () => navigate(`/chapter/${chapter?.id}`)}
      />
    </div>
  );
}
