import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useCurriculum } from '../contexts/CurriculumContext';
import { User, GraduationCap, Languages, Award, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ProfilePage() {
  const { user, profile, updateProfile } = useAuth();
  const { language, t } = useLanguage();
  const { overallCourseCompletion, overallSkillScore } = useCurriculum();

  const [fullName, setFullName] = useState(profile?.full_name || 'Rahul Patil');
  const [selectedClass, setSelectedClass] = useState(profile?.class_id || 8);
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    updateProfile({
      full_name: fullName,
      class_id: parseInt(selectedClass, 10)
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-12">
      
      <div className="flex items-center gap-2 mb-2">
        <User className="w-5 h-5 text-brand-800" />
        <h1 className="text-xl font-black text-slate-900">
          {t('nav.profile')}
        </h1>
      </div>

      <div className="saksham-card p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
          <div className="w-16 h-16 rounded-2xl bg-brand-800 text-white flex items-center justify-center font-black text-2xl shadow-md">
            {profile?.full_name ? profile.full_name.charAt(0).toUpperCase() : 'R'}
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">{profile?.full_name || 'Rahul'}</h2>
            <p className="text-xs text-slate-500 font-medium">{profile?.email || 'rahul.patil@saksham.ai'}</p>
            <span className="inline-block mt-1 text-[10px] font-bold bg-brand-50 text-brand-800 border border-brand-200 px-2 py-0.5 rounded-full">
              Maharashtra State Board Student
            </span>
          </div>
        </div>

        {saved && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl font-bold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{t('save')} Successful!</span>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700">{t('fullName')}</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-800 font-semibold"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700">{t('classes.standard')}</label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-800 font-semibold cursor-pointer"
            >
              {[6, 7, 8, 9, 10].map((c) => (
                <option key={c} value={c}>
                  {t('classes.standard')} {c}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">{t('dashboard.todayProgress')}</span>
              <span className="text-lg font-black text-brand-800">{overallCourseCompletion}%</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">{t('skills.title')}</span>
              <span className="text-lg font-black text-accent-600">{overallSkillScore}%</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-brand-800 hover:bg-brand-900 text-white font-extrabold text-xs rounded-xl shadow-md transition cursor-pointer"
          >
            {t('save')}
          </button>
        </form>
      </div>

    </div>
  );
}
