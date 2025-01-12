import React from "react";
import { motion } from "framer-motion";



const DURATION = 0.25;
const STAGGER = 0.025;

type TextFlipProps = {
  children: string;
  href: string;
  className?: string;
};

export const TextFlip = ({ children, href, className }: TextFlipProps) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className={`relative block overflow-hidden whitespace-nowrap text-base font-bold text-neutral-100 ${className}`} // Adjusted size
      style={{
        lineHeight: 1,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block" // Added indigo color to match your theme
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};