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
  { text: "I'm" },
  { text: "a" },
  { text: "submission", color: "rgb(99 102 241)" },
  { text: "grappling", color: "rgb(99 102 241)" },
  { text: "coach" },
  { text: "aiming" },
  { text: "to" },
  { text: "share" },
  { text: "my" },
  { text: "knowledge" },
  { text: "with" },
  { text: "athletes" },
  { text: "focused" },
  { text: "on" },
  { text: "details" },
  { text: "and" },
  { text: "excellence" }
];

const descriptionText2 = [
  { text: "I" },
  { text: "also" },
  { text: "love" },
  { text: "to" },
  { text: "explore" },
  { text: "the" },
  { text: "world," },
  { text: "it" },
  { text: "fuels" },
  { text: "my" },
  { text: "curiosity" },
  { text: "for" },
  { text: "new" },
  { text: "adventures,", color: "rgb(99 102 241)" },
  { text: "discoveries", color: "rgb(99 102 241)" },
  { text: "and" },
  { text: "experiences", color: "rgb(99 102 241)" }
];

const descriptionText3 = [
  { text: "I" },
  { text: "love" },
  { text: "espresso" },
  { text: "and" },
  { text: "good" },
  { text: "food," },
  { text: "always" },
  { text: "seeking", color: "rgb(99 102 241)" },
  { text: "quality", color: "rgb(99 102 241)" },
  { text: "experiences", color: "rgb(99 102 241)" },
];

const descriptionText4 = [
  { text: "I" },
  { text: "hope" },
  { text: "you" },
  { text: "enjoyed" },
  { text: "getting" },
  { text: "to" },
  { text: "know" },
  { text: "me" },
  { text: "better," },
  { text: "the", color: "rgb(99 102 241)" },
  { text: "person", color: "rgb(99 102 241)" },
  { text: "behind", color: "rgb(99 102 241)" },
  { text: "the" },
  { text: "code." }
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
        <Section imageSrc="limouxFight.png" mobileSrc="limoux.png" text="2023-11 - Limoux Fight" />
        <Spacer size="sm" />
        <Description descriptionText={descriptionText2} />
        <Spacer size="sm" />
        <MultipleImageSection />
        <Spacer size="sm" />
        <Description descriptionText={descriptionText3} />
        <Spacer size="sm" />
        <Section imageSrc="takoAndEspresso.png" mobileSrc="minifundi.png" text="" />
        <Spacer size="sm" />
        <Description descriptionText={descriptionText4} />
        <Spacer mobileSize="md"size="lg" />
      </div>
      <Footer />
    </>
  );
}