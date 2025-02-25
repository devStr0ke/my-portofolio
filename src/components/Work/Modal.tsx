import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';

const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

export default function Modal({modal, projects}: {modal: any, projects: any}) {
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
    //Move cursor
    let xMoveCursor = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
    let yMoveCursor = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
    //Move cursor label
    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})

    window.addEventListener('mousemove', (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX)
      yMoveContainer(pageY)
      xMoveCursor(pageX)
      yMoveCursor(pageY)
      xMoveCursorLabel(pageX)
      yMoveCursorLabel(pageY)
    })
  }, [])

  return (
    <>
      <motion.div 
        ref={modalContainer} 
        variants={scaleAnimation} 
        initial="initial" 
        animate={active ? "enter" : "closed"}
        className="h-[450px] w-[475px] absolute bg-white overflow-hidden pointer-events-none flex items-center justify-center z-10"
      >
        <div 
          style={{top: index * -100 + "%"}} 
          className="h-full w-full absolute transition-[top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
        >
          {projects.map((project: any, index: any) => {
            const { src, color } = project
            return (
              <div 
                className="h-full w-full flex items-center justify-center" 
                style={{backgroundColor: color}} 
                key={`modal_${index}`}
              >
                <Image 
                  src={`${src}`}
                  width={450}
                  height={0}
                  alt="image"
                  priority
                  className="h-auto rounded-lg"
                />
              </div>
            )
          })}
        </div>
      </motion.div>

      <motion.div 
        ref={cursor} 
        className="w-20 h-20 rounded-full bg-indigo-600 text-white absolute z-10 flex items-center justify-center text-sm font-light pointer-events-none"
        variants={scaleAnimation} 
        initial="initial" 
        animate={active ? "enter" : "closed"}
      />

      <motion.div 
        ref={cursorLabel} 
        className="w-20 h-20 rounded-full bg-transparent text-white absolute z-10 flex items-center justify-center text-sm font-light pointer-events-none"
        variants={scaleAnimation} 
        initial="initial" 
        animate={active ? "enter" : "closed"}
      >
        View
      </motion.div>
    </>
  )
}