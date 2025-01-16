"use client";
import { FloatingNav } from "@/components/FloatingNav";
import ProjectHeader from "@/components/ProjectPresentation/ProjectHeader";
import { Spacer } from "@/components/Spacer";

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
    </>
  );
}
