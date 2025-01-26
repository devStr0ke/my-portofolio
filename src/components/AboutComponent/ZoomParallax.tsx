'use client';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, useState } from 'react';

interface Picture {
    src: string;
    bwSrc: string;
    scale: any;
    className: string;
    sizes: string;
}

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

    const pictures: Picture[] = [
        {
            src: '/about/colored/fightHexa.png',
            bwSrc: '/about/bw/fightHexa.png',
            scale: scale4,
            className: 'w-[25vw] h-[25vh]',
            sizes: '(max-width: 2048px) 100vw, 35vw'
        },
        {
            src: '/about/colored/limouxFight.png',
            bwSrc: '/about/bw/limouxFight.png',
            scale: scale5,
            className: 'w-[35vw] h-[30vh] -top-[30vh] left-[5vw]',
            sizes: '(max-width: 2048px) 100vw, 35vw'
        },
        {
            src: '/about/colored/hercules.png',
            bwSrc: '/about/bw/hercules.png',
            scale: scale6,
            className: 'w-[20vw] h-[45vh] -top-[10vh] -left-[24vw]',
            sizes: '(max-width: 1011px) 100vw, 35vw'
        },
        {
            src: '/about/colored/bangkok.png',
            bwSrc: '/about/bw/bangkok.png',
            scale: scale5,
            className: 'w-[15vw] h-[25vh] left-[21.5vw]',
            sizes: '(max-width: 1011px) 100vw, 35vw'
        },
        {
            src: '/about/colored/coffee.png',
            bwSrc: '/about/bw/coffee.png',
            scale: scale6,
            className: 'w-[15vw] h-[30vh] top-[29.5vh] -left-[2vw]',
            sizes: '(max-width: 1011px) 100vw, 35vw'
        },
        {
            src: '/about/colored/algarve.png',
            bwSrc: '/about/bw/algarve.png',
            scale: scale8,
            className: 'w-[15vw] h-[30vh] top-[30vh] -left-[18vw]',
            sizes: '(max-width: 1011px) 100vw, 35vw'
        },
        {
            src: '/about/colored/limoux.png',
            bwSrc: '/about/bw/limoux.png',
            scale: scale9,
            className: 'w-[15vw] h-[20vh] top-[25.5vh] left-[14vw]',
            sizes: '(max-width: 1011px) 100vw, 35vw'
        }
    ]

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
      <>
            {/* Desktop View */}
            <div className="hidden md:block">
                <div ref={container} className="h-[300vh] relative">
                    <div className="sticky top-0 h-screen overflow-hidden">
                        {pictures.map(({src, bwSrc, scale, className, sizes}, index) => (
                            <motion.div 
                                key={index} 
                                style={{scale}} 
                                className="absolute w-full h-full top-0 flex items-center justify-center"
                            >
                                <div 
                                    className={`relative ${className}`}
                                    style={{
                                        zIndex: hoveredIndex === index ? 50 : 10,
                                        pointerEvents: 'auto'
                                    }}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    {/* Black and White Image */}
                                    <Image
                                        src={bwSrc}
                                        fill
                                        alt="image"
                                        className="object-cover transition-opacity duration-1000"
                                        style={{
                                            opacity: hoveredIndex === index ? 0 : 1
                                        }}
                                        sizes={sizes}
                                    />
                                    {/* Colored Image */}
                                    <Image
                                        src={src}
                                        fill
                                        alt="image"
                                        className="object-cover transition-opacity duration-1000"
                                        style={{
                                            opacity: hoveredIndex === index ? 1 : 0
                                        }}
                                        sizes={sizes}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

          {/* Mobile View */}
          <div className="block md:hidden">
              <div className="grid grid-cols-2 gap-4 px-4">
                  {pictures.map(({src, bwSrc}, index) => (
                      <div 
                          key={index} 
                          className={`relative z-20 ${
                              index === 0 ? 'col-span-2 aspect-video' : 'aspect-square'
                          } w-full`}
                          onTouchStart={() => setHoveredIndex(index)}
                          onTouchEnd={() => setHoveredIndex(null)}
                      >
                          {/* Black and White Image */}
                          <Image
                              src={bwSrc}
                              fill
                              alt="image"
                              className="object-cover rounded-lg transition-opacity duration-500"
                              style={{
                                  opacity: hoveredIndex === index ? 0 : 1
                              }}
                              sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          {/* Colored Image */}
                          <Image
                              src={src}
                              fill
                              alt="image"
                              className="object-cover rounded-lg transition-opacity duration-500"
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
  )
}