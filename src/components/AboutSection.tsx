import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const AboutSection = () => {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "center center"]
  });

  const AnimatedText = ({ text, className, isHighlighted = false }: { 
    text: string, 
    className?: string,
    isHighlighted?: boolean 
  }) => {
    return (
      <span className={className}>
        {text.split("").map((char, i) => {
            return (
              <motion.span
                key={i}
                style={{
                  color: isHighlighted 
                    ? 'rgb(79 70 229 / var(--opacity))' // indigo-600
                    : 'rgb(82 82 82 / var(--opacity))', // neutral-600
                  '--opacity': useTransform(
                    scrollYProgress, 
                    [0, 0.5, 1], 
                    [0.02, 0.5, 1]
                  )
                } as any}
              >
                {char}
              </motion.span>
            );
          })}
      </span>
    );
  };

  return (
    <section
      ref={targetRef}
      id="about"
      className="min-h-screen bg-neutral-950 text-neutral-100"
    >
      <div className="flex flex-col justify-center h-screen ml-4 sm:ml-8 max-w-[90%] sm:max-w-[75%] md:max-w-[90%] lg:max-w-[68%] md:mx-auto">
        <motion.div className="flex flex-col">
          <span className="text-neutral-400 font-bold text-base uppercase mb-6 block tracking-widest">
            About me
          </span>
          
          <div className="flex justify-center">
            <span className="text-neutral-500 font-bold text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-[6.1rem] 3xl:text-8xl tracking-tighter">
              <AnimatedText text="I'm a " />
              <AnimatedText text="skilled developer" isHighlighted />
              <AnimatedText text=" focused " />
              <AnimatedText text="on " />
              <AnimatedText text="creating " />
              <AnimatedText text="efficient, " />
              <AnimatedText text="scalable " />
              <AnimatedText text="web " />
              <AnimatedText text="solutions & " />
              <AnimatedText text="exploring the potential of " />
              <AnimatedText text="web3. " />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;