import type { ResumeConfig } from './types'

/**
 * This is an example configuration file.
 * Copy this file to `resume-config.ts` and fill in your own information.
 *
 * All text fields that support multiple languages use the `LocalizedString` format:
 * { en: "English text", fr: "Texte français" }
 *
 * Add as many languages as you need — just make sure to list them in `languages.available`.
 */
export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'Theo Mestre',
    photo: '/images/photo.jpg', // Place your photo in public/images/
    photoBackEmoji: '👀', // Shown when clicking the photo (3D flip)
    title: {
      en: 'Software Engineer',
      fr: 'Développeur Logiciel',
    },
    //subtitle: {
    //  en: '6 years of experience',
    //  fr: '6 ans d\'expérience',
    //},
    location: 'Paris, France',
  },

  // ===== SEO (used in <head> meta tags) =====
  seo: {
    title: 'Theo Mestre — Software Engineer',
    description: 'Interactive resume of Theo Mestre',
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
        { name: { en: 'English', fr: 'Anglais' }, level: { en: 'Professional', fr: 'Professionnel' }},
      ],
    },
    {
      title: { en: 'Programming languages', fr: 'Langages de programmation' },
      type: 'badges',
      items: [
        { name: 'C' },
        { name: 'C++' },
        { name: 'C#' },
        { name: '.Net' },
        { name: 'Lua' },
      ],
    },
    {
      title: { en: 'Game Engine', fr: 'Moteur de jeu' },
      type: 'badges',
      items: [
        { name: 'Unreal Engine' },
        { name: 'Unity' },
      ],
    },
    {
      title: { en: 'Version Control', fr: 'Contrôle de version' },
      type: 'badges',
      items: [
        { name: 'Git' },
        { name: 'SVN' },
      ],
    },
    {
      title: { en: 'Tools', fr: 'Outils' },
      type: 'badges',
      items: [
        { name: 'GitHub' },
        { name: 'GitLab' },
        { name: 'Premake', color: '#2b9d2a' },
        { name: 'Jenkins' },
        { name: 'Visual Studio' },
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
      period: { en: '2025 - Present', fr: '2025 - Présent' },
      description: {
        en: 'Designed a 3D simulation to introduce secondary school students to industrial automation. Maintained and expanded Reims3D.',
        fr: 'Conception d\'une simulation 3D pour initier les élèves du secondaire à l\'automatisme industriel. Maintien et expansion de Reims3D.',
      },
      techs: ['Unity', 'Unreal Engine', 'UX', 'GitLab', 'Notion'],
      isHighlighted: true,
      details: {
        context: {
          en: 'Dual focus: continuing long-term development of Reims3D, and building a new educational simulation in Unity with a small cross-disciplinary team (developer, artist, university teacher).',
          fr: 'Double focus : poursuivre le développement à long terme de Reims3D, et construire une nouvelle simulation éducative sous Unity avec une petite équipe pluridisciplinaire (développeur, artiste, enseignant universitaire).',
        },
        tasks: {
          en: [
            'Designed and developed from scratch a Unity simulation introducing industrial automation and robotics to middle and high school students',
            'Collaborated with an artist on visual assets and a university teacher on pedagogical content and learning objectives',
            'Built accessible and intuitive interactions allowing students with no technical background to engage with real-world industrial concepts',
            'Led the continued evolution of Reims3D, a 3D digital twin of the city of Reims for desktop and VR',
            'Extended existing systems and improved platform scalability to support new research and visualization needs',
            'Wrote technical documentation and user guides for teachers',
          ],
          fr: [
            'Conception et développement from scratch d\'une simulation Unity initiant les collégiens et lycéens à l\'automatisme et à la robotique industrielle',
            'Collaboration avec un artiste sur les assets visuels et un enseignant universitaire sur le contenu pédagogique et les objectifs d\'apprentissage',
            'Développement d\'interactions accessibles et intuitives permettant à des élèves sans bagage technique de s\'approprier des concepts industriels réels',
            'Direction de l\'évolution continue de Reims3D, jumeau numérique 3D de la ville de Reims pour desktop et VR',
            'Extension des systèmes existants et amélioration de la scalabilité pour répondre aux nouveaux besoins de recherche et de visualisation',
            'Redaction de la documentation technique et des guides utilisateurs pour les enseignants',
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
        en: 'Developed Reims3D, a 3D interactible digital twin of the city of Reims for desktop and VR.',
        fr: 'Développement de Reims3D, un jumeau numérique 3D interactif de la ville de Reims pour desktop et VR.',
      },
      techs: ['Unreal Engine', 'C++',  'VR', 'GitLab', 'Notion'],
      isHighlighted: false,
      details: {
        context: {
          en: 'R&D context within Université de Reims Champagne-Ardenne. Solo ownership of the full technical pipeline, from data ingestion to real-time simulation, using GitLab and Notion for project tracking.',
          fr: 'Contexte R&D au sein de l\'Université de Reims Champagne-Ardenne. Responsabilité solo du pipeline technique complet, de l\'ingestion de données à la simulation temps réel, avec GitLab et Notion pour le suivi de projet.',
        },
        tasks: {
          en: [
            'Built Reims3D, a real-time 3D digital twin of the city of Reims, targeting both desktop and VR platforms',
            'Implemented procedural city generation from OpenStreetMap (OSM) data',
            'Developed real-time traffic simulation using Unreal Engine\'s ZoneGraph and Mass Traffic systems',
            'Owned the full pipeline from raw geospatial data ingestion to interactive 3D visualization',
            'Worked in an R&D environment, iterating rapidly on experimental features with limited prior references',
          ],
          fr: [
            'Développement de Reims3D, jumeau numérique 3D temps réel de la ville de Reims, ciblant les plateformes desktop et VR',
            'Implémentation de la génération procédurale de la ville à partir des données OpenStreetMap (OSM)',
            'Développement de la simulation de trafic en temps réel via ZoneGraph et Mass Traffic d\'Unreal Engine',
            'Responsabilité du pipeline complet, de l\'ingestion des données géospatiales brutes à la visualisation 3D interactive',
            'Travail en environnement R&D, avec itérations rapides sur des fonctionnalités expérimentales et peu de références existantes',
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
          en: 'Contributed as UI and technical programmer on two 3-month game productions within an 11-person team.',
          fr: 'Contributions en tant que programmeur UI et technique sur deux productions de 3 mois au sein d\'une équipe de 11 personnes.',
        },
        techs: ['Unity', 'Unreal Engine', 'C#', 'C++', 'UI Toolkit', 'Wwise'],
        isHighlighted: false,
        details: {
          context: {
            en: 'Two successive 3-month productions with Bubble Raccoon. Teams of ~11 people (6 programmers, 5 artists) working with full production pipeline. Both project are available on my Itch.io page, feel free to check them out!',
            fr: 'Deux productions successives de 3 mois avec Bubble Raccoon. Équipes d\'environ 11 personnes (6 programmeurs, 5 artistes) gérant un pipeline de production complet. Les deux projets sont disponibles sur ma page Itch.io, n\'hésitez pas à les découvrir !',
          },
          tasks: {
            en: [
              'Implemented core UI systems and data-driven architecture for Cosy Sushi, a 3D cosy life-simulation game in Unreal Engine',
              'Developed restaurant management and farming system interfaces for Cosy Sushi',
              'Built UI systems using Unity UI Toolkit for Tales of Scales, a 3D open-world action RPG',
              'Designed a procedural grass renderer optimized for large open-world environments using compute shaders',
            ],
            fr: [
              'Implémentation des systèmes UI principaux et de l\'architecture data-driven pour Cosy Sushi, un jeu de simulation cosy 3D sous Unreal Engine',
              'Développement des interfaces de gestion de restaurant et de farming pour Cosy Sushi',
              'Développement des systèmes UI avec Unity UI Toolkit pour Tales of Scales, un action RPG open-world 3D',
              'Conception d\'un renderer d\'herbe procédural optimisé pour les grands environnements open-world via compute shaders',
            ],
          },
          training: {
            en: [],
            fr: [],
          },
          env: {
            en: 'Unreal Engine 5 / Unity / C++ / C# / UI Toolkit / Git / Notion',
            fr: 'Unreal Engine 5 / Unity / C++ / C# / UI Toolkit / Git / Notion',
          },
        },
    },
  ],

  projects: [
    {
      id: 'sapphire',
      title: { en: 'Sapphire', fr: 'Sapphire' },
      description: {
        en: 'A 2D game engine build with C++ and OpenGL, featuring an editor and ECS architecture.',
        fr: 'Un moteur de jeu 2D en C++ et OpenGL, avec éditeur et architecture ECS.',
      },
      techs: ['C++', 'OpenGL', 'Premake'],
      github: 'https://github.com/Theo-Mestre/Sapphire',
    },
    {
      id: 'Unity Event Dispatcher',
      title: { en: 'Unity Event Dispatcher', fr: 'Unity Event Dispatcher' },
      description: {
        en: 'A lightweight event system for Unity that allows decoupled communication between different parts of your application.',
        fr: 'Un système d\'événements léger pour Unity qui permet une communication décorrélée entre différentes parties de votre application.',
      },
      techs: ['C#', 'Unity'],
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

  // ===== HOBBIES (optional) =====
  //hobbies: [
  //  {
  //    title: { en: 'Photography', fr: 'Photographie' },
  //    details: [
  //      { en: 'Street photography', fr: 'Photo de rue' },
  //      { en: '5 years', fr: '5 ans' },
  //    ],
  //  },
  //  {
  //    title: { en: 'Hiking', fr: 'Randonnée' },
  //    details: [
  //      { en: 'Mountain trails', fr: 'Sentiers de montagne' },
  //    ],
  //  },
  //  {
  //    title: { en: 'Open Source', fr: 'Open Source' },
  //  },
  //  {
  //    title: { en: 'Guitar', fr: 'Guitare' },
  //    details: [
  //      { en: '3 years', fr: '3 ans' },
  //    ],
  //  },
  //],
//
  // ===== PDF (optional — place your PDF in public/cv/) =====
  // Use a string for the same PDF in all languages,
  // or a LocalizedString for one PDF per language (button is hidden if no PDF for the current language).
  pdf: {
    label: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    path: '/cv/Resume_Theo_Mestre.pdf',
  },

  // ===== THEME =====
  theme: {
    preset: 'forest', // 'minimal' | 'warm' | 'ocean' | 'forest' | 'slate' | 'lilac'
    // You can override individual colors:
    // colors: {
    //   primary: '#8B5A2B',
    //   primaryLight: '#D4A574',
    // },
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
