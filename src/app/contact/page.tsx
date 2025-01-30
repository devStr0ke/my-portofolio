"use client";
import { FloatingNav } from "@/components/FloatingNav";
import { Spacer } from "@/components/Spacer";
import ContactForm from "@/components/ContactForm";
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
  },[])


  return (
    <>
      <FloatingNav disableScroll={true} />
      <div className="w-full h-full">
        <Spacer mobileSize="sm" size="md" />
        <div className="max-w-[90%] lg:max-w-[68%] mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal mb-16 md:mb-32 text-neutral-500">
            Lets get in touch
          </h1>
        </div>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}