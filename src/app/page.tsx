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
import { useTranslations } from "@/i18n/LanguageContext";

export default function Home() {
  const { t } = useTranslations();

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
          <RoundedButton href='/about' color='light' className='flex justify-center items-center font-orbitron'>{t.buttons.moreAboutMe}</RoundedButton>
        </div>
        <Spacer mobileSize="md" size="lg" />
        <ExperienceSection />
        <Spacer size="sm" />
        <HistorySection />
        <Spacer size="xxs" mobileSize="xxxs" />
        <div className="flex justify-center items-center">
          <RoundedButton href='/experience' color='light' className='flex justify-center items-center font-orbitron'>{t.buttons.detailedExperience}</RoundedButton>
        </div>
        <Spacer mobileSize="md" size="lg" />
        <ProjectsSection />
        <Spacer size="sm" />
        <Work />
        <Spacer size="xxs" mobileSize="xxxs" />
        <div className="flex justify-center items-center">
          <RoundedButton href='/work' color='light' className='flex justify-center items-center font-orbitron'>{t.buttons.allWork}</RoundedButton>
        </div>
        <Spacer mobileSize="md"size="lg" />
        <MyMottoSection />
        <Spacer mobileSize="md"size="lg" />
        <Footer />
      </div>
    </>
  );
}
