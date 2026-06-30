import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Proyectos",
  description: "Portafolio de proyectos de riego, bombeo, automatizacion y soluciones agricolas en Colombia.",
  path: "/proyectos",
});

export default function ProjectsPage() {
  return (
    <main className="py-16">
      <Container>
        <SectionHeader
          eyebrow="Proyectos"
          title="Portafolio de soluciones hidricas y agricolas"
          description="Casos de exito tipo para mostrar problema, solucion y resultado de cada intervencion."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </main>
  );
}
