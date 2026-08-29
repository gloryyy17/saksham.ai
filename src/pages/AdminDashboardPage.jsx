import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getSubjectsForClass } from '../data/curriculumData';
import { ShieldCheck, Users, TrendingUp, Award, CheckCircle2, RefreshCw, Filter, BookOpen } from 'lucide-react';

export default function AdminDashboardPage() {
  const { language, t } = useLanguage();

  const [selectedClass, setSelectedClass] = useState(8);
  const [selectedSubject, setSelectedSubject] = useState('all');

  const subjects = getSubjectsForClass(selectedClass);

  // Mocked state board school metrics for the selected class
  const classStats = {
    totalStudents: selectedClass === 8 ? 142 : selectedClass === 10 ? 168 : 120,
    activeToday: selectedClass === 8 ? 98 : selectedClass === 10 ? 134 : 85,
    avgProgress: selectedClass === 8 ? 64 : selectedClass === 10 ? 72 : 58,
    quizAvg: selectedClass === 8 ? 76 : selectedClass === 10 ? 81 : 70,
    projectCompletion: selectedClass === 8 ? 58 : selectedClass === 10 ? 69 : 45,
    offlineSyncHealth: '99.4%'
  };

  const sampleStudents = [
    { id: 's1', name: 'राहुल पाटील (Rahul Patil)', classId: 8, progress: '65%', quizAvg: '80%', projects: 1, lastSync: '2 mins ago', status: 'synced' },
    { id: 's2', name: 'अनन्या कुलकर्णी (Ananya Kulkarni)', classId: 8, progress: '78%', quizAvg: '92%', projects: 2, lastSync: '10 mins ago', status: 'synced' },
    { id: 's3', name: 'समीर शेख (Sameer Shaikh)', classId: 8, progress: '52%', quizAvg: '68%', projects: 1, lastSync: '1 hour ago', status: 'synced' },
    { id: 's4', name: 'प्रिया शिंदे (Priya Shinde)', classId: 8, progress: '84%', quizAvg: '96%', projects: 2, lastSync: '5 mins ago', status: 'synced' }
  ];

  return (
    <div className="space-y-8 pb-12">
      
      {/* Header Banner */}
      <div className="saksham-card p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-brand-900 to-slate-900 text-white rounded-3xl shadow-card">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-accent-400" />
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                {t('admin.title')}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">
              Maharashtra State Board Teacher & Institution Portal
            </h1>
            <p className="text-xs text-slate-300">
              Kopargaon Region • Classes 6 to 10 Student Performance & Offline Sync Monitoring
            </p>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t border-white/10 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-300">{t('admin.filterClass')}:</span>
            <div className="flex items-center gap-1 bg-white/10 p-1 rounded-xl">
              {[6, 7, 8, 9, 10].map((cls) => (
                <button
                  key={cls}
                  onClick={() => setSelectedClass(cls)}
                  className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
                    selectedClass === cls ? 'bg-white text-slate-900' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {cls}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-300">{t('admin.filterSubject')}:</span>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="bg-white/10 border border-white/20 text-white rounded-xl px-3 py-1 text-xs font-semibold focus:outline-none cursor-pointer"
            >
              <option value="all" className="text-slate-900">{t('subjects.allSubjects')}</option>
              {subjects.map((s) => (
                <option key={s.id} value={s.id} className="text-slate-900">{s.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="saksham-card p-4 text-center">
          <span className="text-[10px] font-bold text-slate-400 block uppercase">{t('admin.totalStudents')}</span>
          <span className="text-2xl font-black text-slate-900">{classStats.totalStudents}</span>
        </div>
        <div className="saksham-card p-4 text-center">
          <span className="text-[10px] font-bold text-slate-400 block uppercase">{t('admin.activeStudents')}</span>
          <span className="text-2xl font-black text-emerald-600">{classStats.activeToday}</span>
        </div>
        <div className="saksham-card p-4 text-center">
          <span className="text-[10px] font-bold text-slate-400 block uppercase">{t('admin.avgProgress')}</span>
          <span className="text-2xl font-black text-brand-800">{classStats.avgProgress}%</span>
        </div>
        <div className="saksham-card p-4 text-center">
          <span className="text-[10px] font-bold text-slate-400 block uppercase">{t('admin.quizAvg')}</span>
          <span className="text-2xl font-black text-accent-600">{classStats.quizAvg}%</span>
        </div>
        <div className="saksham-card p-4 text-center">
          <span className="text-[10px] font-bold text-slate-400 block uppercase">Project Completion</span>
          <span className="text-2xl font-black text-teal-700">{classStats.projectCompletion}%</span>
        </div>
        <div className="saksham-card p-4 text-center">
          <span className="text-[10px] font-bold text-slate-400 block uppercase">{t('admin.syncHealth')}</span>
          <span className="text-2xl font-black text-emerald-600">{classStats.offlineSyncHealth}</span>
        </div>
      </div>

      {/* Student Records Table */}
      <div className="saksham-card p-6 space-y-4">
        <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
          Enrolled Students • Class {selectedClass}
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 uppercase font-bold text-[10px]">
                <th className="pb-3">Student Name</th>
                <th className="pb-3">Class</th>
                <th className="pb-3">Curriculum Progress</th>
                <th className="pb-3">Quiz Performance</th>
                <th className="pb-3">STEM Projects</th>
                <th className="pb-3">Offline Sync</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-semibold text-slate-800">
              {sampleStudents.map((st) => (
                <tr key={st.id} className="hover:bg-slate-50 transition">
                  <td className="py-3 font-bold text-slate-900">{st.name}</td>
                  <td className="py-3">Class {st.classId}</td>
                  <td className="py-3 text-brand-800">{st.progress}</td>
                  <td className="py-3">{st.quizAvg}</td>
                  <td className="py-3">{st.projects} completed</td>
                  <td className="py-3">
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3" />
                      {st.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
