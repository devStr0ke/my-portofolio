'use client';
import Character from '@/components/Character';

const paragraph = [
  { text: "Over" },
  { text: "3 years", color: "rgb(99 102 241)" }, // Indigo-600
  { text: "of" },
  { text: "web" },
  { text: "development" },
  { text: "experience," },
  { text: "shaped" },
  { text: "by" },
  { text: "an" },
  { text: "internship" },
  { text: "at" },
  { text: "Dassault" },
  { text: "Systèmes" },
  { text: "creating" },
  { text: "scalable" },
  { text: "solutions." }
];

export const ExperienceSection = () => {
  return (
    <main className='flex justify-center items-center min-h-min'>
      <Character paragraph={paragraph} title="Experience" />
    </main>
  )
}