'use client';

import React, { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
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
  const [isHovering, setIsHovering] = useState(false);
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);
  const lineRef = useRef(null);
  const cardRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Card animation
    gsap.fromTo(cardRef.current,
      {
        y: 400, // Start below the footer
      },
      {
        y: -175, // Final position
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", // Start when the footer enters viewport
          end: "top center", // End when footer reaches center
          scrub: 1, // Smooth scrubbing effect
          // markers: true, // Enable for debugging
        }
      }
    );

    // Cursor animations
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
    let xMoveCursor = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
    let yMoveCursor = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})

    const handleMouseMove = (e: MouseEvent) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX)
      yMoveContainer(pageY)
      xMoveCursor(pageX)
      yMoveCursor(pageY)
      xMoveCursorLabel(pageX)
      yMoveCursorLabel(pageY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      ScrollTrigger.getAll().forEach(t => t.kill());
    }
  }, [])

  const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
  }

  return (
    <div 
      ref={containerRef}
      className='bg-indigo-600 h-full w-full relative flex flex-col'
    >
      <p className='absolute top-8 left-1/2 -translate-x-1/2 text-neutral-950 text-sm sm:text-base'>
        Next project
      </p>

      <div 
        className='relative z-10 p-8 sm:p-12 flex flex-col h-full items-center justify-end'
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
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

      {/* Cursor animations */}
      <motion.div 
        ref={cursor}
        className="w-20 h-20 rounded-full bg-indigo-600 text-white absolute z-10 flex items-center justify-center text-sm font-light pointer-events-none"
        variants={scaleAnimation}
        initial="initial"
        animate={isHovering ? "enter" : "closed"}
      />
      <motion.div 
        ref={cursorLabel}
        className="w-20 h-20 rounded-full bg-transparent text-white absolute z-10 flex items-center justify-center text-sm font-light pointer-events-none"
        variants={scaleAnimation}
        initial="initial"
        animate={isHovering ? "enter" : "closed"}
      >
        View
      </motion.div>
    </div>
  )
}