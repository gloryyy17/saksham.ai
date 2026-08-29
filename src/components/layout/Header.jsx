import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useNetwork } from '../../contexts/NetworkContext';
import LanguageSelector from '../common/LanguageSelector';
import SyncBadge from '../common/SyncBadge';
import { Sparkles, User, LogOut, ShieldAlert, Cpu } from 'lucide-react';

export default function Header() {
  const { user, profile, logout } = useAuth();
  const { t, language } = useLanguage();
  const { lowBandwidthMode } = useNetwork();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 bg-surface-page/95 backdrop-blur-md border-b border-slate-200/70 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">

          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-800 to-teal-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-accent-500" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-brand-800">
                  SAKSHAM<span className="text-teal-600">.AI</span>
                </span>
                {profile?.class_id && (
                  <span className="text-[11px] font-bold bg-brand-50 text-brand-800 px-2 py-0.5 rounded-full border border-brand-200">
                    {t('classes.standard')} {profile.class_id}
                  </span>
                )}
              </div>
              <p className="text-[10px] text-slate-500 font-medium hidden sm:block">
                {t('tagline')}
              </p>
            </div>
          </Link>

          {/* Center / Right controls */}
          <div className="flex items-center gap-2 sm:gap-4">

            {/* Low Bandwidth badge if active */}
            {lowBandwidthMode && (
              <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-200 px-2 py-1 rounded-lg">
                <Cpu className="w-3 h-3" />
                Low Bandwidth
              </span>
            )}

            {/* Sync Status Badge */}
            <SyncBadge showDetails={true} />

            {/* Language Selector */}
            <LanguageSelector variant="compact" />

            {/* User Profile / Auth */}
            {user ? (
              <div className="flex items-center gap-2">
                <Link
                  to="/profile"
                  className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-100 transition text-slate-700"
                  title={profile?.full_name || t('nav.profile')}
                >
                  <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-800 flex items-center justify-center font-bold text-xs border border-brand-200">
                    {profile?.full_name ? profile.full_name.charAt(0).toUpperCase() : <User className="w-4 h-4" />}
                  </div>
                  <span className="text-xs font-semibold text-slate-800 hidden md:block max-w-[120px] truncate">
                    {profile?.full_name || 'Student'}
                  </span>
                </Link>
                <button
                  onClick={() => {
                    logout();
                    navigate('/');
                  }}
                  className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition"
                  title={t('logout')}
                  aria-label={t('logout')}
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-brand-800 hover:bg-brand-50 transition"
                >
                  {t('login')}
                </Link>
                <Link
                  to="/register"
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-brand-800 text-white hover:bg-brand-900 shadow-sm transition"
                >
                  {t('signup')}
                </Link>
              </div>
            )}

          </div>

        </div>
      </div>
    </header>
  );
}
