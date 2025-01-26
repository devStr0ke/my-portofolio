"use client";
import { FloatingNav } from "@/components/FloatingNav";
import ZoomParallax from "../../components/AboutComponent/ZoomParallax";
import Description from "@/components/AboutComponent/Description";
import Section from "@/components/AboutComponent/Section";
import MultipleImageSection from "@/components/AboutComponent/MultipleImageSection";
import { Spacer } from "@/components/Spacer";
import Footer from "@/components/Footer/Footer";
import Lenis from "lenis";
import { useEffect } from "react";

const descriptionText1 = [
  { text: "Beyond" },
  { text: "my" },
  { text: "technical expertise" },
  { text: "I'm" },
  { text: "passionate" },
  { text: "about" },
  { text: "combat sports," },
  { text: "particularly" },
  { text: "submission", color: "rgb(99 102 241)" },
  { text: "grappling", color: "rgb(99 102 241)" },
];

const descriptionText2 = [
  { text: "Exploring" },
  { text: "the" },
  { text: "world" },
  { text: "fuels" },
  { text: "my" },
  { text: "curiosity" },
  { text: "for" },
  { text: "new" },
  { text: "adventures", color: "rgb(99 102 241)" },
  { text: "discoveries", color: "rgb(99 102 241)" },
  { text: "and" },
  { text: "experiences", color: "rgb(99 102 241)" },
];

const descriptionText3 = [
  { text: "I'm" },
  { text: "an" },
  { text: "espresso" },
  { text: "aficionado," },
  { text: "with" },
  { text: "a" },
  { text: "keen" },
  { text: "interest" },
  { text: "in" },
  { text: "drinking", color: "rgb(99 102 241)" },
  { text: "quality", color: "rgb(99 102 241)" },
  { text: "espresso", color: "rgb(99 102 241)" },
];

export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()
   
    function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  },[])

  return (
    <>
      <FloatingNav disableScroll={true} />
      <div className="w-full h-full">
        <Spacer mobileSize="sm" size="md" />
        <div className="max-w-[90%] lg:max-w-[68%] mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal mb-16 md:mb-32 text-neutral-500">
            Beyond the code
          </h1>
        </div>
        <ZoomParallax />
        <Spacer size="sm" />
        <Description descriptionText={descriptionText1} />
        <Spacer size="sm" />
        <Section imageSrc="/about/bw/limouxFight.png" mobileImageSrc="/about/bw/limoux.png" text="2023-11 - Limoux Fight" />
        <Spacer size="sm" />
        <Description descriptionText={descriptionText2} />
        <Spacer size="sm" />
        <MultipleImageSection />
        <Spacer size="sm" />
        <Description descriptionText={descriptionText3} />
        <Spacer size="sm" />
      </div>
      <Footer />
    </>
  );
}