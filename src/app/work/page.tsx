"use client";
import { Link } from "next-transition-router";
import { FloatingNav } from "@/components/FloatingNav";

export default function Home() {

  return (
    <>
      <FloatingNav disableScroll={true} />
      <div className="w-full h-[100vh] flex flex-col gap-8 justify-center items-center">
        <h1 className="text-4xl font-bold text-center text-white">Work Page</h1>
        <Link className="text-left text-white underline underline-offset-4" href="/">Home</Link>
      </div>
    </>
  );
}
