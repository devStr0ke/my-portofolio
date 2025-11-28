import type { Translations } from './en';

export const fr: Translations = {
  // HeroSection component
  hero: {
    title: {
      line1: "Ingénieur logiciel,",
      line2: "contribuant à améliorer",
      line3: {
        start: "le",
        highlight: "web."
      }
    },
    scroll: "DÉFILER",
    // Large repeating banner lines (used in HeroSection)
    banner: {
      lineA: "DÉVELOPPEUR FULL STACK",
      lineB: "RÉSOLUTIONS DE PROBLÈMES"
    }
  }
  ,
  // Generic page titles / nav labels
  pages: {
    about: "À propos",
    experience: "Expérience",
    work: "Travaux",
    projects: "Projets",
    contact: "Contact"
  },
  // WhatIdoSection component
  whatIdo: {
    title: "Ce que je fais",
    items: [
      {
        title: "Architecture Web",
        description: "Conception de systèmes web évolutifs, maintenables et efficaces",
      },
      {
        title: "Intégration d'API",
        description: "Connexion d'applications avec des services tiers",
      },
      {
        title: "Développement Web3",
        description: "Construction d'applications décentralisées (dApps) et intégration de technologies blockchain.",
      },
      {
        title: "Optimisation des Performances",
        description: "Optimisation du code et de l'infrastructure pour garantir des applications rapides, fiables et efficaces.",
      },
      {
        title: "Design UI/UX",
        description: "Transformation de designs en interfaces web réactives, accessibles et conviviales.",
      },
    ]
  },
  // HistorySection component
  history: {
    title: "Parcours",
    items: [
      {
        year: "AJD",
        title: "Développeur Freelance",
        company: "Je crée des trucs cool",
        description: "Actuellement freelance, je travaille sur divers projets web pour des clients variés."
      },
      {
        year: "2023",
        title: "Développeur Full Stack",
        company: "Dassault Systèmes",
        description: "Développement de solutions UI/UX évolutives pour une application d'envergure avec React et Node.js."
      },
      {
        year: "2022",
        title: "Développeur Frontend",
        company: "INSPI & Innersense",
        description: "Refonte complète du frontend d'une application avec Vue.js et amélioration de l'expérience utilisateur."
      },
      {
        year: "2019",
        title: "Étudiant Universitaire",
        company: "Université Paul Sabatier",
        description: "Études en informatique à l'UPS de 2019 à 2024 (Master)"
      }
    ]
  },
  // Work component - Project types
  projectTypes: {
    frontendSmartContract: "Développement Front-End & Intégration Smart Contract",
    conceptionDevelopment: "Conception & Développement",
    uiuxDesign: "Design UI/UX"
  },
  // MyMottoSection component
  motto: {
    title: "Ma Devise"
  },
  // Homepage buttons
  buttons: {
    moreAboutMe: "En savoir plus",
    detailedExperience: "Parcours détaillé",
    allWork: "Tous mes projets"
  },
  // Footer component
  footer: {
    title: "Travaillons ensemble",
    getInTouch: "Contactez-moi",
    version: "VERSION",
    edition: "2025 © Édition",
    localTime: "HEURE LOCALE"
  },
  // Route names (for page transitions)
  routes: {
    home: "Accueil",
    about: "À propos",
    experience: "Expérience",
    work: "Travaux",
    contact: "Contact",
    mgEvenements: "MG-Événements",
    mgeDashboard: "Tableau de bord MGE",
    halcyonLabs: "Halcyon-Labs",
    accountTechMultisig: "Account-Tech-Multisig",
    accountTechDao: "Account-Tech-DAO"
  }
};
