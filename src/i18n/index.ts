import { en } from './locales/en';
import { fr } from './locales/fr';

export type Locale = 'en' | 'fr';

export const locales: Record<Locale, typeof en> = {
  en,
  fr
};

export const defaultLocale: Locale = 'en';
