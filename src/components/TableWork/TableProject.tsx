'use client';
import { motion } from 'framer-motion';
import { Link } from "next-transition-router";

interface TableProjectProps {
  index: number;
  title: string;
  location: string;
  services: string;
  year: string;
  route: string;
  setModal: (modal: { active: boolean; index: number }) => void;
}

export default function TableProject({ 
  index, 
  title, 
  location, 
  services, 
  year, 
  route, 
  setModal 
}: TableProjectProps) {
  return (
    <Link href={route}>
      <motion.div 
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="relative mb-0 group"
      >
        {/* Top Border - only show for first item */}
        {index === 0 && (
          <div className="absolute top-0 left-[50%] h-px w-screen -translate-x-1/2 border-b border-zinc-800" />
        )}

        {/* Background div */}
        <div 
          className="absolute inset-y-0 w-screen left-[50%] -translate-x-1/2 bg-indigo-600 transition-[clip-path] duration-300 ease-in-out"
          style={{
            clipPath: "inset(50% 0 50%)",
          }}
        />

        {/* Content */}
        <div 
          className="grid grid-cols-4 relative z-8 py-10 text-neutral-500 hover:text-neutral-950 transition-colors duration-300 w-full"
          onMouseEnter={() => { setModal({ active: true, index }) }} 
          onMouseLeave={() => { setModal({ active: false, index }) }}
        >
          <span className="text-2xl font-medium transition-all duration-400 group-hover:-translate-x-[10px] w-full">
            {title}
          </span>
          <span className="transition-all duration-400 w-full">{location}</span>
          <span className="transition-all duration-400 w-full">{services}</span>
          <span className="transition-all duration-400 group-hover:translate-x-[10px] w-full">
            {year}
          </span>
        </div>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-[50%] h-px w-screen -translate-x-1/2 border-b border-zinc-800" />
      </motion.div>
    </Link>
  );
}