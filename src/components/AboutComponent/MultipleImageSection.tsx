'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Lenis from 'lenis'
import { useTransform, useScroll, motion } from 'framer-motion';

const images = [
    "bangkok2.png",
    "temple.png",
    "hercules.png",
    "chinatown.png",
    "khaosok.png",
    "algarve.png",
    "atlas.png",
    "parthenon.png",
    "maradona.png",
]

export default function MultipleImageSection() {
    const gallery = useRef(null);
    const [dimension, setDimension] = useState({width:0, height:0});
    
    const { scrollYProgress } = useScroll({
        target: gallery,
        offset: ['start end', 'end start']
    })
    
    const { height } = dimension;
    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.3])

    useEffect(() => {
        const lenis = new Lenis()

        const raf = (time: number) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        const resize = () => {
            setDimension({width: window.innerWidth, height: window.innerHeight})
        }

        window.addEventListener("resize", resize)
        requestAnimationFrame(raf);
        resize();

        return () => {
            window.removeEventListener("resize", resize);
        }
    }, [])

    return (
        <main>
            {/* Gallery */}
            <div 
                ref={gallery} 
                className="h-[175vh] bg-[#2d2d2d] relative flex gap-6 p-8 overflow-hidden"
            >
                <Column 
                    images={[images[0], images[1], images[2]]} 
                    y={y}
                    className="-top-[45%] hidden sm:flex"
                />
                <Column 
                    images={[images[3], images[4], images[5]]} 
                    y={y2}
                    className="-top-[95%] hidden lg:flex"
                />
                <Column 
                    images={[images[6], images[7], images[8]]} 
                    y={y3}
                    className="-top-[45%]"
                />
            </div>
        </main>
    )
}

interface ColumnProps {
    images: string[];
    y: any;
    className?: string;
}

const Column = ({ images, y, className = "" }: ColumnProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
      <motion.div 
          className={`relative h-full w-full sm:w-1/2 lg:w-1/3 min-w-[250px] flex flex-col gap-8 ${className}`}
          style={{ y }}
      >
          {images.map((src, i) => (
              <div 
                  key={i} 
                  className="h-full w-full relative overflow-hidden"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
              >
                  <Image 
                      src={`/about/bw/${src}`}
                      alt='image'
                      fill
                      priority
                      sizes="(max-width: 1011px) 100vw"
                      className={`object-cover transition-opacity duration-500 ${hoveredIndex === i ? 'opacity-0' : 'opacity-100'}`}
                  />
                  <Image 
                      src={`/about/colored/${src}`}
                      alt='image'
                      fill
                      priority
                      sizes="(max-width: 1011px) 100vw"
                      className={`object-cover transition-opacity duration-500 absolute top-0 left-0 ${hoveredIndex === i ? 'opacity-100' : 'opacity-0'}`}
                  />
              </div>
          ))}
      </motion.div>
  )
}