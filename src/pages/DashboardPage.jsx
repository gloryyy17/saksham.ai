import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { useCurriculum } from '../contexts/CurriculumContext';
import { getOpportunitiesForClass } from '../data/opportunitiesData';
import { getProjectsForClass } from '../data/projectsData';
import SubjectCard from '../components/curriculum/SubjectCard';
import ProjectCard from '../components/projects/ProjectCard';
import OpportunityCard from '../components/opportunities/OpportunityCard';
import {
  Sparkles,
  BookOpen,
  Award,
  AlertTriangle,
  ArrowRight,
  GraduationCap,
  Flame,
  CheckCircle2,
  Play
} from 'lucide-react';

export default function DashboardPage() {
  const { language, t } = useLanguage();
  const { profile } = useAuth();
  const {
    currentClass,
    activeSubjects,
    overallCourseCompletion,
    overallSkillScore,
    weakTopics,
    completedLessons
  } = useCurriculum();

  const opportunities = getOpportunitiesForClass(currentClass);
  const featuredOpp = opportunities[0];
  const projects = getProjectsForClass(currentClass);
  const featuredProj = projects[0];

  return (
    <div className="space-y-8 pb-12">
      
      {/* 1. STUDENT WELCOME BANNER */}
      <section className="saksham-card p-6 sm:p-8 bg-gradient-to-r from-brand-900 via-brand-800 to-teal-900 text-white rounded-3xl shadow-card relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider bg-accent-500 text-white px-2.5 py-0.5 rounded-full">
                {t('classes.standard')} {currentClass}
              </span>
              <span className="text-xs text-brand-200 font-medium">
                Maharashtra State Board
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              {t('dashboard.greeting')}, {profile?.full_name || 'Rahul'}
            </h1>

            <p className="text-xs text-brand-100 font-medium">
              {t('dashboard.todayLearning')}
            </p>
          </div>

          {/* Quick Metrics Badges */}
          <div className="flex items-center gap-3">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 rounded-2xl text-center">
              <span className="text-[10px] uppercase font-bold text-brand-200 block">{t('dashboard.todayProgress')}</span>
              <span className="text-xl font-black text-white">{overallCourseCompletion}%</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 rounded-2xl text-center">
              <span className="text-[10px] uppercase font-bold text-brand-200 block">{t('skills.title')}</span>
              <span className="text-xl font-black text-accent-400">{overallSkillScore}%</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTINUE LEARNING (Maharashtra State Board Subjects) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-brand-800" />
            <h2 className="text-base font-bold text-slate-900">
              {t('dashboard.continueLearningTitle')}
            </h2>
          </div>
          <Link to="/learn" className="text-xs font-bold text-brand-800 hover:underline flex items-center gap-1">
            <span>{t('viewAll')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {activeSubjects.slice(0, 3).map((sub) => (
            <SubjectCard key={sub.id} subject={sub} />
          ))}
        </div>
      </section>

      {/* 3. TWO-COLUMN HUB: WEAK TOPICS & SKILL PASSPORT SNAPSHOT */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Weak Topics / Revision Card */}
        <div className="saksham-card p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <h3 className="text-sm font-bold text-slate-900">
                  {t('dashboard.weakTopics')}
                </h3>
              </div>
              <span className="text-[10px] font-bold bg-amber-50 text-amber-800 px-2 py-0.5 rounded-full border border-amber-200">
                Revision
              </span>
            </div>

            {weakTopics.length > 0 ? (
              <div className="space-y-2">
                {weakTopics.map((wt, i) => (
                  <div key={i} className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-xs flex items-center justify-between">
                    <div>
                      <p className="font-bold text-slate-900">{wt.chapter.title}</p>
                      <p className="text-[10px] text-slate-500">Score: {wt.score}/{wt.maxScore}</p>
                    </div>
                    <Link
                      to={`/chapter/${wt.chapter.id}`}
                      className="px-2.5 py-1 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-[10px] font-bold"
                    >
                      Revise
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 bg-slate-50 rounded-xl text-xs text-slate-600 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{t('dashboard.noWeakTopics')}</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  {language === 'mr'
                    ? 'पुढील पाठ: परिमेय संख्या किंवा बल आणि दाब धड्याचा सराव सुरू करा.'
                    : language === 'hi'
                    ? 'अगला पाठ: परिमेय संख्या अथवा बल और दाब का अभ्यास करें।'
                    : 'Recommended next step: Continue practicing Rational Numbers or Force & Pressure.'}
                </p>
              </div>
            )}
          </div>

          <Link
            to="/ai-tutor"
            className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-800 hover:underline"
          >
            <span>{t('aiTutor.title')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Skill Passport Snapshot Card */}
        <div className="saksham-card p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-500" />
                <h3 className="text-sm font-bold text-slate-900">
                  {t('dashboard.skillPassportSnapshot')}
                </h3>
              </div>
              <span className="text-xs font-black text-accent-600">
                {overallSkillScore}%
              </span>
            </div>

            <div className="p-3 bg-brand-50/60 border border-brand-200/60 rounded-xl space-y-2 text-xs">
              <div className="flex items-center justify-between font-bold text-brand-900">
                <span>Formula: 30% Course + 30% Quiz + 40% Project</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-brand-800 h-full rounded-full transition-all duration-500"
                  style={{ width: `${overallSkillScore}%` }}
                />
              </div>
            </div>
          </div>

          <Link
            to="/skills"
            className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-800 hover:underline"
          >
            <span>{t('skills.title')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </section>

      {/* 4. FEATURED STEM PROJECT & MATCHED OPPORTUNITY */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {featuredProj && (
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent-500" />
              {t('dashboard.featuredProject')}
            </h3>
            <ProjectCard project={featuredProj} />
          </div>
        )}

        {featuredOpp && (
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-600" />
              {t('dashboard.matchedOpportunity')}
            </h3>
            <OpportunityCard opportunity={featuredOpp} />
          </div>
        )}
      </section>

    </div>
  );
}
