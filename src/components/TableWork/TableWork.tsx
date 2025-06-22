'use client';
import { useState } from 'react';
import { FilterButtons } from './FilterButtons';
import Modal from '../Work/Modal';
import TableProject from './TableProject';
import ProjectCard from '../ProjectCard';
import { Spacer } from '../Spacer';

interface Project {
  title: string;
  location: string;
  services: string;
  year: string;
  src: string;
  color: string;
  route: string;
  type: 'Full Stack' | 'Front End' | string;
}

interface TableWorkProps {
  title?: string;
  projects?: Project[];
  noTitle?: boolean;
}

const baseUrl = 'https://supabase.mge-dashboard.pro/storage/v1/object/public/portofolio/';

const defaultProjects = [
  {
    title: "Account Tech Multisig",
    location: "Remote",
    services: "Front-End Development & Smart Contract Integration",
    src: `${baseUrl}accounttechmultisig/main.png`,
    color: "#28282B",
    year: "2025",
    route: "/work/account-tech-multisig",
    type: "Full Stack"
  },
  {
    title: "Account Tech DAO",
    location: "Remote",
    services: "Front-End Development & Smart Contract Integration",
    src: `${baseUrl}accounttechdao/main.png`,
    color: "#00b9a6", //teal color
    year: "2025",
    route: "/work/account-tech-dao",
    type: "Full Stack"
  },
  {
    title: "MG Événements",
    location: "Toulouse, France",
    services: "Conception & Development",
    src: `${baseUrl}mgevenements/main.png`,
    color: "#737373",
    year: "2024",
    route: "/work/mg-evenements",
    type: "Full Stack"
  },
  {
    title: "MGE Dashboard",
    location: "Toulouse, France",
    services: "Conception & Development",
    src: `${baseUrl}mgedashboard/main.png`,
    color: "#e5e5e5",
    year: "2024",
    route: "/work/mge-dashboard",
    type: "Full Stack"
  },
  {
    title: "Halcyon Labs",
    location: "Toulouse, France",
    services: "UI/UX Design",
    src: `${baseUrl}halcyon/main.png`,
    color: "#000000",
    year: "2022",
    route: "/work/halcyon-labs",
    type: "Front End"
  },
];

export const TableWork = ({ title = "Selected Work", projects = defaultProjects, noTitle = false }: TableWorkProps) => {
  const [modal, setModal] = useState({active: false, index: 0});
  const [filter, setFilter] = useState<'All' | 'Full Stack' | 'Front End'>('All');
  const [view, setView] = useState<'grid' | 'list'>('list');

  const counts = {
    fullStack: projects.filter(p => p.type.includes('Full Stack')).length,
    frontEnd: projects.filter(p => p.type.includes('Front End')).length,
  };

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
          view={view}
          setView={setView}
        />

        <Spacer size="xs" mobileSize="xxs" />

        {/* Desktop view - List */}
        {view === 'list' && (
          <div className="hidden lg:block">
            <div className="flex items-center text-xs text-neutral-500 mb-4 w-full gap-8">
              <span className="w-[35%]">CLIENT</span>
              <span className="w-[25%]">LOCATION</span>
              <span className="w-[35%]">SERVICES</span>
              <span className="w-[15%]">YEAR</span>
            </div>
            
            {/* Projects table */}
            <div className="w-full h-[50vh]">
              {filteredProjects.map((project, index) => (
                <TableProject 
                  key={index}
                  index={index} 
                  {...project}
                  setModal={setModal} 
                />
              ))}
            </div>
          </div>
        )}

        {/* Desktop view - Grid */}
        {view === 'grid' && (
          <div className="hidden lg:grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={index}
                project={project}
                index={index}
              />
            ))}
          </div>
        )}

        {/* Mobile view - Always Grid */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={index}
              project={project}
              index={index}
            />
          ))}
        </div>

        <Modal modal={modal} projects={filteredProjects}/>
      </div>
    </section>
  );
};