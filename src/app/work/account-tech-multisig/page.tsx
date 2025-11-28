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
        title="Account Tech Multisig"
        role={t.projects.accountTechMultisig.role}
        techStack={["Next.js", "Tailwind CSS", "SUI stack"]}
        location="Remote"
        year="2025"
      />
      <Spacer mobileSize="xs" size="xs" />
      <ProjectSection
        title="Account Tech Multisig"
        projectName="accounttechmultisig"
        websiteUrl="https://multisig.account.tech/"
        buttonLabel={t.projects.accountTechMultisig.buttonLabel}
        isMobileShowcase={false}
        firstDescription={t.projects.accountTechMultisig.firstDescription}
        secondDescription={t.projects.accountTechMultisig.secondDescription}
        thirdDescription={t.projects.accountTechMultisig.thirdDescription}
        //credits={{
        //  name: "Thouny",
        //  linkedIn: "https://github.com/thounyy",
        //  text: "Special thanks to Thouny for his collaboration on the project"
        //}}
      />
      <div ref={triggerRef}>
        <ProjectFooter nextProject={{
          title: "Account Tech DAO",
          href: "/work/account-tech-dao",
          nextProjectName: "accounttechdao",
          color: "#00b9a6"
        }} triggerRef={triggerRef as React.RefObject<HTMLDivElement>} />
      </div>
    </>
  );
}