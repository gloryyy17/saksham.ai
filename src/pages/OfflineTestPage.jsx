import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useNetwork } from '../contexts/NetworkContext';
import { useCurriculum } from '../contexts/CurriculumContext';
import { db } from '../services/db';
import { curriculumData } from '../data/curriculumData';
import {
  FlaskConical,
  Wifi,
  WifiOff,
  RefreshCw,
  CheckCircle2,
  Database,
  ArrowRight,
  Sparkles,
  Download,
  AlertTriangle,
  ShieldAlert,
  LifeBuoy
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  simulateBlackout,
  simulateTamper,
  detectCorruption,
  recoverFromCloud,
  getUnrecoverableCount
} from '../services/blackoutService';
import { raiseTicket } from '../services/ticketService';

export default function OfflineTestPage() {
  const { language, t } = useLanguage();
  const {
    isOnline,
    rawIsOnline,
    isSimulatedOffline,
    toggleSimulatedOffline,
    syncStatus,
    pendingCount,
    triggerSync
  } = useNetwork();

  const { downloadChapter, downloadedChaptersMap } = useCurriculum();

  const [dexieTables, setDexieTables] = useState({
    downloadedChapters: 0,
    localProgress: 0,
    localQuizAttempts: 0,
    syncQueue: 0
  });

  // Blackout Drill state
  const [integrityResult, setIntegrityResult] = useState(null);
  const [unrecoverable, setUnrecoverable] = useState(0);
  const [ticketRaised, setTicketRaised] = useState(false);

  const refreshTelemetry = async () => {
    try {
      const dCount = await db.downloadedChapters.count();
      const pCount = await db.localProgress.count();
      const qCount = await db.localQuizAttempts.count();
      const sCount = await db.syncQueue.count();
      setDexieTables({
        downloadedChapters: dCount,
        localProgress: pCount,
        localQuizAttempts: qCount,
        syncQueue: sCount
      });
    } catch (e) { }
  };

  useEffect(() => {
    refreshTelemetry();
    const interval = setInterval(refreshTelemetry, 1500);
    return () => clearInterval(interval);
  }, []);

  const sampleChapter = curriculumData[8]?.mathematics?.[0];

  const handleDownloadSample = async () => {
    if (sampleChapter) {
      await downloadChapter(sampleChapter);
      await refreshTelemetry();
      try {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
      } catch (e) { }
    }
  };

  // Blackout Drill handlers
  const handleSimulateBlackout = async () => {
    await simulateBlackout();
    const result = await detectCorruption();
    setIntegrityResult(result);
    setTicketRaised(false);
    await refreshTelemetry();
  };

  const handleSimulateTamper = async () => {
    await simulateTamper();
    const result = await detectCorruption();
    setIntegrityResult(result);
    setTicketRaised(false);
    await refreshTelemetry();
  };

  const handleCheckIntegrity = async () => {
    const result = await detectCorruption();
    setIntegrityResult(result);
  };

  const handleRecover = async () => {
    await recoverFromCloud('guest_user');
    const count = await getUnrecoverableCount();
    setUnrecoverable(count);
    setIntegrityResult(await detectCorruption());
    await refreshTelemetry();
  };

  const handleRaiseTicket = async () => {
    await raiseTicket({
      subject: 'Data recovery issue',
      description: `Detected mode: ${integrityResult?.mode || 'unknown'}. ${unrecoverable} item(s) could not be recovered.`,
      context: { mode: integrityResult?.mode, unrecoverable }
    });
    setTicketRaised(true);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">

      {/* Header */}
      <div className="saksham-card p-6 sm:p-8 saksham-gradient-header text-brand-950 rounded-3xl shadow-card">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider bg-accent-500 text-white px-2.5 py-0.5 rounded-full">
                Hackathon Lab
              </span>
              <span className="text-xs text-brand-900/80">
                PWA + Dexie.js + IndexedDB + REST Sync Engine
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">
              Offline-First Test Laboratory
            </h1>
            <p className="text-xs text-brand-900/80 max-w-xl">
              Simulate disconnected rural network environments, verify IndexedDB persistence, and test automatic cloud synchronization.
            </p>
          </div>

          <div className="p-3 bg-white/40 rounded-2xl text-center border border-white/50">
            <span className="text-[10px] text-brand-900/70 uppercase block font-bold">Network State</span>
            <span className={`text-sm font-black ${isOnline ? 'text-emerald-700' : 'text-amber-700'}`}>
              {isOnline ? 'ONLINE' : 'OFFLINE'}
            </span>
          </div>
        </div>
      </div>

      {/* 1. Offline Mode Simulator Toggle */}
      <div className="saksham-card p-6 space-y-4">
        <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
          <FlaskConical className="w-5 h-5 text-brand-800" />
          1. Network Connection Simulation
        </h2>

        <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs font-bold text-slate-900">
              Simulated Offline Mode (Wi-Fi Override)
            </p>
            <p className="text-[11px] text-slate-500">
              Allows testing the complete offline student flow without disconnecting your actual internet connection.
            </p>
          </div>

          <button
            onClick={() => toggleSimulatedOffline()}
            className={`px-5 py-2.5 rounded-xl font-extrabold text-xs transition-all shadow-sm flex items-center gap-2 cursor-pointer shrink-0 ${isSimulatedOffline
                ? 'bg-amber-500 text-white hover:bg-amber-600'
                : 'bg-emerald-600 text-white hover:bg-emerald-700'
              }`}
          >
            {isSimulatedOffline ? <WifiOff className="w-4 h-4" /> : <Wifi className="w-4 h-4" />}
            <span>{isSimulatedOffline ? 'Switch to ONLINE' : 'Simulate OFFLINE'}</span>
          </button>
        </div>
      </div>

      {/* 2. Step-by-Step 5-Minute Flow Demo */}
      <div className="saksham-card p-6 space-y-5">
        <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-accent-500" />
          2. Step-by-Step 5-Minute Hackathon Demo Workflow
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">

          {/* Step A */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
            <span className="text-[10px] font-extrabold text-brand-800 uppercase">Step A (Online)</span>
            <p className="font-bold text-slate-900">Download Class 8 Mathematics Chapter</p>
            <p className="text-slate-500 text-[11px]">Stores full lesson texts, multilingual translations, quizzes into Dexie IndexedDB.</p>
            <button
              onClick={handleDownloadSample}
              className="mt-2 px-3.5 py-1.5 bg-brand-800 hover:bg-brand-900 text-white rounded-xl font-bold flex items-center gap-1.5 transition cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Rational Numbers</span>
            </button>
          </div>

          {/* Step B */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
            <span className="text-[10px] font-extrabold text-amber-700 uppercase">Step B (Offline)</span>
            <p className="font-bold text-slate-900">Simulate Offline & Attempt Lesson/Quiz</p>
            <p className="text-slate-500 text-[11px]">Read lesson, answer practice, and take the quiz with zero active network.</p>
            <div className="flex items-center gap-2 pt-1">
              <Link
                to="/lesson/c8_math_ch1_l1"
                className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-bold inline-flex items-center gap-1"
              >
                <span>Open Lesson</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/quiz/quiz_c8_math_ch1"
                className="px-3.5 py-1.5 bg-teal-700 hover:bg-teal-800 text-white rounded-xl font-bold inline-flex items-center gap-1"
              >
                <span>Take Quiz</span>
              </Link>
            </div>
          </div>

          {/* Step C */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
            <span className="text-[10px] font-extrabold text-emerald-700 uppercase">Step C (Sync Reconnect)</span>
            <p className="font-bold text-slate-900">Turn Internet ON & Sync to Backend</p>
            <p className="text-slate-500 text-[11px]">Sync queue pushes pending events to /api/sync with unique UUID deduplication.</p>
            <button
              onClick={triggerSync}
              disabled={!isOnline}
              className="mt-2 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold flex items-center gap-1.5 transition disabled:opacity-40 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Trigger Sync ({pendingCount} pending)</span>
            </button>
          </div>

          {/* Step D */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
            <span className="text-[10px] font-extrabold text-purple-700 uppercase">Step D (Skills & Opportunities)</span>
            <p className="font-bold text-slate-900">Inspect Skill Score & Matched State Opportunities</p>
            <p className="text-slate-500 text-[11px]">Skill score calculated via 30/30/40 formula maps to Inspire Award / NMMS.</p>
            <Link
              to="/skills"
              className="mt-2 px-3.5 py-1.5 bg-purple-700 hover:bg-purple-800 text-white rounded-xl font-bold inline-flex items-center gap-1.5 transition"
            >
              <span>View Skill Passport</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>

      {/* 3. Live IndexedDB Telemetry */}
      <div className="saksham-card p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Database className="w-5 h-5 text-brand-800" />
            3. Live Dexie.js IndexedDB Tables Telemetry
          </h2>
          <button
            onClick={refreshTelemetry}
            className="text-xs font-bold text-brand-800 underline hover:text-brand-950"
          >
            Refresh
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <span className="text-[10px] font-bold text-slate-400 block uppercase">Downloaded Chs</span>
            <span className="text-xl font-black text-brand-800">{dexieTables.downloadedChapters}</span>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <span className="text-[10px] font-bold text-slate-400 block uppercase">Local Progress</span>
            <span className="text-xl font-black text-teal-700">{dexieTables.localProgress}</span>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <span className="text-[10px] font-bold text-slate-400 block uppercase">Quiz Attempts</span>
            <span className="text-xl font-black text-accent-600">{dexieTables.localQuizAttempts}</span>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <span className="text-[10px] font-bold text-slate-400 block uppercase">Sync Queue</span>
            <span className="text-xl font-black text-slate-900">{dexieTables.syncQueue}</span>
          </div>
        </div>
      </div>

      {/* 4. Blackout Drill */}
      <div className="saksham-card p-6 space-y-5">
        <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-red-600" />
          4. Blackout Drill — Corruption & Recovery
        </h2>
        <p className="text-[11px] text-slate-500 -mt-3">
          Simulate a real data-loss event live, watch integrity detection fire, then recover from the server's independent copy.
        </p>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleSimulateBlackout}
            className="px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold flex items-center gap-1.5 transition cursor-pointer"
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Simulate Blackout</span>
          </button>

          <button
            onClick={handleSimulateTamper}
            className="px-3.5 py-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold flex items-center gap-1.5 transition cursor-pointer"
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Simulate Tampering</span>
          </button>

          <button
            onClick={handleCheckIntegrity}
            className="px-3.5 py-1.5 bg-slate-700 hover:bg-slate-800 text-white rounded-xl font-bold flex items-center gap-1.5 transition cursor-pointer"
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Check Integrity</span>
          </button>

          <button
            onClick={handleRecover}
            className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold flex items-center gap-1.5 transition cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Recover from Cloud</span>
          </button>

          {(integrityResult?.corrupted || unrecoverable > 0) && (
            <button
              onClick={handleRaiseTicket}
              className="px-3.5 py-1.5 bg-slate-900 hover:bg-black text-white rounded-xl font-bold flex items-center gap-1.5 transition cursor-pointer"
            >
              <LifeBuoy className="w-3.5 h-3.5" />
              <span>Raise a Ticket</span>
            </button>
          )}
        </div>

        {integrityResult && (
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs space-y-1">
            <p className="font-bold text-slate-900">
              Status:{' '}
              <span className={integrityResult.corrupted ? 'text-red-600' : 'text-emerald-700'}>
                {integrityResult.corrupted ? `⚠ ${integrityResult.mode}` : '✓ clean'}
              </span>
            </p>
            {integrityResult.live && (
              <p className="text-slate-500">
                Live counts — progress: {integrityResult.live.progressCount}, quizzes: {integrityResult.live.quizCount}
              </p>
            )}
            <p className="text-slate-500">
              Unrecoverable pending items: <span className="font-bold text-slate-900">{unrecoverable}</span>
            </p>
          </div>
        )}

        {ticketRaised && (
          <p className="text-xs font-bold text-emerald-700 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Ticket raised — support has been notified.
          </p>
        )}
      </div>

    </div>
  );
}