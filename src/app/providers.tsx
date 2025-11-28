"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { TransitionRouter } from "next-transition-router";
import { LanguageProvider, useTranslations } from "@/i18n/LanguageContext";

function TransitionContent({ children }: { children: React.ReactNode }) {
  const layer = useRef<HTMLDivElement | null>(null);
  const [currentRoute, setCurrentRoute] = useState("");
  const { t } = useTranslations();

  const getRouteName = (path: string) => {
    const routeMap: { [key: string]: string } = {
      "/": t.routes.home,
      "/about": t.routes.about,
      "/experience": t.routes.experience,
      "/work": t.routes.work,
      "/contact": t.routes.contact,
      "/work/mg-evenements": t.routes.mgEvenements,
      "/work/mge-dashboard": t.routes.mgeDashboard,
      "/work/halcyon-labs": t.routes.halcyonLabs,
      "/work/account-tech-multisig": t.routes.accountTechMultisig,
      "/work/account-tech-dao": t.routes.accountTechDao,
    };

    return routeMap[path] || '· ' + path.charAt(0).toUpperCase() + path.slice(1);
  };

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
          {getRouteName(currentRoute)}
        </span>
      </div>
    </TransitionRouter>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <TransitionContent>{children}</TransitionContent>
    </LanguageProvider>
  );
}