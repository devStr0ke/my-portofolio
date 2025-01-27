'use client';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, useState } from 'react';

interface SectionProps {
    imageSrc: string;  
    mobileSrc?: string; // Add optional mobile image source
    text?: string;
}

export default function Section({ imageSrc, mobileSrc, text }: SectionProps) {
    const container = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState(false);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    // Construct URLs for black-and-white and colored images
    const bwImageSrc = `https://supabase.mge-dashboard.pro/storage/v1/object/public/portofolio/bw/${imageSrc}`;
    const coloredImageSrc = `https://supabase.mge-dashboard.pro/storage/v1/object/public/portofolio/colored/${imageSrc}`;

    // Construct URLs for mobile black-and-white and colored images
    const mobileBw = mobileSrc ? `https://supabase.mge-dashboard.pro/storage/v1/object/public/portofolio/bw/${mobileSrc}` : bwImageSrc;
    const mobileColored = mobileSrc ? `https://supabase.mge-dashboard.pro/storage/v1/object/public/portofolio/colored/${mobileSrc}` : coloredImageSrc;

    return (
        <div
            ref={container} 
            className='relative flex items-center justify-center h-screen overflow-hidden'
            style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className='relative z-10 py-2 max-w-[90%] lg:max-w-[68%] mx-auto mix-blend-difference text-white w-full h-full flex flex-col justify-end items-start lg:items-center'>
                <p className='text-2xl sm:text-4xl font-bold uppercase mix-blend-difference'>{text}</p>
            </div>
            <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
                <motion.div style={{y}} className='relative w-full h-full'>
                    {/* Desktop Image */}
                    <div className="hidden lg:block relative w-full h-full">
                        <Image 
                            src={bwImageSrc} 
                            fill
                            priority
                            alt="background image" 
                            className="object-cover transition-opacity duration-500"
                            style={{
                                opacity: hovered ? 0 : 1
                            }}
                            sizes="100vw"
                        />
                        <Image 
                            src={coloredImageSrc} 
                            fill
                            priority
                            alt="background image" 
                            className="object-cover transition-opacity duration-500 absolute top-0 left-0"
                            style={{
                                opacity: hovered ? 1 : 0
                            }}
                            sizes="100vw"
                        />
                    </div>
                    {/* Mobile Image */}
                    <div className="block lg:hidden relative w-full h-full">
                        <Image 
                            src={mobileBw} 
                            fill
                            priority
                            alt="background image" 
                            className="object-cover transition-opacity duration-500"
                            style={{
                                opacity: hovered ? 0 : 1
                            }}
                            sizes="100vw"
                        />
                        <Image 
                            src={mobileColored} 
                            fill
                            priority
                            alt="background image" 
                            className="object-cover transition-opacity duration-500 absolute top-0 left-0"
                            style={{
                                opacity: hovered ? 1 : 0
                            }}
                            sizes="100vw"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}