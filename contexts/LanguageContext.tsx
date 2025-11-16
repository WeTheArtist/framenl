
import React, { createContext, useState, useEffect, useCallback } from 'react';
import { translations, TranslationKey, Language, LANGUAGES } from '../lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey, replacements?: Record<string, string | number>) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getInitialLanguage = (): Language => {
    if (typeof window !== 'undefined') {
        const savedLang = localStorage.getItem('framenl-lang');
        if (savedLang && Object.keys(LANGUAGES).includes(savedLang)) {
            return savedLang as Language;
        }
        const browserLang = navigator.language.split('-')[0].toUpperCase();
         if (Object.keys(LANGUAGES).includes(browserLang)) {
            return browserLang as Language;
        }
    }
    return 'EN';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem('framenl-lang', language);
  }, [language]);

  const t = useCallback((key: TranslationKey, replacements?: Record<string, string | number>): string => {
    let translation = translations[key]?.[language] || translations[key]?.['EN'] || key;
    if (replacements) {
        Object.keys(replacements).forEach(placeholder => {
            translation = translation.replace(`{${placeholder}}`, String(replacements[placeholder]));
        });
    }
    return translation;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
