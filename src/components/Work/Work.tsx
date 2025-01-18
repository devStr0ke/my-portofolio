'use client';
import { useState, useRef, useEffect } from 'react';
import Project from './Project';
import Modal from './Modal';
import { Link } from "next-transition-router";
import ProjectCard from '../ProjectCard';

const projects = [
  {
    title: "MG Événements",
    src: "mgevenements/main.png",
    color: "#737373",
    type: "Conception & Development",
    year: "2024",
    route: "/work/mg-evenements"
  },
  {
    title: "MGE Dashboard",
    src: "mgedashboard/main.png",
    color: "#e5e5e5",
    type: "Conception & Development",
    year: "2024",
    route: "/work/mge-dashboard"
  },
  {
    title: "Halcyon Labs",
    src: "halcyon/main.png",
    color: "#000000",
    type: "UI/UX Design",
    year: "2022",
    route: "/work/halcyon-labs"
  },
]

export const Work = () => {
  const [modal, setModal] = useState({active: false, index: 0});

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
              route={project.route}
              setModal={setModal} 
              key={index}
            />
          ))}
        </div>

        {/* Tablet and Mobile view */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index}
            />
          ))}
        </div>

        <Modal modal={modal} projects={projects}/>
      </div>
    </section>
  );
};