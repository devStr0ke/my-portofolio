 'use client';
import Character from '@/components/Character';
import { useTranslations } from '@/i18n/LanguageContext';

const englishParagraph = [
  { text: "I'm" },
  { text: "a" },
  { text: "Full-Stack", color: "rgb(99 102 241)" },
  { text: "Developer", color: "rgb(99 102 241)" },
  { text: "leveraging" },
  { text: "AI" },
  { text: "as" },
  { text: "a" },
  { text: "productivity" },
  { text: "and" },
  { text: "creativity" },
  { text: "multiplier" },
  { text: "to" },
  { text: "build" },
  { text: "faster," },
  { text: "better" },
  { text: "products." }
];

const frenchParagraph = [
  { text: "Développeur", color: "rgb(99 102 241)" },
  { text: "Full-Stack", color: "rgb(99 102 241)" },
  { text: "qui" },
  { text: "utilise" },
  { text: "l'IA" },
  { text: "comme" },
  { text: "levier" },
  { text: "de" },
  { text: "productivité" },
  { text: "et" },
  { text: "de" },
  { text: "créativité" },
  { text: "pour" },
  { text: "livrer" },
  { text: "plus" },
  { text: "vite," },
  { text: "mieux." }
];

export const AboutSection = () => {
  const { t, locale } = useTranslations();
  const paragraph = locale === 'fr' ? frenchParagraph : englishParagraph;
  
  return (
    <main id="about" className='flex justify-center items-center min-h-min'>
      <Character paragraph={paragraph} title={t.pages.about} />
    </main>
  )
}