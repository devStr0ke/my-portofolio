'use client'
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

export const AboutSection = () => {
  const targetRef = useRef(null);
  const textRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const text = new SplitType(textRef.current!, { types: 'lines' });
    
    text.lines?.forEach((line, index) => {
      gsap.fromTo(line,
        {
          clipPath: 'inset(0 100% -20% 0)'
        },
        {
          clipPath: 'inset(0 0% -20% 0)',
          duration: 1,
          scrollTrigger: {
            trigger: line,
            start: 'bottom bottom',
            end: 'top center',
            scrub: 0.5,
          }
        }
      );
    });

    return () => {
      text.revert();
    };
  }, [isMounted]);

  return (
    <section
      ref={targetRef}
      id="about"
      className="min-h-screen bg-neutral-950 text-neutral-100"
    >
      <div className="flex flex-col justify-center h-screen ml-4 sm:ml-8 max-w-[90%] sm:max-w-[75%] md:max-w-[90%] lg:max-w-[68%] md:mx-auto">
        <div className="flex flex-col">
          <span className="text-neutral-400 font-bold text-base uppercase mb-6 block tracking-widest">
            About me
          </span>
          
          <div className="relative">
            {/* Background text */}
            <span className="text-neutral-600/10 font-bold text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-[6.1rem] 3xl:text-8xl tracking-tighter">
              I'm a <span className="text-indigo-600/10">skilled developer</span> focused on creating efficient, scalable web solutions & exploring the potential of web3.
            </span>

            {/* Animated text */}
            <div 
              ref={textRef}
              className="absolute inset-0 text-neutral-500 font-bold text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-[6.1rem] 3xl:text-8xl tracking-tighter"
            >
              I'm a <span className="text-indigo-600">skilled developer</span> focused on creating efficient, scalable web solutions & exploring the potential of web3.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};