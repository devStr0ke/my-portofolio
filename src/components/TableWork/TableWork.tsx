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
    <section className="bg-neutral-950 text-neutral-100 w-full">
      <div className="flex flex-col h-full max-w-[90%] lg:max-w-[68%] mx-auto w-full">
        {/* Header */}
        <div className="hidden lg:flex items-center text-xs text-neutral-500 mb-4 w-full gap-8">
          <span className="w-[35%]">CLIENT</span>
          <span className="w-[25%]">LOCATION</span>
          <span className="w-[35%]">SERVICES</span>
          <span className="w-[15%]">YEAR</span>
        </div>
        
        {/* Projects */}
        <div className="w-full">
          {projects.map((project, index) => (
            <TableProject 
              key={index}
              index={index} 
              {...project}
              setModal={setModal} 
            />
          ))}
        </div>

        <Modal modal={modal} projects={projects}/>
      </div>
    </section>
  );
};