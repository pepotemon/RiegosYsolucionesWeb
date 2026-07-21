import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/seo";
import { ProjectsPageContent } from "@/components/projects/ProjectsPageContent";

export const metadata = createMetadata({
  title: "Proyectos",
  description:
    "Portafolio de proyectos de riego, bombeo, automatización y soluciones agrícolas en Colombia.",
  path: "/proyectos",
});

export default function ProjectsPage() {
  return <ProjectsPageContent projects={projects} />;
}
