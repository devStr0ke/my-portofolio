import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { TextFlip } from '../TextFlip'

export default function Content() {
  return (
    <div className='bg-indigo-600 py-16 px-4 sm:px-12 h-full w-full flex flex-col justify-between'>
        <Section1 />
        <Section2 />
    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex flex-col justify-between items-start gap-0'>
            <h1 className='text-4xl sm:text-5xl md:text-7xl font-semibold text-neutral-950'>
                S.Coelho<span className="text-neutral-950">.</span>
            </h1>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex flex-col sm:flex-row shrink-0 gap-8 sm:gap-20'>
            <div className='flex flex-col gap-1'>
                <TextFlip href='#' className='text-4xl sm:text-5xl md:text-7xl font-semibold text-neutral-950'>ABOUT</TextFlip>
                <TextFlip href='#' className='text-4xl sm:text-5xl md:text-7xl font-semibold text-neutral-950'>EXPERIENCE</TextFlip>
                <TextFlip href='#' className='text-4xl sm:text-5xl md:text-7xl font-semibold text-neutral-950'>PROJECTS</TextFlip>
                <TextFlip href='#' className='text-4xl sm:text-5xl md:text-7xl font-semibold text-neutral-950'>CONTACT</TextFlip>
            </div>
        </div>
    )
}