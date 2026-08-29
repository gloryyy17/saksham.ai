import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useCurriculum } from '../contexts/CurriculumContext';
import { subjectsData, getChapters } from '../data/curriculumData';
import ChapterCard from '../components/curriculum/ChapterCard';
import { BookOpen, ArrowLeft, Layers } from 'lucide-react';

export default function SubjectPage() {
  const { subjectId } = useParams();
  const { language, t } = useLanguage();
  const { currentClass, getSubjectProgress } = useCurriculum();

  const subject = subjectsData.find(s => s.id === subjectId) || subjectsData[0];
  const chapters = getChapters(currentClass, subject.id);
  const progress = getSubjectProgress(subject.id);

  const subjectTitle = language === 'mr' ? subject.name_mr : language === 'hi' ? subject.name_hi : subject.name;

  return (
    <div className="space-y-8 pb-12">
      
      {/* Back button */}
      <div>
        <Link
          to="/learn"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-800 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t('back')}</span>
        </Link>
      </div>

      {/* Subject Header Banner */}
      <div className="saksham-card p-6 sm:p-8 bg-gradient-to-r from-brand-900 via-brand-800 to-teal-900 text-white rounded-3xl shadow-card">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider bg-accent-500 text-white px-2.5 py-0.5 rounded-full">
                {t('classes.standard')} {currentClass}
              </span>
              <span className="text-xs text-brand-200">
                Maharashtra State Board
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">
              {subjectTitle}
            </h1>
          </div>

          <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl text-center shrink-0 border border-white/20">
            <span className="text-[10px] font-bold uppercase text-brand-200 block">{t('completed')}</span>
            <span className="text-xl font-black text-accent-400">{progress}%</span>
          </div>
        </div>
      </div>

      {/* Chapters Grid */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-brand-800" />
          <h2 className="text-base font-bold text-slate-900">
            {t('learn.chapters')} ({chapters.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {chapters.map((ch) => (
            <ChapterCard key={ch.id} chapter={ch} subjectId={subject.id} />
          ))}
        </div>
      </div>

    </div>
  );
}
