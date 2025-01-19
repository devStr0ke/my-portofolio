"use client";
import { FloatingNav } from "@/components/FloatingNav";
import { Work } from "@/components/Work/Work";
import { Spacer } from "@/components/Spacer";

export default function Home() {

  return (
    <>
      <FloatingNav disableScroll={true} />
      <div className="w-full h-full">
        <Spacer />
        <Work title="Building for the web" useHighlight={true} />
        <Spacer />
      </div>
    </>
  );
}
