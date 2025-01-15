'use client';
import { useState, useRef, useEffect } from 'react';
import Project from './Project';
import Modal from './Modal';
import { Link } from "next-transition-router";

const projects = [
  {
    title: "MG Événements",
    src: "mgevenements/main.png",
    color: "#737373",
    type: "Conception & Development",
    year: "2024"
  },
  {
    title: "MGE Dashboard",
    src: "mgedashboard/main.png",
    color: "#e5e5e5",
    type: "Conception & Development",
    year: "2024"
  },
  {
    title: "Halcyon Labs",
    src: "halcyon/main.png",
    color: "#000000",
    type: "UI/UX Design",
    year: "2022"
  },
]

type ProjectCardProps = {
  project: {
    title: string;
    src: string;
    color: string;
    type: string;
    year: string;
  };
  index: number;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const { left, top } = containerRef.current.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - left,
      y: e.clientY - top
    });
  };

  return (
    <Link href="test">
      <div className="space-y-4 relative group">
        <div 
          ref={containerRef}
          className="aspect-square w-full p-8 flex items-center justify-center relative overflow-hidden"
          style={{ backgroundColor: project.color }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onMouseMove={handleMouseMove}
        >
          <div className="w-full h-full relative">
            <img 
              src={project.src} 
              alt={project.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* View button */}
          {isHovering && (
            <div 
              className="absolute hidden sm:flex w-20 h-20 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-light pointer-events-none z-20 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-200"
              style={{
                left: cursorPosition.x,
                top: cursorPosition.y,
              }}
            >
              View
            </div>
          )}

          {/* Overlay */}
          <div 
            className={`absolute inset-0 bg-black/20 transition-opacity duration-300 z-10
              ${isHovering ? 'opacity-100' : 'opacity-0'}
            `} 
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-neutral-100 mb-4">
            {project.title}
          </h2>
          <div className="h-px w-full border-b border-zinc-800 mb-4" />
          <div className="flex justify-between items-center text-sm text-neutral-500">
            <span>{project.type}</span>
            <span>{project.year}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

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