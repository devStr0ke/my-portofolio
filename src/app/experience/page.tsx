"use client";
import { FloatingNav } from "@/components/FloatingNav";
import { Spacer } from "@/components/Spacer";
import StickyCard from "@/components/StickyCard";
import Footer from "@/components/Footer/Footer";
import Lenis from "lenis";
import { useEffect } from "react";
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
  })

  const experiences = t.experiencePage.experiences.map((exp) => ({
    ...exp,
    color: "#0a0a0a"
  }));


  return (
    <>
      <FloatingNav disableScroll={true} />
      <div className="w-full h-full">
        <Spacer mobileSize="sm" size="md" />
        <div className="max-w-[90%] lg:max-w-[68%] mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal mb-16 md:mb-32 text-neutral-500">
            {t.experiencePage.title}
          </h1>
        </div>
        <Spacer mobileSize="xxs" size="xxs" />
        <div className="relative">
          {experiences.map((experience, i) => (
            <StickyCard
              key={i}
              total={experiences.length}
              i={i}
              title={experience.title}
              description={experience.description}
              color={experience.color}
              features={experience.features}
            />
          ))}
        </div>
      </div>
      <Spacer mobileSize="sm" size="md" />
      <Footer />
    </>
  );
}