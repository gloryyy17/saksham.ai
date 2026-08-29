import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { getQuizById } from '../data/curriculumData';
import QuizComponent from '../components/curriculum/QuizComponent';
import { ArrowLeft } from 'lucide-react';

export default function QuizPage() {
  const { quizId } = useParams();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const quizData = getQuizById(quizId);

  if (!quizData) {
    return (
      <div className="text-center py-16 space-y-4">
        <p className="text-sm font-bold text-slate-700">{t('errors.contentUnavailable')}</p>
        <Link to="/learn" className="text-xs font-bold text-brand-800 underline">{t('back')}</Link>
      </div>
    );
  }

  const chapter = quizData.chapter;

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

      <QuizComponent
        quiz={quizData}
        onFinished={() => navigate(`/chapter/${chapter?.id}`)}
      />
    </div>
  );
}
