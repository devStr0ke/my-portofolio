import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { MdOutlineArrowUpward } from "react-icons/md";

interface GravityButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const GravityButton = ({ children, className }: GravityButtonProps) => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, {
    mass: 3,
    stiffness: 400,
    damping: 50,
  });
  const ySpring = useSpring(y, {
    mass: 3,
    stiffness: 400,
    damping: 50,
  });

  const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
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

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={isMobile ? undefined : { transform }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`group relative grid h-[120px] w-[120px] sm:h-[150px] sm:w-[150px] place-content-center rounded-full border-2 border-neutral-400 transition-colors duration-700 ease-out ${className}`}
    >
      <MdOutlineArrowUpward className="pointer-events-none relative z-10 rotate-180 text-4xl sm:text-5xl text-neutral-400 transition-all duration-700 ease-out group-hover:text-neutral-50" />

      <div className="pointer-events-none absolute inset-0 z-0 scale-0 rounded-full bg-indigo-600 transition-transform duration-700 ease-out group-hover:scale-100" />

      <motion.svg
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        style={{
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
        width={isMobile ? "100" : "130"}
        height={isMobile ? "100" : "130"}
        className="pointer-events-none absolute z-10"
      >
        <path
          id="circlePath"
          d={isMobile ? "M50,50 m-50,0 a50,50 0 1,0 100,0 a50,50 0 1,0 -100,0" : "M65,65 m-65,0 a65,65 0 1,0 130,0 a65,65 0 1,0 -130,0"}
          fill="none"
        />
        <text>
          <textPath
            href="#circlePath"
            className="fill-neutral-400 text-[10px] sm:text-xs font-light uppercase opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100 group-hover:fill-neutral-50"
          >
            View My Work • See My Projects • View My Skills • Contact Me •
          </textPath>
        </text>
      </motion.svg>
    </motion.button>
  );
};