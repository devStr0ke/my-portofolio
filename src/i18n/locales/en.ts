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
    projects: "Projects",
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
  },
  // HistorySection component
  history: {
    title: "History",
    items: [
      {
        year: "NOW",
        title: "Freelance Developer",
        company: "Building cool stuff",
        description: "Currently freelancing and creating awesome web applications."
      },
      {
        year: "2023",
        title: "Full Stack Developer",
        company: "Dassault Systèmes",
        description: "Developed scalable UI/UX solutions for a large application using React and Node.js."
      },
      {
        year: "2022",
        title: "Frontend Developer",
        company: "INSPI & Innersense",
        description: "Revamped an old app's frontend by rebuilding it in Vue.js with modern UI/UX enhancements."
      },
      {
        year: "2019",
        title: "University Student",
        company: "University Paul Sabatier",
        description: "Studied Computer Science at UPS from 2019 to 2024 (Master's degree)"
      }
    ]
  },
  // Work component - Project types
  projectTypes: {
    frontendSmartContract: "Front-End Development & Smart Contract Integration",
    conceptionDevelopment: "Conception & Development",
    uiuxDesign: "UI/UX Design"
  },
  // MyMottoSection component
  motto: {
    title: "My Motto"
  }
};

export type Translations = typeof en;
