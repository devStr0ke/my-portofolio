"use client";
import { FloatingNav } from "@/components/FloatingNav";
import ProjectHeader from "@/components/ProjectPresentation/ProjectHeader";
import { Spacer } from "@/components/Spacer";
import ProjectSection from "@/components/ProjectPresentation/ProjectSection";

export default function Home() {

  return (
    <>
      <FloatingNav disableScroll={true} />
      <Spacer mobileSize="sm" size="md" />
      <ProjectHeader 
        title="MG Événements"
        role="Design & Development"
        credits={{
          design: ["Eva Bardeau"],
        }}
        location="Toulouse, France"
        year="2024"
      />
      <Spacer mobileSize="xs" size="xs" />
      <ProjectSection
        title="MG Événements"
        mainImage="/mgevenements/main.png"
        macImage="/mgevenements/mac.png"
        websiteUrl="https://mgevenements.fr/"
        firstDescription="MG Événements is a boutique event planning agency based in Toulouse, France. I crafted their digital presence to reflect their dedication to creating unforgettable moments, with a design that balances elegance and functionality."
        secondDescription="Every pixel was meticulously placed, every interaction carefully crafted. The portfolio section became a canvas where technology meets artistry."
      />
    </>
  );
}
