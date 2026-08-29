import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import { useNetwork } from '../../contexts/NetworkContext';
import { Mic, MicOff, Volume2, VolumeX, Loader2, Sparkles } from 'lucide-react';

export default function VoiceAssistant({ onAnswerGenerated = () => {} }) {
  const { language, t } = useLanguage();
  const { profile } = useAuth();
  const { isOnline } = useNetwork();

  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const recognitionRef = useRef(null);

  // Map active app language to BCP-47 speech tags
  const speechLangCode = language === 'mr' ? 'mr-IN' : language === 'hi' ? 'hi-IN' : 'en-IN';

  // Initialize SpeechRecognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = speechLangCode;

      recognition.onstart = () => {
        setIsListening(true);
        setErrorMessage('');
      };

      recognition.onresult = (event) => {
        const spokenText = event.results[0][0].transcript;
        setTranscript(spokenText);
        handleAskQuestion(spokenText);
      };

      recognition.onerror = (event) => {
        console.warn('Speech recognition error:', event.error);
        setIsListening(false);
        if (event.error === 'network' || !isOnline) {
          setErrorMessage(t('aiTutor.voiceOfflineNotice'));
        }
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (e) {}
      }
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [language, speechLangCode, isOnline]);

  const toggleListening = () => {
    if (!isOnline) {
      setErrorMessage(t('aiTutor.voiceOfflineNotice'));
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      setTranscript('');
      setResponse('');
      setErrorMessage('');
      try {
        if (recognitionRef.current) {
          recognitionRef.current.lang = speechLangCode;
          recognitionRef.current.start();
        } else {
          setErrorMessage('Speech recognition is not supported in this browser. Please type your doubt.');
        }
      } catch (err) {
        console.error('Recognition start error:', err);
      }
    }
  };

  // Send question to AI backend or offline retrieval
  const handleAskQuestion = async (queryText) => {
    if (!queryText || queryText.trim() === '') return;

    setIsProcessing(true);
    setErrorMessage('');

    try {
      if (isOnline) {
        const res = await fetch('/api/ai/tutor', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            question: queryText,
            studentClass: profile?.class_id || 8,
            language: language,
            subject: 'general'
          })
        });

        if (res.ok) {
          const data = await res.json();
          setResponse(data.response);
          onAnswerGenerated(data.response);
          speakResponse(data.response);
        } else {
          throw new Error('API failed');
        }
      } else {
        setErrorMessage(t('aiTutor.offlineNotice'));
      }
    } catch (err) {
      console.warn('AI query error:', err);
      setErrorMessage(t('errors.generic'));
    } finally {
      setIsProcessing(false);
    }
  };

  // Text-To-Speech Synthesis
  const speakResponse = (textToSpeak) => {
    if (!window.speechSynthesis || !textToSpeak) return;

    window.speechSynthesis.cancel(); // Stop ongoing speech

    // Strip markdown formatting for cleaner speech output
    const cleanText = textToSpeak.replace(/[*_#`•]/g, '').trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = speechLangCode;
    utterance.rate = 0.95;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <div className="saksham-card p-6 text-center space-y-6">
      
      <div>
        <h3 className="text-base font-bold text-slate-800 flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-accent-500" />
          {t('aiTutor.speakQuestion')}
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          {language === 'mr'
            ? 'माईक दाबा आणि मराठीत विचारा (उदा. "गुरुत्वाकर्षण म्हणजे काय?")'
            : language === 'hi'
            ? 'माइक दबाएं और हिंदी में पूछें (उदा. "गुरुत्वाकर्षण क्या है?")'
            : 'Tap mic and ask in English (e.g. "What is Gravitation?")'}
        </p>
      </div>

      {/* Large Interactive Mic Button */}
      <div className="flex flex-col items-center justify-center gap-3">
        <button
          onClick={toggleListening}
          className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg cursor-pointer ${
            isListening
              ? 'bg-accent-600 text-white animate-mic ring-8 ring-accent-100 scale-105'
              : 'bg-brand-800 hover:bg-brand-700 text-white hover:scale-105 ring-4 ring-brand-100'
          }`}
          aria-label={isListening ? t('aiTutor.stopListening') : t('aiTutor.speakQuestion')}
        >
          {isListening ? (
            <Mic className="w-10 h-10" />
          ) : (
            <Mic className="w-10 h-10" />
          )}
        </button>

        <span className="text-xs font-bold text-slate-700">
          {isListening
            ? t('aiTutor.listening')
            : isProcessing
            ? t('aiTutor.processing')
            : t('aiTutor.speakQuestion')}
        </span>
      </div>

      {/* Spoken Transcript Bubble */}
      {transcript && (
        <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-left">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            {language === 'mr' ? 'तुम्ही विचारलेला प्रश्न:' : language === 'hi' ? 'आपका प्रश्न:' : 'Your Question:'}
          </p>
          <p className="text-xs font-semibold text-slate-800 italic">"{transcript}"</p>
        </div>
      )}

      {/* Error / Offline Notice */}
      {errorMessage && (
        <div className="p-3 bg-amber-50 border border-amber-200 text-amber-800 text-xs rounded-xl font-medium text-left">
          {errorMessage}
        </div>
      )}

      {/* Spoken Answer Playback Control */}
      {response && (
        <div className="pt-2 flex items-center justify-center gap-3">
          {isSpeaking ? (
            <button
              onClick={stopSpeaking}
              className="px-3 py-1.5 rounded-xl bg-accent-50 text-accent-700 border border-accent-200 text-xs font-semibold flex items-center gap-1.5 hover:bg-accent-100 transition"
            >
              <VolumeX className="w-4 h-4" />
              {t('aiTutor.stopSpeaking')}
            </button>
          ) : (
            <button
              onClick={() => speakResponse(response)}
              className="px-3 py-1.5 rounded-xl bg-brand-50 text-brand-800 border border-brand-200 text-xs font-semibold flex items-center gap-1.5 hover:bg-brand-100 transition"
            >
              <Volume2 className="w-4 h-4" />
              {t('aiTutor.listenAnswer')}
            </button>
          )}
        </div>
      )}

    </div>
  );
}
