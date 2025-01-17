import React, { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ProjectContentProps {
  nextProject: {
    title: string;
    href: string;
    image: string;
  }
}

export default function ProjectContent({ nextProject }: ProjectContentProps) {
  const [isHovering, setIsHovering] = useState(false);
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);
  const lineRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
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

    // Scroll animation
    gsap.fromTo(cardRef.current,
      { yPercent: -100 },
      {
        yPercent: 0,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom",
          end: "top center",
          scrub: true
        }
      }
    );

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
  }

  return (
    <div className='bg-indigo-600 h-full w-full relative flex flex-col'>
      <p className='absolute top-8 left-1/2 -translate-x-1/2 text-neutral-950 text-sm sm:text-base'>
        Next project
      </p>

      <div 
        ref={lineRef}
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] mx-auto flex items-center justify-center'
      >
        <div className='w-[90%] lg:w-[75%] h-[2px] bg-neutral-950' />
      </div>

      <div 
        ref={cardRef}
        className='relative z-10 p-8 sm:p-12 flex flex-col h-full items-center justify-center text-center'
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Link 
          href={nextProject.href}
        >
          <h2 className='text-4xl sm:text-6xl md:text-8xl font-light text-neutral-950'>
            {nextProject.title}
          </h2>
        </Link>

        <div className='mt-8 inline-flex'>
          <Link 
            href="/work" 
            className='border border-neutral-950 text-neutral-950 px-6 py-3 rounded-full hover:bg-neutral-950 hover:text-white transition-colors'
          >
            All work
          </Link>
        </div>
      </div>

      <motion.div 
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={isHovering ? "enter" : "closed"}
        className="h-[350px] w-[400px] absolute bg-white overflow-hidden pointer-events-none flex items-center justify-center"
      >
        <Image 
          src={nextProject.image}
          alt={nextProject.title}
          fill
          className="object-cover"
        />
      </motion.div>

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