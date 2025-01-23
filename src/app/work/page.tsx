"use client";
import { FloatingNav } from "@/components/FloatingNav";
import { TableWork } from "@/components/TableWork/TableWork";
import { Spacer } from "@/components/Spacer";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <FloatingNav disableScroll={true} />
      <div className="w-full h-full">
        <Spacer mobileSize="sm" size="md" />
        <div className="max-w-[90%] lg:max-w-[68%] mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal mb-16 md:mb-32 text-neutral-500">
            Building for the web
          </h1>
        </div>
        <TableWork noTitle={true} />
        <Spacer />
      </div>
      <Footer />
    </>
  );
}