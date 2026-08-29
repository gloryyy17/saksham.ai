import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Home, BookOpen, Bot, Hammer, Award, CloudOff } from 'lucide-react';

export default function BottomNav() {
  const { t } = useLanguage();

  const items = [
    { to: '/dashboard', label: t('nav.home'), icon: Home },
    { to: '/learn', label: t('nav.learn'), icon: BookOpen },
    { to: '/ai-tutor', label: t('nav.aiTutor'), icon: Bot, isSpecial: true },
    { to: '/projects', label: t('nav.projects'), icon: Hammer },
    { to: '/skills', label: t('nav.skills'), icon: Award },
    { to: '/offline', label: t('nav.offline'), icon: CloudOff }
  ];

  return (
    <nav aria-label="Mobile navigation" className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-2 py-1.5 shadow-lg">
      <div className="flex items-center justify-around">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center p-1.5 rounded-xl transition-all ${
                  isActive
                    ? 'text-brand-800 font-bold scale-105'
                    : 'text-slate-500 hover:text-slate-800 font-medium'
                }`
              }
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${item.isSpecial ? 'text-accent-600' : ''}`} />
                {item.isSpecial && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent-500 rounded-full animate-ping" />
                )}
              </div>
              <span className="text-[10px] tracking-tight mt-0.5 max-w-[54px] truncate text-center">
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
