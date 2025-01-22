'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Modal from '../Work/Modal';
import TableProject from '@/components/TableWork/TableProject';

interface Project {
  title: string;
  location: string;
  services: string;
  year: string;
  src: string;
  color: string;
  route: string;
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
      route: "/work/mg-evenements"
    },
    {
      title: "MGE Dashboard",
      location: "Toulouse, France",
      services: "Conception & Development",
      src: "mgedashboard/main.png",
      color: "#e5e5e5",
      year: "2024",
      route: "/work/mge-dashboard"
    },
    {
      title: "Halcyon Labs",
      location: "Toulouse, France",
      services: "UI/UX Design",
      src: "halcyon/main.png",
      color: "#000000",
      year: "2022",
      route: "/work/halcyon-labs"
    },
  ]

export const TableWork = ({ title = "Selected Work", projects = defaultProjects, noTitle = false }: TableWorkProps) => {
  const [modal, setModal] = useState({active: false, index: 0});

  return (
    <section className="bg-neutral-950 text-neutral-100">
      <div className="flex flex-col h-full max-w-[90%] lg:max-w-[68%] mx-auto">
        {/* Header */}
        <div className="hidden lg:grid grid-cols-4 text-xs text-neutral-500 mb-4">
          <span className="w-full">CLIENT</span>
          <span className="w-full">LOCATION</span>
          <span className="w-full">SERVICES</span>
          <span className="w-full">YEAR</span>
        </div>
        
        {/* Desktop view (lg and up) */}
        <div className="hidden lg:block w-full">
          {projects.map((project, index) => (
            <TableProject 
              key={index}
              index={index} 
              {...project}
              setModal={setModal} 
            />
          ))}
        </div>

        {/* Mobile view */}
        <div className="lg:hidden space-y-8 w-full">
          {projects.map((project, index) => (
            <Link href={project.route} key={index}>
              <div className="space-y-2 py-8 w-full">
                <h2 className="text-3xl font-semibold text-neutral-100">
                  {project.title}
                </h2>
                <div className="flex justify-between items-center text-sm text-neutral-500 w-full">
                  <span>{project.services}</span>
                  <span>{project.year}</span>
                </div>
              </div>
              <div className="h-px w-full bg-zinc-800" />
            </Link>
          ))}
        </div>

        <Modal modal={modal} projects={projects}/>
      </div>
    </section>
  );
};