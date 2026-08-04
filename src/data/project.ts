import type { Project } from "../types/Project";

import dacflow from "../assets/images/dacflow.webp";
import pugliamare from "../assets/images/pugliamare.webp";

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
      "Sistema di integrazione tra Shopify, FareHarbor e Salesforce per sincronizzare prenotazioni e clienti.",

    image: pugliamare,

    technologies: ["Laravel", "Salesforce", "Shopify", "API"],

    featured: true,
  },
];
