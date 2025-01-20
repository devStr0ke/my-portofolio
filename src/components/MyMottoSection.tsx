'use client';
import Character from '@/components/Character';

const paragraph = [
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

export const MyMottoSection = () => {
  return (
    <main id="motto" className='flex justify-center items-center min-h-min'>
      <Character paragraph={paragraph} title="My Motto" />
    </main>
  )
}