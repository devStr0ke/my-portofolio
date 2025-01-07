"use client";
import TerminalContact from "@/components/TerminalContact";
import HeroSection from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { WhatIdoSection } from "@/components/WhatIdoSection";

export default function Home() {
  return (
    <>
      <div className="w-full h-full">
        <HeroSection />
        <AboutSection />
        <WhatIdoSection />
        <TerminalContact />
      </div>
    </>
  );
}
