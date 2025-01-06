import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
  } from "framer-motion";
  import { useRef } from "react";
  
  interface GravityButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
  }
  
  const GravityButton = ({ children, onClick, className = "" }: GravityButtonProps) => {
    const ref = useRef<HTMLButtonElement | null>(null);
  
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
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
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
      <motion.button
        ref={ref}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`px-8 py-3 bg-indigo-500 text-white rounded-lg font-medium hover:bg-indigo-600 transition-colors ${className}`}
      >
        {children}
      </motion.button>
    );
  };
  
  export default GravityButton;