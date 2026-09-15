import type { Project } from "../types/project";

import dacflow from "../assets/images/dacflow.webp";
import pugliamare from "../assets/images/pugliamare.webp";
import afbeautyart from "../assets/images/afbeautyart.webp";
import gossyparty from "../assets/images/gossyparty.webp";
import eterea from "../assets/images/eterea.webp";
// import caseificio from "../assets/images/caseificio.webp";
import avvocato from "../assets/images/avvocato.webp";
import horsescript from "../assets/images/horse.webp";
// import porterossestudio from "../assets/images/porterossestudio.webp";
// import procreateproject from "../assets/images/procreateproject.webp";
import thesocietyluxury from "../assets/images/thesocietyluxury.webp";
import vespaescape from "../assets/images/vespaescape.webp";

export const projects: Project[] = [
  {
    id: "dacflow",
    title: "Dacflow",
    description:
      "Gestionale sviluppato in Laravel per l'emissione di scontrini elettronici e la gestione di ordini, clienti, fatturazione elettronica, WhatsApp e automazioni aziendali.",

    image: dacflow,

    technologies: ["Laravel", "Livewire", "Alpine JS", "Pusher", "MySQL", "Docker"],

    featured: true,
  },

  {
    id: "pugliamare",
    title: "Pugliamare",

    description:
      "E-commerce sviluppato in Shopify con codice liquid custom su diversi template, integrazione con endpoint esterni e personalizzazioni per migliorare l'esperienza utente.",

    image: pugliamare,

    technologies: ["Shopify", "Salesforce", "API", "Liquid", "PHP"],

    category: "E-commerce",

    featured: true,
  },

  {
    id: "afbeautyart",
    title: "AF Beauty Art",

    description:
      "Sito web ed e-commerce sviluppato con WordPress, PHP, JavaScript e MySQL, con sistema di prenotazione online dei trattamenti, acquisto di gift card digitali e personalizzazioni su misura per migliorare l'esperienza utente.",

    image: afbeautyart,

    technologies: [
      "WordPress",
      "PHP",
      "JavaScript",
      "MySQL"
    ],

    category: "Beauty & E-commerce",

    featured: true,
  },

    {
    id: "gossyparty",
    title: "Gossy Party",

    description:
      "Piattaforma community sviluppata con WordPress e BuddyBoss, personalizzata per la gestione di destinazioni, club ed esperienze. Ho realizzato funzionalità custom, integrazione dei Club come Custom Post Type, personalizzazioni del tema e sviluppo di componenti dedicati per migliorare l'esperienza utente.",

    image: gossyparty,

    technologies: [
      "WordPress",
      "BuddyBoss",
      "PHP",
      "JavaScript",
      "MySQL"
    ],

    category: "Community Platform",

    featured: true,
  },

  {
    id: "horse-script",
    title: "Horse Script",

    description:
      "Sviluppo di un'estensione Google Chrome per l'automazione di workflow nel browser, con monitoraggio degli eventi, compilazione automatica dei form, gestione di task personalizzati e notifiche in tempo reale tramite Discord Webhook.",

    image: horsescript,

    technologies: [
      "JavaScript",
      "Chrome Extension",
      "Discord API",
      "HTML",
      "CSS"
    ],

    category: "Bot",

    featured: true,
  },

  {
    id: "vespa-escape",
    title: "Vespa Escape",

    description:
      "Sviluppo di una piattaforma e-commerce dedicata alle esperienze in Vespa in Puglia, con gestione di tour, noleggi, pacchetti multiday e tour personalizzati. Un'esperienza digitale pensata per valorizzare il territorio e semplificare la scoperta e la prenotazione delle esperienze.",

    image: vespaescape,

    technologies: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "HTML",
      "CSS"
    ],

    category: "E-commerce",

    featured: true,
  },

  // {
  //   id: "porte-rosse-studio",
  //   title: "Porte Rosse Studio",

  //   description:
  //     "Realizzazione del sito web per un atelier di architettura con un'interfaccia elegante e fortemente visuale, progettata per valorizzare i progetti dello studio, la sua identità e il portfolio di architettura, interior e paesaggio.",

  //   image: porterossestudio,

  //   technologies: [
  //     "React",
  //     "JavaScript",
  //     "HTML",
  //     "CSS"
  //   ],

  //   category: "Website",

  //   featured: true,
  // },

  {
    id: "eterea",
    title: "Eterea Cosmesi",

    description:
      "Sviluppo e personalizzazione di un e-commerce in Shopify per un brand di cosmetica, con implementazione di funzionalità custom, ottimizzazioni del frontend e sviluppo di soluzioni su misura per migliorare l'esperienza di acquisto.",

    image: eterea,

    technologies: [
      "Shopify",
      "API",
      "Liquid",
      "JavaScript",
      "MySQL"
    ],

    category: "E-commerce",

    featured: true,
  },
  {
    id: "caseificio-artigiana",
    title: "Caseificio Artigiana",

    description:
      "Sviluppo e personalizzazione di un sito WordPress con funzionalità custom, componenti sviluppati su misura e ottimizzazioni dell'esperienza utente. Realizzazione di soluzioni personalizzate lato frontend e backend per soddisfare le esigenze del cliente.",

    image: caseificio,

    technologies: [
      "WordPress",
      "PHP",
      "JavaScript",
      "MySQL"
    ],

    category: "Corporate Website",

    featured: true,
  },

  // {
  //   id: "procreate-project",
  //   title: "Procreate Project",

  //   description:
  //     "Sviluppo di una piattaforma web per un'organizzazione internazionale dedicata al supporto di artiste e artisti con responsabilità di cura, con gestione di progetti, pubblicazioni, archivi, piattaforme e contenuti editoriali.",

  //   image: procreateproject,

  //   technologies: [
  //     "WordPress",
  //     "PHP",
  //     "JavaScript",
  //     "HTML",
  //     "CSS"
  //   ],

  //   category: "Website",

  //   featured: true,
  // },

  {
    id: "the-society-luxury",
    title: "The Society Luxury",

    description:
      "Sviluppo di una piattaforma e-commerce dedicata al luxury travel in Puglia, progettata per presentare esperienze esclusive, pacchetti, eventi e contenuti editoriali attraverso un'esperienza digitale fortemente visuale e orientata alla conversione.",

    image: thesocietyluxury,

    technologies: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "HTML",
      "CSS"
    ],

    category: "E-commerce",

    featured: true,
  },

  {
    id: "avvocato-emilia-pisani",
    title: "Avvocato Emilia Pisani",

    description:
      "Sviluppo di un sito web professionale in WordPress con funzionalità personalizzate, aree servizi dinamiche, gestione dei contenuti e ottimizzazioni SEO, progettato per valorizzare l'attività dello studio legale e facilitare il contatto con i clienti.",

    image: avvocato,

    technologies: [
      "WordPress",
      "PHP",
      "JavaScript",
      "MySQL",
      "SEO"
    ],

    category: "Professional Website",

    featured: true,
  }
];
