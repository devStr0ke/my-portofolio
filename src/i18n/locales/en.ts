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
  },
  // Homepage buttons
  buttons: {
    moreAboutMe: "More about me",
    detailedExperience: "Detailed experience",
    allWork: "All work"
  },
  // Footer component
  footer: {
    title: "Let's collaborate",
    getInTouch: "Get in touch",
    version: "VERSION",
    edition: "2025 © Edition",
    localTime: "LOCAL TIME"
  },
  // Route names (for page transitions)
  routes: {
    home: "Home",
    about: "About",
    experience: "Experience",
    work: "Work",
    contact: "Contact",
    mgEvenements: "MG-Evenements",
    mgeDashboard: "MGE-Dashboard",
    halcyonLabs: "Halcyon-Labs",
    accountTechMultisig: "Account-Tech-Multisig",
    accountTechDao: "Account-Tech-DAO"
  },
  // About page
  aboutPage: {
    title: "Beyond the code"
  },
  // Experience page
  experiencePage: {
    title: "My Experience",
    experiences: [
      {
        title: "MIAGE Master's Degree",
        description: "Completed a comprehensive 5-year Master's program in Computer Science (MIAGE) at Paul Sabatier University from 2019 to 2024. The program provided a strong foundation in both technical and business aspects of information systems.",
        features: [
          "Computer Science Fundamentals",
          "Software Engineering",
          "Business Information Systems",
        ]
      },
      {
        title: "INSPI Internship",
        description: "Completed a 6-month internship at INSPI from April to September 2022, focusing on modernizing their application infrastructure. Part of the frontend redesign initiative while gaining valuable full-stack development experience.",
        features: [
          "Vue.js Frontend Development",
          "Ruby Backend Development",
          "UI/UX Redesign",
        ]
      },
      {
        title: "Dassault Systèmes",
        description: "Joined as a full-stack developer through a work-study program during my 4th and 5th year of MIAGE (2022-2024). Led the migration from Vue.js to React.js while maintaining and improving core functionalities.",
        features: [
          "React.js Migration",
          "Ruby Backend Development",
          "Performance Optimization"
        ]
      },
      {
        title: "Freelance Web3 Developer",
        description: "Currently working with GMove on account.tech, developing a Smart Account protocol for the Sui blockchain. Focusing on creating intuitive and secure interfaces for Web3 applications.",
        features: [
          "UI/UX Engineering",
          "Smart Contract Integration",
          "DApp Development"
        ]
      }
    ]
  },
  // Contact form
  contactForm: {
    fields: {
      name: {
        label: "What's your name?",
        placeholder: "Samuel Coelho",
        error: "Name required"
      },
      email: {
        label: "What's your email?",
        placeholder: "samuel.coelho@voidsoftware.pro",
        error: "Email required"
      },
      organization: {
        label: "What's the name of your organization?",
        placeholder: "Void Software"
      },
      subject: {
        label: "What's the subject of your message?",
        placeholder: "Website Development Project",
        error: "Subject required"
      },
      message: {
        label: "What's your message?",
        placeholder: "Tell me about your project...",
        error: "Message required"
      }
    },
    errors: {
      fillRequired: "Please fill in all required fields",
      sendFailed: "Failed to send message. Please try again."
    },
    button: {
      send: "Send Message",
      sending: "Sending..."
    }
  }
};

export type Translations = typeof en;
