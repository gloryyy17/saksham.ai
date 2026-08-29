import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCurriculum } from '../contexts/CurriculumContext';
import { getOpportunitiesForClass } from '../data/opportunitiesData';
import OpportunityCard from '../components/opportunities/OpportunityCard';
import { Sparkles, Filter } from 'lucide-react';

export default function OpportunitiesPage() {
  const { language, t } = useLanguage();
  const { currentClass } = useCurriculum();

  const [categoryFilter, setCategoryFilter] = useState('all');

  const allOpps = getOpportunitiesForClass(currentClass);
  const filteredOpps = categoryFilter === 'all'
    ? allOpps
    : allOpps.filter(opp => opp.category === categoryFilter);

  return (
    <div className="space-y-8 pb-12">
      
      {/* Header Banner */}
      <div className="saksham-card p-6 sm:p-8 bg-gradient-to-r from-brand-900 via-brand-800 to-teal-900 text-white rounded-3xl shadow-card">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-extrabold uppercase tracking-wider bg-accent-500 text-white px-2.5 py-0.5 rounded-full">
              Age-Appropriate • {t('classes.standard')} {currentClass}
            </span>
            <span className="text-xs text-brand-200">
              State Board Competitions & Scholarships
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black">
            {t('opportunities.title')}
          </h1>
          <p className="text-xs text-brand-100 max-w-xl">
            {t('opportunities.subtitle')}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/10 overflow-x-auto">
          {['all', 'exhibition', 'scholarship', 'competition', 'workshop'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer shrink-0 ${
                categoryFilter === cat
                  ? 'bg-white text-brand-900 shadow-sm'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              {cat === 'all' ? t('viewAll') : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredOpps.map((opp) => (
          <OpportunityCard key={opp.id} opportunity={opp} />
        ))}
      </div>

    </div>
  );
}
