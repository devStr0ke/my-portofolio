'use client';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, useState } from 'react';

export default function ZoomParallax() {
    const container = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);

    const images = [
        {
            bw: '/about/bw/fightHexa.png',
            color: '/about/colored/fightHexa.png',
            position: {
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
            },
            size: 'w-[25vw] h-[25vh]',
            sizes: '(max-width: 2048px) 100vw, 35vw'
        },
        {
            bw: '/about/bw/limouxFight.png',
            color: '/about/colored/limouxFight.png',
            position: {
                left: '55%',
                top: '20%',
                transform: 'translate(-50%, -50%)'
            },
            size: 'w-[35vw] h-[30vh]',
            sizes: '(max-width: 2048px) 100vw, 35vw'
        },
        {
            bw: '/about/bw/hercules.png',
            color: '/about/colored/hercules.png',
            position: {
                left: '26%',
                top: '40%',
                transform: 'translate(-50%, -50%)'
            },
            size: 'w-[20vw] h-[45vh]',
            sizes: '(max-width: 1011px) 100vw, 35vw'
        },
        {
            bw: '/about/bw/bangkok.png',
            color: '/about/colored/bangkok.png',
            position: {
                left: '71.5%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
            },
            size: 'w-[15vw] h-[25vh]',
            sizes: '(max-width: 1011px) 100vw, 35vw'
        },
        {
            bw: '/about/bw/coffee.png',
            color: '/about/colored/coffee.png',
            position: {
                left: '48%',
                top: '79.5%',
                transform: 'translate(-50%, -50%)'
            },
            size: 'w-[15vw] h-[30vh]',
            sizes: '(max-width: 1011px) 100vw, 35vw'
        },
        {
            bw: '/about/bw/algarve.png',
            color: '/about/colored/algarve.png',
            position: {
                left: '32%',
                top: '80%',
                transform: 'translate(-50%, -50%)'
            },
            size: 'w-[15vw] h-[30vh]',
            sizes: '(max-width: 1011px) 100vw, 35vw'
        },
        {
            bw: '/about/bw/limoux.png',
            color: '/about/colored/limoux.png',
            position: {
                left: '64%',
                top: '75.5%',
                transform: 'translate(-50%, -50%)'
            },
            size: 'w-[15vw] h-[20vh]',
            sizes: '(max-width: 1011px) 100vw, 35vw'
        }
    ];

    return (
        <>
            {/* Desktop View */}
            <div className="hidden lg:block">
                <div ref={container} className="h-[300vh] relative">
                    <div className="sticky top-0 h-screen overflow-hidden">
                        <motion.div 
                            className="absolute inset-0 flex items-center justify-center"
                            style={{ scale }}
                        >
                            {/* Center point container */}
                            <div className="relative w-[100vw] h-[100vh]">
                                {images.map((image, index) => (
                                    <div
                                        key={index}
                                        className={`absolute ${image.size}`}
                                        style={{
                                            zIndex: hoveredIndex === index ? 50 : images.length - index,
                                            ...image.position
                                        }}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    >
                                        <div className="relative w-full h-full">
                                            {/* Black and White Image */}
                                            <Image
                                                src={image.bw}
                                                fill
                                                alt="image"
                                                className="object-cover transition-opacity duration-1000"
                                                style={{
                                                    opacity: hoveredIndex === index ? 0 : 1
                                                }}
                                                sizes={image.sizes}
                                            />
                                            {/* Colored Image */}
                                            <Image
                                                src={image.color}
                                                fill
                                                alt="image"
                                                className="object-cover transition-opacity duration-1000"
                                                style={{
                                                    opacity: hoveredIndex === index ? 1 : 0
                                                }}
                                                sizes={image.sizes}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div className="block lg:hidden">
                <div className="grid grid-cols-2 gap-4 px-4">
                    {images.map((image, index) => (
                        <div 
                            key={index} 
                            className={`relative z-20 ${
                                index === 0 ? 'col-span-2 aspect-video' : 'aspect-square'
                            } w-full`}
                            onClick={() => setHoveredIndex(index)}
                        >
                            <Image
                                src={image.bw}
                                fill
                                alt="image"
                                className="object-cover transition-opacity duration-500"
                                style={{
                                    opacity: hoveredIndex === index ? 0 : 1
                                }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <Image
                                src={image.color}
                                fill
                                alt="image"
                                className="object-cover transition-opacity duration-500"
                                style={{
                                    opacity: hoveredIndex === index ? 1 : 0
                                }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}