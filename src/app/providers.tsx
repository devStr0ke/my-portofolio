"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { TransitionRouter } from "next-transition-router";

const routes: { [key: string]: string } = {
  "/": "Home",
  "/about": "About",
  "/experience": "Experience",
  "/work": "Work",
  "/contact": "Contact",
  "/work/mg-evenements": "MG-Evenements",
  "/work/mge-dashboard": "MGE-Dashboard",
  "/work/halcyon-labs": "Halcyon-Labs",
};

export function Providers({ children }: { children: React.ReactNode }) {
  const layer = useRef<HTMLDivElement | null>(null);
  const [currentRoute, setCurrentRoute] = useState("");

  return (
    <TransitionRouter
      auto={true}
      leave={(next, from, to) => {
        console.log({ from, to });
        setCurrentRoute(to || "");  // Store the destination route

        const tl = gsap
          .timeline({
            onComplete: next,
          })
          .fromTo(
            layer.current,
            { y: "100%" },
            {
              y: 0,
              duration: 0.4,
              ease: "circ.inOut",
            },
          )
          .to(layer.current, {
            y: 0,
            duration: 0.4,
          });

        return () => {
          tl.kill();
        };
      }}
      enter={(next) => {
        const tl = gsap
          .timeline({
            onComplete: () => {
              setCurrentRoute("");  // Reset the route when animation completes
              next();
            }
          })
          .to(layer.current, {
            y: "-100%",
            duration: 0.5,
            ease: "circ.inOut",
          });

        return () => {
          tl.kill();
        };
      }}
    >
      <main>{children}</main>

      <div
        ref={layer}
        className="fixed inset-0 z-[9999] translate-y-full bg-indigo-600 flex items-center justify-center"
      >
        <span className="text-4xl font-light text-white font-orbitron">
          {routes[currentRoute] || '· ' + currentRoute.charAt(0).toUpperCase() + currentRoute.slice(1)}
        </span>
      </div>
    </TransitionRouter>
  );
}