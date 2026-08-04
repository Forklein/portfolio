import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { projects } from "../data/projects";
import ProjectSlide from "./ProjectSlide";

export default function EmblaCarousel() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center"
  });

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative mt-20">

      <div
        className="overflow-hidden"
        ref={emblaRef}
      >

        <div className="flex">

          {projects.map((project) => (

            <div
              key={project.id}
              className="min-w-0 flex-[0_0_100%]"
            >
              <ProjectSlide project={project} />
            </div>

          ))}

        </div>

      </div>

      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full border border-zinc-700 p-4 transition hover:border-emerald-500"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full border border-zinc-700 p-4 transition hover:border-emerald-500"
      >
        <ChevronRight />
      </button>

    </div>
  );
}