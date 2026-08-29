import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../locales/en';
import hi from '../locales/hi';
import mr from '../locales/mr';

const translations = { en, hi, mr };

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  // Default to Marathi 'mr' or user's stored preference
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem('saksham_language');
      if (saved && ['en', 'hi', 'mr'].includes(saved)) {
        return saved;
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    return 'mr'; // Marathi as primary state board default
  });

  const setLanguage = (lang) => {
    if (['en', 'hi', 'mr'].includes(lang)) {
      setLanguageState(lang);
      try {
        localStorage.setItem('saksham_language', lang);
      } catch (e) {
        console.warn('LocalStorage error:', e);
      }
    }
  };

  // Helper lookup function supporting dot-notation: t('nav.learn') or t('welcome')
  const t = (path, fallback = '') => {
    if (!path) return '';
    const keys = path.split('.');
    let current = translations[language];
    
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        // Fallback to English if translation is missing in the current language
        let fallbackCurrent = translations['en'];
        for (const fbKey of keys) {
          if (fallbackCurrent && typeof fallbackCurrent === 'object' && fbKey in fallbackCurrent) {
            fallbackCurrent = fallbackCurrent[fbKey];
          } else {
            return fallback || path;
          }
        }
        return fallbackCurrent || fallback || path;
      }
    }
    return typeof current === 'string' ? current : fallback || path;
  };

  // Function to return content translation or friendly fallback message
  const getContent = (translationMap, fallbackText = '') => {
    if (!translationMap) return fallbackText;
    if (translationMap[language]) return translationMap[language];
    if (translationMap['en']) return translationMap['en'];
    
    // Explicit missing translation warning in selected language
    if (language === 'hi') return 'यह सामग्री अभी हिंदी में उपलब्ध नहीं है।';
    if (language === 'mr') return 'ही सामग्री सध्या मराठीत उपलब्ध नाही.';
    return 'This content is not currently available in English.';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getContent }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
