import Image from "next/image";
import { CheckCircle2, ClipboardCheck, MapPinned } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { HeroSlider } from "@/components/layout/HeroSlider";
import { WorkProcess } from "@/components/sections/WorkProcess";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { services, trustStats } from "@/data/services";
import { projects } from "@/data/projects";
import { sectors } from "@/data/sectors";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function HomePage() {
  return (
    <main>
      <HeroSlider />

      {/* Stats */}
      <section className="bg-white py-10">
        <Container className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustStats.map((stat, i) => (
            <MotionReveal key={stat.label} delay={i * 0.09}>
              <div className="rounded-lg border border-[#c8ddf0] p-5">
                <p className="text-3xl font-black text-[#1b6cb6]">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold text-[#3a5268]">{stat.label}</p>
              </div>
            </MotionReveal>
          ))}
        </Container>
      </section>

      {/* Servicios */}
      <section className="py-20">
        <Container>
          <MotionReveal>
            <SectionHeader
              eyebrow="Servicios principales"
              title="Soluciones tecnicas para producir mejor con el agua disponible"
              description="Integramos diagnostico, diseno, equipos, instalacion y soporte para proyectos agricolas y agroindustriales."
            />
          </MotionReveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <MotionReveal key={service.slug} delay={i * 0.07} className="h-full">
                <ServiceCard service={service} compact />
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Como trabajamos */}
      <section className="bg-white py-20">
        <Container>
          <MotionReveal>
            <SectionHeader
              eyebrow="Como trabajamos"
              title="Cinco pasos. Ninguno se salta, ninguno se improvisa."
              description="Cada proyecto es diferente, pero nuestro proceso no cambia: entendemos su predio, disenamos con datos reales, instalamos con equipo propio y nos quedamos hasta que el sistema funcione como debe."
            />
          </MotionReveal>
          <WorkProcess />
        </Container>
      </section>

      {/* Proyectos */}
      <section className="py-20">
        <Container>
          <MotionReveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHeader
                eyebrow="Proyectos destacados"
                title="Casos tipo para mostrar experiencia y capacidad tecnica"
                description="Estos proyectos de ejemplo funcionan como portafolio inicial y se pueden reemplazar por casos reales."
              />
              <Button href="/proyectos" variant="secondary">
                Ver portafolio
              </Button>
            </div>
          </MotionReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {projects.map((project, i) => (
              <MotionReveal key={project.slug} delay={i * 0.12} className="h-full">
                <ProjectCard project={project} />
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Sectores */}
      <section className="relative overflow-hidden bg-[#06131f] py-20 text-white">
        <Image
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=2000&q=60"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-15"
          aria-hidden="true"
        />
        <Container className="relative">
          <MotionReveal>
            <SectionHeader
              eyebrow="Sectores que atendemos"
              title="Campo, finca y agroindustria"
              description="Soluciones adaptadas al tipo de cultivo, escala productiva y condicion operativa del predio."
              className="[&_h2]:text-white [&_p]:text-[#a8c8e0] [&_p:first-child]:text-[#60b5e8]"
            />
          </MotionReveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {sectors.map((sector, i) => (
              <MotionReveal key={sector} delay={i * 0.05}>
                <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                  <CheckCircle2 className="text-[#3baa6e]" size={20} />
                  <span className="font-semibold">{sector}</span>
                </div>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonios */}
      <section className="bg-white py-20">
        <Container>
          <MotionReveal>
            <SectionHeader eyebrow="Testimonios" title="Confianza construida en campo" />
          </MotionReveal>
        </Container>
        <div className="mt-10">
          <TestimonialsCarousel />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container>
          <MotionReveal>
            <div className="grid gap-8 rounded-lg bg-[#1b6cb6] p-8 text-white md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#c0e0f8]">
                  <ClipboardCheck size={18} /> Visita tecnica
                </p>
                <h2 className="mt-3 text-3xl font-black">Necesita una solucion para su cultivo?</h2>
                <p className="mt-3 max-w-2xl text-[#dceeff]">
                  Solicite una visita tecnica y reciba asesoria especializada para su proyecto.
                </p>
              </div>
              <Button
                href={getWhatsAppUrl("Hola, quiero solicitar una visita tecnica para mi cultivo.")}
                variant="secondary"
                style={{ color: "#134f88" }}
              >
                <MapPinned size={18} /> Solicitar cotizacion
              </Button>
            </div>
          </MotionReveal>
        </Container>
      </section>
    </main>
  );
}
