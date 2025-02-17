"use client";
import { FloatingNav } from "@/components/FloatingNav";
import { Spacer } from "@/components/Spacer";
import StickyCard from "@/components/StickyCard";
import Footer from "@/components/Footer/Footer";
import Lenis from "lenis";
import { useEffect } from "react";  


export default function Home() {
  
  useEffect( () => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  const experiences = [
    {
      title: "MIAGE Master's Degree",
      description: "Completed a comprehensive 5-year Master's program in Computer Science (MIAGE) at Paul Sabatier University from 2019 to 2024. The program provided a strong foundation in both technical and business aspects of information systems.",
      features: [
        "Computer Science Fundamentals",
        "Software Engineering",
        "Business Information Systems",
      ],
      color: "#0a0a0a",
    },
    {
      title: "INSPI Internship",
      description: "Completed a 6-month internship at INSPI from April to September 2022, focusing on modernizing their application infrastructure. Part of the frontend redesign initiative while gaining valuable full-stack development experience.",
      features: [
        "Vue.js Frontend Development",
        "Ruby Backend Development",
        "UI/UX Redesign",
      ],
      color: "#0a0a0a",
    },
    {
      title: "Dassault Systèmes",
      description: "Joined as a full-stack developer through a work-study program during my 4th and 5th year of MIAGE (2022-2024). Led the migration from Vue.js to React.js while maintaining and improving core functionalities.",
      features: [
        "React.js Migration",
        "Ruby Backend Development",
        "Performance Optimization"
      ],
      color: "#0a0a0a",
    },
    {
      title: "Freelance Web3 Developer",
      description: "Currently working with GMove on account.tech, developing a Smart Account protocol for the Sui blockchain. Focusing on creating intuitive and secure interfaces for Web3 applications.",
      features: [
        "UI/UX Engineering",
        "Smart Contract Integration",
        "DApp Development"
      ],
      color: "#0a0a0a",
    }
  ];


  return (
    <>
      <FloatingNav disableScroll={true} />
      <div className="w-full h-full">
        <Spacer mobileSize="sm" size="md" />
        <div className="max-w-[90%] lg:max-w-[68%] mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal mb-16 md:mb-32 text-neutral-500">
            My Experience
          </h1>
        </div>
        <Spacer mobileSize="xxs" size="xxs" />
        <div className="relative">
          {experiences.map((experience, i) => (
            <StickyCard
              key={i}
              i={i}
              title={experience.title}
              description={experience.description}
              color={experience.color}
              features={experience.features}
            />
          ))}
        </div>
      </div>
      <Spacer mobileSize="sm" size="md" />
      <Footer />
    </>
  );
}