import type { Project } from "../types/project";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-950
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-emerald-500
      "
    >
      {/* Browser Header */}

      <div className="flex items-center gap-2 border-b border-zinc-800 px-5 py-4">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      {/* Screenshot */}

      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            h-72
            w-full
            object-cover
            transition-all
            duration-500
            group-hover:scale-105
            group-hover:brightness-110
          "
        />
      </div>

      {/* Content */}

      <div className="p-8">

        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
          {project.category ?? "Web Application"}
        </span>

        <h3 className="mt-4 text-3xl font-bold">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-zinc-700
                bg-zinc-900
                px-3
                py-1
                text-sm
                text-zinc-300
              "
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </article>
  );
}