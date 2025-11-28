'use client';
import Character from '@/components/Character';
import { useTranslations } from '@/i18n/LanguageContext';

const englishParagraph = [
  { text: "\u201C", color: "rgb(99 102 241)" },
  { text: "Creativity" },
  { text: "is" },
  { text: "intelligence" },
  { text: "having" },
  { text: "fun" },
  { text: "\u201D", color: "rgb(99 102 241)" },
  { text: "–", color: "rgb(64 64 64)"  },
  { text: "Albert", color: "rgb(64 64 64)"  },
  { text: "Einstein", color: "rgb(64 64 64)" }
];

const frenchParagraph = [
  { text: "\u201C", color: "rgb(99 102 241)" },
  { text: "La" },
  { text: "créativité" },
  { text: "c'est" },
  { text: "l'intelligence" },
  { text: "qui" },
  { text: "s'amuse" },
  { text: "\u201D", color: "rgb(99 102 241)" },
  { text: "–", color: "rgb(64 64 64)"  },
  { text: "Albert", color: "rgb(64 64 64)"  },
  { text: "Einstein", color: "rgb(64 64 64)" }
];

export const MyMottoSection = () => {
  const { locale, t } = useTranslations();
  const paragraph = locale === 'fr' ? frenchParagraph : englishParagraph;

  return (
    <main id="motto" className='flex justify-center items-center min-h-min'>
      <Character paragraph={paragraph} title={t.motto.title} />
    </main>
  )
}