"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { TextFlip } from "./TextFlip";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import GravityIcon from "./GravityIcon";

interface FloatingNavProps {
  disableScroll?: boolean;
  footerId?: string;
}

export const FloatingNav = ({ disableScroll = false, footerId = 'main-footer' }: FloatingNavProps) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(disableScroll);
  const [isOverFooter, setIsOverFooter] = useState(false);
  const [isNavOverFooter, setIsNavOverFooter] = useState(false);

  const checkIfOverFooter = (scrollPosition: number) => {
    const footer = document.querySelector(`#${footerId}`);
    if (footer) {
      const footerRect = footer.getBoundingClientRect();
      
      // Check for social icons (bottom position - 12vh from bottom)
      const socialBottom = window.innerHeight * 0.9; // 100vh - 12vh = 88vh
      const isSocialOver = footerRect.top <= socialBottom;
      
      // Check for nav links (higher position - 85vh from top)
      const navBottom = window.innerHeight * 0.15; // 15vh from top
      const isNavOver = footerRect.top <= navBottom;

      return { isSocialOver, isNavOver };
    }
    return { isSocialOver: false, isNavOver: false };
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!disableScroll) {
      const shouldShow = latest > window.innerHeight * 3;
      setVisible(shouldShow);
    }

    const { isSocialOver, isNavOver } = checkIfOverFooter(latest);
    setIsOverFooter(isSocialOver);
    setIsNavOverFooter(isNavOver);
  });

  const navLinkClass = isNavOverFooter 
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