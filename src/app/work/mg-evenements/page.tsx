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
  const { t } = useTranslations();
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
      <FloatingNav disableScroll={true} footerId="project-footer"/>
      <Spacer mobileSize="sm" size="md" />
      <ProjectHeader 
        title="MG Événements"
        role={t.projects.mgEvenements.role}
        techStack={["Next.js", "Tailwind CSS", "Supabase", "Framer Motion"]}
        location="Toulouse, France"
        year="2024"
      />
      <Spacer mobileSize="xs" size="xs" />
      <ProjectSection
        title="MG Événements"
        projectName="mgevenements"
        websiteUrl="https://mgevenements.fr/"
        buttonLabel={t.projects.mgEvenements.buttonLabel}
        firstDescription={t.projects.mgEvenements.firstDescription}
        secondDescription={t.projects.mgEvenements.secondDescription}
        thirdDescription={t.projects.mgEvenements.thirdDescription}
        //credits={{
        //  name: "Eva Bardeau",
        //  linkedIn: "https://www.linkedin.com/in/eva-bardeau-95ba311aa/",
        //  text: "Special thanks to Eva for her invaluable design insights and skills as a front-end developer"
        //}}
      />
      <div ref={triggerRef}>
        <ProjectFooter nextProject={{
          title: "MGE Dashboard",
          href: "/work/mge-dashboard",
          nextProjectName: "mgedashboard",
          color: "#e5e5e5"
        }} triggerRef={triggerRef as React.RefObject<HTMLDivElement>} />
      </div>
    </>
  );
}