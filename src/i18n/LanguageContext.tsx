"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, locales, defaultLocale } from './index';
import type { Translations } from './locales/en';

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Detects the user's browser language
 * Returns 'fr' if French, otherwise defaults to 'en'
 */
const detectBrowserLanguage = (): Locale => {
  if (typeof window === 'undefined') return defaultLocale;
  
  const browserLang = navigator.language.toLowerCase();
  
  // Check if the browser language starts with 'fr' (e.g., 'fr', 'fr-FR', 'fr-CA')
  if (browserLang.startsWith('fr')) {
    return 'fr';
  }
  
  return 'en';
};

/**
 * Gets the stored language from localStorage or detects from browser
 */
const getInitialLocale = (): Locale => {
  if (typeof window === 'undefined') return defaultLocale;
  
  const stored = localStorage.getItem('locale') as Locale | null;
  if (stored && (stored === 'en' || stored === 'fr')) {
    return stored;
  }
  
  return detectBrowserLanguage();
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  // Initialize locale on mount
  useEffect(() => {
    const initialLocale = getInitialLocale();
    setLocaleState(initialLocale);
    setMounted(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale);
    }
  };

  const value: LanguageContextType = {
    locale,
    t: locales[locale],
    setLocale,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * Hook to access translations and language controls
 * @returns {LanguageContextType} Language context with locale, translations (t), and setLocale
 * @example
 * const { t, locale, setLocale } = useTranslations();
 * <h1>{t.hero.title.line1}</h1>
 */
export const useTranslations = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    // Provide a default value if context is not available (shouldn't happen in production)
    console.error('useTranslations must be used within a LanguageProvider');
    return {
      locale: defaultLocale,
      t: locales[defaultLocale],
      setLocale: () => {},
    };
  }
  return context;
};
