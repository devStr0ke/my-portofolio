"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { TextFlip } from "./TextFlip";

export const FloatingNav = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const shouldShow = latest > window.innerHeight * 3;
    setVisible(shouldShow);
  });

  return (
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
      <nav className="flex flex-col gap-3 capitalize text-right text-neutral-500 text-sm xl:text-base">
        <TextFlip className="font-bold" href="#about">
          About
        </TextFlip>
        <TextFlip className="font-bold" href="#experience">
          Experience
        </TextFlip>
        <TextFlip className="font-bold" href="#projects">
          Projects
        </TextFlip>
        <TextFlip className="font-bold" href="#contact">
          Contact
        </TextFlip>
      </nav>
    </motion.div>
  );
};