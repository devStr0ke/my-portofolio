"use client";
import { FloatingNav } from "@/components/FloatingNav";
import ProjectHeader from "@/components/ProjectPresentation/ProjectHeader";
import { Spacer } from "@/components/Spacer";
import ProjectSection from "@/components/ProjectPresentation/ProjectSection";
import ProjectFooter from "@/components/ProjectFooter/ProjectFooter";
import { useRef, useEffect } from "react";
import Lenis from 'lenis';

export default function Home() {
  // Explicitly type the ref as non-null
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      <FloatingNav disableScroll={true} />
      <Spacer mobileSize="sm" size="md" />
      <ProjectHeader 
        title="MG Événements"
        role="Design & Development"
        techStack={["Next.js", "Tailwind CSS", "Supabase", "Framer Motion"]}
        location="Toulouse, France"
        year="2024"
      />
      <Spacer mobileSize="xs" size="xs" />
      <ProjectSection
        title="MG Événements"
        mainImage="/mgevenements/main.png"
        macImage="/mgevenements/mac.png"
        macImage2="/mgevenements/mac2.png"
        websiteUrl="https://mgevenements.fr/"
        firstDescription="MG Événements is a boutique event planning agency based in Toulouse, France. I crafted their digital presence to reflect their dedication to creating unforgettable moments, with a design that balances elegance and functionality."
        secondDescription="Every pixel was meticulously placed, every interaction carefully crafted. MG Événements became a canvas where technology meets artistry."
        thirdDescription="The website is built with Next.js, Tailwind CSS, and Framer Motion, ensuring a seamless user experience across all devices."
        mobile1="/mgevenements/mobile1.png"
        mobile2="/mgevenements/mobile2.png"
        mobile3="/mgevenements/mobile3.png"
        credits={{
          name: "Eva Bardeau",
          linkedIn: "https://www.linkedin.com/in/eva-bardeau-95ba311aa/",
          text: "Special thanks to Eva for her invaluable design insights and skills as a front-end developer"
        }}
      />
      <div ref={triggerRef}>
        <ProjectFooter nextProject={{
          title: "MGE Dashboard",
          href: "/work/mge-dashboard",
          image: "/mgedashboard/main.png",
          color: "#e5e5e5"
        }} triggerRef={triggerRef as React.RefObject<HTMLDivElement>} />
      </div>
    </>
  );
}