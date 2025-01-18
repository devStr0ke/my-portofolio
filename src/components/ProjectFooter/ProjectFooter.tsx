import React from 'react'
import ProjectContent from './ProjectContent'

interface ProjectFooterProps {
  nextProject: {
    title: string;
    href: string;
    image: string;
    color: string;
  }
  triggerRef: React.RefObject<HTMLDivElement>; 
}

export default function ProjectFooter({ nextProject, triggerRef }: ProjectFooterProps) {
  return (
    <div 
      className='relative h-[600px]'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='fixed bottom-0 h-[600px] w-full'>
        <ProjectContent nextProject={nextProject} triggerRef={triggerRef} />
      </div>
    </div>
  )
}