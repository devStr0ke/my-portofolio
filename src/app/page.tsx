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
        <Spacer mobileSize="md" size="lg" />
        <ExperienceSection />
        <Spacer size="sm" />
        <HistorySection />
        <Spacer mobileSize="md" size="lg" />
        <ProjectsSection />
        <Spacer size="sm" />
        <Work />
        <Spacer mobileSize="md"size="lg" />
        <MyMottoSection />
        <Spacer mobileSize="md"size="lg" />
        <Footer />
      </div>
    </>
  );
}
