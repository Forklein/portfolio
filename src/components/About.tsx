import {
  Code2,
  BriefcaseBusiness,
  Layers3,
  BadgeCheck,
} from "lucide-react";

const stats = [
  {
    icon: <BriefcaseBusiness size={28} />,
    value: "5+",
    label: "Anni di esperienza",
  },
  {
    icon: <Code2 size={28} />,
    value: "40+",
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
      className="bg-black py-32 px-6 text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">

        {/* Testo */}

        <div>

          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            About Me
          </span>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            Sviluppo software che risolvono problemi reali.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            Sono uno sviluppatore Full Stack specializzato nello sviluppo
            di applicazioni web moderne, software gestionali,
            e-commerce e integrazioni API.
          </p>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Collaboro con aziende e web agency trasformando idee
            ed esigenze di business in applicazioni performanti,
            scalabili e semplici da mantenere.
          </p>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Utilizzo principalmente Laravel, React, WordPress,
            Shopify e tecnologie cloud per realizzare soluzioni
            affidabili e orientate ai risultati.
          </p>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 gap-6">

          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition hover:-translate-y-2 hover:border-emerald-500"
            >
              <div className="text-emerald-400">
                {item.icon}
              </div>

              <h3 className="mt-6 text-3xl font-black">
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