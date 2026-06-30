import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group h-full overflow-hidden transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="flex items-center gap-2 text-sm font-semibold text-[#1b6cb6]">
          <MapPin size={16} /> {project.location}
        </p>
        <h3 className="mt-3 text-xl font-bold text-[#1a2b3c]">{project.name}</h3>
        <dl className="mt-4 grid gap-2 text-sm text-[#566a7a]">
          <div className="flex justify-between gap-4">
            <dt>Cultivo</dt>
            <dd className="font-semibold text-[#1a2b3c]">{project.crop}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>Area</dt>
            <dd className="font-semibold text-[#1a2b3c]">{project.area}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>Servicio</dt>
            <dd className="font-semibold text-[#1a2b3c]">{project.service}</dd>
          </div>
        </dl>
        <a
          href={`/proyectos/${project.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#1b6cb6] transition group-hover:gap-3"
        >
          Ver proyecto <ArrowRight size={17} />
        </a>
      </div>
    </Card>
  );
}
