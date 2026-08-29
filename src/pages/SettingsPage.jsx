import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNetwork } from '../contexts/NetworkContext';
import { useAuth } from '../contexts/AuthContext';
import LanguageSelector from '../components/common/LanguageSelector';
import { Settings, Cpu, Battery, Languages, HardDrive, Trash2 } from 'lucide-react';
import { offlineContentService } from '../services/offlineContentService';

export default function SettingsPage() {
  const { language, t } = useLanguage();
  const { lowBandwidthMode, setLowBandwidthMode, lowPowerMode, setLowPowerMode } = useNetwork();
  const { profile } = useAuth();

  const handleClearData = async () => {
    if (window.confirm(language === 'mr' ? 'सर्व डाउनलोड केलेला डेटा साफ करायचा आहे का?' : 'Clear all offline data?')) {
      await offlineContentService.clearAllDownloads();
      alert(language === 'mr' ? 'सर्व ऑफलाइन डेटा साफ करण्यात आला.' : 'Offline storage cleared.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12">
      
      <div className="flex items-center gap-2 mb-2">
        <Settings className="w-5 h-5 text-brand-800" />
        <h1 className="text-xl font-black text-slate-900">
          {t('settings.title')}
        </h1>
      </div>

      {/* Language Preferences Card */}
      <div className="saksham-card p-6 space-y-4">
        <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
          <Languages className="w-4 h-4 text-brand-800" />
          {t('settings.languagePref')}
        </h2>
        <LanguageSelector variant="pills" />
      </div>

      {/* Low Bandwidth Mode Card */}
      <div className="saksham-card p-6 flex items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-brand-800" />
            <h2 className="text-sm font-bold text-slate-900">
              {t('settings.lowBandwidth')}
            </h2>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed max-w-lg">
            {t('settings.lowBandwidthDesc')}
          </p>
        </div>

        <button
          onClick={() => setLowBandwidthMode(!lowBandwidthMode)}
          className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
            lowBandwidthMode ? 'bg-brand-800' : 'bg-slate-300'
          }`}
          role="switch"
          aria-checked={lowBandwidthMode}
        >
          <span
            className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${
              lowBandwidthMode ? 'left-6.5' : 'left-0.5'
            }`}
          />
        </button>
      </div>

      {/* Low Power Mode Card */}
      <div className="saksham-card p-6 flex items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Battery className="w-4 h-4 text-brand-800" />
            <h2 className="text-sm font-bold text-slate-900">
              {t('settings.lowPower')}
            </h2>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed max-w-lg">
            {t('settings.lowPowerDesc')}
          </p>
        </div>

        <button
          onClick={() => setLowPowerMode(!lowPowerMode)}
          className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
            lowPowerMode ? 'bg-brand-800' : 'bg-slate-300'
          }`}
          role="switch"
          aria-checked={lowPowerMode}
        >
          <span
            className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${
              lowPowerMode ? 'left-6.5' : 'left-0.5'
            }`}
          />
        </button>
      </div>

      {/* Offline Storage Clear */}
      <div className="saksham-card p-6 flex items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <HardDrive className="w-4 h-4 text-slate-700" />
            <h2 className="text-sm font-bold text-slate-900">
              {t('settings.storageManager')}
            </h2>
          </div>
          <p className="text-xs text-slate-500">
            {language === 'mr' ? 'सर्व डाउनलोड केलेले पाठ आणि स्थानिक कॅशे साफ करा.' : 'Clear all cached offline lessons.'}
          </p>
        </div>

        <button
          onClick={handleClearData}
          className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold rounded-xl border border-red-200 transition cursor-pointer flex items-center gap-1.5"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>{t('settings.clearOfflineData')}</span>
        </button>
      </div>

    </div>
  );
}
