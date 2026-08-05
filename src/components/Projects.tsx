import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black md:py-32 py-12 px-6 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
          Featured Projects
        </span>

        <h2 className="mt-4 text-5xl font-black">
          Alcuni progetti su cui ho lavorato.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
          Una selezione di applicazioni web, software gestionali,
          e-commerce e integrazioni sviluppate per aziende e clienti.
        </p>

        <div className="mt-20 grid gap-5 grid-cols-1 md:grid-cols-3">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}