'use client';
import { useState } from 'react';
import { FilterButtons } from './FilterButtons';
import Modal from '../Work/Modal';
import TableProject from './TableProject';
import { Spacer } from '../Spacer';

interface Project {
  title: string;
  location: string;
  services: string;
  year: string;
  src: string;
  color: string;
  route: string;
  type: 'Design' | 'Development' | string; // Add type for filtering
}

interface TableWorkProps {
  title?: string;
  projects?: Project[];
  noTitle?: boolean;
}

const defaultProjects = [
  {
    title: "MG Événements",
    location: "Toulouse, France",
    services: "Conception & Development",
    src: "mgevenements/main.png",
    color: "#737373",
    year: "2024",
    route: "/work/mg-evenements",
    type: "Full Stack"
  },
  {
    title: "MGE Dashboard",
    location: "Toulouse, France",
    services: "Conception & Development",
    src: "mgedashboard/main.png",
    color: "#e5e5e5",
    year: "2024",
    route: "/work/mge-dashboard",
    type: "Full Stack"
  },
  {
    title: "Halcyon Labs",
    location: "Toulouse, France",
    services: "UI/UX Design",
    src: "halcyon/main.png",
    color: "#000000",
    year: "2022",
    route: "/work/halcyon-labs",
    type: "Front End"
  },
]

export const TableWork = ({ title = "Selected Work", projects = defaultProjects, noTitle = false }: TableWorkProps) => {
  const [modal, setModal] = useState({active: false, index: 0});
  const [filter, setFilter] = useState<'All' | 'Full Stack' | 'Front End'>('All');

  // Count projects by type
  const counts = {
    fullStack: projects.filter(p => p.type.includes('Full Stack')).length,
    frontEnd: projects.filter(p => p.type.includes('Front End')).length,
  };

  // Filter projects based on selected filter
  const filteredProjects = projects.filter(project => {
    if (filter === 'All') return true;
    return project.type.includes(filter);
  });

  return (
    <section className="bg-neutral-950 text-neutral-100 w-full">
      <div className="flex flex-col h-full max-w-[90%] lg:max-w-[68%] mx-auto w-full">
        <FilterButtons 
          filter={filter}
          setFilter={setFilter}
          counts={counts}
        />

        <Spacer size="xs" mobileSize="xs" />

        {/* Header */}
        <div className="hidden lg:flex items-center text-xs text-neutral-500 mb-4 w-full gap-8">
          <span className="w-[35%]">CLIENT</span>
          <span className="w-[25%]">LOCATION</span>
          <span className="w-[35%]">SERVICES</span>
          <span className="w-[15%]">YEAR</span>
        </div>
        
        {/* Projects */}
        <div className="w-full">
          {filteredProjects.map((project, index) => (
            <TableProject 
              key={index}
              index={index} 
              {...project}
              setModal={setModal} 
            />
          ))}
        </div>

        <Modal modal={modal} projects={filteredProjects}/>
      </div>
    </section>
  );
};