import React from 'react';
import { useNetwork } from '../../contexts/NetworkContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { CloudOff, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OfflineBanner() {
  const { isOnline, pendingCount, triggerSync } = useNetwork();
  const { t } = useLanguage();

  if (isOnline && pendingCount === 0) return null;

  return (
    <aside aria-label="Offline status banner" className="bg-amber-500 text-white px-4 py-2 text-xs md:text-sm font-medium shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <CloudOff className="w-4 h-4 shrink-0 text-amber-100" />
          <span>
            {!isOnline
              ? t('connection.offlineBanner')
              : `${pendingCount} ${t('connection.pendingChanges')} waiting to sync.`}
          </span>
        </div>
        <div className="flex items-center gap-3">
          {isOnline && pendingCount > 0 && (
            <button
              onClick={triggerSync}
              className="bg-white/20 hover:bg-white/30 text-white px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 transition"
            >
              <RefreshCw className="w-3 h-3" />
              {t('connection.syncNow')}
            </button>
          )}
          <Link
            to="/offline"
            className="underline hover:text-amber-100 text-xs font-semibold"
          >
            {t('offlinePage.title')}
          </Link>
        </div>
      </div>
    </aside>
  );
}
