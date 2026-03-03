import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'Theo Mestre',
    photo: '/images/photo.jpg',
    photoBackEmoji: '👀',
    title: {
      en: 'Software Engineer C++/C#',
      fr: 'Ingénieur Logiciel C++/C#',
    },
    subtitle: {
      en: 'Game engines · Real-time 3D · Simulation',
      fr: 'Moteurs de jeu · 3D temps réel · Simulation',
    },
    location: 'Reims, France',
  },

  // ===== SEO =====
  seo: {
    title: 'Theo Mestre - Software Engineer C++/C#',
    description: 'Interactive resume of Theo Mestre, Software Engineer specializing in C++, C#, game engines, real-time 3D and simulation.',
  },

  // ===== LANGUAGES =====
  languages: {
    default: 'en',
    available: ['en', 'fr'],
    labels: {
      en: 'EN',
      fr: 'FR',
    },
  },

  // ===== CONTACT =====
  contact: [
    { type: 'github', label: 'Theo-Mestre', href: 'https://github.com/Theo-Mestre' },
    { type: 'itchio', label: 'Theo Mestre', href: 'https://theomestre.itch.io/' },
    { type: 'linkedin', label: 'Theo Mestre', href: 'https://www.linkedin.com/in/mestre-theo/' },
    { type: 'email', label: 'mestretheo@proton.me' },
  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { en: 'Languages', fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { en: 'French', fr: 'Français' }, level: { en: 'Native', fr: 'Natif' } },
        { name: { en: 'English', fr: 'Anglais' }, level: { en: 'Professional (C1 level)', fr: 'Professionnel (niveau C1)' } },
      ],
    },
    {
      title: { en: 'Programming languages', fr: 'Langages de programmation' },
      type: 'badges',
      items: [
        { name: 'C++' },
        { name: 'C#' },
        { name: 'C' },
        { name: 'Lua' },
      ],
    },
    {
      title: { en: 'Game Engines & Frameworks', fr: 'Moteurs de jeu & Frameworks' },
      type: 'badges',
      items: [
        { name: 'Unreal Engine' },
        { name: 'Unity' },
        { name: 'OpenGL' },
        { name: '.Net' },
        { name: 'SFML' },
      ],
    },
    {
      title: { en: 'Version Control', fr: 'Contrôle de version' },
      type: 'badges',
      items: [
        { name: 'Git' },
        { name: 'GitLab' },
        { name: 'GitHub' },
        { name: 'SVN' },
      ],
    },
    {
      title: { en: 'Tools', fr: 'Outils' },
      type: 'badges',
      items: [
        { name: 'Visual Studio' },
        { name: 'Premake', color: '#2b9d2a' },
        { name: 'Jenkins' },
        { name: 'Figma' },
        { name: 'Trello' },
        { name: 'Notion' },
        { name: 'Wwise' },
        { name: 'FMOD' },
      ],
    },
    {
      title: { en: 'Methodologies', fr: 'Méthodologies' },
      type: 'text',
      items: [
        { name: { en: 'Agile/Scrum, Code Review, Prototyping, UML', fr: 'Agile/Scrum, Revue de code, Prototypage, UML' } },
      ],
    },
  ],

  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    {
      id: 'urca-cdd',
      company: { en: 'Projet DeMETeRE - URCA', fr: 'Projet DeMETeRE - URCA' },
      role: { en: 'Software Engineer', fr: 'Ingénieur Logiciel' },
      type: { en: 'Fixed-term', fr: 'CDD' },
      period: { en: 'Nov. 2025 - Present', fr: 'Nov. 2025 - Présent' },
      description: {
        en: 'Leading the development of an educational 3D simulation introducing industrial automation to secondary school students, while maintaining and expanding Reims3D for new research and visualization use cases.',
        fr: 'Pilotage du développement d\'une simulation 3D éducative pour initier les élèves du secondaire à l\'automatisme industriel, tout en maintenant et élargissant Reims3D pour de nouveaux cas d\'usage en recherche et visualisation.',
      },
      techs: ['Unity', 'C#', 'Unreal Engine', 'C++', 'VR', 'GitLab', 'Notion'],
      isHighlighted: true,
      details: {
        context: {
          en: 'Dual focus within the DeMETeRE research project at Université de Reims: continuing the long-term evolution of Reims3D (a 3D digital twin of the city), and designing a brand new educational simulation in Unity with a small cross-disciplinary team made up of a developer, an artist, and a university lecturer.',
          fr: 'Double mission au sein du projet de recherche DeMETeRE à l\'Université de Reims : poursuivre l\'évolution à long terme de Reims3D (jumeau numérique 3D de la ville), et concevoir une nouvelle simulation éducative sous Unity avec une petite équipe pluridisciplinaire composée d\'un développeur, d\'un artiste et d\'un enseignant-chercheur.',
        },
        tasks: {
          en: [
            'Designed and developed from scratch a Unity simulation introducing industrial automation and robotics to middle and high school students',
            'Built accessible and intuitive interactions allowing students with no technical background to engage with real-world industrial concepts in a 3D environment',
            'Collaborated with an artist on visual assets, a instructional engineer and a university lecturer on pedagogical content and learning objectives',
            'Deployed the simulation in live classroom settings, gathering direct feedback from educators to guide iteration',
            'Led the continued evolution of Reims3D, extending existing systems and improving platform scalability to support new research and visualization needs',
            'Wrote technical documentation and user guides for teachers',
          ],
          fr: [
            'Conception et développement from scratch d\'une simulation Unity initiant les collégiens et lycéens à l\'automatisme et à la robotique industrielle',
            'Développement d\'interactions accessibles et intuitives permettant à des élèves sans bagage technique de s\'approprier des concepts industriels réels dans un environnement 3D',
            'Collaboration avec un artiste sur les assets visuels, un ingénieure pédagogique et un enseignant-chercheur sur le contenu pédagogique et les objectifs d\'apprentissage',
            'Déploiement de la simulation en conditions réelles de classe, avec recueil des retours des enseignants pour guider les itérations',
            'Pilotage de l\'évolution continue de Reims3D, extension des systèmes existants et amélioration de la scalabilité pour répondre aux nouveaux besoins de recherche et de visualisation',
            'Rédaction de la documentation technique et des guides utilisateurs à destination des enseignants',
          ],
        },
        training: {
          en: ['Workshop on UX design (2 days)'],
          fr: ['Workshop sur le design UX (2 jours)'],
        },
        env: {
          en: 'Unity / C# / Unreal Engine 5 / C++ / Mass Traffic / VR / GitLab / Trello / Notion',
          fr: 'Unity / C# / Unreal Engine 5 / C++ / Mass Traffic / VR / GitLab / Trello / Notion',
        },
      },
    },
    {
      id: 'urca-internship',
      company: { en: 'Projet DeMETeRE - URCA', fr: 'Projet DeMETeRE - URCA' },
      role: { en: 'Software Engineer Intern', fr: 'Stagiaire Ingénieur Logiciel' },
      type: { en: 'Internship', fr: 'Stage' },
      period: { en: 'May 2025 - Nov. 2025', fr: 'Mai 2025 - Nov. 2025' },
      description: {
        en: 'Sole developer on Reims3D: a real-time interactive 3D digital twin of the city of Reims, targeting desktop and VR platforms, built with Unreal Engine 5.',
        fr: 'Développeur unique sur Reims3D : un jumeau numérique 3D interactif temps réel de la ville de Reims, ciblant les plateformes desktop et VR, développé avec Unreal Engine 5.',
      },
      techs: ['Unreal Engine', 'C++', 'VR', 'OSM', 'GitLab', 'Notion'],
      isHighlighted: false,
      details: {
        context: {
          en: 'R&D context within Université de Reims Champagne-Ardenne. With no prior codebase to build on, I designed and owned the full technical pipeline from scratch, from raw geospatial data ingestion to real-time 3D visualization in VR. Working as the sole developer meant making all architectural decisions independently, in an experimental domain with few existing references.',
          fr: 'Contexte R&D au sein de l\'Université de Reims Champagne-Ardenne. Sans base de code existante, j\'ai conçu et pris en charge l\'intégralité du pipeline technique from scratch, de l\'ingestion des données géospatiales brutes à la visualisation 3D temps réel en VR. En tant que développeur unique, toutes les décisions d\'architecture m\'incombaient, dans un domaine expérimental avec peu de références existantes.',
        },
        tasks: {
          en: [
            'Built Reims3D, a real-time 3D digital twin of the city of Reims, targeting both desktop and VR platforms',
            'Implemented procedural city generation from OpenStreetMap (OSM) data',
            'Developed real-time traffic simulation using Unreal Engine\'s ZoneGraph and Mass Traffic systems',
            'Owned the full pipeline from raw geospatial data ingestion to interactive 3D visualization',
            'Iterated rapidly on experimental features in an R&D environment with limited prior references',
          ],
          fr: [
            'Développement de Reims3D, jumeau numérique 3D temps réel de la ville de Reims, ciblant les plateformes desktop et VR',
            'Implémentation de la génération procédurale de la ville à partir des données OpenStreetMap (OSM)',
            'Développement de la simulation de trafic en temps réel via ZoneGraph et Mass Traffic d\'Unreal Engine',
            'Responsabilité du pipeline complet, de l\'ingestion des données géospatiales brutes à la visualisation 3D interactive',
            'Itérations rapides sur des fonctionnalités expérimentales dans un environnement R&D avec peu de références existantes',
          ],
        },
        training: {
          en: [],
          fr: [],
        },
        env: {
          en: 'Unreal Engine 5 / C++ / ZoneGraph / Mass Traffic / VR / OSM / GitLab / Trello / Notion',
          fr: 'Unreal Engine 5 / C++ / ZoneGraph / Mass Traffic / VR / OSM / GitLab / Trello / Notion',
        },
      },
    },
    {
      id: 'bubble-raccoon',
      company: { en: 'Bubble Raccoon Studio', fr: 'Bubble Raccoon Studio' },
      role: { en: 'UI & Technical Programmer', fr: 'Programmeur UI & Technique' },
      type: { en: 'Academic project', fr: 'Projet académique' },
      period: { en: 'Mar. 2024 - May 2025', fr: 'Mar. 2024 - Mai 2025' },
      description: {
        en: 'UI and technical programmer across two shipped 3-month game productions in Unity and Unreal Engine, within a structured 11-person team.',
        fr: 'Programmeur UI et technique sur deux productions de jeux livrées en 3 mois sous Unity et Unreal Engine, au sein d\'une équipe structurée de 11 personnes.',
      },
      techs: ['Unity', 'Unreal Engine', 'C#', 'C++', 'UI Toolkit', 'Wwise'],
      isHighlighted: false,
      details: {
        context: {
          en: 'Two successive 3-month productions with Bubble Raccoon Studio, each with a team of ~11 people (6 programmers, 5 artists) following a full production pipeline with milestones and reviews. Both games are available on my Itch.io page. Feel free to check them out!',
          fr: 'Deux productions successives de 3 mois avec Bubble Raccoon Studio, chacune avec une équipe d\'environ 11 personnes (6 programmeurs, 5 artistes) suivant un pipeline de production complet avec jalons et revues. Les deux jeux sont disponibles sur ma page Itch.io. N\'hésitez pas à y jeter un œil !',
        },
        tasks: {
          en: [
            // Cosy Sushi
            '[Cosy Sushi - Unreal Engine] Implemented core UI systems and a data-driven architecture for a 3D cosy life-simulation and restaurant management game',
            '[Cosy Sushi] Developed restaurant management and farming system interfaces',
            // Tales of Scales
            '[Tales of Scales - Unity] Built UI systems using Unity UI Toolkit for a 3D open-world action RPG',
            '[Tales of Scales] Designed a procedural grass renderer optimized for large open-world environments using compute shaders',
            '[Tales of Scales] Integrated audio ambiance using Wwise',
          ],
          fr: [
            '[Cosy Sushi - Unreal Engine] Implémentation des systèmes UI principaux et d\'une architecture data-driven pour un jeu de simulation cosy et de gestion de restaurant en 3D',
            '[Cosy Sushi] Développement des interfaces de gestion de restaurant et de farming',
            '[Tales of Scales - Unity] Développement des systèmes UI avec Unity UI Toolkit pour un action RPG open-world 3D',
            '[Tales of Scales] Conception d\'un renderer d\'herbe procédural optimisé pour les grands environnements open-world via compute shaders',
            '[Tales of Scales] Intégration de l\'ambiance sonore avec Wwise',
          ],
        },
        training: {
          en: [],
          fr: [],
        },
        env: {
          en: 'Unreal Engine 5 / Unity / C++ / C# / UI Toolkit / Wwise / Git / Notion',
          fr: 'Unreal Engine 5 / Unity / C++ / C# / UI Toolkit / Wwise / Git / Notion',
        },
      },
    },
  ],

  // ===== PROJECTS =====
  projects: [
    {
      id: 'sapphire',
      title: { en: 'Sapphire', fr: 'Sapphire' },
      description: {
        en: 'A 2D game engine built in C++ and OpenGL, featuring a scene editor and an Entity Component System (ECS) architecture. Built as a final academic project to deepen understanding of engine internals.',
        fr: 'Un moteur de jeu 2D développé en C++ et OpenGL, avec un éditeur de scène et une architecture Entity Component System (ECS). Réalisé comme projet académique de fin d\'études pour approfondir la compréhension des rouages d\'un moteur.',
      },
      techs: ['C++', 'OpenGL', 'Premake', 'GitHub', 'Visual Studio'],
      github: 'https://github.com/Theo-Mestre/Sapphire',
    },
    {
      id: 'unity-event-dispatcher',
      title: { en: 'Unity Event Dispatcher', fr: 'Unity Event Dispatcher' },
      description: {
        en: 'A lightweight event system for Unity enabling decoupled communication between application components. Designed for reusability and ease of integration in any Unity project.',
        fr: 'Un système d\'événements léger pour Unity permettant une communication découplée entre les composants d\'une application. Conçu pour être réutilisable et facile à intégrer dans n\'importe quel projet Unity.',
      },
      techs: ['C#', 'Unity', 'GitHub'],
      github: 'https://github.com/Theo-Mestre/Unity-Event-Dispatcher',
    },
  ],

  // ===== EDUCATION =====
  education: [
    {
      school: { en: 'Creajeux', fr: 'Creajeux' },
      degree: { en: 'Bachelor in Video Games Programming', fr: 'Bachelor en Programmation de Jeux Vidéo' },
      specialty: { en: 'Video Games and Software Engineering', fr: 'Jeux Vidéo et Ingénierie Logicielle' },
      period: '2021 - 2025',
    },
  ],

  // ===== PDF =====
  pdf: {
    label: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    path: { en: '/cv/en/Resume_Mestre_Theo.pdf', fr: '/cv/fr/CV_Mestre_Theo.pdf' },
  },

  // ===== THEME =====
  theme: {
    preset: 'forest',
  },

  // ===== UI LABELS =====
  labels: {
    sections: {
      contact: { en: 'CONTACT', fr: 'CONTACT' },
      skills: { en: 'SKILLS', fr: 'COMPÉTENCES' },
      experience: { en: 'EXPERIENCE', fr: 'EXPÉRIENCES' },
      education: { en: 'EDUCATION', fr: 'FORMATION' },
      projects: { en: 'PROJECTS', fr: 'PROJETS' },
      hobbies: { en: 'HOBBIES', fr: 'LOISIRS' },
    },
    experience: {
      mainTasks: { en: 'Main tasks:', fr: 'Tâches principales :' },
      moreTasks: { en: 'more tasks...', fr: 'autres tâches...' },
      training: { en: 'Training:', fr: 'Formations :' },
      techEnv: { en: 'Tech environment:', fr: 'Env. technique :' },
      technologies: { en: 'Technologies', fr: 'Technologies' },
    },
    actions: {
      clickHint: { en: 'Click on experiences to see more details', fr: 'Cliquez sur les expériences pour voir plus de détails' },
      switchTheme: { en: 'Toggle dark mode', fr: 'Changer le thème' },
      downloadPdf: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    },
  },
}