import { stack } from "../data/stack";

export default function TechStack() {
  return (
    <section id="stack" className="bg-zinc-950 md:py-32 py-12 px-6 text-white">
      <div className="mx-auto max-w-7xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Tech Stack
        </span>

        <h2 className="mt-4 text-5xl font-black">
          Le tecnologie che utilizzo ogni giorno.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
          Seleziono gli strumenti in base al progetto, privilegiando soluzioni
          affidabili, scalabili e semplici da mantenere.
        </p>

        <div className="mt-20 space-y-10">
          {stack.map((group) => (
            <div
              key={group.category}
              className="rounded-3xl border border-zinc-800 bg-black md:p-8 p-5"
            >
              <h3 className="text-2xl font-bold">{group.category}</h3>

              <div className="mt-6 flex flex-wrap gap-5">
                {group.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 transition hover:border-emerald-500 hover:text-emerald-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
