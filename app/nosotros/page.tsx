import { company } from "@/data/company";
import { createMetadata } from "@/lib/seo";
import { AboutPageContent } from "@/components/nosotros/AboutPageContent";

export const metadata = createMetadata({
  title: "Nosotros",
  description:
    "Más de 40 años de experiencia combinada en ingeniería hídrica y riego agrícola al servicio del campo colombiano.",
  path: "/nosotros",
});

export default function AboutPage() {
  const paragraphs = company.history.split("\n\n");
  return <AboutPageContent paragraphs={paragraphs} />;
}
