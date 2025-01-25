'use client';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function ZoomParallax() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: '/about/fightHexa.png',
            scale: scale4,
            className: 'w-[25vw] h-[25vh]'
        },
        {
            src: '/about/limouxFight.png',
            scale: scale5,
            className: 'w-[35vw] h-[30vh] -top-[30vh] left-[5vw]'
        },
        {
            src: '/about/hercules.png',
            scale: scale6,
            className: 'w-[20vw] h-[45vh] -top-[10vh] -left-[25vw]'
        },
        {
            src: '/about/bangkok.png',
            scale: scale5,
            className: 'w-[15vw] h-[25vh] left-[22.5vw]'
        },
        {
            src: '/about/coffee.png',
            scale: scale6,
            className: 'w-[15vw] h-[25vh] top-[27.5vh] -left-[2vw]'
        },
        {
            src: '/about/algarve.png',
            scale: scale8,
            className: 'w-[15vw] h-[30vh] top-[30vh] -left-[18vw]'
        },
        {
            src: '/about/limoux.png',
            scale: scale9,
            className: 'w-[15vw] h-[20vh] top-[25.5vh] left-[14vw]'
        }
    ]

    return (
        <>
            {/* Desktop View */}
            <div className="hidden md:block">
                <div ref={container} className="h-[300vh] relative">
                    <div className="sticky top-0 h-screen overflow-hidden">
                        {pictures.map(({src, scale, className}, index) => (
                            <motion.div 
                                key={index} 
                                style={{scale}} 
                                className="absolute w-full h-full top-0 flex items-center justify-center"
                            >
                                <div className={`relative ${className}`}>
                                    <Image
                                        src={src}
                                        fill
                                        alt="image"
                                        className="object-cover"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div className="block md:hidden">
                <div className="grid grid-cols-2 gap-4 px-4 py-8">
                    {pictures.map(({src}, index) => (
                        <div 
                            key={index} 
                            className={`relative aspect-square w-full ${
                                index === 0 ? 'col-span-2 aspect-video' : ''
                            }`}
                        >
                            <Image
                                src={src}
                                fill
                                alt="image"
                                className="object-cover rounded-lg"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}