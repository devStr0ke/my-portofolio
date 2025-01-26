'use client';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface SectionProps {
    imageSrc: string;  
    mobileImageSrc?: string; // Add optional mobile image source
    text?: string;
}

export default function Section({ imageSrc, mobileImageSrc, text }: SectionProps) {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div
            ref={container} 
            className='relative flex items-center justify-center h-screen overflow-hidden'
            style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
            <div className='relative z-10 py-2 max-w-[90%] lg:max-w-[68%] mx-auto mix-blend-difference text-white w-full h-full flex flex-col justify-end items-start lg:items-center'>
                <p className='text-2xl sm:text-4xl font-bold uppercase mix-blend-difference'>{text}</p>
            </div>
            <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
                <motion.div style={{y}} className='relative w-full h-full'>
                    {/* Desktop Image */}
                    <Image 
                        src={imageSrc} 
                        fill
                        priority
                        alt="background image" 
                        className="object-cover hidden lg:block"
                        sizes="100vw"
                    />
                    {/* Mobile Image */}
                    <Image 
                        src={mobileImageSrc || imageSrc} // Fallback to desktop image if mobile not provided
                        fill
                        priority
                        alt="background image" 
                        className="object-cover block lg:hidden"
                        sizes="100vw"
                    />
                </motion.div>
            </div>
        </div>
    )
}