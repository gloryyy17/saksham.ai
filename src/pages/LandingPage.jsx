import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import LanguageSelector from '../components/common/LanguageSelector';
import {
  Sparkles,
  BookOpen,
  WifiOff,
  Languages,
  Mic,
  Camera,
  Award,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  GraduationCap
} from 'lucide-react';

export default function LandingPage() {
  const { language, setLanguage, t } = useLanguage();
  const { user, loginAsGuest } = useAuth();
  const navigate = useNavigate();

  const [selectedPreviewClass, setSelectedPreviewClass] = useState(8);

  const handleDemoLogin = (lang = language) => {
    loginAsGuest('राहुल पाटील (Rahul Patil)', 8, lang);
    navigate('/dashboard');
  };

  const featureCards = [
    {
      icon: BookOpen,
      title: language === 'mr' ? 'महाराष्ट्र राज्य मंडळ अभ्यासक्रम' : language === 'hi' ? 'महाराष्ट्र स्टेट बोर्ड पाठ्यक्रम' : 'Maharashtra State Board Curriculum',
      desc: language === 'mr' ? 'इयत्ता ६ वी ते १० वी चे अधिकृत शालेय विषय, धडे, सोडवलेली उदाहरणे व स्वाध्याय.' : language === 'hi' ? 'कक्षा 6 से 10 के सभी विषय, अध्याय, हल किए गए उदाहरण और अभ्यास।' : 'Classes 6 to 10 structured syllabus, lessons, worked examples, and quizzes.'
    },
    {
      icon: WifiOff,
      title: language === 'mr' ? '१००% ऑफलाइन शिक्षण' : language === 'hi' ? '100% ऑफ़लाइन शिक्षा' : '100% Offline-First Learning',
      desc: language === 'mr' ? 'धडे एकदा डाउनलोड करा आणि इंटरनेटशिवाय शिका. प्रगती आपोआप सिंक होते.' : language === 'hi' ? 'बिना इंटरनेट के पूरा पाठ पढ़ें और क्विज़ दें। इंटरनेट आने पर स्वतः सिंक।' : 'Download once and learn without internet. All progress syncs automatically when online.'
    },
    {
      icon: Languages,
      title: language === 'mr' ? '३ भाषांमध्ये तत्काळ शिक्षण' : language === 'hi' ? '3 भाषाओं में तत्काल शिक्षा' : 'Strict Multilingual Support',
      desc: language === 'mr' ? 'मराठी, हिंदी आणि इंग्रजीमध्ये एका क्लिकवर संपूर्ण साइट व अभ्यासक्रम उपलब्ध.' : language === 'hi' ? 'मराठी, हिंदी और अंग्रेजी में शून्य मिश्रित भाषा के साथ संपूर्ण वेबसाइट।' : 'Seamless full-platform switching across Marathi, Hindi, and English.'
    },
    {
      icon: Mic,
      title: language === 'mr' ? 'आवाजाने शंका विचारा (Voice AI)' : language === 'hi' ? 'बोलकर पूछें (Voice AI)' : 'Voice-Enabled AI Assistant',
      desc: language === 'mr' ? 'माईक दाबा आणि मातृभाषेत प्रश्न विचारा. एआय आवाजाद्वारेच उत्तर देईल.' : language === 'hi' ? 'माइक दबाकर अपनी भाषा में प्रश्न पूछें और बोलकर उत्तर सुनें।' : 'Ask questions naturally by voice and listen to spoken explanations.'
    },
    {
      icon: Camera,
      title: language === 'mr' ? 'फोटोवरून शंका निवारण (Vision AI)' : language === 'hi' ? 'फोटो से सवाल हल करें (Vision AI)' : 'Visual Doubt Solver (Image OCR)',
      desc: language === 'mr' ? 'गणित किंवा विज्ञानाच्या प्रश्नाचा फोटो काढा आणि ५ पायऱ्यांमध्ये सविस्तर उत्तर मिळवा.' : language === 'hi' ? 'गणित और विज्ञान के प्रश्नों की तस्वीर अपलोड करें और 5 चरणों में समाधान पाएं।' : 'Upload textbook problem photos for 5-stage step-by-step educational solutions.'
    },
    {
      icon: Award,
      title: language === 'mr' ? 'पारदर्शक कौशल्य पासपोर्ट' : language === 'hi' ? 'कौशल पासपोर्ट' : 'Transparent Skill Passport',
      desc: language === 'mr' ? 'सूत्र: (अभ्यासक्रम ३०% + चाचणी ३०% + प्रकल्प ४०%). राज्यस्तरीय संधींशी थेट जोडणी.' : language === 'hi' ? 'सूत्र: (पाठ्यक्रम 30% + क्विज़ 30% + प्रोजेक्ट 40%) और छात्रवृत्ति मैचिंग।' : 'Formula: 30% Course + 30% Quiz + 40% Project mapped to state scholarships.'
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. FRONT PAGE LANGUAGE SELECTOR BAR */}
      <section className="bg-white border-b border-slate-200 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-700">
              {language === 'mr' ? 'तुमची अभ्यासाची भाषा निवडा' : language === 'hi' ? 'अपनी अध्ययन भाषा चुनें' : 'Choose Your Learning Language'}:
            </span>
          </div>

          <LanguageSelector variant="detailed" />
        </div>
      </section>

      {/* 2. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 pt-6">
        
        {/* Brand Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200/80 px-4 py-1.5 rounded-full text-xs font-bold text-brand-800 shadow-xs">
          <Sparkles className="w-4 h-4 text-accent-500" />
          <span>Maharashtra State Board • Classes 6 to 10</span>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            SAKSHAM<span className="text-teal-600">.AI</span>
          </h1>
          <p className="text-2xl sm:text-3xl font-extrabold text-brand-800 tracking-tight">
            {t('tagline')}
          </p>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t('subTagline')}
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          {user ? (
            <Link
              to="/dashboard"
              className="px-8 py-3.5 bg-brand-800 hover:bg-brand-900 text-white font-extrabold text-sm rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <span>{t('continueLearning')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <>
              <Link
                to="/onboarding"
                className="px-8 py-3.5 bg-brand-800 hover:bg-brand-900 text-white font-extrabold text-sm rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <span>{t('startLearning')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => handleDemoLogin('mr')}
                className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-300 font-extrabold text-sm rounded-2xl shadow-xs transition flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-accent-500" />
                <span>{t('guestLogin')} (इयत्ता ८ वी)</span>
              </button>
            </>
          )}
        </div>

        {/* Core Principle Quote */}
        <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-2xl max-w-xl mx-auto text-xs font-bold text-amber-950 italic">
          "Quality learning should not stop because internet connectivity is poor."
        </div>

      </section>

      {/* 3. CLASS CURRICULUM SELECTOR PREVIEW (Classes 6-10) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            {language === 'mr' ? 'इयत्ता निहाय अभ्यासक्रम (Classes 6 to 10)' : language === 'hi' ? 'कक्षा अनुसार पाठ्यक्रम (Classes 6 to 10)' : 'Maharashtra State Board Curriculum by Class'}
          </h2>
          <p className="text-xs text-slate-500">
            {language === 'mr' ? 'खालील इयत्तेवर क्लिक करून विषय आणि धडे पहा' : language === 'hi' ? 'अपनी कक्षा चुनें और विषय देखें' : 'Select a class to explore the curriculum'}
          </p>
        </div>

        {/* Class Selector Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {[6, 7, 8, 9, 10].map((cls) => {
            const isActive = selectedPreviewClass === cls;
            return (
              <button
                key={cls}
                onClick={() => setSelectedPreviewClass(cls)}
                className={`px-5 py-2.5 rounded-2xl text-xs font-extrabold transition-all duration-150 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-brand-800 text-white shadow-md ring-4 ring-brand-100 scale-105'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>{t('classes.standard')} {cls}</span>
              </button>
            );
          })}
        </div>

        {/* Preview Subjects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
          <div className="saksham-card p-5 border-l-4 border-l-brand-800">
            <h3 className="font-bold text-sm text-slate-900 mb-1">{t('subjects.mathematics')}</h3>
            <p className="text-xs text-slate-500 mb-3">
              {selectedPreviewClass === 8 ? 'Rational Numbers, Parallel Lines, Linear Equations' : selectedPreviewClass === 10 ? 'Linear Equations in 2 Variables, Quadratic Equations, Pythagoras' : 'Maharashtra State Board Standard Mathematics'}
            </p>
            <Link to="/learn" className="text-xs font-bold text-brand-800 flex items-center gap-1 hover:underline">
              {t('learn.chapters')} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="saksham-card p-5 border-l-4 border-l-emerald-600">
            <h3 className="font-bold text-sm text-slate-900 mb-1">
              {selectedPreviewClass >= 9 ? t('subjects.science1') : t('subjects.science')}
            </h3>
            <p className="text-xs text-slate-500 mb-3">
              {selectedPreviewClass === 8 ? 'Living World & Microbes, Force & Pressure, Current Electricity' : selectedPreviewClass === 10 ? 'Gravitation, Periodic Classification, Chemical Reactions' : 'General Science Syllabus & Experiments'}
            </p>
            <Link to="/learn" className="text-xs font-bold text-emerald-800 flex items-center gap-1 hover:underline">
              {t('learn.chapters')} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="saksham-card p-5 border-l-4 border-l-purple-600">
            <h3 className="font-bold text-sm text-slate-900 mb-1">{t('subjects.english')}</h3>
            <p className="text-xs text-slate-500 mb-3">
              Poetic Appreciation, Comprehension, Maharashtra State Board Grammar & Vocabulary
            </p>
            <Link to="/learn" className="text-xs font-bold text-purple-800 flex items-center gap-1 hover:underline">
              {t('learn.chapters')} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. KEY PLATFORM FEATURES (6 Pillars) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            {language === 'mr' ? 'सक्षम.एआय ची वैशिष्ट्ये' : language === 'hi' ? 'सक्षम.एआई की मुख्य विशेषताएं' : 'Key Pillars of SAKSHAM.AI'}
          </h2>
          <p className="text-xs text-slate-500">
            Built specifically for rural and low-connectivity schools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="saksham-card p-6 flex flex-col justify-between hover:border-brand-300 transition-all">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-800 flex items-center justify-center shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{feat.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. 5-MINUTE HACKATHON DEMO LAUNCHPAD */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="saksham-card p-8 bg-gradient-to-r from-brand-900 via-brand-800 to-teal-900 text-white rounded-3xl shadow-card relative overflow-hidden">
          <div className="space-y-4 max-w-2xl relative z-10">
            <span className="text-[10px] font-extrabold uppercase tracking-widest bg-accent-500 text-white px-3 py-1 rounded-full">
              Instant Hackathon Demo
            </span>
            <h2 className="text-2xl font-black tracking-tight">
              Test the 5-Minute Offline & Multilingual Flow
            </h2>
            <p className="text-xs text-brand-100 leading-relaxed">
              Launch preloaded Class 8 student session (Marathi/Hindi), test offline chapter downloading, attempt quizzes with zero internet, inspect the sync queue, and ask voice/image doubts!
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => handleDemoLogin('mr')}
                className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-xs rounded-xl shadow-md transition cursor-pointer"
              >
                मराठी डेमो सुरू करा (Marathi Demo)
              </button>
              <button
                onClick={() => handleDemoLogin('hi')}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-extrabold text-xs rounded-xl transition cursor-pointer"
              >
                हिंदी डेमो (Hindi Demo)
              </button>
              <Link
                to="/offline-test"
                className="px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-extrabold text-xs rounded-xl shadow-md transition"
              >
                {t('nav.offlineTest')}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
