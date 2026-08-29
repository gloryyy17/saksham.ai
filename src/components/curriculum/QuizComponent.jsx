import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useCurriculum } from '../../contexts/CurriculumContext';
import { Award, CheckCircle2, XCircle, ArrowLeft, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuizComponent({ quiz, onFinished = () => {} }) {
  const { language, t } = useLanguage();
  const { submitQuiz } = useCurriculum();

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [quizResult, setQuizResult] = useState(null);

  if (!quiz) return null;

  const questions = quiz.questions || [];
  const totalQuestions = questions.length;
  const currentQuestion = questions[currentIdx];

  const quizTitle = language === 'mr' ? quiz.title_mr : language === 'hi' ? quiz.title_hi : quiz.title;

  const handleSelectOption = (optIdx) => {
    if (submitted) return;
    setSelectedAnswers(prev => ({ ...prev, [currentIdx]: optIdx }));
  };

  const handleSubmit = async () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        score += q.points || 1;
      }
    });

    const maxScore = quiz.totalMarks || totalQuestions;
    const passed = score >= (quiz.passingMarks || Math.ceil(maxScore * 0.6));

    const result = await submitQuiz(quiz.id, score, maxScore, selectedAnswers);
    setQuizResult(result);
    setSubmitted(true);

    if (passed) {
      try {
        confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
      } catch (e) {}
    }
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setSubmitted(false);
    setQuizResult(null);
    setCurrentIdx(0);
  };

  // Results View
  if (submitted && quizResult) {
    const passed = quizResult.passed;

    return (
      <div className="saksham-card p-6 sm:p-8 max-w-2xl mx-auto space-y-6 animate-fadeIn">
        <div className="text-center space-y-3">
          <div className={`w-16 h-16 rounded-3xl mx-auto flex items-center justify-center shadow-lg ${
            passed ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
          }`}>
            <Award className="w-8 h-8" />
          </div>

          <h2 className="text-xl font-extrabold text-slate-900">
            {t('quiz.resultsTitle')}
          </h2>

          <p className="text-xs font-bold text-slate-600">
            {passed ? t('quiz.passedMsg') : t('quiz.failedMsg')}
          </p>

          <div className="flex items-center justify-center gap-6 pt-2">
            <div className="bg-slate-50 border border-slate-200 px-5 py-3 rounded-2xl">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">{t('quiz.yourScore')}</span>
              <span className="text-2xl font-black text-brand-800">{quizResult.score} / {quizResult.maxScore}</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 px-5 py-3 rounded-2xl">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">{t('quiz.passingScore')}</span>
              <span className="text-2xl font-black text-slate-700">{quiz.passingMarks || 3}</span>
            </div>
          </div>
        </div>

        {/* Detailed Questions Review */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <h3 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
            {t('quiz.reviewAnswers')}
          </h3>

          <div className="space-y-3">
            {questions.map((q, idx) => {
              const qText = (language === 'mr' ? q.question_mr : language === 'hi' ? q.question_hi : q.question) || q.question;
              const expl = (language === 'mr' ? q.explanation_mr : language === 'hi' ? q.explanation_hi : q.explanation) || q.explanation;
              const userAns = selectedAnswers[idx];
              const isCorrect = userAns === q.correctIndex;

              return (
                <div key={idx} className="p-4 rounded-2xl border bg-slate-50 border-slate-200 space-y-2 text-xs">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-bold text-slate-900">
                      {idx + 1}. {qText}
                    </p>
                    {isCorrect ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                    )}
                  </div>

                  <p className="text-slate-600">
                    <span className="font-bold">{language === 'mr' ? 'तुमचे उत्तर: ' : language === 'hi' ? 'आपका उत्तर: ' : 'Your Choice: '}</span>
                    {userAns !== undefined ? q.options[userAns] : 'Not answered'}
                  </p>

                  {!isCorrect && (
                    <p className="text-emerald-800 font-bold">
                      <span className="font-bold">{language === 'mr' ? 'योग्य उत्तर: ' : language === 'hi' ? 'सही उत्तर: ' : 'Correct Answer: '}</span>
                      {q.options[q.correctIndex]}
                    </p>
                  )}

                  {expl && (
                    <div className="p-2.5 bg-brand-50/60 rounded-xl text-[11px] text-brand-900 border border-brand-200/60">
                      <span className="font-bold">व्याख्या / Explanation: </span>{expl}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <button
            onClick={handleRetake}
            className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-xs font-bold text-slate-700 flex items-center gap-1.5 transition"
          >
            <RotateCcw className="w-4 h-4" />
            {t('learn.retakeQuiz')}
          </button>

          <button
            onClick={onFinished}
            className="px-6 py-2.5 rounded-xl bg-brand-800 hover:bg-brand-900 text-white text-xs font-extrabold shadow-sm transition"
          >
            {t('quiz.continueNextLesson')}
          </button>
        </div>
      </div>
    );
  }

  // Active Quiz Step View
  const qText = (language === 'mr' ? currentQuestion.question_mr : language === 'hi' ? currentQuestion.question_hi : currentQuestion.question) || currentQuestion.question;
  const isLastQuestion = currentIdx === totalQuestions - 1;

  return (
    <div className="saksham-card p-6 sm:p-8 max-w-2xl mx-auto space-y-6">
      
      {/* Header & Step progress */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-xs font-bold text-brand-800 uppercase tracking-wider">
            {quizTitle}
          </span>
          <span className="text-xs font-bold text-slate-500">
            {t('quiz.question')} {currentIdx + 1} {t('quiz.of')} {totalQuestions}
          </span>
        </div>

        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div
            className="bg-brand-800 h-full rounded-full transition-all duration-300"
            style={{ width: `${((currentIdx + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Text */}
      <div className="py-2">
        <h2 className="text-base font-bold text-slate-900 leading-snug">
          {currentIdx + 1}. {qText}
        </h2>
      </div>

      {/* Options List */}
      <div className="space-y-3">
        {currentQuestion.options.map((opt, optIdx) => {
          const isSelected = selectedAnswers[currentIdx] === optIdx;
          return (
            <button
              key={optIdx}
              onClick={() => handleSelectOption(optIdx)}
              className={`w-full p-4 rounded-2xl text-xs font-semibold text-left border transition-all flex items-center justify-between ${
                isSelected
                  ? 'bg-brand-800 text-white border-brand-800 shadow-md ring-2 ring-brand-800/20'
                  : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {String.fromCharCode(65 + optIdx)}
                </span>
                <span>{opt}</span>
              </div>

              {isSelected && <CheckCircle2 className="w-4 h-4 text-white shrink-0" />}
            </button>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <button
          onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
          disabled={currentIdx === 0}
          className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-xs font-bold text-slate-700 flex items-center gap-1.5 transition disabled:opacity-40"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('previous')}
        </button>

        {isLastQuestion ? (
          <button
            onClick={handleSubmit}
            disabled={selectedAnswers[currentIdx] === undefined}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold rounded-xl shadow-md transition disabled:opacity-40"
          >
            {t('quiz.submitQuiz')}
          </button>
        ) : (
          <button
            onClick={() => setCurrentIdx(prev => Math.min(totalQuestions - 1, prev + 1))}
            disabled={selectedAnswers[currentIdx] === undefined}
            className="px-5 py-2.5 bg-brand-800 hover:bg-brand-900 text-white text-xs font-bold rounded-xl shadow-sm transition disabled:opacity-40 flex items-center gap-1.5"
          >
            {t('next')}
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>

    </div>
  );
}
