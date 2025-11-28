 'use client';
import Character from '@/components/Character';
import { useTranslations } from '@/i18n/LanguageContext';

const englishParagraph = [
  { text: "Over" },
  { text: "3 years", color: "rgb(99 102 241)" },
  { text: "of" },
  { text: "web" },
  { text: "development" },
  { text: "experience," },
  { text: "strengthened" },
  { text: "by" },
  { text: "real-world" },
  { text: "projects" },
  { text: "and" },
  { text: "scalable" },
  { text: "solutions." }
];

const frenchParagraph = [
  { text: "Plus" },
  { text: "de" },
  { text: "3 ans", color: "rgb(99 102 241)" },
  { text: "d’expérience" },
  { text: "en" },
  { text: "développement" },
  { text: "web," },
  { text: "renforcés" },
  { text: "par" },
  { text: "des" },
  { text: "projets" },
  { text: "concrets" },
  { text: "et" },
  { text: "des" },
  { text: "solutions" },
  { text: "évolutives." }
];

export const ExperienceSection = () => {
  const { t, locale } = useTranslations();
  const paragraph = locale === 'fr' ? frenchParagraph : englishParagraph;
  
  return (
    <main className='flex justify-center items-center min-h-min'>
      <Character paragraph={paragraph} title={t.pages.experience} />
    </main>
  )
}