import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Languages } from 'lucide-react';

export default function LanguageSelector({ variant = 'pills', className = '' }) {
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'mr', label: 'मराठी', sub: 'Marathi' },
    { code: 'hi', label: 'हिंदी', sub: 'Hindi' },
    { code: 'en', label: 'English', sub: 'English' }
  ];

  if (variant === 'compact') {
    return (
      <div className={`relative inline-flex items-center ${className}`}>
        <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-xl p-1 shadow-sm">
          <Languages className="w-4 h-4 text-brand-800 ml-1.5" />
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-transparent text-xs font-semibold text-slate-800 focus:outline-none py-1 pr-2 cursor-pointer"
            aria-label={t('selectLanguage')}
          >
            {languages.map((l) => (
              <option key={l.code} value={l.code}>
                {l.label} ({l.code.toUpperCase()})
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  // Pills variant for landing page and headers
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5 mr-1">
        <Languages className="w-4 h-4 text-brand-800" />
        {t('selectLanguage')}:
      </span>
      <div className="flex items-center gap-1.5 p-1 bg-slate-100/80 rounded-2xl border border-slate-200">
        {languages.map((l) => {
          const isActive = language === l.code;
          return (
            <button
              key={l.code}
              onClick={() => setLanguage(l.code)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 flex items-center gap-1 ${
                isActive
                  ? 'bg-brand-800 text-white shadow-sm ring-2 ring-brand-800/20'
                  : 'text-slate-700 hover:bg-white hover:text-slate-900'
              }`}
            >
              <span>{l.label}</span>
              {variant === 'detailed' && <span className="opacity-75 text-[10px]">({l.sub})</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
