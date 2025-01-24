"use client";
import { FloatingNav } from "@/components/FloatingNav";
import { Intro } from "@/components/AboutComponent/Intro";
import Description from "@/components/AboutComponent/Description";
import Section from "@/components/AboutComponent/Section";
import { Spacer } from "@/components/Spacer";
import Footer from "@/components/Footer/Footer";

const descriptionText = [
  { text: "Beyond" },
  { text: "my" },
  { text: "technical expertise", color: "rgb(99 102 241)" },
  { text: "I'm" },
  { text: "passionate" },
  { text: "about" },
  { text: "combat sports," },
  { text: "particularly" },
  { text: "submission grappling" },
  // Add more text objects as needed
];

export default function Home() {
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
        <Spacer mobileSize="sm" size="md" />
        <Section imageSrc="/about/fightHexa.png" text="2024-06 - Corner of Owen Jason" />
        <Description descriptionText={descriptionText} />
        <Section imageSrc="/about/limouxFight.png" text="2023-11 - Limoux Fight" />
        <Spacer />
      </div>
      <Footer />
    </>
  );
}