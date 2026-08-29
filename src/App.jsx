import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import { NetworkProvider } from './contexts/NetworkContext';
import { CurriculumProvider } from './contexts/CurriculumContext';

import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import BottomNav from './components/layout/BottomNav';
import Footer from './components/layout/Footer';
import OfflineBanner from './components/common/OfflineBanner';

// Lazy loaded pages for performance
const LandingPage = lazy(() => import('./pages/LandingPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const OnboardingPage = lazy(() => import('./pages/OnboardingPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const LearnPage = lazy(() => import('./pages/LearnPage'));
const SubjectPage = lazy(() => import('./pages/SubjectPage'));
const ChapterPage = lazy(() => import('./pages/ChapterPage'));
const LessonPage = lazy(() => import('./pages/LessonPage'));
const QuizPage = lazy(() => import('./pages/QuizPage'));
const AITutorPage = lazy(() => import('./pages/AITutorPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const SkillsPage = lazy(() => import('./pages/SkillsPage'));
const OpportunitiesPage = lazy(() => import('./pages/OpportunitiesPage'));
const OfflinePage = lazy(() => import('./pages/OfflinePage'));
const OfflineTestPage = lazy(() => import('./pages/OfflineTestPage'));
const AdminDashboardPage = lazy(() => import('./pages/AdminDashboardPage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));

function AppLayout({ children }) {
  const location = useLocation();
  const isLanding = location.pathname === '/';
  const isAuth = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/onboarding';

  return (
    <div className="min-h-screen flex flex-col bg-surface-light text-slate-900">
      <Header />
      <OfflineBanner />

      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {!isLanding && !isAuth && <Sidebar />}
        <main className={`flex-1 p-4 sm:p-6 lg:p-8 ${!isLanding && !isAuth ? 'pb-24 lg:pb-8' : ''}`}>
          {children}
        </main>
      </div>

      {!isLanding && !isAuth && <BottomNav />}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AuthProvider>
          <NetworkProvider>
            <CurriculumProvider>
              <AppLayout>
                <Suspense
                  fallback={
                    <div className="min-h-[400px] flex items-center justify-center">
                      <div className="w-8 h-8 border-4 border-brand-800 border-t-transparent rounded-full animate-spin" />
                    </div>
                  }
                >
                  <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/onboarding" element={<OnboardingPage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/learn" element={<LearnPage />} />
                    <Route path="/subject/:subjectId" element={<SubjectPage />} />
                    <Route path="/chapter/:chapterId" element={<ChapterPage />} />
                    <Route path="/lesson/:lessonId" element={<LessonPage />} />
                    <Route path="/quiz/:quizId" element={<QuizPage />} />
                    <Route path="/ai-tutor" element={<AITutorPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
                    <Route path="/skills" element={<SkillsPage />} />
                    <Route path="/opportunities" element={<OpportunitiesPage />} />
                    <Route path="/offline" element={<OfflinePage />} />
                    <Route path="/offline-test" element={<OfflineTestPage />} />
                    <Route path="/admin" element={<AdminDashboardPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                  </Routes>
                </Suspense>
              </AppLayout>
            </CurriculumProvider>
          </NetworkProvider>
        </AuthProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}
