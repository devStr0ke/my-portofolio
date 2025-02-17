'use client'
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface CardProps {
  i: number;
  title: string;
  description: string;
  features?: string[]; // Add this for sub-items
  color: string;
}

const Card = ({ i, title, description, features, color }: CardProps) => {
  const container = useRef<HTMLDivElement>(null);
  
  return (
    <div 
      ref={container} 
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div 
        style={{ backgroundColor: color, top: `calc(-5vh + ${i * 80}px)` }}
        className="flex flex-col relative h-[500px] w-full origin-top border-t border-zinc-800"
      >
        {/* Only modify the content part below */}
        <div className="pt-6 lg:pt-5 flex max-w-[90%] lg:max-w-[70%] mx-auto">
          <span className="text-neutral-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            ({String(i + 1).padStart(2, '0')})
          </span>
          
          <div className="flex-1 mx-4 sm:mx-12 md:mx-24 lg:mx-28 2xl:mx-56">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-neutral-300 mb-8 font-semibold">
              {title}
            </h2>
            <p className="text-neutral-400 text-lg mb-12">
              {description}
            </p>
            
            {features && (
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-start gap-4 border-b border-zinc-800 pb-4 last:border-b-0"
                  >
                    <span className="text-neutral-500 text-sm">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="text-neutral-300 text-xl">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="text-neutral-500 text-xl sm:text-2xl md:text-3xl">
            {i === 0 && '★'}
            {i === 1 && '⬡'}
            {i === 2 && '▲'}
            {i === 3 && '◆'}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;