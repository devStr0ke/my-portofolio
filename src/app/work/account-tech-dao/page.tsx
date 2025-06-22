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
        title="Account Tech DAO"
        role="Front-End Development & Smart Contract Integration"
        techStack={["Next.js", "Tailwind CSS", "Mysten Wallet", "Supabase", "Sui"]}
        location="Remote"
        year="2025"
      />
      <Spacer mobileSize="xs" size="xs" />
      <ProjectSection
        title="Account Tech DAO"
        projectName="accounttechdao"
        websiteUrl="https://dao.account.tech/"
        buttonLabel="Visit Live Website"
        buttonTopOffset="-top-0"
        isMobileShowcase={false}
        firstDescription="The DAO app by Account.Tech is a decentralized governance platform built on Sui that redefines how communities and protocols make decisions. It brings transparency, flexibility, and full on-chain execution to decentralized operations through a powerful intent-based model."
        secondDescription="Participants govern through Smart Accounts linked to NFTs or fungible tokens, enabling secure proposal submissions and voting on-chain. The app supports default actions like airdrops, package upgrades, and vesting, while integrating seamlessly with Sui-native assets and third-party packages."
        thirdDescription="I worked on both the front-end and smart contract integration of the DAO app, crafting a smooth user experience that connects governance logic directly with the blockchain. The result is a robust, transparent tool that empowers on-chain communities to coordinate effectively and securely."
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