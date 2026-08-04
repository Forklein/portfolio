import { ArrowUpRight } from "lucide-react";
import type { Project } from "../types/project";

interface Props {
  project: Project;
}

export default function ProjectSlide({ project }: Props) {
  return (
    <div className="mx-auto max-w-5xl">

      <div className="overflow-hidden rounded-[32px] border border-zinc-800 bg-zinc-950">

        {/* Browser */}

        <div className="flex items-center gap-2 border-b border-zinc-800 px-6 py-4">

          <span className="h-3 w-3 rounded-full bg-red-500"/>

          <span className="h-3 w-3 rounded-full bg-yellow-500"/>

          <span className="h-3 w-3 rounded-full bg-green-500"/>

        </div>

        {/* Screenshot */}

        <img
          src={project.image}
          alt={project.title}
          className="h-[500px] w-full object-cover"
        />

      </div>

      <div className="mt-10">

        <h3 className="text-4xl font-black">
          {project.title}
        </h3>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">

          {project.technologies.map((tech) => (

            <span
              key={tech}
              className="rounded-full border border-zinc-700 px-4 py-2"
            >
              {tech}
            </span>

          ))}

        </div>

        <button
          className="mt-10 flex items-center gap-3 font-semibold text-emerald-400"
        >
          View Case Study

          <ArrowUpRight />
        </button>

      </div>

    </div>
  );
}