import type { Locale } from '@/i18n';

export const createLanguageSwitcher = (currentLocale: Locale, setLocale: (locale: Locale) => void) => {
  return () => {
    const newLocale: Locale = currentLocale === 'en' ? 'fr' : 'en';
    setLocale(newLocale);
    console.log(`Language switched to: ${newLocale}`);
  };
};


export const getCurrentLanguage = (): Locale => {
  if (typeof window === 'undefined') return 'en';
  
  const stored = localStorage.getItem('locale') as Locale | null;
  if (stored && (stored === 'en' || stored === 'fr')) {
    return stored;
  }
  
  return 'en';
};

