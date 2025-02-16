'use client'
import { motion } from 'framer-motion';
import { useRef } from 'react';

interface CardProps {
  i: number;
  title: string;
  description: string;
  color: string;
}

const Card = ({ i, title, description, color }: CardProps) => {
  const container = useRef<HTMLDivElement>(null);
  
  return (
    <div 
      ref={container} 
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div 
        style={{ backgroundColor: color, top: `calc(-5vh + ${i * 75}px)` }}
        className="flex flex-col relative h-[500px] w-full origin-top border-t border-zinc-800"
      >
        <h2 className="text-center pt-4 text-[28px] text-neutral-200">{title}</h2>
        
        <div className="flex h-full mt-[50px] text-neutral-200 text-center">
          <div className="w-full relative">
            <p className="text-base text-neutral-200">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;