import type { Project } from "../types/project";

import dacflow from "../assets/images/dacflow.webp";
import pugliamare from "../assets/images/pugliamare.webp";
import afbeautyart from "../assets/images/afbeautyart.webp";
import gossyparty from "../assets/images/gossyparty.webp";

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
  }
];
