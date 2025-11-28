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
    work: "Projets",
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
  }
};
