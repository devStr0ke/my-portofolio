import React from 'react';
import ProjectContent from './ProjectContent';

interface ProjectFooterProps {
  nextProject: {
    title: string;
    href: string;
    nextProjectName: string;
    color: string;
  }
  triggerRef: React.RefObject<HTMLDivElement>; 
}

export default function ProjectFooter({ nextProject, triggerRef }: ProjectFooterProps) {
  const imageUrl = `https://supabase.mge-dashboard.pro/storage/v1/object/public/portofolio/${nextProject.nextProjectName}/main.png`;

  return (
    <div 
      id='project-footer'
      className='relative h-[100vh]'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='fixed bottom-0 h-[100vh] w-full'>
        <ProjectContent 
          nextProject={{ 
            ...nextProject, 
            image: imageUrl
          }} 
          triggerRef={triggerRef} 
        />
      </div>
    </div>
  );
}