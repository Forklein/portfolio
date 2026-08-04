import { projects } from "../data/project";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black py-32 px-6 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <span className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Featured Projects
        </span>

        <h2 className="mt-4 text-5xl font-black">
          Alcuni progetti su cui ho lavorato.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Ogni progetto rappresenta una soluzione sviluppata per risolvere
          esigenze concrete di aziende e clienti, con particolare attenzione
          a performance, scalabilità e qualità del codice.
        </p>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

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