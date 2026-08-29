import React from 'react';
import { useCurriculum } from '../../contexts/CurriculumContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { Download, CheckCircle2, Loader2, Trash2 } from 'lucide-react';

export default function DownloadButton({ chapter, className = '' }) {
  const { downloadChapter, removeDownloadedChapter, isChapterDownloaded, downloadProgress } = useCurriculum();
  const { t } = useLanguage();

  if (!chapter) return null;

  const isDownloaded = isChapterDownloaded(chapter.id);
  const progress = downloadProgress[chapter.id];
  const isDownloading = progress !== undefined;

  if (isDownloading) {
    return (
      <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-brand-50 text-brand-800 border border-brand-200 ${className}`}>
        <Loader2 className="w-3.5 h-3.5 animate-spin text-brand-600" />
        <span>{t('learn.downloading')} {progress}%</span>
      </div>
    );
  }

  if (isDownloaded) {
    return (
      <div className={`inline-flex items-center gap-1.5 ${className}`}>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          {t('learn.downloaded')}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            removeDownloadedChapter(chapter.id);
          }}
          className="p-1 text-slate-400 hover:text-red-600 rounded-md transition"
          title={t('learn.removeDownload')}
          aria-label={t('learn.removeDownload')}
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        downloadChapter(chapter);
      }}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white hover:bg-brand-50 text-brand-800 border border-brand-200 shadow-sm transition ${className}`}
    >
      <Download className="w-3.5 h-3.5 text-brand-700" />
      <span>{t('learn.downloadOffline')}</span>
    </button>
  );
}
