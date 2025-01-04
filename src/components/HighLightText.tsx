"use client";
import React, { useEffect } from "react";

const HighLightText = ({ children }: { children: string }) => {
  useEffect(() => {
    const spans = document.querySelectorAll(
      ".hover-text span"
    ) as NodeListOf<HTMLSpanElement>;

    spans.forEach((span) => {
      span.addEventListener("mouseenter", function (this: HTMLSpanElement) {
        this.classList.add("font-black", "text-indigo-100");
        
        const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
        const rightNeighbor = this.nextElementSibling as HTMLSpanElement;

        if (leftNeighbor) {
          leftNeighbor.classList.add("font-medium", "text-indigo-200");
        }
        if (rightNeighbor) {
          rightNeighbor.classList.add("font-medium", "text-indigo-200");
        }
      });

      span.addEventListener("mouseleave", function (this: HTMLSpanElement) {
        this.classList.remove("font-black", "text-indigo-100");
        
        const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
        const rightNeighbor = this.nextElementSibling as HTMLSpanElement;

        if (leftNeighbor) {
          leftNeighbor.classList.remove("font-medium", "text-indigo-200");
        }
        if (rightNeighbor) {
          rightNeighbor.classList.remove("font-medium", "text-indigo-200");
        }
      });
    });
  }, []);

  return (
    <span className="hover-text">
      <Text>{children}</Text>
    </span>
  );
};

const Text = ({ children }: { children: string }) => {
  return (
    <>
      {children.split("").map((child, idx) => (
        <span
          key={idx}
          className="inline-block transition-all duration-300 ease-in-out font-thin"
          style={{ width: child === ' ' ? '0.5em' : 'auto' }}
        >
          {child}
        </span>
      ))}
    </>
  );
};

export default HighLightText;