import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Sparkles, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-slate-200 mt-auto py-8 px-4 sm:px-6 lg:px-8 text-slate-500 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-brand-800 text-white flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 text-accent-400" />
          </div>
          <span className="font-bold text-slate-800">
            SAKSHAM.AI — {t('tagline')}
          </span>
        </div>

        <div className="text-center md:text-left">
          <span>
            Dedicated to Maharashtra State Board Students (Classes 6–10) • Kopargaon & Rural Maharashtra
          </span>
        </div>

        <div className="flex items-center gap-4 font-semibold text-slate-600">
          <Link to="/offline" className="hover:text-brand-800">{t('nav.offline')}</Link>
          <Link to="/offline-test" className="hover:text-brand-800">{t('nav.offlineTest')}</Link>
          <Link to="/settings" className="hover:text-brand-800">{t('nav.settings')}</Link>
        </div>

      </div>
    </footer>
  );
}
