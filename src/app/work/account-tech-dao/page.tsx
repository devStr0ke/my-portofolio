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
      <FloatingNav disableScroll={true} footerId="project-footer" />
      <Spacer mobileSize="sm" size="md" />
      <ProjectHeader 
        title="Account Tech DAO"
        role={t.projects.accountTechDao.role}
        techStack={["Next.js", "Tailwind CSS", "Sui Stack"]}
        location="Remote"
        year="2025"
      />
      <Spacer mobileSize="xs" size="xs" />
      <ProjectSection
        title="Account Tech DAO"
        projectName="accounttechdao"
        websiteUrl="https://dao.account.tech/"
        buttonLabel={t.projects.accountTechDao.buttonLabel}
        isMobileShowcase={false}
        firstDescription={t.projects.accountTechDao.firstDescription}
        secondDescription={t.projects.accountTechDao.secondDescription}
        thirdDescription={t.projects.accountTechDao.thirdDescription}
        //credits={{
        //  name: "Thouny",
        //  linkedIn: "https://github.com/thounyy",
        //  text: "Special thanks to Thouny for his collaboration on the project"
        //}}
      />
      <div ref={triggerRef}>
        <ProjectFooter nextProject={{
          title: "MG Événements",
          href: "/work/mg-evenements",
          nextProjectName: "mgevenements",
          color: "#737373"
        }} triggerRef={triggerRef as React.RefObject<HTMLDivElement>} />
      </div>
    </>
  );
}