'use client';
import { useState } from 'react';
import { useTranslations } from '@/i18n/LanguageContext';
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

export const TableWork = ({ title = "Selected Work", projects, noTitle = false }: TableWorkProps) => {
  const { t } = useTranslations();
  
  const defaultProjects = [
    {
      title: "Account Tech Multisig",
      location: "Remote",
      services: t.projectTypes.frontendSmartContract,
      src: `${baseUrl}accounttechmultisig/main.png`,
      color: "#28282B",
      year: "2025",
      route: "/work/account-tech-multisig",
      type: "Full Stack"
    },
    {
      title: "Account Tech DAO",
      location: "Remote",
      services: t.projectTypes.frontendSmartContract,
      src: `${baseUrl}accounttechdao/main.png`,
      color: "#00b9a6", //teal color
      year: "2025",
      route: "/work/account-tech-dao",
      type: "Full Stack"
    },
    {
      title: "MG Événements",
      location: "Toulouse, France",
      services: t.projectTypes.conceptionDevelopment,
      src: `${baseUrl}mgevenements/main.png`,
      color: "#737373",
      year: "2024",
      route: "/work/mg-evenements",
      type: "Full Stack"
    },
    {
      title: "MGE Dashboard",
      location: "Toulouse, France",
      services: t.projectTypes.conceptionDevelopment,
      src: `${baseUrl}mgedashboard/main.png`,
      color: "#e5e5e5",
      year: "2024",
      route: "/work/mge-dashboard",
      type: "Full Stack"
    },
    {
      title: "Halcyon Labs",
      location: "Toulouse, France",
      services: t.projectTypes.uiuxDesign,
      src: `${baseUrl}halcyon/main.png`,
      color: "#000000",
      year: "2022",
      route: "/work/halcyon-labs",
      type: "Front End"
    },
  ];

  const projectList = projects ?? defaultProjects;
  const [modal, setModal] = useState({active: false, index: 0});
  const [filter, setFilter] = useState<'All' | 'Full Stack' | 'Front End'>('All');
  const [view, setView] = useState<'grid' | 'list'>('list');

  const counts = {
    fullStack: projectList.filter(p => p.type.includes('Full Stack')).length,
    frontEnd: projectList.filter(p => p.type.includes('Front End')).length,
  };

  const filteredProjects = projectList.filter(project => {
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
              <span className="w-[35%]">{t.workPage.tableHeaders.client}</span>
              <span className="w-[25%]">{t.workPage.tableHeaders.location}</span>
              <span className="w-[35%]">{t.workPage.tableHeaders.services}</span>
              <span className="w-[15%]">{t.workPage.tableHeaders.year}</span>
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