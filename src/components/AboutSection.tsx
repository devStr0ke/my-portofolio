 'use client';
import Character from '@/components/Character';
import { useTranslations } from '@/i18n/LanguageContext';

const paragraph = [
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

export const AboutSection = () => {
  const { t } = useTranslations();
  return (
    <main id="about" className='flex justify-center items-center min-h-min'>
      <Character paragraph={paragraph} title={t.pages.about} />
    </main>
  )
}