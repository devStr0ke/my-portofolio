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
  import GravityIcon from "./GravityIcon";
  import { TextFlip } from "./TextFlip";
  import { GravityButton } from "./GravityButton";

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
        className="h-[300vh] bg-neutral-950 text-neutral-100"
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
      <>
        <div className="lg:hidden"></div>
        <div className="hidden lg:flex relative mb-1 flex w-full justify-between p-6">
          <div className="hidden text-xs text-neutral-500 md:block">
            <SocialLinks />
          </div>
          <Logo />
          <div className="flex items-center gap-8">
            <Links />
          </div>
        </div>
      </>
    );
  };
  
  const Logo = () => {
    return (
      <a 
        href="/" 
        className="absolute right-4 top-1/2 h-fit -translate-y-1/2 translate-x-0 text-2xl font-bold text-neutral-100 md:right-1/2 md:translate-x-1/2"
      >
        Samuel Coelho
      </a>
    );
  };
  
  const SocialLinks = () => {
    return (
      <div className="hidden md:flex gap-4 text-neutral-500">
        <GravityIcon 
          icon={<FaGithub size={25} />}
          href="https://github.com/devStr0ke"
        />
        <GravityIcon 
          icon={<FaLinkedin size={25} />}
          href="https://www.linkedin.com/in/samuel-c-293984212/"
        />
      </div>
    );
  };
  
  const Links = () => {
    return (
      <nav className="flex gap-6 capitalize">
        <TextFlip className="text-base font-bold text-neutral-100" href="#about">About</TextFlip>
        <TextFlip className="text-base font-bold text-neutral-100" href="#projects">Experience</TextFlip>
        <TextFlip className="text-base font-bold text-neutral-100" href="#about">Projects</TextFlip>
        <TextFlip className="text-base font-bold text-neutral-100" href="#contact">Contact</TextFlip>
      </nav>
    );
  };
  
  const CenterCopy = () => {
    return (
      <div className="flex flex-col items-center justify-center mx-auto w-full text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
          <div className="text-neutral-500 mb-1">
            <HighLightText>Software engineer,</HighLightText>
          </div>
          <div className="text-neutral-500 mb-2">
            <HighLightText>building for</HighLightText>
          </div>
          <div className="text-neutral-500">
            <HighLightText>the</HighLightText>{" "}
            <span className="text-indigo-600 italic">
              <HighLightText>web.</HighLightText>
            </span>
          </div>
        </h1>
        <GravityButton className="mt-8">
          View My Work
        </GravityButton>
      </div>
    );
  };
  
  const ScrollArrow = () => {
    return (
      <>
        <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 text-xs text-neutral-500 lg:block">
          <span
            style={{
              writingMode: "vertical-lr",
            }}
          >
            SCROLL
          </span>
          <FiArrowDown className="mx-auto mt-2" />
        </div>
        <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 text-xs text-neutral-500 lg:block">
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