import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-neutral-950 text-neutral-100"
    >
      <div className="flex flex-col justify-center h-screen ml-4 sm:ml-8 max-w-[90%] sm:max-w-[75%] md:max-w-[90%] lg:max-w-[68%] md:mx-auto">
        <motion.div
          className="flex flex-col"
        >
          <span className="text-neutral-400 font-bold text-base uppercase mb-6 block tracking-widest">
            About me
          </span>
          
          <div className="flex justify-center">
            <span className="text-neutral-500 font-bold text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-[6.1rem] 3xl:text-8xl tracking-tighter">
              I'm a <span className="text-indigo-600">skilled developer</span> focused on creating efficient, scalable web solutions & exploring the potential of web3.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;