'use client';
import Character from '@/components/Character';
import { useTranslations } from '@/i18n/LanguageContext';

const englishParagraph = [
    { text: "I've" },
    { text: "worked" },
    { text: "on" },
    { text: "multiple projects", color: "rgb(99 102 241)" }, // Indigo-600
    { text: "from" },
    { text: "classic" },
    { text: "Web2" },
    { text: "applications" },
    { text: "to" },
    { text: "innovative" },
    { text: "Web3" },
    { text: "solutions." }
  ];

const frenchParagraph = [
    { text: "J'ai" },
    { text: "travaillé" },
    { text: "sur" },
    { text: "plusieurs projets", color: "rgb(99 102 241)" }, // Indigo-600
    { text: "allant" },
    { text: "des" },
    { text: "applications" },
    { text: "Web2" },
    { text: "classiques" },
    { text: "aux" },
    { text: "solutions" },
    { text: "Web3" },
    { text: "innovantes." }
  ];
  
  export const ProjectsSection = () => {
    const { t, locale } = useTranslations();
    const paragraph = locale === 'fr' ? frenchParagraph : englishParagraph;

    return (
      <main className='flex justify-center items-start min-h-min'>
        <Character paragraph={paragraph} title={t.pages.work} />
      </main>
    )
  }