import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import AITutorChat from '../components/ai/AITutorChat';
import VoiceAssistant from '../components/ai/VoiceAssistant';
import ImageQuestion from '../components/ai/ImageQuestion';
import { Bot, Mic, Camera, Sparkles } from 'lucide-react';

export default function AITutorPage() {
  const { language, t } = useLanguage();
  const { profile } = useAuth();

  const [activeTab, setActiveTab] = useState('chat'); // 'chat' | 'voice' | 'image'

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      
      {/* Header Banner */}
      <div className="saksham-card p-6 sm:p-8 bg-gradient-to-r from-brand-900 via-brand-800 to-teal-900 text-white rounded-3xl shadow-card">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-extrabold uppercase tracking-wider bg-accent-500 text-white px-2.5 py-0.5 rounded-full">
              AI Tutor • {t('classes.standard')} {profile?.class_id || 8}
            </span>
            <span className="text-xs text-brand-200">
              Maharashtra State Board
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black">
            {t('aiTutor.title')}
          </h1>
          <p className="text-xs text-brand-100 max-w-xl">
            {t('aiTutor.subtitle')}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/10 overflow-x-auto">
          <button
            onClick={() => setActiveTab('chat')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold flex items-center gap-2 transition cursor-pointer shrink-0 ${
              activeTab === 'chat'
                ? 'bg-white text-brand-900 shadow-md scale-105'
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            <Bot className="w-4 h-4 text-brand-800" />
            <span>{t('aiTutor.tabChat')}</span>
          </button>

          <button
            onClick={() => setActiveTab('voice')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold flex items-center gap-2 transition cursor-pointer shrink-0 ${
              activeTab === 'voice'
                ? 'bg-white text-brand-900 shadow-md scale-105'
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            <Mic className="w-4 h-4 text-accent-600" />
            <span>{t('aiTutor.tabVoice')}</span>
          </button>

          <button
            onClick={() => setActiveTab('image')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold flex items-center gap-2 transition cursor-pointer shrink-0 ${
              activeTab === 'image'
                ? 'bg-white text-brand-900 shadow-md scale-105'
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            <Camera className="w-4 h-4 text-teal-600" />
            <span>{t('aiTutor.tabImage')}</span>
          </button>
        </div>
      </div>

      {/* Active Tab Content */}
      <div className="space-y-6">
        {activeTab === 'chat' && <AITutorChat />}
        {activeTab === 'voice' && <VoiceAssistant />}
        {activeTab === 'image' && <ImageQuestion />}
      </div>

    </div>
  );
}
