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
        firstDescription="The Multisig app by Account.Tech is a secure coordination tool on the Sui blockchain that enables trusted groups to manage assets and actions through collective approval. Built on the same intent-based architecture as the DAO, it offers a robust and flexible approach to shared governance."
        secondDescription="Unlike the DAO, participation in a Multisig requires explicit invitation to a Smart Account. Once inside, members can propose and vote on-chain for actions like token transfers, upgrades, and asset management, all governed by secure, transparent rules native to Sui."
        thirdDescription="I contributed to both the front-end development and smart contract integration of the Multisig app, focusing on crafting a secure and intuitive experience for invited users. The result is a high-trust, low-friction platform that enables seamless collective decision-making in Web3 environments."
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