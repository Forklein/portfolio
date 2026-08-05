import {
  CheckCircle2
} from "lucide-react";

const points = [
  "Collaborazione con web agency",
  "Supporto durante i picchi di lavoro",
  "Sviluppo di nuovi progetti",
  "Manutenzione evolutiva",
  "Integrazione API",
  "Codice pulito e documentato",
];

export default function Collaboration() {
  return (
    <section
      id="collaboration"
      className="bg-black md:py-32 py-12 px-6 text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-2">

        <div>

          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Collaboration
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Un freelance che lavora come parte del tuo team.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            Collaboro con aziende e web agency offrendo supporto
            nello sviluppo di applicazioni web, e-commerce,
            software gestionali e integrazioni API.
          </p>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Posso affiancare il vostro team per un progetto
            specifico oppure lavorare continuativamente come
            sviluppatore esterno.
          </p>

        </div>

        <div className="space-y-5">

          {points.map((point) => (

            <div
              key={point}
              className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-emerald-500"
            >

              <CheckCircle2
                size={24}
                className="text-emerald-400"
              />

              <span className="text-lg">
                {point}
              </span>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}