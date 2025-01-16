"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { MdOutlineArrowDownward } from "react-icons/md";

interface GravityButtonProps {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  label?: string;
  icon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  static?: boolean;
}

export const GravityButton = ({ 
  children, 
  className = "", 
  href, 
  label = "View My Work • See My Projects • View My Skills • Contact Me •",
  icon = <MdOutlineArrowDownward className="text-5xl" />,
  size = 'lg',
  static: isStatic = false
}: GravityButtonProps) => {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, {
    mass: 1,
    stiffness: 400,
    damping: 50,
  });
  const ySpring = useSpring(y, {
    mass: 1,
    stiffness: 400,
    damping: 50,
  });

  const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => {
    if (isMobile || !ref.current) return;

    const { height, width, left, top } = ref.current.getBoundingClientRect();

    x.set(e.clientX - (left + width / 2));
    y.set(e.clientY - (top + height / 2));
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    x.set(0);
    y.set(0);
  };

  // Handle click for internal links
  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    if (href?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const sizeClasses = {
    sm: "h-[100px] w-[100px] sm:h-[100px] sm:w-[100px]", // Always md size on mobile
    md: "h-[100px] w-[100px] sm:h-[120px] sm:w-[120px]", // Always md size on mobile
    lg: "h-[100px] w-[100px] sm:h-[150px] sm:w-[150px]"  // Always md size on mobile
  }[size];

  const svgSizes = {
    sm: { 
      width: isMobile ? 100 : 80, 
      height: isMobile ? 100 : 80, 
      path: isMobile 
        ? "M50,50 m-45,0 a45,45 0 1,0 90,0 a45,45 0 1,0 -90,0" 
        : "M40,40 m-40,0 a40,40 0 1,0 80,0 a40,40 0 1,0 -80,0" 
    },
    md: { 
      width: 100, 
      height: 100, 
      path: "M50,50 m-45,0 a45,45 0 1,0 90,0 a45,45 0 1,0 -90,0" 
    },
    lg: { 
      width: isMobile ? 100 : 130, 
      height: isMobile ? 100 : 130, 
      path: isMobile 
        ? "M50,50 m-43,0 a43,43 0 1,0 86,0 a43,43 0 1,0 -86,0"
        : "M65,65 m-65,0 a65,65 0 1,0 130,0 a65,65 0 1,0 -130,0" 
    }
  }[size];
  
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref as any}
      href={href}
      target={href?.startsWith('#') ? undefined : href ? "_blank" : undefined}
      rel={href?.startsWith('#') ? undefined : href ? "noopener noreferrer" : undefined}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={isMobile ? undefined : { transform }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`group relative grid ${sizeClasses} place-content-center rounded-full border-2 border-neutral-400 transition-colors duration-700 ease-out ${className}`}
    >
      <div className="pointer-events-none relative z-10 text-neutral-400 transition-all duration-700 ease-out group-hover:text-neutral-50">
        {icon}
      </div>

      <div className="pointer-events-none absolute inset-0 z-0 scale-0 rounded-full bg-indigo-600 transition-transform duration-700 ease-out group-hover:scale-100" />

      <motion.svg
        initial={{ rotate: 0 }}
        animate={{ rotate: isStatic ? 0 : 360 }}
        transition={{
          duration: 25,
          repeat: isStatic ? 0 : Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        style={{
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
        width={svgSizes.width}
        height={svgSizes.height}
        className="pointer-events-none absolute z-10"
      >
        <path
          id="circlePath"
          d={svgSizes.path}
          fill="none"
        />
        <text>
          <textPath
            href="#circlePath"
            className={`fill-neutral-400 text-[8px] sm:text-xs font-light uppercase 
              ${isStatic 
                ? 'opacity-100 group-hover:fill-neutral-50' 
                : 'opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100 group-hover:fill-neutral-50'
              }`}
          >
            {label}
          </textPath>
        </text>
      </motion.svg>
    </Component>
  );
};