"use client";
import { FloatingNav } from "@/components/FloatingNav";
import ProjectHeader from "@/components/ProjectPresentation/ProjectHeader";
import { Spacer } from "@/components/Spacer";
import ProjectSection from "@/components/ProjectPresentation/ProjectSection";
import ProjectFooter from "@/components/ProjectFooter/ProjectFooter";
import { useRef, useEffect } from "react";
import Lenis from 'lenis';
import { useTranslations } from "@/i18n/LanguageContext";

export default function Home() {
  // Explicitly type the ref as non-null
  const triggerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslations();

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
      <FloatingNav disableScroll={true} footerId="project-footer" />
      <Spacer mobileSize="sm" size="md" />
      <ProjectHeader 
        title="Halcyon Labs"
        role={t.projects.halcyonLabs.role}
        techStack={["Next.js", "Tailwind CSS", "Mysten Wallet", "Supabase"]}
        location="Toulouse, France"
        year="2024"
      />
      <Spacer mobileSize="xs" size="xs" />
      <ProjectSection
        title="Halcyon Labs"
        projectName="halcyon"
        websiteUrl="https://github.com/HalcyonBuilders/halcyon-website"
        buttonLabel={t.projects.halcyonLabs.buttonLabel}
        firstDescription={t.projects.halcyonLabs.firstDescription}
        secondDescription={t.projects.halcyonLabs.secondDescription}
        thirdDescription={t.projects.halcyonLabs.thirdDescription}
        //credits={{
        //  name: "Thouny",
        //  linkedIn: "https://github.com/thounyy",
        //  text: "Special thanks to Thouny for his collaboration on the project"
        //}}
      />
      <div ref={triggerRef}>
        <ProjectFooter nextProject={{
          title: "Account Tech Multisig",
          href: "/work/account-tech-multisig",
          nextProjectName: "accounttechmultisig",
          color: "#28282B"
        }} triggerRef={triggerRef as React.RefObject<HTMLDivElement>} />
      </div>
    </>
  );
}