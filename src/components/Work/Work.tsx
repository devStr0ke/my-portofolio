'use client';
import { useState } from 'react';
import Project from './Project';
import Modal from './Modal';

const projects = [
  {
    title: "MG Événements",
    src: "mgevenements/main.png",
    color: "#737373",
    type: "Interaction & Development",
    year: "2024"
  },
  {
    title: "MGE Dashboard",
    src: "mgedashboard/main.png",
    color: "#e5e5e5",
    type: "Design & Development",
    year: "2024"
  },
  {
    title: "Halcyon Labs",
    src: "halcyon/main.png",
    color: "#000000",
    type: "Interaction & Development",
    year: "2024"
  },
]

export const Work = () => {
  const [modal, setModal] = useState({active: false, index: 0})

  return (
    <section className="bg-neutral-950 text-neutral-100">
      <div className="flex flex-col h-full max-w-[90%] lg:max-w-[68%] mx-auto">
        <span className="text-neutral-500 font-bold text-base uppercase mb-6 block tracking-widest">
          Selected Work
        </span>
        
        {/* Desktop view (lg and up) */}
        <div className="hidden lg:block">
          {projects.map((project, index) => (
            <Project 
              index={index} 
              {...project}
              setModal={setModal} 
              key={index}
            />
          ))}
        </div>

        {/* Tablet and Mobile view */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="space-y-4 mb-16 sm:mb-4">
              {/* Image container with square aspect ratio and project color */}
              <div 
                className="aspect-square w-full p-8 flex items-center justify-center"
                style={{ backgroundColor: project.color }}
              >
                <div className="w-full h-full relative">
                  <img 
                    src={project.src} 
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-neutral-500 mb-4">
                  {project.title}
                </h2>
                {/* Border between title and metadata */}
                <div className="h-px w-full border-b border-zinc-800 mb-4" />
                <div className="flex justify-between items-center text-sm text-neutral-500">
                  <span>{project.type}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Modal modal={modal} projects={projects}/>
      </div>
    </section>
  )
}