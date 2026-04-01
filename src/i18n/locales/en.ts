export const en = {
  // HeroSection component
  hero: {
    title: {
      line1: "AI-powered,",
      line2: "Software Engineer,",
      line3: {
        start: "build faster,",
        highlight: "better."
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
        title: "Frontend Engineering",
        description: "Building modern, performant and accessible interfaces with React and Next.js.",
      },
      {
        title: "Full-Stack Development",
        description: "Designing and shipping complete web applications from architecture to production.",
      },
      {
        title: "AI-Augmented Workflow",
        description: "Using AI agents daily as a productivity multiplier to ship faster and better.",
      },
      {
        title: "Design Systems",
        description: "Creating reusable, maintainable component libraries with a strong focus on UI consistency.",
      },
      {
        title: "Web3 Integration",
        description: "Building interfaces that interact with smart contracts and blockchain technologies.",
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
        description: "Currently freelancing and creating awesome apps."
      },
      {
        year: "2025",
        title: "Lead Frontend Developer",
        company: "Account.Tech incubated by Aftermath Finance",
        description: "Frontend Lead on a Web3 Next.js app on SUI, making complex on-chain operations accessible to non-technical users."
      },
      {
        year: "2024",
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
    edition: "2026 © Edition",
    localTime: "LOCAL TIME"
  },
  // Project footer
  projectFooter: {
    nextProject: "Next project",
    allWork: "All work"
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
        title: "Freelance Fullstack Developer",
        description: "Full-Stack Developer with a focus on building modern, performant and accessible applications, working across a wide range of projects from classic web to Web3.",
        features: [
          "Frontend Development",
          "Full-Stack Engineering",
          "UI/UX Design"
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
  },
  // Work page
  workPage: {
    title: "Building for the web",
    filters: {
      all: "All"
    },
    tableHeaders: {
      client: "CLIENT",
      location: "LOCATION",
      services: "SERVICES",
      year: "YEAR"
    }
  },
  // Project pages
  projects: {
    accountTechDao: {
      role: "Front-End Development & Smart Contract Integration",
      buttonLabel: "Visit Live Website",
      firstDescription: "The DAO app by Account.Tech is a decentralized governance platform built on Sui that redefines how communities and protocols make decisions. It brings transparency, flexibility, and full on-chain execution to decentralized operations through a powerful intent-based model.",
      secondDescription: "Participants govern through Smart Accounts linked to NFTs or fungible tokens, enabling secure proposal submissions and voting on-chain. The app supports default actions like airdrops, package upgrades, and vesting, while integrating seamlessly with Sui-native assets and third-party packages.",
      thirdDescription: "I worked on both the front-end and smart contract integration of the DAO app, crafting a smooth user experience that connects governance logic directly with the blockchain. The result is a robust, transparent tool that empowers on-chain communities to coordinate effectively and securely."
    },
    accountTechMultisig: {
      role: "Front-End Development & Smart Contract Integration",
      buttonLabel: "Visit Live Website",
      firstDescription: "Account.Tech's Multisig is a decentralized coordination tool built on the Sui blockchain that allows trusted groups to manage shared assets and operations securely. It enables on-chain execution through a powerful intent-based system, combining flexibility with strong access control.",
      secondDescription: "Users gain access to a Multisig Smart Account by invitation, allowing them to create proposals and vote on key actions such as token transfers, contract upgrades, or asset management. Every interaction is fully on-chain, transparent, and enforced by Sui-native logic.",
      thirdDescription: "I contributed to both the front-end development and smart contract integration of the Multisig application, focusing on delivering a seamless and secure experience for authorized participants. The result is a clean, responsive platform that brings trust and structure to collective decision-making."
    },
    mgEvenements: {
      role: "Design & Development",
      buttonLabel: "Visit Live Website",
      firstDescription: "MG Événements is a boutique event planning agency based in Toulouse, France. I crafted their digital presence to reflect their dedication to creating unforgettable moments, with a design that balances elegance and functionality.",
      secondDescription: "The website serves as a digital showcase of their services, allowing clients to explore their offerings and seamlessly request quotes. The design emphasizes visual storytelling while maintaining a clean, professional aesthetic.",
      thirdDescription: "Every interaction was carefully crafted to enhance user engagement. From smooth page transitions to responsive animations, the site delivers a polished experience that reflects MG Événements commitment to excellence."
    },
    mgeDashboard: {
      role: "Database & Development",
      buttonLabel: "Visit GitHub Repo",
      firstDescription: "MGE Dashboard is a custom-built administrative interface designed specifically for MG Événements. This powerful tool seamlessly integrates with their client-facing website, enabling real-time database management and quote processing, creating a fluid workflow between client interactions and business operations.",
      secondDescription: "At its core, the dashboard provides comprehensive CRUD operations for product management, with instant synchronization to the main website. Every update made in the dashboard is immediately reflected on MG Événements' client platform, ensuring consistent and up-to-date information across all touchpoints.",
      thirdDescription: "The quote management system streamlines client communication by centralizing all incoming requests from the website. This integration creates a seamless pipeline from client inquiry to quote processing, enabling MG Événements to respond promptly and manage their business operations efficiently."
    },
    halcyonLabs: {
      role: "Design & Front-End Development",
      buttonLabel: "Visit GitHub Repo",
      firstDescription: "Halcyon Labs is a decentralized application built on the Sui blockchain that reimagines whitelist distribution through gamification. The project transforms the traditional whitelist process into an engaging experience where users participate in a unique lottery system.",
      secondDescription: "Users can mint virtual water bottles on the blockchain, with full bottles representing successful whitelist entries. Empty bottles aren't worthless - collect five of them, and you can try your luck again, adding a strategic layer to the experience.",
      thirdDescription: "I designed and developed the front-end interface, focusing on creating an intuitive user experience that seamlessly connects with the blockchain. The result is a smooth, engaging platform that makes Web3 technology accessible and fun."
    }
  },
  // Project header labels
  projectHeader: {
    roleServices: "ROLE / SERVICES",
    techStack: "TECH STACK",
    locationYear: "LOCATION & YEAR"
  }
};

export type Translations = typeof en;
