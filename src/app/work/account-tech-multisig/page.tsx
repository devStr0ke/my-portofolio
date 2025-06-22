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
        title="Account Tech Multisig"
        role="Front-End Development & Smart Contract Integration"
        techStack={["Next.js", "Tailwind CSS", "SUI stack"]}
        location="Remote"
        year="2025"
      />
      <Spacer mobileSize="xs" size="xs" />
      <ProjectSection
        title="Account Tech Multisig"
        projectName="accounttechmultisig"
        websiteUrl="https://multisig.account.tech/"
        buttonLabel="Visit Live Website"
        isMobileShowcase={false}
        firstDescription="Account.Tech’s Multisig is a decentralized coordination tool built on the Sui blockchain that allows trusted groups to manage shared assets and operations securely. It enables on-chain execution through a powerful intent-based system, combining flexibility with strong access control."
        secondDescription="Users gain access to a Multisig Smart Account by invitation, allowing them to create proposals and vote on key actions such as token transfers, contract upgrades, or asset management. Every interaction is fully on-chain, transparent, and enforced by Sui-native logic."
        thirdDescription="I contributed to both the front-end development and smart contract integration of the Multisig application, focusing on delivering a seamless and secure experience for authorized participants. The result is a clean, responsive platform that brings trust and structure to collective decision-making."
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