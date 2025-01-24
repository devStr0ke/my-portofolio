import React from 'react'
import Character from '@/components/Character'

interface DescriptionProps {
  descriptionText: Array<{
    text: string;
    color?: string;
  }>;
}

export default function Description({ descriptionText }: DescriptionProps) {
  return (
    <div className='flex justify-center my-40 h-screen'>
      <Character 
        paragraph={descriptionText}  
        customContainerClass="w-full max-w-[90%] lg:max-w-[68%] mx-auto" 
        textAlign="center"
      />
    </div>
  )
}