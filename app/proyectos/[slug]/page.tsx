import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return createMetadata({
    title: project.name,
    description: `${project.service} en ${project.location}. ${project.result}`,
    path: `/proyectos/${project.slug}`,
    image: project.image,
  });
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main>
      <section className="bg-white py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1b6cb6]">Caso de exito</p>
            <h1 className="mt-4 text-4xl font-black text-[#1a2b3c] sm:text-5xl">{project.name}</h1>
            <dl className="mt-8 grid gap-3 text-sm text-[#566a7a] sm:grid-cols-2">
              <ProjectMeta label="Ubicacion" value={project.location} />
              <ProjectMeta label="Cultivo o sector" value={project.crop} />
              <ProjectMeta label="Area intervenida" value={project.area} />
              <ProjectMeta label="Servicio" value={project.service} />
            </dl>
            <div className="mt-8">
              <Button href={getWhatsAppUrl(`Hola, quiero solicitar una solucion similar a ${project.name}.`)}>
                Solicitar una solucion similar
              </Button>
            </div>
          </div>
          <div className="relative min-h-[430px] overflow-hidden rounded-lg">
            <Image src={project.image} alt={project.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </Container>
      </section>
      <section className="py-16">
        <Container className="grid gap-5 md:grid-cols-3">
          <CaseBlock title="Problema del cliente" text={project.problem} />
          <CaseBlock title="Solucion implementada" text={project.solution} />
          <CaseBlock title="Resultado obtenido" text={project.result} />
        </Container>
      </section>
      <section className="bg-white py-16">
        <Container>
          <h2 className="text-3xl font-black text-[#1a2b3c]">Galeria del proyecto</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {project.gallery.map((image) => (
              <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image src={image} alt={project.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

function ProjectMeta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-[#c8ddf0] bg-[#f5f9ff] p-4">
      <dt className="font-bold text-[#1a2b3c]">{label}</dt>
      <dd className="mt-1">{value}</dd>
    </div>
  );
}

function CaseBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-lg border border-[#c8ddf0] bg-white p-6">
      <h2 className="text-xl font-bold text-[#1a2b3c]">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-[#566a7a]">{text}</p>
    </div>
  );
}
