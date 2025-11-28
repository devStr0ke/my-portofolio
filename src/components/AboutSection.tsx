 'use client';
import Character from '@/components/Character';
import { useTranslations } from '@/i18n/LanguageContext';

const englishParagraph = [
  { text: "I'm" },
  { text: "a" },
  { text: "skilled developer", color: "rgb(99 102 241)" }, // Indigo-600
  { text: "focused" },
  { text: "on" },
  { text: "creating" },
  { text: "efficient," },
  { text: "scalable" },
  { text: "web" },
  { text: "solutions" },
  { text: "&" },
  { text: "exploring" },
  { text: "the" },
  { text: "potential" },
  { text: "of" },
  { text: "web3." }
];

const frenchParagraph = [
  { text: "Je" },
  { text: "suis" },
  { text: "un" },
  { text: "développeur", color: "rgb(99 102 241)" },
  { text: "expérimenté", color: "rgb(99 102 241)" },
  { text: "passionné" },
  { text: "par" },
  { text: "la" },
  { text: "création" },
  { text: "de" },
  { text: "solutions" },
  { text: "web" },
  { text: "efficaces," },
  { text: "ainsi" },
  { text: "que" },
  { text: "par" },
  { text: "l’exploration" },
  { text: "du" },
  { text: "potentiel" },
  { text: "du" },
  { text: "web3." }
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