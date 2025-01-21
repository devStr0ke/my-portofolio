"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import { TextFlip } from "./TextFlip";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import GravityIcon from "./GravityIcon";

interface FloatingNavProps {
  disableScroll?: boolean;
}

export const FloatingNav = ({ disableScroll = false }: FloatingNavProps) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(disableScroll);
  const [isOverFooter, setIsOverFooter] = useState(false);

  const checkIfOverFooter = (scrollPosition: number) => {
    const footer = document.querySelector('#main-footer') || document.querySelector('.bg-indigo-600');
    if (footer) {
      const footerRect = footer.getBoundingClientRect();
      const navBottom = window.innerHeight - 50; // Approximate nav items bottom position
      return footerRect.top <= navBottom;
    }
    return false;
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!disableScroll) {
      const shouldShow = latest > window.innerHeight * 3;
      setVisible(shouldShow);
    }

    setIsOverFooter(checkIfOverFooter(latest));
  });

  const navLinkClass = isOverFooter 
    ? "font-bold text-neutral-950 hover:text-neutral-950" 
    : "font-bold text-neutral-500";

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0
        }}
        transition={{
          duration: 0.2
        }}
        className="fixed top-12 right-6 xl:right-12 2xl:right-16 z-50 hidden lg:block"
      >
        <nav className="flex flex-col gap-3 capitalize text-right text-sm xl:text-base">
          <TextFlip 
            className={navLinkClass}
            href="#about"
          >
            About
          </TextFlip>
          <TextFlip 
            className={navLinkClass}
            href="#experience"
          >
            Experience
          </TextFlip>
          <TextFlip 
            className={navLinkClass}
            href="#projects"
          >
            Projects
          </TextFlip>
          <TextFlip 
            className={navLinkClass}
            href="#contact"
          >
            Contact
          </TextFlip>
        </nav>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ 
          y: visible ? 0 : 100,
          opacity: visible ? 1 : 0
        }}
        transition={{
          duration: 0.2
        }}
        className="fixed bottom-12 right-6 xl:right-12 2xl:right-16 z-50 hidden lg:block"
      >
        <div className="flex flex-col gap-4">
          <GravityIcon 
            icon={<FaGithub size={25} />}
            href="https://github.com/devStr0ke"
            className={isOverFooter ? 'text-neutral-950 hover:text-neutral-950' : "text-neutral-500"}
          />
          <GravityIcon 
            icon={<FaLinkedin size={25} />}
            href="https://www.linkedin.com/in/samuel-c-293984212/"
            className={isOverFooter ? 'text-neutral-950 hover:text-neutral-950' : "text-neutral-500"}
          />
        </div>
      </motion.div>
    </>
  );
};