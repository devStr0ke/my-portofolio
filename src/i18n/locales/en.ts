export const en = {
  // HeroSection component
  hero: {
    title: {
      line1: "Software engineer,",
      line2: "building for",
      line3: {
        start: "the",
        highlight: "web."
      }
    },
    scroll: "SCROLL",
    // Large repeating banner lines (used in HeroSection)
    banner: {
      lineA: "FULL STACK DEVELOPER",
      lineB: "CREATIVE PROBLEM SOLVER"
    }
  }
  ,
  // Generic page titles / nav labels
  pages: {
    about: "About",
    experience: "Experience",
    work: "Work",
    contact: "Contact"
  },
  // WhatIdoSection component
  whatIdo: {
    title: "What I Do",
    items: [
      {
        title: "Web Architecture",
        description: "Designing scalable, maintainable, and efficient web systems",
      },
      {
        title: "API Integration",
        description: "Connecting applications with third-party services",
      },
      {
        title: "Web3 Development",
        description: "Building decentralized apps (dApps) and integrating blockchain technologies.",
      },
      {
        title: "Performance Tuning",
        description: "Optimizing code and infrastructure to ensure fast, reliable, and efficient applications.",
      },
      {
        title: "UI/UX Design",
        description: "Transforming designs into responsive, accessible, and user-friendly web interfaces.",
      },
    ]
  }
};

export type Translations = typeof en;
