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
  import Magnetic from "@/components/Magnetic";
  import { GravityButton } from "./GravityButton";
import Link from "next/link";

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
        className="h-[100vh] bg-neutral-950 text-neutral-100"
      >
        <div className="sticky top-0 flex h-screen flex-col justify-between overflow-hidden">
          <Nav />
          <CenterCopy />
          <motion.p
            style={{ skewX, x }}
            className="font-orbitron origin-bottom-left whitespace-nowrap text-6xl font-black uppercase leading-[0.85] md:text-7xl 2xl:text-8xl md:leading-[0.85]"
          >
            Full Stack Developer • Creative Problem Solver • Full Stack Developer • Creative Problem Solver
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
      <div className="absolute right-4 top-1/2 h-fit -translate-y-1/2 translate-x-0 text-2xl font-bold md:right-1/2 md:translate-x-1/2">
        <nav className="flex flex-col gap-1 uppercase text-left text-sm xl:text-base">
        <Magnetic>
            <div className="group relative inline-block overflow-hidden">
              <Link href="/" className={`flex cursor-pointer group text-neutral-100 font-bold`}>
                <p className="m-0 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:rotate-[360deg]">©</p>
                <div className="flex relative overflow-hidden whitespace-nowrap ml-[5px] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:pr-[30px]">
                  <p className="relative transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-x-full">Code by</p>
                  <p className="relative transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] pl-[0.3em] group-hover:-translate-x-[68px] xl:group-hover:-translate-x-[78px]">Samuel</p>
                  <p className="absolute left-[133px] xl:left-[145px] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] pl-[0.3em] group-hover:-translate-x-[75px]">Coelho</p>
                </div>
              </Link>
            </div>
          </Magnetic>
        </nav>
      </div>
    );
  };
  
  const SocialLinks = () => {
    return (
      <div className="hidden md:flex gap-4">
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
      <div className="flex gap-6 capitalize text-sm xl:text-base text-neutral-500 font-orbitron">
        <Magnetic><Link href="/about" className="font-bold uppercase cursor-pointer hover:text-indigo-600">About</Link></Magnetic>
        <Magnetic><Link href="/experience" className="font-bold uppercase cursor-pointer hover:text-indigo-600">Experience</Link></Magnetic>
        <Magnetic><Link href="/work" className="font-bold uppercase cursor-pointer hover:text-indigo-600">Work</Link></Magnetic>
        <Magnetic><Link href="/contact" className="font-bold uppercase cursor-pointer hover:text-indigo-600">Contact</Link></Magnetic>
      </div>
    );
  };
  
  const CenterCopy = () => {
    return (
      <div className="flex flex-col items-center justify-center mx-auto w-full text-center">
        <h1 className="text-4xl sm:text-6xl md:text-6xl 2xl:text-8xl">
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
        <GravityButton className="mt-8" href="#about">
          
        </GravityButton>
      </div>
    );
  };
  
  const ScrollArrow = () => {
    return (
      <>
        <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 text-xs text-neutral-500 lg:block font-orbitron">
          <span
            style={{
              writingMode: "vertical-lr",
            }}
          >
            SCROLL
          </span>
          <FiArrowDown className="mx-auto mt-2" />
        </div>
        <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 text-xs text-neutral-500 lg:block font-orbitron">
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