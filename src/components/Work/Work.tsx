'use client';
import { useState } from 'react';
import Project from './Project';
import Modal from './Modal';

const projects = [
  {
    title: "MG Événements",
    src: "mgevenements.png",
    color: "#000000"
  },
  {
    title: "MGE Dashboard",
    src: "mgedashboard.png",
    color: "#8C8C8C"
  },
  {
    title: "Halcyon Labs",
    src: "halcyonlabs.png",
    color: "#EFE8D3"
  },
  {
    title: "Smart Tickets",
    src: "smarttickets.png",
    color: "#706D63"
  }
]

export const Work = () => {
  const [modal, setModal] = useState({active: false, index: 0})

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="flex flex-col h-full ml-4 sm:ml-8 max-w-[90%] sm:max-w-[75%] md:max-w-[90%] lg:max-w-[68%] md:mx-auto">
        {
          projects.map((project, index) => {
            return <Project 
              index={index} 
              title={project.title} 
              setModal={setModal} 
              key={index}
            />
          })
        }
        <Modal modal={modal} projects={projects}/>
      </div>
    </main>
  )
}