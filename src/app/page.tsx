"use client";
import TerminalContact from "@/components/TerminalContact";
import HeroSection from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { WhatIdoSection } from "@/components/WhatIdoSection";
import { HistorySection } from "@/components/HistorySection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { FloatingNav } from "@/components/FloatingNav";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Work } from "@/components/Work/Work";
import { RoundedButton } from "@/components/RoundedButton";
import { Spacer } from "@/components/Spacer";
import { MyMottoSection } from "@/components/MyMottoSection";
import Footer from "@/components/Footer/Footer";
import { useEffect } from "react";
import Lenis from 'lenis';

export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      <div className="w-full h-full">
        <FloatingNav />
        <HeroSection />
        <Spacer mobileSize="md" size="lg" />
        <AboutSection />
        <Spacer size="sm" />
        <WhatIdoSection />
        <Spacer size="xxs" mobileSize="xxxs" />
        <div className="flex justify-center items-center">
          <RoundedButton href='/about' color='light' className='flex justify-center items-center font-orbitron'>More about me</RoundedButton>
        </div>
        <Spacer mobileSize="md" size="lg" />
        <ExperienceSection />
        <Spacer size="sm" />
        <HistorySection />
        <Spacer size="xxs" mobileSize="xxxs" />
        <div className="flex justify-center items-center">
          <RoundedButton href='/experience' color='light' className='flex justify-center items-center font-orbitron'>Detailed experience</RoundedButton>
        </div>
        <Spacer mobileSize="md" size="lg" />
        <ProjectsSection />
        <Spacer size="sm" />
        <Work />
        <Spacer size="xxs" mobileSize="xxxs" />
        <div className="flex justify-center items-center">
          <RoundedButton href='/work' color='light' superscript='5' className='flex justify-center items-center font-orbitron'>All work</RoundedButton>
        </div>
        <Spacer mobileSize="md"size="lg" />
        <MyMottoSection />
        <Spacer mobileSize="md"size="lg" />
        <Footer />
      </div>
    </>
  );
}
