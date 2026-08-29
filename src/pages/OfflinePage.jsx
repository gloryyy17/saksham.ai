import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useCurriculum } from '../contexts/CurriculumContext';
import { useNetwork } from '../contexts/NetworkContext';
import { offlineContentService } from '../services/offlineContentService';
import { db } from '../services/db';
import { CloudOff, HardDrive, RefreshCw, Trash2, ArrowRight, CheckCircle2, BookOpen } from 'lucide-react';

export default function OfflinePage() {
  const { language, t } = useLanguage();
  const { removeDownloadedChapter } = useCurriculum();
  const { isOnline, syncStatus, pendingCount, triggerSync } = useNetwork();

  const [downloadedList, setDownloadedList] = useState([]);
  const [totalMB, setTotalMB] = useState('0.0');
  const [syncEvents, setSyncEvents] = useState([]);

  const loadOfflineData = async () => {
    const list = await offlineContentService.getAllDownloadedChapters();
    setDownloadedList(list);
    const mb = await offlineContentService.getTotalStorageMB();
    setTotalMB(mb);
    const events = await db.syncQueue.toArray();
    setSyncEvents(events);
  };

  useEffect(() => {
    loadOfflineData();
  }, [pendingCount, syncStatus]);

  const handleRemove = async (chId) => {
    await removeDownloadedChapter(chId);
    await loadOfflineData();
  };

  const handleClearAll = async () => {
    if (window.confirm(language === 'mr' ? 'सर्व डाउनलोड केलेला ऑफलाइन डेटा हटवायचा आहे का?' : 'Clear all downloaded content?')) {
      await offlineContentService.clearAllDownloads();
      await loadOfflineData();
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      
      {/* Header Banner */}
      <div className="saksham-card p-6 sm:p-8 bg-gradient-to-r from-amber-800 via-brand-900 to-teal-900 text-white rounded-3xl shadow-card">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider bg-accent-500 text-white px-2.5 py-0.5 rounded-full">
                IndexedDB & Dexie.js
              </span>
              <span className="text-xs text-amber-200">
                PWA Local Cache
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">
              {t('offlinePage.title')}
            </h1>
            <p className="text-xs text-amber-100 max-w-xl">
              {t('offlinePage.subtitle')}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl text-center shrink-0 border border-white/20">
            <span className="text-[10px] font-bold uppercase text-amber-200 block">{t('offlinePage.storageUsed')}</span>
            <span className="text-2xl font-black text-white">{totalMB} MB</span>
          </div>
        </div>
      </div>

      {/* Downloaded Chapters List */}
      <div className="saksham-card p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-brand-800" />
            <h2 className="text-base font-bold text-slate-900">
              {t('offlinePage.downloadedCourses')} ({downloadedList.length})
            </h2>
          </div>

          {downloadedList.length > 0 && (
            <button
              onClick={handleClearAll}
              className="text-xs font-bold text-red-600 hover:text-red-800 underline"
            >
              {t('settings.clearOfflineData')}
            </button>
          )}
        </div>

        {downloadedList.length === 0 ? (
          <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-500 space-y-2">
            <p>{t('offlinePage.noDownloads')}</p>
            <Link to="/learn" className="inline-block px-4 py-2 bg-brand-800 text-white font-bold rounded-xl text-xs">
              {t('nav.learn')}
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {downloadedList.map((ch) => {
              const title = language === 'mr' ? ch.title_mr : language === 'hi' ? ch.title_hi : ch.title;
              return (
                <div
                  key={ch.id}
                  className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold bg-brand-50 text-brand-800 px-2 py-0.5 rounded-md border border-brand-200">
                        {t('classes.standard')} {ch.classId} • {ch.subjectId}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {ch.sizeMB} MB
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      {title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <Link
                      to={`/chapter/${ch.id}`}
                      className="px-3.5 py-1.5 bg-brand-800 hover:bg-brand-900 text-white font-bold text-xs rounded-xl shadow-xs transition"
                    >
                      {t('offlinePage.openOffline')}
                    </Link>
                    <button
                      onClick={() => handleRemove(ch.id)}
                      className="p-2 text-slate-400 hover:text-red-600 rounded-xl transition"
                      title={t('offlinePage.remove')}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Sync Queue Inspector */}
      <div className="saksham-card p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <RefreshCw className={`w-5 h-5 ${syncStatus === 'syncing' ? 'animate-spin text-brand-800' : 'text-slate-600'}`} />
            <h2 className="text-base font-bold text-slate-900">
              {t('offlinePage.syncQueueTitle')} ({syncEvents.length} events)
            </h2>
          </div>

          <button
            onClick={triggerSync}
            disabled={!isOnline || syncStatus === 'syncing'}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition disabled:opacity-40 flex items-center gap-1.5 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{t('offlinePage.forceSync')}</span>
          </button>
        </div>

        {syncEvents.length === 0 ? (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-800 font-medium flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{t('offlinePage.noPendingEvents')}</span>
          </div>
        ) : (
          <div className="space-y-2 text-xs font-mono max-h-60 overflow-y-auto">
            {syncEvents.map((ev) => (
              <div key={ev.eventId} className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                <div>
                  <span className="font-bold text-brand-800">{ev.actionType}</span>
                  <span className="text-[10px] text-slate-500 ml-2">ID: {ev.eventId.substring(0, 8)}...</span>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  ev.status === 'synced' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                }`}>
                  {ev.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
