import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useCurriculum } from '../../contexts/CurriculumContext';
import { Calculator, FlaskConical, Atom, Dna, BookOpen, Languages, BookMarked, Globe, ArrowRight } from 'lucide-react';

const iconMap = {
  Calculator,
  FlaskConical,
  Atom,
  Dna,
  BookOpen,
  Languages,
  BookMarked,
  Globe
};

export default function SubjectCard({ subject }) {
  const { language, t } = useLanguage();
  const { getSubjectProgress } = useCurriculum();

  if (!subject) return null;

  const Icon = iconMap[subject.icon] || BookOpen;
  const progress = getSubjectProgress(subject.id);

  const subjectTitle = language === 'mr' ? subject.name_mr : language === 'hi' ? subject.name_hi : subject.name;

  return (
    <Link
      to={`/subject/${subject.id}`}
      className="saksham-card p-5 group flex flex-col justify-between hover:-translate-y-1 transition-all"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-800 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
            <Icon className="w-6 h-6 text-brand-800" />
          </div>
          <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full">
            {progress}% {t('completed')}
          </span>
        </div>

        <h3 className="text-sm font-bold text-slate-900 group-hover:text-brand-800 transition line-clamp-1 mb-1">
          {subjectTitle}
        </h3>
        <p className="text-[11px] text-slate-500 font-medium">
          Maharashtra State Board
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100">
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-3">
          <div
            className="bg-gradient-to-r from-brand-800 to-teal-600 h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-xs font-bold text-brand-800">
          <span>{t('exploreSubjects')}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
