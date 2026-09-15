import {
  Code2,
  BriefcaseBusiness,
  Layers3,
  BadgeCheck,
} from "lucide-react";

import { SiLinkedin } from "react-icons/fa";

const stats = [
  {
    icon: <BriefcaseBusiness size={28} />,
    value: "8+",
    label: "Anni di esperienza",
  },
  {
    icon: <Code2 size={28} />,
    value: "80+",
    label: "Progetti realizzati",
  },
  {
    icon: <Layers3 size={28} />,
    value: "20+",
    label: "Tecnologie utilizzate",
  },
  {
    icon: <BadgeCheck size={28} />,
    value: "Freelance",
    label: "Disponibile per collaborazioni",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-black md:py-32 py-12 px-6 text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">

        {/* Testo */}

        <div>

          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            About Me
          </span>

          <h2 className="mt-4 font-black leading-tight text-5xl">
            Sviluppo software che risolvono problemi reali.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            Sono uno sviluppatore Full Stack con oltre 8 anni di esperienza nel mondo dello sviluppo software. 
            Nel corso degli anni ho avuto modo di lavorare in diverse realtà aziendali, 
            confrontandomi con team, progetti ed esigenze di business differenti.
          </p>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Ho sviluppato applicazioni web, software gestionali, e-commerce, piattaforme personalizzate e integrazioni API, 
            lavorando sia sul frontend che sul backend e occupandomi dell'intero processo di sviluppo.
            Le esperienze maturate in ambito aziendale mi hanno insegnato non solo a scrivere codice, ma soprattutto a capire i problemi, 
            trovare soluzioni concrete e trasformare le esigenze in prodotti digitali funzionali e affidabili.
          </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/giuseppe-pisani93/"
            className="flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-black transition hover:scale-105"
          >
            <SiLinkedin size={20} />
            Il mio profilo Linkedin
          </a>
        </div>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 gap-6">

          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-zinc-800 bg-zinc-950 md:p-8 p-5 transition hover:-translate-y-2 hover:border-emerald-500"
            >
              <div className="text-emerald-400">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-black">
                {item.value}
              </h3>

              <p className="mt-2 text-zinc-400">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}