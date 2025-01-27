"use client";
import { FloatingNav } from "@/components/FloatingNav";

export default function Home() {
  return (
    <>
      <FloatingNav disableScroll={true} />
      <div className="w-full h-[100vh] flex flex-col items-center justify-center">
        <p className="text-neutral-500 font-bold text-3xl sm:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl uppercase mb-6 block tracking-tighter">Contact page WIP</p>
      </div>
    </>
  );
}