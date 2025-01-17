import React from 'react'
import ProjectContent from './ProjectContent'

interface ProjectFooterProps {
  nextProject: {
    title: string;
    href: string;
    image: string;
  }
}

export default function ProjectFooter({ nextProject }: ProjectFooterProps) {
  return (
    <div 
      className='relative h-[600px]'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='fixed bottom-0 h-[600px] w-full'>
        <ProjectContent nextProject={nextProject} />
      </div>
    </div>
  )
}