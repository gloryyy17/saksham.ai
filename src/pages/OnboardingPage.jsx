import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { getSubjectsForClass } from '../data/curriculumData';
import { getDiagnosticQuestionsForClass } from '../data/diagnosticData';
import { Sparkles, CheckCircle2, ArrowRight, ArrowLeft, GraduationCap, Award, BookOpen, Languages } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function OnboardingPage() {
  const { language, setLanguage, t } = useLanguage();
  const { profile, updateProfile, loginAsGuest } = useAuth();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [selectedLang, setSelectedLang] = useState(language || 'mr');
  const [selectedClass, setSelectedClass] = useState(profile?.class_id || 8);
  const [selectedSubjects, setSelectedSubjects] = useState(['mathematics', 'science']);
  const [diagnosticAnswers, setDiagnosticAnswers] = useState({});
  const [assessmentResult, setAssessmentResult] = useState(null);

  const availableSubjects = getSubjectsForClass(selectedClass);
  const diagnosticQuestions = getDiagnosticQuestionsForClass(selectedClass);

  const handleLanguageChange = (lang) => {
    setSelectedLang(lang);
    setLanguage(lang);
  };

  const toggleSubject = (subId) => {
    setSelectedSubjects(prev => {
      if (prev.includes(subId)) {
        return prev.length > 1 ? prev.filter(id => id !== subId) : prev;
      }
      return [...prev, subId];
    });
  };

  const handleDiagnosticSelect = (qIdx, optIdx) => {
    setDiagnosticAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleFinishAssessment = () => {
    let correctCount = 0;
    diagnosticQuestions.forEach((q, idx) => {
      if (diagnosticAnswers[idx] === q.correctIndex) correctCount++;
    });

    let level = 'intermediate';
    if (correctCount >= 3) level = 'advanced';
    else if (correctCount <= 1) level = 'beginner';

    setAssessmentResult({ correctCount, total: diagnosticQuestions.length, level });

    try {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    } catch (e) {}
  };

  const handleCompleteOnboarding = () => {
    if (!profile) {
      loginAsGuest('विद्यार्थी (Student)', selectedClass, selectedLang);
    } else {
      updateProfile({
        class_id: selectedClass,
        preferred_language: selectedLang,
        learning_level: assessmentResult?.level || 'intermediate'
      });
    }
    navigate('/dashboard');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      
      {/* Step Indicators */}
      <div className="flex items-center justify-between max-w-md mx-auto mb-6">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition ${
                step === s
                  ? 'bg-brand-800 text-white ring-4 ring-brand-100 shadow-md'
                  : step > s
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-100 text-slate-400'
              }`}
            >
              {step > s ? <CheckCircle2 className="w-4 h-4" /> : s}
            </div>
            {s < 4 && (
              <div
                className={`w-12 sm:w-16 h-1 mx-1 rounded-full ${
                  step > s ? 'bg-emerald-600' : 'bg-slate-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* STEP 1: LANGUAGE SELECTION */}
      {step === 1 && (
        <div className="saksham-card p-6 sm:p-8 space-y-6 animate-fadeIn">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-800 flex items-center justify-center mx-auto">
              <Languages className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-black text-slate-900">{t('onboarding.step1Title')}</h2>
            <p className="text-xs text-slate-500">{t('onboarding.step1Subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
            {[
              { code: 'mr', name: 'मराठी', sub: 'Marathi (मातृभाषा)' },
              { code: 'hi', name: 'हिंदी', sub: 'Hindi (राष्ट्रभाषा)' },
              { code: 'en', name: 'English', sub: 'English (Semi-English / English)' }
            ].map((item) => {
              const isSelected = selectedLang === item.code;
              return (
                <button
                  key={item.code}
                  onClick={() => handleLanguageChange(item.code)}
                  className={`p-5 rounded-2xl text-center border-2 transition-all cursor-pointer ${
                    isSelected
                      ? 'border-brand-800 bg-brand-50/60 shadow-md scale-105'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <p className="text-base font-extrabold text-slate-900 mb-1">{item.name}</p>
                  <p className="text-[11px] text-slate-500 font-medium">{item.sub}</p>
                </button>
              );
            })}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => setStep(2)}
              className="px-8 py-3 bg-brand-800 hover:bg-brand-900 text-white font-extrabold text-xs rounded-xl shadow-md transition inline-flex items-center gap-2 cursor-pointer"
            >
              <span>{t('next')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: CLASS SELECTION (6 to 10) */}
      {step === 2 && (
        <div className="saksham-card p-6 sm:p-8 space-y-6 animate-fadeIn">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-800 flex items-center justify-center mx-auto">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-black text-slate-900">{t('onboarding.step2Title')}</h2>
            <p className="text-xs text-slate-500">{t('onboarding.step2Subtitle')}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-xl mx-auto">
            {[6, 7, 8, 9, 10].map((c) => {
              const isSelected = selectedClass === c;
              return (
                <button
                  key={c}
                  onClick={() => setSelectedClass(c)}
                  className={`p-4 rounded-2xl text-center border-2 transition-all cursor-pointer ${
                    isSelected
                      ? 'border-brand-800 bg-brand-50 text-brand-900 shadow-md scale-105 font-bold'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold'
                  }`}
                >
                  <p className="text-xl font-black">{c}</p>
                  <p className="text-[10px] uppercase tracking-wider">{t('classes.standard')}</p>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-4 max-w-xl mx-auto">
            <button
              onClick={() => setStep(1)}
              className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-xs font-bold text-slate-700 flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('previous')}
            </button>
            <button
              onClick={() => setStep(3)}
              className="px-8 py-3 bg-brand-800 hover:bg-brand-900 text-white font-extrabold text-xs rounded-xl shadow-md transition inline-flex items-center gap-2 cursor-pointer"
            >
              <span>{t('next')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: SUBJECT PREFERENCES */}
      {step === 3 && (
        <div className="saksham-card p-6 sm:p-8 space-y-6 animate-fadeIn">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-800 flex items-center justify-center mx-auto">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-black text-slate-900">{t('onboarding.step3Title')}</h2>
            <p className="text-xs text-slate-500">{t('onboarding.step3Subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto">
            {availableSubjects.map((sub) => {
              const isSelected = selectedSubjects.includes(sub.id);
              const subTitle = selectedLang === 'mr' ? sub.name_mr : selectedLang === 'hi' ? sub.name_hi : sub.name;
              return (
                <button
                  key={sub.id}
                  onClick={() => toggleSubject(sub.id)}
                  className={`p-4 rounded-2xl text-left border-2 transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'border-brand-800 bg-brand-50/60 shadow-sm'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div>
                    <p className="text-xs font-bold text-slate-900">{subTitle}</p>
                    <p className="text-[10px] text-slate-500">Maharashtra State Board</p>
                  </div>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-brand-800" />}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-4 max-w-xl mx-auto">
            <button
              onClick={() => setStep(2)}
              className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-xs font-bold text-slate-700 flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('previous')}
            </button>
            <button
              onClick={() => setStep(4)}
              className="px-8 py-3 bg-brand-800 hover:bg-brand-900 text-white font-extrabold text-xs rounded-xl shadow-md transition inline-flex items-center gap-2 cursor-pointer"
            >
              <span>{t('next')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: DIAGNOSTIC READINESS ASSESSMENT */}
      {step === 4 && (
        <div className="saksham-card p-6 sm:p-8 space-y-6 animate-fadeIn">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-accent-50 text-accent-600 flex items-center justify-center mx-auto">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-black text-slate-900">{t('onboarding.step4Title')}</h2>
            <p className="text-xs text-slate-500">{t('onboarding.step4Subtitle')}</p>
          </div>

          {!assessmentResult ? (
            <div className="space-y-6 max-w-xl mx-auto">
              {diagnosticQuestions.map((q, qIdx) => {
                const qText = (selectedLang === 'mr' ? q.question_mr : selectedLang === 'hi' ? q.question_hi : q.question) || q.question;
                return (
                  <div key={qIdx} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                    <p className="text-xs font-bold text-slate-900 leading-snug">
                      {qIdx + 1}. {qText}
                    </p>
                    <div className="space-y-2">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = diagnosticAnswers[qIdx] === optIdx;
                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleDiagnosticSelect(qIdx, optIdx)}
                            className={`w-full p-3 rounded-xl text-xs font-semibold text-left border transition cursor-pointer flex items-center gap-2 ${
                              isSelected
                                ? 'bg-brand-800 text-white border-brand-800 shadow-sm'
                                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            <span className="w-5 h-5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-bold flex items-center justify-center">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span>{opt}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

              <div className="text-center pt-2">
                <button
                  onClick={handleFinishAssessment}
                  disabled={Object.keys(diagnosticAnswers).length < diagnosticQuestions.length}
                  className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-md transition disabled:opacity-40 cursor-pointer"
                >
                  {t('submit')}
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-6 max-w-md mx-auto animate-fadeIn">
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-sm font-bold text-emerald-950">
                  {t('onboarding.diagnosticPassed')}
                </h3>
                <p className="text-2xl font-black text-emerald-900 uppercase">
                  {t(`onboarding.${assessmentResult.level}`)}
                </p>
                <p className="text-xs text-emerald-800">
                  {assessmentResult.correctCount} / {assessmentResult.total} {selectedLang === 'mr' ? 'उत्तरे बरोबर' : selectedLang === 'hi' ? 'उत्तर सही' : 'questions correct'}
                </p>
              </div>

              <button
                onClick={handleCompleteOnboarding}
                className="w-full py-3.5 bg-brand-800 hover:bg-brand-900 text-white font-extrabold text-xs rounded-xl shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t('onboarding.getStarted')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

    </div>
  );
}
