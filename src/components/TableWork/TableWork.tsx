'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Modal from '../Work/Modal';
import TableProject from './TableProject';

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
  const fullStackCount = projects.filter(p => p.type.includes('Full Stack')).length;
  const frontEndCount = projects.filter(p => p.type.includes('Front End')).length;

  // Filter projects based on selected filter
  const filteredProjects = projects.filter(project => {
    if (filter === 'All') return true;
    return project.type.includes(filter);
  });

  return (
    <section className="bg-neutral-950 text-neutral-100 w-full">
      <div className="flex flex-col h-full max-w-[90%] lg:max-w-[68%] mx-auto w-full">
        {/* Filter Buttons */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-4">
            <button
              onClick={() => setFilter('All')}
              className={`px-6 py-2 rounded-full ${
                filter === 'All' 
                  ? 'bg-neutral-900 text-neutral-100' 
                  : 'bg-transparent text-neutral-500'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('Full Stack')}
              className={`px-6 py-2 rounded-full ${
                filter === 'Full Stack' 
                  ? 'bg-neutral-900 text-neutral-100' 
                  : 'bg-transparent text-neutral-500'
              }`}
            >
              Full Stack<sup className="ml-1">{fullStackCount}</sup>
            </button>
            <button
              onClick={() => setFilter('Front End')}
              className={`px-6 py-2 rounded-full ${
                filter === 'Front End' 
                  ? 'bg-neutral-900 text-neutral-100' 
                  : 'bg-transparent text-neutral-500'
              }`}
            >
              Front End<sup className="ml-1">{frontEndCount}</sup>
            </button>
          </div>
          
          {/* Placeholder for right-side buttons */}
          <div className="flex gap-4">
            <button className="p-2 rounded-full bg-neutral-900">
              {/* Add icon/content later */}
            </button>
            <button className="p-2 rounded-full bg-transparent border border-zinc-800">
              {/* Add icon/content later */}
            </button>
          </div>
        </div>

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