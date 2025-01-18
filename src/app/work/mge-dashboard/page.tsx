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
        title="MGE Dashboard"
        role="Database & Development"
        credits={{
          design: ["Eva Bardeau"],
        }}
        location="Toulouse, France"
        year="2024"
      />
      <Spacer mobileSize="xs" size="xs" />
      <ProjectSection
        title="MGE Dashboard"
        mainImage="/mgedashboard/main.png"
        macImage="/mgedashboard/mac.png"
        macImage2="/mgedashboard/mac2.png"
        websiteUrl="https://github.com/Void-Software-Inc/mge-dashboard"
        firstDescription="MGE Dashboard is a custom-built administrative interface designed specifically for MG Événements. This powerful tool seamlessly integrates with their client-facing website, enabling real-time database management and quote processing, creating a fluid workflow between client interactions and business operations."
        secondDescription="At its core, the dashboard provides comprehensive CRUD operations for product management, with instant synchronization to the main website. Every update made in the dashboard is immediately reflected on MG Événements' client platform, ensuring consistent and up-to-date information across all touchpoints."
        thirdDescription="The quote management system streamlines client communication by centralizing all incoming requests from the website. This integration creates a seamless pipeline from client inquiry to quote processing, enabling MG Événements to respond promptly and manage their business operations efficiently."
        mobile1="/mgedashboard/mobile1.png"
        mobile2="/mgedashboard/mobile2.png"
        mobile3="/mgedashboard/mobile3.png"
      />
      <div ref={triggerRef}>
        <ProjectFooter nextProject={{
          title: "Halcyon Labs",
          href: "/work/halcyon-labs",
          image: "/halcyon/main.png",
          color: "#000000"
        }} triggerRef={triggerRef as React.RefObject<HTMLDivElement>} />
      </div>
    </>
  );
}