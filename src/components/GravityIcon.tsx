import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
  } from "framer-motion";
  import { useRef } from "react";
  
  interface GravityIconProps {
    icon: React.ReactNode;
    href: string;
    className?: string;
  }
  
  const GravityIcon = ({ icon, href, className }: GravityIconProps) => {
    const ref = useRef<HTMLAnchorElement | null>(null);
  
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
      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
      if (!ref.current) return;
  
      const { height, width, left, top } = ref.current.getBoundingClientRect();
  
      x.set(e.clientX - (left + width / 2));
      y.set(e.clientY - (top + height / 2));
    };
  
    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };
  
    return (
      <motion.a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform }}
        className={`hover:text-indigo-600 transition-colors ${className || ''}`}
      >
        {icon}
      </motion.a>
    );
  };
  
  export default GravityIcon;