import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useCurriculum } from '../../contexts/CurriculumContext';
import { CheckCircle2, HelpCircle, ArrowLeft, ArrowRight, Lightbulb, Sparkles, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LessonViewer({ lesson, chapter, onNext, onPrevious }) {
  const { language, t } = useLanguage();
  const { completedLessons, markLessonCompleted } = useCurriculum();

  const [selectedPracticeAnswers, setSelectedPracticeAnswers] = useState({});
  const [practiceResults, setPracticeResults] = useState({});
  const [showHints, setShowHints] = useState({});

  if (!lesson) return null;

  const isCompleted = completedLessons.has(lesson.id);

  const lessonTitle = language === 'mr' ? lesson.title_mr : language === 'hi' ? lesson.title_hi : lesson.title;
  const topicTitle = language === 'mr' ? lesson.topic_mr : language === 'hi' ? lesson.topic_hi : lesson.topic;
  const objectiveText = language === 'mr' ? lesson.objective_mr : language === 'hi' ? lesson.objective_hi : lesson.objective;

  const explanationBlocks = lesson.explanation || [];
  const examples = lesson.examples || [];
  const practiceQuestions = lesson.practice || [];

  const handlePracticeSelect = (qIdx, optIdx) => {
    setSelectedPracticeAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleCheckPractice = (qIdx, correctIdx) => {
    const isCorrect = selectedPracticeAnswers[qIdx] === correctIdx;
    setPracticeResults(prev => ({ ...prev, [qIdx]: isCorrect }));
    if (isCorrect) {
      try {
        confetti({ particleCount: 30, spread: 50, origin: { y: 0.8 } });
      } catch (e) {}
    }
  };

  const handleMarkComplete = () => {
    markLessonCompleted(lesson.id, chapter?.id);
    try {
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    } catch (e) {}
  };

  return (
    <article className="max-w-4xl mx-auto space-y-6">
      
      {/* Header Card */}
      <div className="saksham-card p-6 border-l-4 border-l-brand-800">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className="text-xs font-bold text-brand-800 uppercase tracking-wider bg-brand-50 px-2.5 py-1 rounded-lg border border-brand-200">
            {topicTitle}
          </span>
          {isCompleted && (
            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              {t('learn.completedBadge')}
            </span>
          )}
        </div>

        <h1 className="text-xl font-extrabold text-slate-900 mb-2">
          {lessonTitle}
        </h1>

        {objectiveText && (
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-800">{t('learn.objective')}: </span>
              <span>{objectiveText}</span>
            </div>
          </div>
        )}
      </div>

      {/* Core Explanation Blocks */}
      <section aria-labelledby="explanation-heading" className="saksham-card p-6 sm:p-8 space-y-4">
        <h2 id="explanation-heading" className="text-base font-bold text-slate-900 flex items-center gap-2 pb-3 border-b border-slate-100">
          <BookOpen className="w-5 h-5 text-brand-800" />
          {t('learn.explanation')}
        </h2>

        <div className="space-y-4 text-sm text-slate-800 leading-relaxed">
          {explanationBlocks.map((block, idx) => {
            const textContent = (language === 'mr' ? block.text_mr : language === 'hi' ? block.text_hi : block.text) || block.text;

            if (block.type === 'highlight') {
              return (
                <div key={idx} className="p-4 bg-brand-50 border-l-4 border-brand-800 rounded-r-xl text-brand-950 font-medium">
                  {textContent}
                </div>
              );
            }

            return (
              <p key={idx} className="text-slate-700 font-normal leading-relaxed">
                {textContent}
              </p>
            );
          })}
        </div>
      </section>

      {/* Solved Examples */}
      {examples.length > 0 && (
        <section aria-labelledby="examples-heading" className="saksham-card p-6 sm:p-8 space-y-4">
          <h2 id="examples-heading" className="text-base font-bold text-slate-900 flex items-center gap-2 pb-3 border-b border-slate-100">
            <Sparkles className="w-5 h-5 text-accent-600" />
            {t('learn.examples')}
          </h2>

          <div className="space-y-4">
            {examples.map((ex, idx) => {
              const qText = (language === 'mr' ? ex.question_mr : language === 'hi' ? ex.question_hi : ex.question) || ex.question;
              const steps = (language === 'mr' ? ex.solutionSteps_mr : language === 'hi' ? ex.solutionSteps_hi : ex.solutionSteps) || ex.solutionSteps || [];

              return (
                <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <p className="text-xs font-bold text-brand-900">
                    {language === 'mr' ? `उदाहरण ${idx + 1}:` : language === 'hi' ? `उदाहरण ${idx + 1}:` : `Example ${idx + 1}:`} {qText}
                  </p>
                  <div className="space-y-1.5 pl-3 border-l-2 border-brand-300 text-xs text-slate-700 font-mono">
                    {steps.map((step, sIdx) => (
                      <p key={sIdx}>{step}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Interactive Practice Section */}
      {practiceQuestions.length > 0 && (
        <section aria-labelledby="practice-heading" className="saksham-card p-6 sm:p-8 space-y-4">
          <h2 id="practice-heading" className="text-base font-bold text-slate-900 flex items-center gap-2 pb-3 border-b border-slate-100">
            <Lightbulb className="w-5 h-5 text-amber-500" />
            {t('learn.practiceQuestions')}
          </h2>

          <div className="space-y-6">
            {practiceQuestions.map((pq, qIdx) => {
              const qText = (language === 'mr' ? pq.question_mr : language === 'hi' ? pq.question_hi : pq.question) || pq.question;
              const hintText = (language === 'mr' ? pq.hint_mr : language === 'hi' ? pq.hint_hi : pq.hint) || pq.hint;
              const result = practiceResults[qIdx];

              return (
                <div key={qIdx} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <p className="text-xs font-bold text-slate-900">
                    Q{qIdx + 1}. {qText}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {pq.options.map((opt, optIdx) => {
                      const isSelected = selectedPracticeAnswers[qIdx] === optIdx;
                      return (
                        <button
                          key={optIdx}
                          onClick={() => handlePracticeSelect(qIdx, optIdx)}
                          className={`p-3 rounded-xl text-xs font-semibold text-left border transition ${
                            isSelected
                              ? 'bg-brand-800 text-white border-brand-800 shadow-sm'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {String.fromCharCode(65 + optIdx)}. {opt}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                    <button
                      onClick={() => handleCheckPractice(qIdx, pq.correctIndex)}
                      disabled={selectedPracticeAnswers[qIdx] === undefined}
                      className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-xl shadow-sm transition disabled:opacity-40"
                    >
                      {t('learn.checkAnswer')}
                    </button>

                    {hintText && (
                      <button
                        onClick={() => setShowHints(prev => ({ ...prev, [qIdx]: !prev[qIdx] }))}
                        className="text-xs text-slate-500 hover:text-slate-800 underline font-medium"
                      >
                        {showHints[qIdx] ? t('learn.hideExplanation') : t('learn.showExplanation')}
                      </button>
                    )}
                  </div>

                  {result !== undefined && (
                    <div className={`p-3 rounded-xl text-xs font-bold ${
                      result ? 'bg-emerald-100 text-emerald-900 border border-emerald-300' : 'bg-red-100 text-red-900 border border-red-300'
                    }`}>
                      {result ? t('learn.correct') : t('learn.incorrect')}
                    </div>
                  )}

                  {showHints[qIdx] && hintText && (
                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900">
                      <span className="font-bold">Hint / व्याख्या: </span>{hintText}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Bottom Action Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-4">
        {onPrevious ? (
          <button
            onClick={onPrevious}
            className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-xs font-bold text-slate-700 flex items-center gap-1.5 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('previous')}
          </button>
        ) : <div />}

        <button
          onClick={handleMarkComplete}
          className={`px-6 py-3 rounded-xl text-xs font-extrabold shadow-md flex items-center gap-2 transition ${
            isCompleted
              ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
              : 'bg-brand-800 hover:bg-brand-900 text-white'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          {isCompleted ? t('learn.completedBadge') : t('learn.markComplete')}
        </button>

        {onNext && (
          <button
            onClick={onNext}
            className="px-4 py-2.5 rounded-xl bg-brand-800 hover:bg-brand-900 text-white text-xs font-bold flex items-center gap-1.5 transition shadow-sm"
          >
            {t('next')}
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>

    </article>
  );
}
