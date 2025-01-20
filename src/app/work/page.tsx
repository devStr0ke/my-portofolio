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
        <div className="max-w-[90%] lg:max-w-[68%] mx-auto">
          <div className="lg:max-w-none">
            <span className="text-neutral-200 font-bold text-3xl sm:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl uppercase mb-6 block tracking-tighter">
              Building for the web
            </span>
          </div>
        </div>
        <Work noTitle={true} />
        <Spacer />
      </div>
    </>
  );
}