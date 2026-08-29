import React from 'react';
import { useNetwork } from '../../contexts/NetworkContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { Wifi, WifiOff, RefreshCw, CheckCircle2, CloudOff } from 'lucide-react';

export default function SyncBadge({ showDetails = false, className = '' }) {
  const { isOnline, syncStatus, pendingCount, triggerSync } = useNetwork();
  const { t } = useLanguage();

  if (!isOnline) {
    return (
      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-300 ${className}`}>
        <WifiOff className="w-3.5 h-3.5 text-amber-700" />
        <span>{t('connection.offline')}</span>
        {pendingCount > 0 && (
          <span className="ml-1 bg-amber-200 px-1.5 py-0.5 rounded-full text-[10px] font-bold">
            {pendingCount} {t('connection.pendingChanges')}
          </span>
        )}
      </div>
    );
  }

  if (syncStatus === 'syncing') {
    return (
      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-900 border border-blue-300 ${className}`}>
        <RefreshCw className="w-3.5 h-3.5 text-blue-700 animate-spin" />
        <span>{t('connection.syncing')}</span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-900 border border-emerald-300 ${className}`}>
      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
      <span>{t('connection.synced')}</span>
      {showDetails && (
        <button
          onClick={triggerSync}
          className="ml-1 text-[11px] underline hover:text-emerald-950 cursor-pointer"
          title={t('connection.syncNow')}
        >
          {t('connection.syncNow')}
        </button>
      )}
    </div>
  );
}
