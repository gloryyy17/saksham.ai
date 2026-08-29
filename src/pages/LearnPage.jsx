import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCurriculum } from '../contexts/CurriculumContext';
import { useAuth } from '../contexts/AuthContext';
import { getSubjectsForClass } from '../data/curriculumData';
import SubjectCard from '../components/curriculum/SubjectCard';
import { BookOpen, GraduationCap } from 'lucide-react';

export default function LearnPage() {
  const { language, t } = useLanguage();
  const { currentClass } = useCurriculum();
  const { profile, updateProfile } = useAuth();

  const [activeClassTab, setActiveClassTab] = useState(currentClass || 8);

  const subjects = getSubjectsForClass(activeClassTab);

  const handleClassTabChange = (cls) => {
    setActiveClassTab(cls);
    if (profile) {
      updateProfile({ class_id: cls });
    }
  };

  return (
    <div className="space-y-8 pb-12">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <BookOpen className="w-5 h-5 text-brand-800" />
            <h1 className="text-xl font-black text-slate-900">
              {t('nav.learn')} — {t('classes.standard')} {activeClassTab}
            </h1>
          </div>
          <p className="text-xs text-slate-500 font-medium">
            Maharashtra State Board Curriculum (इयत्ता ६ वी ते १० वी)
          </p>
        </div>

        {/* Class Switcher Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-2xl border border-slate-200">
          {[6, 7, 8, 9, 10].map((cls) => {
            const isActive = activeClassTab === cls;
            return (
              <button
                key={cls}
                onClick={() => handleClassTabChange(cls)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-brand-800 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-white'
                }`}
              >
                {t('classes.standard')} {cls}
              </button>
            );
          })}
        </div>
      </div>

      {/* Subjects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {subjects.map((sub) => (
          <SubjectCard key={sub.id} subject={sub} />
        ))}
      </div>

    </div>
  );
}
