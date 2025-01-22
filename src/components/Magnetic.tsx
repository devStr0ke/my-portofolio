'use client';

import React, { useEffect, useRef, ReactElement, RefAttributes } from 'react';
import gsap from 'gsap';

interface MagneticProps {
  children: ReactElement;
}

export default function Magnetic({ children }: MagneticProps) {
  const magnetic = useRef<HTMLDivElement>(null);
  const isLargeScreen = useRef(false);

  useEffect(() => {
    // Check screen size
    const checkScreenSize = () => {
      isLargeScreen.current = window.innerWidth >= 1024;
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    const xTo = gsap.quickTo(magnetic.current, "x", {duration: 1, ease: "elastic.out(1, 0.3)"});
    const yTo = gsap.quickTo(magnetic.current, "y", {duration: 1, ease: "elastic.out(1, 0.3)"});

    const moveMagnetic = (e: MouseEvent) => {
      if (!isLargeScreen.current) return; // Skip effect on small screens
      
      const { clientX, clientY } = e;
      const bounds = magnetic.current?.getBoundingClientRect();
      if (!bounds) return;
      
      const x = clientX - (bounds.left + bounds.width/2);
      const y = clientY - (bounds.top + bounds.height/2);
      xTo(x * 0.35);
      yTo(y * 0.35);
    };

    const resetMagnetic = () => {
      if (!isLargeScreen.current) return; // Skip effect on small screens
      xTo(0);
      yTo(0);
    };

    const element = magnetic.current;
    if (element) {
      element.addEventListener("mousemove", moveMagnetic);
      element.addEventListener("mouseleave", resetMagnetic);
    }

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      if (element) {
        element.removeEventListener("mousemove", moveMagnetic);
        element.removeEventListener("mouseleave", resetMagnetic);
      }
    };
  }, []);

  return React.cloneElement(children, {
    ref: magnetic,
  } as RefAttributes<HTMLDivElement>);
}