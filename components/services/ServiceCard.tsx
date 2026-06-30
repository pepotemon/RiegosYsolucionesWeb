import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { Service } from "@/types/service";

export function ServiceCard({ service, compact = false }: { service: Service; compact?: boolean }) {
  const Icon = service.icon;
  return (
    <Card className="group flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#06131f]/40" />
        <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-md bg-white text-[#1b6cb6]">
          <Icon size={22} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-[#1a2b3c]">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-[#566a7a]">
          {compact ? service.shortDescription : service.description}
        </p>
        <a
          href={`/servicios/${service.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#1b6cb6] transition group-hover:gap-3"
        >
          Ver mas <ArrowRight size={17} />
        </a>
      </div>
    </Card>
  );
}
