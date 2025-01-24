'use client';
import Character from '@/components/Character';

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

export const Intro = () => {
  return (
    <main className='flex justify-center items-center min-h-min'>
      <Character 
        paragraph={paragraph} 
        size="sm" 
        customContainerClass="w-full max-w-[90%] lg:max-w-[68%] mx-auto"
      />
    </main>
  )
}