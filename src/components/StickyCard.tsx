'use client'
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

interface CardProps {
  i: number;
  title: string;
  description: string;
  features?: string[];
  color: string;
  total: number;
}

const Card = ({ i, title, description, features, color, total }: CardProps) => {
  const container = useRef<HTMLDivElement>(null);
  const isNarrowScreen = useMediaQuery({ maxHeight: 749 });
  const dontShowFeatures = useMediaQuery({ maxHeight: 632 });

  // Only stack if cards fit without overflow (max 4 stacked cards)
  const useSticky = total <= 4;

  return (
    <div 
      ref={container} 
      className={`flex items-start justify-center ${useSticky ? 'h-screen sticky top-28 lg:top-44' : 'py-8'}`}
    >
      <motion.div 
        style={{ backgroundColor: color, top: useSticky ? `calc(${i * 80}px)` : undefined }}
        initial={useSticky ? undefined : { opacity: 0, y: 40 }}
        whileInView={useSticky ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col relative h-[500px] w-full origin-top border-t border-zinc-800"
      >
        {/* Desktop layout (hidden below lg) */}
        <div className="hidden lg:flex pt-6 lg:pt-5 flex max-w-[90%] lg:max-w-[70%] mx-auto">
          <span className="text-neutral-500 text-base sm:text-lg md:text-xl lg:text-2xl font-orbitron">
            {String(i + 1).padStart(2, '0')}
          </span>
          
          <div className="flex-1 mx-4 sm:mx-12 md:mx-24 lg:mx-28 2xl:mx-56">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-neutral-300 mb-8 font-semibold">
              {title}
            </h2>
            <p className="text-neutral-400 text-sm sm:text-lg mb-12">
              {description}
            </p>
            
            {features && !dontShowFeatures && (
              <div className={`${isNarrowScreen ? 'flex flex-row gap-4' : 'space-y-4'}`}>
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center gap-2 ${!isNarrowScreen && 'border-b border-zinc-800 pb-4 last:border-b-0'} ${isNarrowScreen && 'shrink-0'}`}
                  >
                    <span className="text-neutral-500 text-xs shrink-0">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className={`text-neutral-300 font-semibold ${isNarrowScreen ? 'text-sm' : 'text-md sm:text-lg md:text-xl lg:text-2xl'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="text-neutral-500 text-xl sm:text-2xl md:text-3xl h-min">
            {i === 0 && '★'}
            {i === 1 && '⬡'}
            {i === 2 && '▲'}
            {i === 3 && '◆'}
            {i === 4 && '⏣'}
          </div>
        </div>

        {/* Mobile layout (hidden on lg and above) */}
        <div className="flex flex-col gap-8 p-6 lg:hidden">
          <div className="flex items-center gap-4">
            <span className="text-neutral-500 text-base sm:text-lg md:text-xl font-orbitron">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h2 className="text-xl sm:text-3xl md:text-4xl text-neutral-300 font-semibold">
              {title}
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-neutral-400 text-sm sm:text-lg">
              {description}
            </p>
            
            {features && (
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 border-b border-zinc-800 pb-4 last:border-b-0"
                  >
                    <span className="text-neutral-500 text-sm">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="text-neutral-300 text-base font-semibold">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;