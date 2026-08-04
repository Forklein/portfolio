import EmblaCarousel from "./EmblaCarousel";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black py-32 px-6 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
          Featured Projects
        </span>

        <h2 className="mt-4 text-5xl font-black">
          Alcuni progetti selezionati.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Una selezione dei progetti che raccontano il mio modo di progettare e sviluppare software.
        </p>

        <EmblaCarousel />

      </div>
    </section>
  );
}