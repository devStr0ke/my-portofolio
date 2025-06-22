'use client';

import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ProjectCard from '@/components/ProjectCard'
import { Spacer } from '../Spacer';
import { RoundedButton } from '../RoundedButton';

interface ProjectContentProps {
  nextProject: {
    title: string;
    href: string;
    image: string;
    color: string;
  }
  triggerRef: React.RefObject<HTMLDivElement>;
}

export default function ProjectContent({ nextProject, triggerRef }: ProjectContentProps) {
  const lineRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animation = gsap.fromTo(cardRef.current,
      {
        y: 400,
      },
      {
        y: -175,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top bottom",
          end: "top center",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      if (animation) animation.kill();
    }
  }, []);

  return (
    <div className='bg-indigo-600 h-full w-full relative'>
      <div className='absolute inset-0 flex flex-col gap-8 items-center justify-end'>
        <p className='text-2xl font-bold text-neutral-950 font-orbitron'>
          Next project
        </p>

        <Link href={nextProject.href} className="relative z-[2] mb-56">
          <h2 className='text-4xl sm:text-6xl md:text-8xl font-light text-neutral-950 font-orbitron text-center'>
            {nextProject.title}
          </h2>
        </Link>

        <div className="relative w-full flex flex-col items-center">
          {/* The line */}
          <div 
            ref={lineRef}
            className='w-[90%] sm:w-[90%] lg:w-[75%] h-[1px] bg-neutral-950 relative z-[4]'
          />
          
          {/* Project Card */}
          <div 
            ref={cardRef}
            className="absolute w-[245px] sm:w-[400px] left-1/2 -translate-x-1/2 z-[2]"
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

          {/* Indigo mask - positioned below the card */}
          <div className="absolute top-0 left-0 w-full bg-indigo-600 h-[500px] z-[2]" />
        </div>
        <RoundedButton href='/work' color='neutral' superscript='5' backgroundColor='#0a0a0a' className='z-[3] mb-10 font-orbitron'>All work</RoundedButton>
      </div>
    </div>
  )
}