 'use client';
import { useState } from 'react';
import { useTranslations } from '@/i18n/LanguageContext';
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

export const Work = ({ title, projects, noTitle = false }: WorkProps) => {
  const { t } = useTranslations();
  
  const defaultProjects = [
    {
      title: "Account Tech Multisig",
      src: `${baseUrl}accounttechmultisig/main.png`,
      color: "#28282B",
      type: t.projectTypes.frontendSmartContract,
      year: "2025",
      route: "/work/account-tech-multisig"
    },
    {
      title: "Account Tech DAO",
      src: `${baseUrl}accounttechdao/main.png`,
      color: "#00b9a6",
      type: t.projectTypes.frontendSmartContract,
      year: "2025",
      route: "/work/account-tech-dao"
    },
    {
      title: "MG Événements",
      src: `${baseUrl}mgevenements/main.png`,
      color: "#737373",
      type: t.projectTypes.conceptionDevelopment,
      year: "2024",
      route: "/work/mg-evenements"
    },
    {
      title: "MGE Dashboard",
      src: `${baseUrl}mgedashboard/main.png`,
      color: "#e5e5e5",
      type: t.projectTypes.conceptionDevelopment,
      year: "2024",
      route: "/work/mge-dashboard"
    },
  ];

  const displayTitle = title ?? t.pages.projects;
  const projectList = projects ?? defaultProjects;
  const [modal, setModal] = useState({active: false, index: 0});

  return (
    <section className="bg-neutral-950 text-neutral-100">
      <div className="flex flex-col h-full max-w-[90%] lg:max-w-[68%] mx-auto">
        {displayTitle && (
          noTitle ? (
            <></>
          ) : (
            <span className="text-neutral-200 font-bold text-base uppercase mb-6 block tracking-widest font-orbitron">
              {displayTitle}
            </span>
          )
        )}
        
        {/* Desktop view (lg and up) */}
        <div className="hidden lg:block">
          {projectList.map((project, index) => (
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
          {projectList.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index}
            />
          ))}
        </div>

        <Modal modal={modal} projects={projectList}/>
      </div>
    </section>
  );
};