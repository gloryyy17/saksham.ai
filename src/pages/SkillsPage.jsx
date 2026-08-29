import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SkillPassport from '../components/skills/SkillPassport';
import { Award, ShieldCheck } from 'lucide-react';

export default function SkillsPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div className="flex items-center gap-2 mb-2">
        <Award className="w-5 h-5 text-brand-800" />
        <h1 className="text-xl font-black text-slate-900">
          {t('skills.title')}
        </h1>
      </div>

      <SkillPassport />
    </div>
  );
}
