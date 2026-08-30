import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import { useNetwork } from '../../contexts/NetworkContext';
import { useCurriculum } from '../../contexts/CurriculumContext';
import { Send, Bot, User, Sparkles, Loader2, BookOpen } from 'lucide-react';

import { generateAITutorResponse } from '../../utils/aiTutorEngine';

export default function AITutorChat() {
  const { language, t } = useLanguage();
  const { profile } = useAuth();
  const { isOnline } = useNetwork();
  const { downloadedChaptersMap } = useCurriculum();

  const [inputQuestion, setInputQuestion] = useState('');
  const [messages, setMessages] = useState(() => [
    {
      sender: 'ai',
      text: language === 'mr'
        ? 'नमस्ते! मी तुमचा सक्षम एआय शिक्षक आहे. महाराष्ट्र राज्य मंडळाच्या इयत्ता ' + (profile?.class_id || 8) + ' वी च्या गणित, विज्ञान किंवा इंग्रजी विषयातील कोणतीही शंका विचारा!'
        : language === 'hi'
        ? 'नमस्ते! मैं आपका सक्षम एआई शिक्षक हूँ। महाराष्ट्र स्टेट बोर्ड कक्षा ' + (profile?.class_id || 8) + ' के किसी भी विषय की शंका पूछें!'
        : 'Namaste! I am your Saksham AI Tutor for Maharashtra State Board Class ' + (profile?.class_id || 8) + '. Ask any doubts in Mathematics, Science, or English!'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Suggested starter questions based on active language
  const suggestedQuestions = language === 'mr'
    ? ['गुरुत्वाकर्षण म्हणजे काय?', 'परिमेय संख्यांची व्याख्या काय?', 'दाबाचे सूत्र व एकक सांगा']
    : language === 'hi'
    ? ['गुरुत्वाकर्षण क्या है?', 'परिमेय संख्या की परिभाषा क्या है?', 'दाब का सूत्र और मात्रक बताएं']
    : ['What is Gravitation?', 'What is a Rational Number?', 'Formula and unit of Pressure'];

  const handleSend = async (queryText = inputQuestion) => {
    const textToSend = queryText.trim();
    if (!textToSend || isLoading) return;

    // Add user message
    const newMsgList = [...messages, { sender: 'user', text: textToSend }];
    setMessages(newMsgList);
    setInputQuestion('');
    setIsLoading(true);

    let answerReceived = false;

    try {
      if (isOnline) {
        try {
          const res = await fetch('/api/ai/tutor', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              question: textToSend,
              studentClass: profile?.class_id || 8,
              language: language,
              subject: 'general'
            })
          });

          if (res.ok) {
            const data = await res.json();
            if (data && data.response) {
              setMessages([...newMsgList, { sender: 'ai', text: data.response }]);
              answerReceived = true;
            }
          }
        } catch (fetchErr) {
          console.warn('Online API fetch failed, falling back to local reasoning engine:', fetchErr);
        }
      }

      // If not online or if API call didn't return a response, run local intelligence
      if (!answerReceived) {
        // 1. Check Dexie downloaded chapters first
        let localFoundExplanation = '';
        const lowerQ = textToSend.toLowerCase();

        for (const chId in downloadedChaptersMap) {
          const ch = downloadedChaptersMap[chId]?.payload || downloadedChaptersMap[chId];
          const lessons = ch?.lessons || [];
          for (const l of lessons) {
            const expl = l?.explanation || [];
            for (const item of expl) {
              const textContent = (language === 'mr' ? item.text_mr : language === 'hi' ? item.text_hi : item.text) || item.text || '';
              if (textContent && (textContent.toLowerCase().includes(lowerQ) || l.title?.toLowerCase().includes(lowerQ))) {
                localFoundExplanation = textContent;
                break;
              }
            }
            if (localFoundExplanation) break;
          }
          if (localFoundExplanation) break;
        }

        if (localFoundExplanation) {
          const prefix = language === 'mr' ? '📚 [स्थानिक धड्यातून]:\n\n' : language === 'hi' ? '📚 [स्थानिक पाठ से]:\n\n' : '📚 [From Downloaded Lesson]:\n\n';
          setMessages([...newMsgList, { sender: 'ai', text: prefix + localFoundExplanation }]);
        } else {
          // 2. Generate structured curriculum AI response
          const smartResponse = generateAITutorResponse(textToSend, profile?.class_id || 8, language);
          setMessages([...newMsgList, { sender: 'ai', text: smartResponse }]);
        }
      }
    } catch (err) {
      console.warn('AI chat error:', err);
      const fallbackResponse = generateAITutorResponse(textToSend, profile?.class_id || 8, language);
      setMessages([...newMsgList, { sender: 'ai', text: fallbackResponse }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="saksham-card flex flex-col h-[520px] overflow-hidden">
      
      {/* Chat Messages Log */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/50">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-2.5 ${m.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
          >
            <div
              className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs shrink-0 shadow-sm ${
                m.sender === 'user'
                  ? 'bg-brand-800 text-white'
                  : 'bg-teal-600 text-white'
              }`}
            >
              {m.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            <div
              className={`max-w-[85%] rounded-2xl p-3.5 text-xs leading-relaxed shadow-sm ${
                m.sender === 'user'
                  ? 'bg-brand-800 text-white rounded-tr-none'
                  : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none whitespace-pre-line'
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-2 text-slate-500 text-xs italic p-2">
            <Loader2 className="w-4 h-4 animate-spin text-brand-700" />
            <span>{t('aiTutor.answering')}</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Questions */}
      <div className="px-4 py-2 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto text-[11px]">
        <span className="text-slate-400 font-bold shrink-0 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-accent-500" />
        </span>
        {suggestedQuestions.map((sq, i) => (
          <button
            key={i}
            onClick={() => handleSend(sq)}
            className="px-2.5 py-1 bg-slate-100 hover:bg-brand-50 hover:text-brand-800 text-slate-700 rounded-lg whitespace-nowrap transition font-medium cursor-pointer"
          >
            {sq}
          </button>
        ))}
      </div>

      {/* Input Box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
      >
        <input
          type="text"
          value={inputQuestion}
          onChange={(e) => setInputQuestion(e.target.value)}
          placeholder={t('aiTutor.placeholder')}
          className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-800"
        />
        <button
          type="submit"
          disabled={!inputQuestion.trim() || isLoading}
          className="p-2.5 bg-brand-800 hover:bg-brand-900 text-white rounded-xl shadow-sm transition disabled:opacity-50 cursor-pointer"
          title={t('aiTutor.askButton')}
          aria-label={t('aiTutor.askButton')}
        >
          <Send className="w-4 h-4" />
        </button>
      </form>

    </div>
  );
}
