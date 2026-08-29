import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCurriculum } from '../contexts/CurriculumContext';
import { getProjectsForClass } from '../data/projectsData';
import ProjectCard from '../components/projects/ProjectCard';
import { Hammer, Sparkles, Award } from 'lucide-react';

export default function ProjectsPage() {
  const { language, t } = useLanguage();
  const { currentClass, projectAveragePct } = useCurriculum();

  const projects = getProjectsForClass(currentClass);

  return (
    <div className="space-y-8 pb-12">
      
      {/* Header Banner */}
      <div className="saksham-card p-6 sm:p-8 bg-gradient-to-r from-teal-900 via-teal-800 to-brand-900 text-white rounded-3xl shadow-card">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider bg-accent-500 text-white px-2.5 py-0.5 rounded-full">
                STEM & PBL • 40% Skill Weight
              </span>
              <span className="text-xs text-teal-200">
                Maharashtra State Board
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">
              {t('projects.title')}
            </h1>
            <p className="text-xs text-teal-100 max-w-xl">
              {t('projects.subtitle')}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl text-center shrink-0 border border-white/20">
            <span className="text-[10px] font-bold uppercase text-teal-200 block">{t('score')}</span>
            <span className="text-xl font-black text-accent-400">{projectAveragePct}%</span>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>

    </div>
  );
}
