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
        title="MGE Dashboard"
        role={t.projects.mgeDashboard.role}
        techStack={["Next.js", "Tailwind CSS", "Shadcn/UI", "Supabase"]}
        location="Toulouse, France"
        year="2024"
      />
      <Spacer mobileSize="xs" size="xs" />
      <ProjectSection
        title="MGE Dashboard"
        projectName="mgedashboard"
        websiteUrl="https://github.com/Void-Software-Inc/mge-dashboard"
        buttonLabel={t.projects.mgeDashboard.buttonLabel}
        firstDescription={t.projects.mgeDashboard.firstDescription}
        secondDescription={t.projects.mgeDashboard.secondDescription}
        thirdDescription={t.projects.mgeDashboard.thirdDescription}
        //credits={{
        //  name: "Eva Bardeau",
        //  linkedIn: "https://www.linkedin.com/in/eva-bardeau-95ba311aa/",
        //  text: "Special thanks to Eva for her valuable insights on how to improve the dashboard's user experience"
        //}}
      />
      <div ref={triggerRef}>
        <ProjectFooter nextProject={{
          title: "Halcyon Labs",
          href: "/work/halcyon-labs",
          nextProjectName: "halcyon",
          color: "#000000"
        }} triggerRef={triggerRef as React.RefObject<HTMLDivElement>} />
      </div>
    </>
  );
}