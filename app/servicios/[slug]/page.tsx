import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return createMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/servicios/${service.slug}`,
    image: service.image,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const Icon = service.icon;
  const relatedProjects = projects.filter((project) => service.relatedProjectSlugs.includes(project.slug));

  return (
    <main>
      <section className="bg-white py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-md bg-[#dbeeff] text-[#1b6cb6]">
              <Icon size={28} />
            </div>
            <h1 className="text-4xl font-black text-[#1a2b3c] sm:text-5xl">{service.title}</h1>
            <p className="mt-5 text-lg leading-8 text-[#3a5268]">{service.description}</p>
            <div className="mt-8">
              <Button href={getWhatsAppUrl(`Hola, quiero cotizar el servicio de ${service.title}.`)}>
                Solicitar cotizacion
              </Button>
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-lg">
            <Image src={service.image} alt={service.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-8 lg:grid-cols-3">
          <InfoBlock title="Para quien sirve" items={service.audience} />
          <InfoBlock title="Beneficios" items={service.benefits} />
          <InfoBlock title="Proceso" items={service.process} />
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <SectionHeader eyebrow="Proyectos relacionados" title="Aplicaciones reales de este servicio" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {relatedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeader eyebrow="Preguntas frecuentes" title="Respuestas utiles antes de cotizar" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {service.faqs.map((faq) => (
              <div key={faq.question} className="rounded-lg border border-[#c8ddf0] bg-white p-6">
                <h3 className="font-bold text-[#1a2b3c]">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-[#566a7a]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-[#c8ddf0] bg-white p-6">
      <h2 className="text-xl font-bold text-[#1a2b3c]">{title}</h2>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-[#3a5268]">
            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#3baa6e]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
