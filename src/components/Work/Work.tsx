'use client';
import { useState } from 'react';
import Project from './Project';
import Modal from './Modal';

const projects = [
  {
    title: "MG Événements",
    src: "mgevenements/main.png",
    color: "#737373"
  },
  {
    title: "MGE Dashboard",
    src: "mgedashboard/main.png",
    color: "#e5e5e5"
  },
  {
    title: "Halcyon Labs",
    src: "halcyon/main.png",
    color: "#000000"
  },
]

export const Work = () => {
  const [modal, setModal] = useState({active: false, index: 0})

  return (
    <section className="bg-neutral-950 text-neutral-100">
      <div className="flex flex-col h-full ml-4 sm:ml-8 max-w-[90%] sm:max-w-[75%] md:max-w-[90%] lg:max-w-[68%] md:mx-auto">
        <span className="text-neutral-500 font-bold text-base uppercase mb-6 block tracking-widest">
          Selected Work
        </span>
        {projects.map((project, index) => {
          return <Project 
            index={index} 
            title={project.title} 
            setModal={setModal} 
            key={index}
          />
        })}
        <Modal modal={modal} projects={projects}/>
      </div>
    </section>
  )
}