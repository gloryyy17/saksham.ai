import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useCurriculum } from '../../contexts/CurriculumContext';
import { calculateOpportunityMatch } from '../../data/opportunitiesData';
import { Sparkles, Calendar, Award, ArrowRight, CheckCircle2, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function OpportunityCard({ opportunity }) {
  const { language, t } = useLanguage();
  const { studentSkillScores } = useCurriculum();
  const [applied, setApplied] = useState(false);

  if (!opportunity) return null;

  const { matchRate, missingSkillId } = calculateOpportunityMatch(opportunity, studentSkillScores);

  const title = language === 'mr' ? opportunity.title_mr : language === 'hi' ? opportunity.title_hi : opportunity.title;
  const desc = language === 'mr' ? opportunity.description_mr : language === 'hi' ? opportunity.description_hi : opportunity.description;

  const rec = opportunity.missingSkillRecommendation;
  const recChapterTitle = rec ? (language === 'mr' ? rec.recommendedChapterTitle_mr : language === 'hi' ? rec.recommendedChapterTitle_hi : rec.recommendedChapterTitle) : '';

  const handleApply = () => {
    setApplied(true);
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    } catch (e) {}
  };

  return (
    <div className="saksham-card p-6 flex flex-col justify-between hover:border-brand-300 transition space-y-4">
      <div className="space-y-3">
        
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-extrabold uppercase tracking-wider bg-brand-50 text-brand-800 border border-brand-200 px-2.5 py-1 rounded-full">
            {opportunity.category}
          </span>

          <div className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-300 px-2.5 py-0.5 rounded-full text-xs font-black">
            <Sparkles className="w-3 h-3 text-emerald-600" />
            <span>{matchRate}% {t('opportunities.matchRate')}</span>
          </div>
        </div>

        <h3 className="text-sm font-bold text-slate-900 leading-snug">
          {title}
        </h3>

        <p className="text-xs text-slate-500 font-medium">
          {opportunity.organization} • {opportunity.prize}
        </p>

        <p className="text-xs text-slate-600 line-clamp-2">
          {desc}
        </p>

        {/* Missing Skill to Improve & Recommended Course */}
        {rec && matchRate < 95 && (
          <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-1">
            <p className="font-bold text-[11px] text-amber-950 flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-amber-700" />
              {t('opportunities.recommendedCourse')}:
            </p>
            <Link
              to={`/chapter/${rec.recommendedChapterId}`}
              className="text-brand-800 font-bold underline hover:text-brand-950 block text-[11px]"
            >
              {recChapterTitle}
            </Link>
          </div>
        )}
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
        <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5 text-slate-400" />
          {opportunity.deadline}
        </span>

        {applied ? (
          <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1.5 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            {t('opportunities.applied')}
          </span>
        ) : (
          <button
            onClick={handleApply}
            className="px-4 py-2 bg-brand-800 hover:bg-brand-900 text-white text-xs font-bold rounded-xl shadow-sm transition flex items-center gap-1"
          >
            <span>{t('opportunities.applyNow')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
