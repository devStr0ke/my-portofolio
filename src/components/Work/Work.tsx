'use client';
import { useState } from 'react';
import Project from './Project';
import Modal from './Modal';
import ProjectCard from '../ProjectCard';

interface Project {
  title: string;
  src: string;
  color: string;
  type: string;
  year: string;
  route: string;
}

interface WorkProps {
  title?: string;
  projects?: Project[];
  noTitle?: boolean;
}

const baseUrl = 'https://supabase.mge-dashboard.pro/storage/v1/object/public/portofolio/';

const defaultProjects = [
  {
    title: "MG Événements",
    src: `${baseUrl}mgevenements/main.png`,
    color: "#737373",
    type: "Conception & Development",
    year: "2024",
    route: "/work/mg-evenements"
  },
  {
    title: "MGE Dashboard",
    src: `${baseUrl}mgedashboard/main.png`,
    color: "#e5e5e5",
    type: "Conception & Development",
    year: "2024",
    route: "/work/mge-dashboard"
  },
  {
    title: "Halcyon Labs",
    src: `${baseUrl}halcyon/main.png`,
    color: "#000000",
    type: "UI/UX Design",
    year: "2022",
    route: "/work/halcyon-labs"
  },
]

export const Work = ({ title = "Selected Work", projects = defaultProjects, noTitle = false }: WorkProps) => {
  const [modal, setModal] = useState({active: false, index: 0});

  return (
    <section className="bg-neutral-950 text-neutral-100">
      <div className="flex flex-col h-full max-w-[90%] lg:max-w-[68%] mx-auto">
        {title && (
          noTitle ? (
            <></>
          ) : (
            <span className="text-neutral-200 font-bold text-base uppercase mb-6 block tracking-widest font-orbitron">
              {title}
            </span>
          )
        )}
        
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
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2  gap-28 sm:gap-8">
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