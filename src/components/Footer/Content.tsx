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
            <p className='text-neutral-950 font-bold text-3xl sm:text-5xl xl:text-7xl 3xl:text-8xl uppercase mb-6 block tracking-tighter'></p>
        </div>
    )
}