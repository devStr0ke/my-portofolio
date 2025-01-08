import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const AboutSection = () => {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "center center"]
  });

  // Add this transform for the width animation
  const widthProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
          
          <div className="flex justify-center relative">
            {/* Add overlapping text layer with mask effect */}
            <motion.div 
              className="absolute inset-0 overflow-hidden"
              style={{ width: widthProgress }}
            >
              <span className="text-red-500 font-bold text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-[6.1rem] 3xl:text-8xl tracking-tighter whitespace-nowrap">
                I'm a skilled developer focused on creating efficient, scalable web solutions & exploring the potential of web3.
              </span>
            </motion.div>
            {/* Original text layer */}
            <span className="text-neutral-500 font-bold text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-[6.1rem] 3xl:text-8xl tracking-tighter">
              I'm a skilled developer focused on creating efficient, scalable web solutions & exploring the potential of web3.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;