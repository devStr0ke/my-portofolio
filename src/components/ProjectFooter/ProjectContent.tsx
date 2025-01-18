'use client';

import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ProjectCard from '@/components/ProjectCard'

interface ProjectContentProps {
  nextProject: {
    title: string;
    href: string;
    image: string;
    color: string;
  }
}

export default function ProjectContent({ nextProject }: ProjectContentProps) {
  const lineRef = useRef(null);
  const cardRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Setup scroll animation
    const scrollAnimation = gsap.fromTo(cardRef.current,
      {
        y: 400,
      },
      {
        y: -175,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "top center",
          scrub: 1,
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      if (scrollAnimation) {
        scrollAnimation.kill();
      }
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className='bg-indigo-600 h-full w-full relative flex flex-col'
    >
      <p className='absolute top-8 font-bold left-1/2 -translate-x-1/2 text-sm sm:text-xl'>
        Next project
      </p>

      <div 
        className='relative z-10 p-8 sm:p-12 flex flex-col h-full items-center justify-end'
      >
        <div className="relative w-full flex flex-col items-center mb-8">
          {/* The line */}
          <div 
            ref={lineRef}
            className='w-[90%] lg:w-[75%] h-[2px] bg-neutral-950 relative z-20'
          />
          
          {/* Project Card */}
          <div 
            ref={cardRef}
            className="absolute w-[400px] left-1/2 -translate-x-1/2 z-2"
          >
            <ProjectCard 
              project={{
                title: nextProject.title,
                src: nextProject.image,
                color: nextProject.color,
                route: nextProject.href
              }}
              index={0}
            />
          </div>

          {/* Indigo mask */}
          <div className="absolute top-0 left-0 w-full bg-indigo-600 h-[500px] z-15" />
        </div>
      
        <Link href={nextProject.href} className="relative z-30">
          <h2 className='text-4xl sm:text-6xl md:text-8xl font-light text-neutral-950'>
            {nextProject.title}
          </h2>
        </Link>
      </div>
    </div>
  )
}