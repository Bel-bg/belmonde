const animation = {
  animate: true,
  duration: 750,
  once: false,
};

const header = {
  name: "Belmonde FIODEKANHOUN",
  pseudo: "#beldev",
};
const background = {
  type: "Snow",
};

const section2title = "À propos de moi";
const about = {
  paragraph:
    "Passionné par l'univers du Web et du Mobile, connu sous le pseudo #beldev (Belmonde FIODEKANHOUN), j'observe, j'étudie et je conçois des solutions numériques performantes. Mon écosystème de prédilection tourne autour de JavaScript et de ses frameworks, que j'utilise pour créer des expériences utilisateur uniques et des applications robustes. Mon expertise me permet aujourd'hui de propulser des sites web avec React JS, de développer des applications mobiles cross-platform avec React Native, et de concevoir des API complètes avec Node.js / Express. Toujours à l'affût des nouvelles technologies, j'explore également la création d'applications Desktop (avec Rust via Tauri, et actuellement Java), ainsi que le mobile avec Flutter. Curieux et rigoureux, je vois chaque projet comme une opportunité d'apprendre et d'innover.",
};

const skillsBar = [
  {
    name: "HTML5",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    faClass: "fab fa-js",
  },
  {
    name: "React",
    faClass: "fab fa-react",
  },
  {
    name: "Flutter",
    faClass: "fab fa-flutter",
  },
  {
    name: "Node.js",
    faClass: "fab fa-node",
  },
  {
    name: "PHP",
    faClass: "fab fa-php",
  },
  {
    name: "Java",
    faClass: "fab fa-java",
  },
  {
    name: "Rust",
    faClass: "fab fa-rust",
  },
  {
    name: "Bases de données",
    faClass: "fas fa-database",
  },
];

const section3Title = "Mes projets";
const projects = [
  {
    id: "monitor",
    name: "Monitor",
    skills: ["TypeScript", "React Native", "ReactJS", "Tauri", "NodeJS"],
    url: "https://www.monitor.sarl/",
    category: "Ecosystème de gestion Académique et Administrative",
    summary:
      "Ecosystème de Gestion Académique et Administrative : Automatisation des suivis de notes, présences et moyennes; Automatisation de la conception des documents administrative relevées de notes, bulletins de notes, cahier de présence, cahier de texte et Communication entre l'établissement, les enseignants et les parents.",
    description:
      "Monitor regroupe dans un même monorepo une application mobile pour les parents, une application mobile pour les enseignants et les administrateurs et une version desktop pour l'administration des établissement. Un backoffice interne et le site monitor.sarl en est la vitrine.",
    variants: [
      {
        type: "Monitor Akowé",
        desc: "Consultation des notes, des présences et des communications de l'établissement.",
      },
      {
        type: "Monitor Plus",
        desc: "Saisie des notes et des présences, gestion côté établissement.",
      },
      {
        type: "Monitor Desktop",
        desc: "Administration de la plateforme, avec une version Electron pour le poste de travail.",
      },
      {
        type: "Landing Page",
        desc: "Page de présentation de la plateforme, hébergée sur cloudflare.",
      },
    ],
    technologies: [
      "React Native",
      "ReactJS",
      "TypeScript",
      "Tauri",
      "Express/NodeJS",
      "Prisma",
    ],
    services: [
      "Design system partagé entre les apps",
      "Développement mobile et web",
      "Nom de domaine et hébergement",
    ],
    screenshots: [
      "https://iad.microlink.io/hb1UstqQyPfzTN1bdmhvhjCEwaUs9C8UwCh34kuGhej2rH-euWv5UbfdDfLMQHz03labeTdVZUyc8iZ77B4Z4g.png",
    ],
  },
  {
    id: "lotus",
    name: "Lotus Business",
    skills: ["React Native", "Offline-first", "ReactJS", "Node.js"],
    url: "https://www.lotusbusinesses.com/",
    category: "Gestion commerciale",
    summary:
      "Application de caisse et de gestion de stock pour les petits commerçants, qui fonctionne sans connexion internet.",
    description:
      "Lotus Business s'adresse aux commerçants indépendants et aux très petites entreprises du secteur informel. Les données sont stockées sur le téléphone du commerçant, puis exportées vers son propre tableau de bord web. L'application a été testée sur le terrain au marché de Dantokpa, à Cotonou.",
    variants: [
      {
        type: "Application mobile",
        desc: "Caisse, inventaire et impression de tickets sur imprimante thermique Bluetooth.",
      },
      {
        type: "Site vitrine",
        desc: "Présentation du produit et du blog.",
      },
      {
        type: "Tableau de bord d'administration",
        desc: "Distribution des licences et gestion du blog. Aucun accès aux données des boutiques.",
      },
    ],
    technologies: [
      "React Native",
      "Expo",
      "SQLite",
      "React",
      "Vite",
      "Next.js",
      "Node.js",
      "Express",
      "Prisma",
      "Supabase",
    ],
    services: [
      "Licences payées par Mobile Money (KkiaPay)",
      "Envoi des clés d'accès par email (Brevo)",
      "Impression thermique Bluetooth",
      "Architecture offline-first",
    ],
    screenshots: [
      "https://iad.microlink.io/9BwH5wJMF15i9O9W7Dgkp9eeoiK_nh9r68ZHSKnC7CuB2lfxA_9d6mvCT9EzBDM7jgK89wCNFiI8TgyCLWhHZw.png",
    ],
  },
  {
    id: "artisanlink",
    name: "ArtisanLink",
    skills: ["React Native", "Node.js", "PostgreSQL", "Prisma"],
    url: "https://artisanlink.axiomgroup.bj/",
    category: "Mise en relation et services locaux",
    summary:
      "Plateforme qui met en relation des clients et des artisans au Bénin.",
    description:
      "ArtisanLink aide les particuliers à trouver un artisan de confiance près de chez eux. L'application propose une carte, le choix de la ville, des profils d'artisans avec un score de complétion et des badges de réputation.",
    variants: [
      {
        type: "Application mobile",
        desc: "Application React Native pour les clients et les artisans.",
      },

      {
        type: " Landing Page",
        desc: "Site Vitrine de l'appli",
      },
    ],
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
    ],
    services: [
      "Développement mobile ",
      "Carte et sélection de la ville",
      "Profils artisans",
    ],
    screenshots: [
      "https://iad.microlink.io/eNjcLCY_kO-K1Dq5DCrIgDjVzFcnnoV3lRhjGf7EPluL7RpA5NjIeIA6ccb4eQGvBK-kADDehPoHsP0uJtzsxg.png",
    ],
  },
  {
    id: "alkoudra",
    name: "Auto-école AL-KOUDRA",
    skills: ["React", "Node.js", "Express", "PostgreSQL"],
    url: "https://auto-ecole.axiomgroup.bj/",
    category: "Logiciel de gestion & E-learning",
    summary:
      "Logiciel de gestion et plateforme de formation en ligne pour l'auto-école AL-KOUDRA à Cotonou.",
    description:
      "Solution complète développée pour l'auto-école AL-KOUDRA. Elle combine la gestion administrative (inscriptions, suivi des paiements, planning des cours et moniteurs) et une plateforme d'apprentissage pour les candidats (cours du code de la route, 50 séries audio, examens blancs interactifs et suivi personnalisé).",
    variants: [
      {
        type: "Application Web & Plateforme E-learning",
        desc: "Interface web responsive permettant aux candidats de suivre les cours de code, s'entraîner aux examens blancs et payer leurs formations.",
      },
      {
        type: "Logiciel de gestion / Dashboard Admin",
        desc: "Tableau de bord pour l'administration : gestion des élèves, planning des séances de conduite et de code, suivi financier et rapports.",
      },
    ],
    technologies: [
      "React",
      "JavaScript / TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "RESTful API",
      "CSS3 / Responsive UI",
    ],
    services: [
      "Gestion administrative et suivi des élèves",
      "Module d'apprentissage et d'examens blancs en ligne",
      "Intégration des paiements (Mobile Money & espèces)",
      "Planification des cours et séances avec moniteurs",
    ],
    screenshots: [
      "https://iad.microlink.io/U1mPNxsCGLIZSkf6LP84t4bn-zJ9pSJ78umhKNU4YWbsCqA67BxCv5A1ttRMFi1Dz7IzwhTqsEBDD3ieQDfz-A.png",
    ],
  },
  {
    id: "musik",
    name: "Musik",
    skills: ["Tauri", "Desktop", "TypeScript", "UI / UX"],
    url: "https://bel-bg.github.io/musik/",
    category: "Multimédia",
    summary:
      "Lecteur de musique de bureau au design skeuomorphique, pour Windows et Linux.",
    description:
      "Musik affiche les playlists, appelées « bandes », dans un carrousel 3D de cartes, avec la file de lecture dans la même interface. La page du projet permet de télécharger l'application.",
    variants: [
      {
        type: "Application desktop",
        desc: "Construite avec Tauri. Installateurs Windows (.exe) et Linux (.deb, .AppImage).",
      },
      {
        type: "Page de téléchargement",
        desc: "Site de présentation hébergé sur GitHub Pages.",
      },
    ],
    technologies: [
      "Tauri",
      "JavaScript",
      "Web Audio API",
      "CSS Animations",
      "GitHub Pages",
    ],
    services: [
      "Lecteur audio de bureau",
      "Carrousel 3D des playlists",
      "Design d'interface skeuomorphique",
    ],
    screenshots: [
      "https://iad.microlink.io/U8-RjcjVR1DRrcED2tHj88mS9a0_nCODvrltTA7giAD9xRfn-EZez7BEVuRzN8TAK4eCbrk3COH0nVHbGdCcOA.png",
    ],
  },
];

const section5Title = "Me Contacter";
const contact = {
  pitch:
    "Un projet en tête, une collaboration ou simplement envie d'échanger ? N'hésitez pas à m'envoyer un message via le formulaire ci-dessous ou directement via mes réseaux sociaux.",
  copyright: "Belmonde FIODEKANHOUN (#beldev)",
  contactUrl: "",
};

const social = {
  github: "https://github.com/Bel-bg",
  linkedin: "https://www.linkedin.com/in/belmonde-fiodekanhoun-54b5a2360/",
  resume: "https://drive.google.com/file/d/1OvBZ596S0JfyK56Z5UAiPGGf_MxERhgf/view?usp=sharing",
  portfolioPdf: "https://drive.google.com/file/d/1OvBZ596S0JfyK56Z5UAiPGGf_MxERhgf/view?usp=sharing",
};

export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  contact,
  social,
  section2title,
  section3Title,
  section5Title,
};
