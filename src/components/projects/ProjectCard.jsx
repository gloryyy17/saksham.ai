import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useCurriculum } from '../../contexts/CurriculumContext';
import { Hammer, Award, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ProjectCard({ project }) {
  const { language, t } = useLanguage();
  const { projectSubmissions } = useCurriculum();

  if (!project) return null;

  const isSubmitted = !!projectSubmissions[project.id];
  const title = language === 'mr' ? project.title_mr : language === 'hi' ? project.title_hi : project.title;
  const statement = language === 'mr' ? project.problemStatement_mr : language === 'hi' ? project.problemStatement_hi : project.problemStatement;

  return (
    <div className="saksham-card p-6 flex flex-col justify-between hover:border-brand-300 transition space-y-4">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-extrabold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200 px-2.5 py-1 rounded-full">
            {project.category}
          </span>
          <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
            ★ {project.points} {t('points')}
          </span>
        </div>

        <h3 className="text-sm font-bold text-slate-900 leading-snug">
          {title}
        </h3>

        <p className="text-xs text-slate-600 line-clamp-3">
          {statement}
        </p>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
        <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-slate-400" />
          ~{project.estimatedHours || 3} hrs
        </span>

        {isSubmitted ? (
          <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1.5 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            {t('projects.statusSubmitted')}
          </span>
        ) : (
          <Link
            to={`/projects/${project.id}`}
            className="px-4 py-2 bg-brand-800 hover:bg-brand-900 text-white text-xs font-bold rounded-xl shadow-sm transition flex items-center gap-1"
          >
            <span>{t('projects.submitProject')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    </div>
  );
}
