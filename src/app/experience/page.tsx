"use client";
import { FloatingNav } from "@/components/FloatingNav";
import { Spacer } from "@/components/Spacer";
import StickyCard from "@/components/CardTest/StickyCard";
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
      title: "Front-End Development",
      description: "Specializing in React, Next.js, and TypeScript to build modern, responsive web applications. Proficient in creating seamless user experiences with advanced animations and interactions using Framer Motion and GSAP.",
      features: [
        "CMS Integration",
        "Motion & Animations",
        "3D Development"
      ],
      number: "01",
      color: "#0a0a0a"
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing interfaces using Tailwind CSS and modern design principles. Strong focus on responsive design, accessibility, and performance optimization.",
      number: "02",
      color: "#0a0a0a"
    },
    {
      title: "State Management",
      description: "Expert in implementing complex state management solutions using Redux, Zustand, and React Context. Experience with real-time data synchronization and optimizing application performance.",
      number: "03",
      color: "#0a0a0a"
    },
    {
      title: "API Integration",
      description: "Skilled in integrating RESTful APIs and GraphQL endpoints, implementing efficient data fetching strategies, and managing complex data flows in modern web applications.",
      number: "04",
      color: "#0a0a0a"
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
      <Footer />
    </>
  );
}