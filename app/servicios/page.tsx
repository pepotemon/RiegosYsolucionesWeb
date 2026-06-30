import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Servicios",
  description: "Servicios de riego agricola, recursos hidricos, pozos profundos, bombeo, automatizacion, energia solar y mantenimiento.",
  path: "/servicios",
});

export default function ServicesPage() {
  return (
    <main className="py-16">
      <Container>
        <SectionHeader
          eyebrow="Servicios"
          title="Ingenieria agricola integral para proyectos productivos"
          description="Soluciones disenadas para condiciones reales de campo, con enfoque tecnico, comercial y operativo."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </main>
  );
}
