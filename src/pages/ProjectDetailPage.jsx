import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useCurriculum } from '../contexts/CurriculumContext';
import { getProjectById } from '../data/projectsData';
import { Hammer, ArrowLeft, CheckCircle2, Award, Upload, FileText, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const { language, t } = useLanguage();
  const { projectSubmissions, submitProject } = useCurriculum();
  const navigate = useNavigate();

  const project = getProjectById(projectId);
  const existingSubmission = project ? projectSubmissions[project.id] : null;

  const [notes, setNotes] = useState(existingSubmission?.submissionText || '');
  const [submitted, setSubmitted] = useState(!!existingSubmission);
  const [submissionData, setSubmissionData] = useState(existingSubmission);

  if (!project) {
    return (
      <div className="text-center py-16 space-y-4">
        <p className="text-sm font-bold text-slate-700">{t('errors.contentUnavailable')}</p>
        <Link to="/projects" className="text-xs font-bold text-brand-800 underline">{t('back')}</Link>
      </div>
    );
  }

  const title = language === 'mr' ? project.title_mr : language === 'hi' ? project.title_hi : project.title;
  const statement = language === 'mr' ? project.problemStatement_mr : language === 'hi' ? project.problemStatement_hi : project.problemStatement;
  const instructions = (language === 'mr' ? project.instructions_mr : language === 'hi' ? project.instructions_hi : project.instructions) || project.instructions || [];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!notes.trim()) return;

    const res = await submitProject(project.id, notes, '');
    setSubmissionData(res);
    setSubmitted(true);

    try {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    } catch (e) {}
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12">
      
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-800 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t('nav.projects')}</span>
        </Link>
      </div>

      {/* Project Overview Card */}
      <div className="saksham-card p-6 sm:p-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-[10px] font-extrabold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200 px-3 py-1 rounded-full">
            {project.category}
          </span>
          <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full">
            ★ {project.points} {t('points')}
          </span>
        </div>

        <h1 className="text-xl font-extrabold text-slate-900">
          {title}
        </h1>

        <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
          <p className="text-xs font-bold text-slate-800 uppercase tracking-wide">
            {t('projects.problemStatement')}
          </p>
          <p className="text-xs text-slate-700 leading-relaxed">
            {statement}
          </p>
        </div>

        {/* Step-by-Step Instructions */}
        <div className="space-y-3 pt-2">
          <h2 className="text-sm font-bold text-slate-900">
            {t('projects.instructions')}
          </h2>
          <div className="space-y-2 text-xs text-slate-700">
            {instructions.map((inst, i) => (
              <p key={i} className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">{inst}</p>
            ))}
          </div>
        </div>

        {/* Rubric */}
        <div className="space-y-3 pt-2">
          <h2 className="text-sm font-bold text-slate-900">
            {t('projects.rubric')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {project.rubric?.map((rub, i) => (
              <div key={i} className="p-3 bg-brand-50/50 rounded-xl border border-brand-200/50 text-xs">
                <p className="font-bold text-brand-900">{rub.criterion}</p>
                <p className="text-slate-600 font-mono mt-1">{rub.points} pts</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Submission Card */}
      <div className="saksham-card p-6 sm:p-8 space-y-4">
        <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <FileText className="w-5 h-5 text-brand-800" />
          {t('projects.submitProject')}
        </h2>

        {submitted ? (
          <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-3">
            <div className="flex items-center gap-2 text-emerald-800 font-bold">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>{t('projects.statusSubmitted')}</span>
            </div>
            <p className="text-xs text-slate-700 whitespace-pre-line bg-white p-4 rounded-xl border border-emerald-200">
              "{notes}"
            </p>
            <div className="pt-2 text-xs font-bold text-emerald-900">
              {t('projects.earnedPoints')}: 85 / {project.points} pts (40% Skill Weight Added!)
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="project-notes-textarea" className="block text-xs font-bold text-slate-700">
                {t('projects.submissionDetails')}
              </label>
              <textarea
                id="project-notes-textarea"
                rows={5}
                required
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={t('projects.submissionPlaceholder')}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-800"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-brand-800 hover:bg-brand-900 text-white font-extrabold text-xs rounded-xl shadow-md transition flex items-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{t('projects.submitProject')}</span>
            </button>
          </form>
        )}
      </div>

    </div>
  );
}
