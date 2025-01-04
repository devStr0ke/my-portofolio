import {
    motion,
    useScroll,
    useVelocity,
    useTransform,
    useSpring,
  } from "framer-motion";
  import React, { useRef } from "react";
  import { FiArrowDown } from "react-icons/fi";
  import { FaGithub, FaLinkedin} from "react-icons/fa";
  import HighLightText from "./HighLightText";
  
  export const HeroSection = () => {
    const targetRef = useRef(null);
  
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start start", "end start"],
    });
  
    const scrollVelocity = useVelocity(scrollYProgress);
  
    const skewXRaw = useTransform(scrollVelocity, [-1, 1], ["45deg", "-45deg"]);
    const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });
  
    const xRaw = useTransform(scrollYProgress, [0, 1], [0, -3000]);
    const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });
  
    return (
      <section
        ref={targetRef}
        className="h-[300vh] bg-neutral-950 text-neutral-50"
      >
        <div className="sticky top-0 flex h-screen flex-col justify-between overflow-hidden">
          <Nav />
          <CenterCopy />
          <motion.p
            style={{ skewX, x }}
            className="origin-bottom-left whitespace-nowrap text-5xl font-black uppercase leading-[0.85] md:text-7xl md:leading-[0.85]"
          >
            Full Stack Developer • Next.js Expert • Creative Problem Solver • Building Digital Experiences
          </motion.p>
          <ScrollArrow />
        </div>
      </section>
    );
  };
  
  const Nav = () => {
    return (
      <div className="relative mb-1 flex w-full justify-between p-6">
        <p className="hidden text-xs text-neutral-400 md:block">
          Full Stack Developer
          Available for Work
        </p>
        <Logo />
        <div className="flex items-center gap-8">
          <SocialLinks />
          <Links />
        </div>
      </div>
    );
  };
  
  const Logo = () => {
    return (
      <a 
        href="/" 
        className="absolute right-4 top-1/2 h-fit -translate-y-1/2 translate-x-0 text-2xl font-bold text-neutral-50 md:right-1/2 md:translate-x-1/2"
      >
        Samuel Coelho
      </a>
    );
  };
  
  const SocialLinks = () => {
    return (
      <div className="hidden md:flex gap-4 text-neutral-400">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-50 transition-colors">
          <FaGithub size={20} />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-50 transition-colors">
          <FaLinkedin size={20} />
        </a>
      </div>
    );
  };
  
  const Links = () => {
    return (
      <nav className="flex gap-6 text-sm">
        <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
        <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
        <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
      </nav>
    );
  };
  
  const CenterCopy = () => {
    return (
      <div className="flex flex-col items-center justify-center px-12 max-w-7xl mx-auto w-full text-center">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
          <div className="text-neutral-400">
            <HighLightText>Software engineer,</HighLightText>
          </div>
          <div className="text-neutral-400">
            <HighLightText>building for</HighLightText>
          </div>
          <div className="text-neutral-400">
            <HighLightText>the</HighLightText>{" "}
            <span className="text-neutral-50">
              <HighLightText>web.</HighLightText>
            </span>
          </div>
        </h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-600 transition-colors"
        >
          View My Work
        </motion.button>
      </div>
    );
  };
  
  const ScrollArrow = () => {
    return (
      <>
        <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 text-xs text-neutral-400 lg:block">
          <span
            style={{
              writingMode: "vertical-lr",
            }}
          >
            SCROLL
          </span>
          <FiArrowDown className="mx-auto mt-2" />
        </div>
        <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 text-xs text-neutral-400 lg:block">
          <span
            style={{
              writingMode: "vertical-lr",
            }}
          >
            SCROLL
          </span>
          <FiArrowDown className="mx-auto mt-2" />
        </div>
      </>
    );
  };
  
  export default HeroSection;