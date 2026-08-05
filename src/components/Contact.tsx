import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-zinc-950 md:py-32 py-12 text-white">

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-96 md:max-w-6xl">
        <div className="rounded-[40px] border border-zinc-800 bg-black/70 p-6 md:p-12 backdrop-blur">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Contact
          </span>

          <h2 className="mt-4 text-5xl font-black leading-tight">
            Hai un progetto in mente?
            Parliamone.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            Sono disponibile per collaborazioni freelance, sviluppo software,
            supporto a web agency e realizzazione di applicazioni web
            personalizzate.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              target="_blank"
              href="mailto:giuseppepisani2@gmail.com"
              className="flex items-center gap-5 rounded-xl bg-emerald-500 px-7 py-4 font-semibold text-black transition hover:scale-105"
            >
              <Mail size={20} />
              Scrivimi
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-5">
            <a
              href="https://github.com/forklein"
              target="_blank"
              className="flex items-center gap-5 text-zinc-400 transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/giuseppe-pisani93/"
              target="_blank"
              className="flex items-center gap-5 text-zinc-400 transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="mailto:giuseppepisani2@gmail.com"
              target="_blank"
              className="flex items-center gap-5 text-zinc-400 transition hover:text-white"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
