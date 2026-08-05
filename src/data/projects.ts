import type { Project } from "../types/project";

import dacflow from "../assets/images/dacflow.webp";
import pugliamare from "../assets/images/pugliamare.webp";
import afbeautyart from "../assets/images/afbeautyart.webp";
import gossyparty from "../assets/images/gossyparty.webp";
// import eterea from "../assets/images/eterea.webp";
// import caseificio from "../assets/images/caseificio.webp";
import avvocato from "../assets/images/avvocato.webp";
import horsescript from "../assets/images/horse.webp";

export const projects: Project[] = [
  {
    id: "dacflow",
    title: "Dacflow",
    description:
      "Gestionale sviluppato in Laravel per la gestione di ordini, clienti, fatturazione elettronica, WhatsApp e automazioni aziendali.",

    image: dacflow,

    technologies: ["Laravel", "Livewire", "MySQL", "Docker"],

    featured: true,
  },

  {
    id: "pugliamare",
    title: "Pugliamare",

    description:
      "E-commerce sviluppato in Shopify con codice liquid custom su diversi template, integrazione con endpoint esterni e personalizzazioni per migliorare l'esperienza utente.",

    image: pugliamare,

    technologies: ["Laravel", "Salesforce", "Shopify", "API", "Liquid"],

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

  // {
  //   id: "eterea",
  //   title: "Eterea Cosmesi",

  //   description:
  //     "Sviluppo e personalizzazione di un e-commerce in Shopify per un brand di cosmetica, con implementazione di funzionalità custom, ottimizzazioni del frontend e sviluppo di soluzioni su misura per migliorare l'esperienza di acquisto.",

  //   image: eterea,

  //   technologies: [
  //     "Shopify",
  //     "API",
  //     "Liquid",
  //     "JavaScript",
  //     "MySQL"
  //   ],

  //   category: "E-commerce",

  //   featured: true,
  // },
  // {
  //   id: "caseificio-artigiana",
  //   title: "Caseificio Artigiana",

  //   description:
  //     "Sviluppo e personalizzazione di un sito WordPress con funzionalità custom, componenti sviluppati su misura e ottimizzazioni dell'esperienza utente. Realizzazione di soluzioni personalizzate lato frontend e backend per soddisfare le esigenze del cliente.",

  //   image: caseificio,

  //   technologies: [
  //     "WordPress",
  //     "PHP",
  //     "JavaScript",
  //     "MySQL"
  //   ],

  //   category: "Corporate Website",

  //   featured: true,
  // }

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
