'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Project({ index, title, setModal }: { index: any, title: any, setModal: any }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="relative mb-0 group"
    >
      {/* Background div - only show on lg and up */}
      <div 
        className="absolute inset-y-0 w-screen left-[50%] -translate-x-1/2 bg-indigo-600 transition-[clip-path] duration-300 ease-in-out hidden lg:block"
        style={{
          clipPath: "inset(50% 0 50%)",
        }}
      />

      {/* Desktop Layout (lg and up) */}
      <div 
        className="hidden lg:flex justify-between items-center relative z-8 py-10 text-neutral-500 hover:text-neutral-950 transition-colors duration-300"
        onMouseEnter={() => { setModal({ active: true, index }) }} 
        onMouseLeave={() => { setModal({ active: false, index }) }}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold m-0 transition-all duration-400 group-hover:-translate-x-[10px]">
          {title}
        </h2>
        <p className="font-semibold transition-all duration-400 group-hover:translate-x-[10px]">
          Design & Development
        </p>
      </div>

      {/* Mobile Layout (below lg) */}
      <div className="lg:hidden space-y-2 py-8">
        <h2 className="text-3xl font-semibold text-neutral-100">
          {title}
        </h2>
        <div className="flex justify-between items-center text-sm text-neutral-500">
          <span>Interaction & Development</span>
          <span>2024</span>
        </div>
      </div>

      {/* Border - show on all screens */}
      <div className="absolute bottom-0 left-[50%] h-px w-screen -translate-x-1/2 border-b border-zinc-800" />
    </motion.div>
  );
}