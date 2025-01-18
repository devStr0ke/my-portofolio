'use client';

import { useState, useRef } from 'react';
import { Link } from "next-transition-router";
import Image from 'next/image';

type ProjectCardProps = {
  project: {
    title: string;
    src: string;
    color: string;
    route: string;
    type?: string;  // Optional
    year?: string;  // Optional
  };
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const { left, top } = containerRef.current.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - left,
      y: e.clientY - top
    });
  };

  // Ensure the image path starts with a forward slash for the public directory
  const imagePath = project.src.startsWith('/') ? project.src : `/${project.src}`;

  return (
    <Link href={project.route}>
      <div className="space-y-4 relative group">
        <div 
          ref={containerRef}
          className="aspect-square w-full p-8 flex items-center justify-center relative overflow-hidden"
          style={{ backgroundColor: project.color }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onMouseMove={handleMouseMove}
        >
          <div className="w-full h-full relative">
            <Image 
              src={imagePath}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
            />
          </div>

          {/* View button */}
          {isHovering && (
            <div 
              className="absolute hidden sm:flex w-20 h-20 rounded-full bg-indigo-600 text-white items-center justify-center text-sm font-light pointer-events-none z-20 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-200"
              style={{
                left: cursorPosition.x,
                top: cursorPosition.y,
              }}
            >
              View
            </div>
          )}

          {/* Overlay */}
          <div 
            className={`absolute inset-0 bg-black/20 transition-opacity duration-300 z-10
              ${isHovering ? 'opacity-100' : 'opacity-0'}
            `} 
          />
        </div>

        {/* Only render metadata if both type and year are provided */}
        {project.type && project.year && (
          <div>
            <h2 className="text-2xl font-semibold text-neutral-100 mb-4">
              {project.title}
            </h2>
            <div className="h-px w-full border-b border-zinc-800 mb-4" />
            <div className="flex justify-between items-center text-sm text-neutral-500">
              <span>{project.type}</span>
              <span>{project.year}</span>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}