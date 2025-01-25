"use client";
import { FloatingNav } from "@/components/FloatingNav";
import ZoomParallax from "@/components/AboutComponent/ZoomParallax";
import Description from "@/components/AboutComponent/Description";
import Section from "@/components/AboutComponent/Section";
import { Spacer } from "@/components/Spacer";
import Footer from "@/components/Footer/Footer";
import Lenis from "lenis";
import { useEffect } from "react";

const descriptionText = [
  { text: "Beyond" },
  { text: "my" },
  { text: "technical expertise" },
  { text: "I'm" },
  { text: "passionate" },
  { text: "about" },
  { text: "combat sports," },
  { text: "particularly" },
  { text: "submission grappling", color: "rgb(99 102 241)" },
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
        <Description descriptionText={descriptionText} />
        <Section imageSrc="/about/limouxFight.png" text="2023-11 - Limoux Fight" />
        <Description descriptionText={descriptionText} />
        <Section imageSrc="/about/limouxFight.png" text="2023-11 - Limoux Fight" />
        <Spacer />
      </div>
      <Footer />
    </>
  );
}