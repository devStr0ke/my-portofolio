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
  // Project footer
  projectFooter: {
    nextProject: "Projet suivant",
    allWork: "Tous mes projets"
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
  },
  // About page
  aboutPage: {
    title: "Au-delà du code"
  },
  // Experience page
  experiencePage: {
    title: "Mon Parcours",
    experiences: [
      {
        title: "Master MIAGE",
        description: "J'ai effectué un cursus de 5 ans en informatique (MIAGE) à l'Université Paul Sabatier de 2019 à 2024. Ce programme m'a apporté une solide formation tant technique que managériale dans les systèmes d'information.",
        features: [
          "Fondamentaux de l'informatique",
          "Génie logiciel",
          "Systèmes d'information",
        ]
      },
      {
        title: "Stage chez INSPI",
        description: "Stage de 6 mois chez INSPI d'avril à septembre 2022, durant lequel j'ai participé à la modernisation de leur infrastructure applicative. J'y ai contribué à la refonte du frontend tout en acquérant une expérience précieuse en développement full-stack.",
        features: [
          "Développement Frontend Vue.js",
          "Développement Backend Ruby",
          "Refonte UI/UX",
        ]
      },
      {
        title: "Dassault Systèmes",
        description: "Intégré en tant que développeur full-stack en alternance durant ma 4ème et 5ème année de MIAGE (2022-2024). J'ai piloté la migration de Vue.js vers React.js tout en maintenant et améliorant les fonctionnalités existantes.",
        features: [
          "Migration vers React.js",
          "Développement Backend Ruby",
          "Optimisation des performances"
        ]
      },
      {
        title: "Développeur Web3 Freelance",
        description: "Actuellement en collaboration avec GMove sur account.tech, où je développe un protocole de Smart Account pour la blockchain Sui. Je me concentre sur la création d'interfaces intuitives et sécurisées pour les applications Web3.",
        features: [
          "Engineering UI/UX",
          "Intégration de Smart Contracts",
          "Développement de DApps"
        ]
      }
    ]
  },
  // Contact form
  contactForm: {
    fields: {
      name: {
        label: "Quel est votre nom ?",
        placeholder: "Samuel Coelho",
        error: "Nom requis"
      },
      email: {
        label: "Quelle est votre adresse email ?",
        placeholder: "samuel.coelho@voidsoftware.pro",
        error: "Email requis"
      },
      organization: {
        label: "Nom de votre organisation (facultatif)",
        placeholder: "Void Software"
      },
      subject: {
        label: "Quel est l'objet de votre message ?",
        placeholder: "Projet de développement web",
        error: "Objet requis"
      },
      message: {
        label: "Quel est votre message ?",
        placeholder: "Parlez-moi de votre projet...",
        error: "Message requis"
      }
    },
    errors: {
      fillRequired: "Veuillez remplir tous les champs obligatoires",
      sendFailed: "Échec de l'envoi. Veuillez réessayer."
    },
    button: {
      send: "Envoyer le message",
      sending: "Envoi en cours..."
    }
  },
  // Work page
  workPage: {
    title: "Façonner le web",
    filters: {
      all: "Tous"
    },
    tableHeaders: {
      client: "CLIENT",
      location: "LIEU",
      services: "SERVICES",
      year: "ANNÉE"
    }
  },
  // Project pages
  projects: {
    accountTechDao: {
      role: "Développement Front-End & Intégration Smart Contract",
      buttonLabel: "Voir le site",
      firstDescription: "L'application DAO d'Account.Tech est une plateforme de gouvernance décentralisée sur Sui qui révolutionne la prise de décision pour les communautés et protocoles. Elle apporte transparence, flexibilité et exécution entièrement on-chain aux opérations décentralisées via un modèle puissant basé sur les propositions.",
      secondDescription: "Les participants gouvernent via des Smart Accounts liés à des NFTs ou tokens fongibles, permettant de soumettre des propositions et de voter de manière sécurisée on-chain. L'app prend en charge des actions par défaut comme les airdrops, les mises à jour de packages et le vesting, tout en s'intégrant parfaitement aux actifs natifs Sui et packages tiers.",
      thirdDescription: "J'ai travaillé sur le front-end et l'intégration des smart contracts de l'app DAO, en créant une expérience utilisateur fluide qui connecte directement la logique de gouvernance à la blockchain. Le résultat est un outil robuste et transparent qui permet aux communautés on-chain de se coordonner efficacement et en toute sécurité."
    },
    accountTechMultisig: {
      role: "Développement Front-End & Intégration Smart Contract",
      buttonLabel: "Voir le site",
      firstDescription: "Le Multisig d'Account.Tech est un outil de coordination décentralisé sur la blockchain Sui qui permet à des groupes de confiance de gérer ensemble des actifs et opérations partagés en toute sécurité. Il offre une exécution on-chain via un système puissant basé sur les propositions (intents), alliant flexibilité et contrôle d'accès strict.",
      secondDescription: "L'accès à un Smart Account Multisig se fait sur invitation, permettant aux membres de créer des propositions et voter sur des actions clés comme les transferts de tokens, les mises à jour de contrats ou la gestion d'actifs. Chaque interaction est entièrement on-chain, transparente et sécurisée par la logique native de Sui.",
      thirdDescription: "J'ai contribué au développement front-end et à l'intégration des smart contracts de l'application Multisig, en mettant l'accent sur une expérience fluide et sécurisée pour les participants. Le résultat est une plateforme épurée et réactive qui apporte confiance et structure aux décisions collectives."
    },
    mgEvenements: {
      role: "Conception & Développement",
      buttonLabel: "Voir le site",
      firstDescription: "MG Événements est une agence d'événementiel haut de gamme basée à Toulouse. J'ai conçu leur présence digitale pour refléter leur engagement à créer des moments inoubliables, avec un design qui marie élégance et fonctionnalité.",
      secondDescription: "Le site web met en valeur leurs services, offrant aux clients la possibilité de découvrir leurs prestations et de demander des devis en toute simplicité. Le design privilégie le storytelling visuel tout en conservant une esthétique épurée et professionnelle.",
      thirdDescription: "Chaque interaction a été pensée pour captiver l'utilisateur. Des transitions fluides aux animations réactives, le site offre une expérience soignée qui reflète l'engagement de MG Événements envers l'excellence."
    },
    mgeDashboard: {
      role: "Base de données & Développement",
      buttonLabel: "Voir le dépôt GitHub",
      firstDescription: "MGE Dashboard est une interface d'administration sur mesure conçue spécialement pour MG Événements. Cet outil s'intègre parfaitement à leur site client, permettant une gestion en temps réel de la base de données et le traitement des devis, créant ainsi un flux de travail fluide entre les interactions clients et les opérations métier.",
      secondDescription: "Au cœur du système, le dashboard offre des opérations CRUD complètes pour la gestion des produits, avec synchronisation instantanée vers le site principal. Chaque modification apportée au dashboard se reflète immédiatement sur la plateforme client de MG Événements, garantissant des informations cohérentes et à jour sur tous les points de contact.",
      thirdDescription: "Le système de gestion des devis facilite la communication client en centralisant toutes les demandes provenant du site. Cette intégration crée un processus fluide depuis la demande client jusqu'au traitement du devis, permettant à MG Événements de répondre rapidement et de gérer leurs opérations efficacement."
    },
    halcyonLabs: {
      role: "Conception & Développement Front-End",
      buttonLabel: "Voir le dépôt GitHub",
      firstDescription: "Halcyon Labs est une application décentralisée construite sur la blockchain Sui qui réinvente la distribution des whitelists de manière gamifiée. Le projet transforme le processus traditionnel de whitelist en une expérience captivante où les utilisateurs participent à un système de loterie unique.",
      secondDescription: "Les utilisateurs peuvent 'mint' des bouteilles d'eau virtuelles sur la blockchain, les bouteilles pleines représentant des places whitelist gagnées. Les bouteilles vides ne sont pas inutiles, lorsque l'on en collecte 5 on peut retenter notre chance au tirage.",
      thirdDescription: "J'ai conçu et développé l'interface front-end en privilégiant une expérience utilisateur intuitive qui se connecte harmonieusement à la blockchain. Le résultat est une plateforme fluide et engageante qui rend la technologie Web3 accessible et amusante."
    }
  },
  // Project header labels
  projectHeader: {
    roleServices: "RÔLE / SERVICES",
    techStack: "STACK TECHNIQUE",
    locationYear: "LIEU & ANNÉE"
  }
};
