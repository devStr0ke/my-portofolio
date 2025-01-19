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
        title="Halcyon Labs"
        role="Design & Front-End Development"
        techStack={["Next.js", "Tailwind CSS", "Mysten Wallet", "Supabase"]}
        location="Toulouse, France"
        year="2024"
      />
      <Spacer mobileSize="xs" size="xs" />
      <ProjectSection
        title="MGE Dashboard"
        mainImage="/halcyon/main.png"
        macImage="/halcyon/mac.png"
        macImage2="/halcyon/mac2.png"
        websiteUrl="https://github.com/HalcyonBuilders/halcyon-website"
        buttonLabel="Visit GitHub Repo"
        firstDescription="Halcyon Labs is a decentralized application built on the Sui blockchain that reimagines whitelist distribution through gamification. The project transforms the traditional whitelist process into an engaging experience where users participate in a unique lottery system."
        secondDescription="Users can mint virtual water bottles on the blockchain, with full bottles representing successful whitelist entries. Empty bottles aren't worthless - collect five of them, and you can try your luck again, adding a strategic layer to the experience."
        thirdDescription="I designed and developed the front-end interface, focusing on creating an intuitive user experience that seamlessly connects with the blockchain. The result is a smooth, engaging platform that makes Web3 technology accessible and fun."
        mobile1="/halcyon/mobile1.png"
        mobile2="/halcyon/mobile2.png"
        mobile3="/halcyon/mobile3.png"
        credits={{
          name: "Thouny",
          linkedIn: "https://github.com/thounyy",
          text: "Special thanks to Thouny for his collaboration on the project"
        }}
      />
      <div ref={triggerRef}>
        <ProjectFooter nextProject={{
          title: "MG Événements",
          href: "/work/mg-evenements",
          image: "/mgevenements/main.png",
          color: "#737373"
        }} triggerRef={triggerRef as React.RefObject<HTMLDivElement>} />
      </div>
    </>
  );
}