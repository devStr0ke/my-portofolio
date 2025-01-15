"use client";
import { Link } from "next-transition-router";

export default function Home() {

  return (
    <>
      <div className="w-full h-[100vh] flex flex-col gap-8 justify-center items-center">
        <h1 className="text-4xl font-bold text-center text-white">Test Page</h1>
        <Link className="text-left text-white underline underline-offset-4" href="/">Home</Link>
      </div>
    </>
  );
}
