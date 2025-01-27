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
      <FloatingNav disableScroll={true} footerId="project-footer" />
      <Spacer mobileSize="sm" size="md" />
      <ProjectHeader 
        title="MGE Dashboard"
        role="Database & Development"
        techStack={["Next.js", "Tailwind CSS", "Shadcn/UI", "Supabase"]}
        location="Toulouse, France"
        year="2024"
      />
      <Spacer mobileSize="xs" size="xs" />
      <ProjectSection
        title="MGE Dashboard"
        projectName="mgedashboard"
        websiteUrl="https://github.com/Void-Software-Inc/mge-dashboard"
        buttonLabel="Visit GitHub Repo"
        firstDescription="MGE Dashboard is a custom-built administrative interface designed specifically for MG Événements. This powerful tool seamlessly integrates with their client-facing website, enabling real-time database management and quote processing, creating a fluid workflow between client interactions and business operations."
        secondDescription="At its core, the dashboard provides comprehensive CRUD operations for product management, with instant synchronization to the main website. Every update made in the dashboard is immediately reflected on MG Événements' client platform, ensuring consistent and up-to-date information across all touchpoints."
        thirdDescription="The quote management system streamlines client communication by centralizing all incoming requests from the website. This integration creates a seamless pipeline from client inquiry to quote processing, enabling MG Événements to respond promptly and manage their business operations efficiently."
        credits={{
          name: "Eva Bardeau",
          linkedIn: "https://www.linkedin.com/in/eva-bardeau-95ba311aa/",
          text: "Special thanks to Eva for her valuable insights on how to improve the dashboard's user experience"
        }}
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