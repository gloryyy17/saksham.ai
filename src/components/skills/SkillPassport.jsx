import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useCurriculum } from '../../contexts/CurriculumContext';
import { useAuth } from '../../contexts/AuthContext';
import { Award, Calculator, Microscope, Cpu, Hammer, MessageSquare, Download, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

const skillIconMap = {
  math_problem_solving: Calculator,
  practical_inquiry: Microscope,
  digital_literacy: Cpu,
  project_execution: Hammer,
  communication: MessageSquare
};

export default function SkillPassport() {
  const { language, t } = useLanguage();
  const { profile } = useAuth();
  const {
    overallCourseCompletion,
    quizAveragePct,
    projectAveragePct,
    overallSkillScore,
    studentSkillScores
  } = useCurriculum();

  const handleDownloadCert = () => {
    try {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    } catch (e) {}
    alert(language === 'mr'
      ? `प्रमाणपत्र तयार झाले! ${profile?.full_name || 'विद्यार्थी'} - इयत्ता ${profile?.class_id || 8} वी (कौशल्य गुण: ${overallSkillScore}%)`
      : language === 'hi'
      ? `प्रमाणपत्र तैयार! ${profile?.full_name || 'विद्यार्थी'} - कक्षा ${profile?.class_id || 8} (कौशल स्कोर: ${overallSkillScore}%)`
      : `Certificate Generated for ${profile?.full_name || 'Student'} - Class ${profile?.class_id || 8} (Skill Score: ${overallSkillScore}%)`
    );
  };

  const skillsList = [
    { key: 'math_problem_solving', label: t('skills.academicSolving'), score: studentSkillScores.math_problem_solving },
    { key: 'practical_inquiry', label: t('skills.scientificInquiry'), score: studentSkillScores.practical_inquiry },
    { key: 'digital_literacy', label: t('skills.digitalLiteracy'), score: studentSkillScores.digital_literacy },
    { key: 'project_execution', label: t('skills.projectExecution'), score: studentSkillScores.project_execution },
    { key: 'communication', label: t('skills.communication'), score: studentSkillScores.communication }
  ];

  return (
    <div className="space-y-6">
      
      {/* Top Banner Card with Overall Score & Formula */}
      <div className="saksham-card p-6 sm:p-8 bg-gradient-to-br from-brand-900 to-brand-800 text-white relative overflow-hidden shadow-card">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-white/10 backdrop-blur-md rounded-xl text-accent-400">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-200">
                {t('skills.title')}
              </span>
            </div>
            <h2 className="text-2xl font-black tracking-tight">
              {profile?.full_name || 'Rahul Patil'}
            </h2>
            <p className="text-xs text-brand-100 font-medium">
              Maharashtra State Board • {t('classes.standard')} {profile?.class_id || 8}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4 shrink-0">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-brand-200">
                {t('skills.overallScore')}
              </p>
              <p className="text-3xl font-black text-accent-400">{overallSkillScore}%</p>
            </div>
            <button
              onClick={handleDownloadCert}
              className="p-2.5 bg-accent-500 hover:bg-accent-600 text-white rounded-xl shadow-md transition hover:scale-105"
              title={t('skills.downloadCertificate')}
            >
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formula Breakdown Badges */}
        <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="bg-white/5 p-2.5 rounded-xl border border-white/10">
            <span className="text-[10px] text-brand-200 block">{t('skills.completionWeight')}</span>
            <span className="font-bold text-sm text-white">{overallCourseCompletion}%</span>
          </div>
          <div className="bg-white/5 p-2.5 rounded-xl border border-white/10">
            <span className="text-[10px] text-brand-200 block">{t('skills.quizWeight')}</span>
            <span className="font-bold text-sm text-white">{quizAveragePct}%</span>
          </div>
          <div className="bg-white/5 p-2.5 rounded-xl border border-white/10">
            <span className="text-[10px] text-brand-200 block">{t('skills.projectWeight')}</span>
            <span className="font-bold text-sm text-white">{projectAveragePct}%</span>
          </div>
        </div>

        <p className="text-[11px] text-brand-200/90 italic mt-3 font-medium">
          {t('skills.formulaNote')}
        </p>
      </div>

      {/* Individual Skill Progress Bars */}
      <div className="saksham-card p-6 sm:p-8 space-y-5">
        <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider">
          {language === 'mr' ? 'कौशल्य वर्गवारी निहाय प्रगती' : language === 'hi' ? 'कौशल श्रेणीवार प्रगति' : 'Competency Performance Breakdown'}
        </h3>

        <div className="space-y-4">
          {skillsList.map((sk) => {
            const Icon = skillIconMap[sk.key] || Award;
            return (
              <div key={sk.key} className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-brand-50 text-brand-800 flex items-center justify-center border border-brand-200">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-800">{sk.label}</span>
                  </div>
                  <span className="text-xs font-black text-brand-800">{sk.score}%</span>
                </div>

                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-brand-800 to-teal-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${sk.score}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
