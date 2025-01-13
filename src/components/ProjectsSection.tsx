'use client';
import Character from '@/components/Character';

const paragraph = [
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
  
  export const ProjectsSection = () => {
    return (
      <main className='flex justify-center items-start min-h-min'>
        <Character paragraph={paragraph} title="Projects" />
      </main>
    )
  }