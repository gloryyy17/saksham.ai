import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import {
  Home,
  BookOpen,
  Bot,
  Hammer,
  Award,
  Sparkles,
  CloudOff,
  Settings,
  ShieldCheck,
  FlaskConical,
  GraduationCap
} from 'lucide-react';

export default function Sidebar() {
  const { t } = useLanguage();
  const { profile } = useAuth();

  const navItems = [
    { to: '/dashboard', label: t('nav.home'), icon: Home },
    { to: '/learn', label: t('nav.learn'), icon: BookOpen },
    { to: '/ai-tutor', label: t('nav.aiTutor'), icon: Bot, badge: 'AI' },
    { to: '/projects', label: t('nav.projects'), icon: Hammer },
    { to: '/skills', label: t('nav.skills'), icon: Award },
    { to: '/opportunities', label: t('nav.opportunities'), icon: Sparkles },
    { to: '/offline', label: t('nav.offline'), icon: CloudOff },
    { to: '/offline-test', label: t('nav.offlineTest'), icon: FlaskConical, tag: 'Lab' },
    { to: '/settings', label: t('nav.settings'), icon: Settings }
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-slate-200 min-h-[calc(100vh-4rem)] p-4 shrink-0 justify-between">
      <div className="space-y-6">
        
        {/* Student Class Badge Banner */}
        {profile && (
          <div className="p-3 bg-brand-50/80 rounded-2xl border border-brand-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-800 text-white flex items-center justify-center font-extrabold text-sm shrink-0 shadow-sm">
              {profile.class_id || 8}
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-bold text-slate-800 truncate">{profile.full_name || 'Student'}</p>
              <p className="text-[11px] font-medium text-brand-700">
                Maharashtra State Board
              </p>
            </div>
          </div>
        )}

        {/* Nav Links */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-brand-800 text-white shadow-sm font-bold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`
                }
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] bg-accent-500 text-white px-1.5 py-0.5 rounded-md font-extrabold">
                    {item.badge}
                  </span>
                )}
                {item.tag && (
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-md font-bold">
                    {item.tag}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Admin Portal Link */}
      <div className="pt-4 border-t border-slate-100">
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            `flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition ${
              isActive
                ? 'bg-slate-900 text-white'
                : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'
            }`
          }
        >
          <ShieldCheck className="w-4 h-4 text-slate-400" />
          <span>{t('nav.admin')}</span>
        </NavLink>
      </div>
    </aside>
  );
}
