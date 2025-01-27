"use client";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";

export const MobileNav = () => {
  return (
    <Nav />
  );
};

const Nav = () => {
    const [active, setActive] = useState(false);
    const [isOverFooter, setIsOverFooter] = useState(false);
    const { scrollY } = useScroll();
  
    React.useEffect(() => {
      if (active) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
      
      return () => {
        document.body.style.overflow = 'unset';
      };
    }, [active]);

    const checkIfOverFooter = (scrollPosition: number) => {
      const footer = document.querySelector('#main-footer') || document.querySelector('#project-footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const hamburgerBottom = window.innerHeight * 0.05; // Approx position of hamburger
        return footerRect.top <= hamburgerBottom;
      }
      return false;
    };

    useMotionValueEvent(scrollY, "change", (latest: number) => {
      setIsOverFooter(checkIfOverFooter(latest));
    });
  
    return (
      <>
        <HamburgerButton active={active} setActive={setActive} isOverFooter={isOverFooter} />
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[90] backdrop-blur-sm bg-neutral-950/50"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>{active && <LinksOverlay setActive={setActive} />}</AnimatePresence>
      </>
    );
};

const LinksOverlay = ({ setActive }: { setActive: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <nav className="fixed right-4 top-4 z-[100] h-[calc(100vh_-_110px)] w-[calc(100%_-_32px)] overflow-hidden">
      <Logo setActive={setActive} />
      <LinksContainer setActive={setActive} />
      <FooterCTAs setActive={setActive} />
    </nav>
  );
};

const LinksContainer = ({ setActive }: { setActive: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <motion.div className="space-y-4 p-12 pl-4 md:pl-20">
      {LINKS.map((l, idx) => {
        return (
          <NavLink key={l.title} href={l.href} idx={idx}>
            <span onClick={() => setActive(false)}>{l.title}</span>
          </NavLink>
        );
      })}
    </motion.div>
  );
};

const NavLink = ({
  children,
  href,
  idx,
}: {
  children: ReactNode;
  href: string;
  idx: number;
}) => {
  return (
    <motion.a
      initial={{ opacity: 0, y: -8 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.75 + idx * 0.125,
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      exit={{ opacity: 0, y: -8 }}
      href={href}
      className="block text-5xl font-semibold text-neutral-500 transition-colors hover:text-indigo-600 md:text-7xl"
    >
      {children}.
    </motion.a>
  );
};

const Logo = ({ setActive }: { setActive: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <motion.a
      initial={{ opacity: 0, y: -12 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
      }}
      exit={{ opacity: 0, y: -12 }}
      href="/"
      onClick={() => setActive(false)}
      className="grid h-20 w-20 place-content-center rounded-br-xl rounded-tl-xl bg-neutral-950 transition-colors"
    >
      <Image
        src="/logoHover.svg"
        alt="Logo"
        width={40} 
        height={40}
        priority={true}
      />
    </motion.a>
  );
};

const HamburgerButton = ({
  active,
  setActive,
  isOverFooter
}: {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  isOverFooter: boolean;
}) => {
  return (
    <>
      <motion.div
        initial={false}
        animate={active ? "open" : "closed"}
        variants={UNDERLAY_VARIANTS}
        style={{ top: 16, right: 16 }}
        className={`fixed z-[80] rounded-xl ${active ? "bg-neutral-950" : "bg-transparent"}`}
      />

      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className={`group fixed right-4 top-4 z-[110] h-20 w-20 bg-white/0 transition-all ${
          active ? "rounded-bl-xl rounded-tr-xl" : "rounded-xl"
        }`}
      >
        <motion.span
          variants={HAMBURGER_VARIANTS.top}
          className={`absolute block h-1 w-10 ${isOverFooter && !active ? 'bg-neutral-950' : 'bg-neutral-500'}`}
          style={{ y: "-50%", left: "50%", x: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.middle}
          className={`absolute block h-1 w-10 ${isOverFooter && !active ? 'bg-neutral-950' : 'bg-neutral-500'}`}
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.bottom}
          className={`absolute block h-1 w-5 ${isOverFooter && !active ? 'bg-neutral-950' : 'bg-neutral-500'}`}
          style={{ x: "-50%", y: "50%" }}
        />
      </motion.button>
    </>
  );
};

const FooterCTAs = ({ setActive }: { setActive: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <>
      <div className="absolute bottom-6 left-6 flex gap-4 md:flex-col">
        {SOCIAL_CTAS.map((l, idx) => {
          return (
            <motion.a
              key={idx}
              href={l.href}
              target={l.target}
              rel={l.rel}
              onClick={() => setActive(false)}
              initial={{ opacity: 0, y: -8 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 1 + idx * 0.125,
                  duration: 0.5,
                  ease: "easeInOut",
                },
              }}
              exit={{ opacity: 0, y: -8 }}
            >
              <l.Component className="text-xl text-neutral-500 transition-colors hover:text-indigo-600" />
            </motion.a>
          );
        })}
      </div>
    </>
  );
};

const LINKS = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Experience",
    href: "/experience",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const SOCIAL_CTAS = [
  {
    Component: FaGithub,
    href: "https://github.com/devStr0ke",
    target: "_blank",
    rel: "noopener noreferrer"
  },
  {
    Component: FaLinkedin,
    href: "https://www.linkedin.com/in/samuel-c-293984212/",
    target: "_blank",
    rel: "noopener noreferrer"
  },
];

const UNDERLAY_VARIANTS = {
  open: {
    width: "calc(100% - 32px)",
    height: "calc(100vh - 110px)",
    transition: { type: "spring", mass: 3, stiffness: 400, damping: 50 },
  },
  closed: {
    width: "80px",
    height: "80px",
    transition: {
      delay: 0.1,
      type: "spring",
      mass: 3,
      stiffness: 400,
      damping: 50,
    },
  },
};

const HAMBURGER_VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};