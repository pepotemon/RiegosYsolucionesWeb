import Image from "next/image";
import { ArrowRight, CheckCircle2, ClipboardCheck, MapPinned, PhoneCall } from "lucide-react";
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
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <main>
      <HeroSlider />

      {/* ── Stats ── continuación visual del hero oscuro ───────────────── */}
      <section className="bg-[#06131f]">
        <Container className="grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {trustStats.map((stat, i) => (
            <MotionReveal key={stat.label} delay={i * 0.08}>
              <div className="flex flex-col gap-1 px-6 py-10 text-center">
                <p className={`text-5xl font-black leading-none ${i % 2 === 0 ? "text-[#60b5e8]" : "text-[#3baa6e]"}`}>
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#7a9ab8]">{stat.label}</p>
              </div>
            </MotionReveal>
          ))}
        </Container>
        {/* separador degradado al blanco */}
        <div className="h-12 bg-gradient-to-b from-[#06131f] to-[#f5f9ff]" />
      </section>

      {/* ── Servicios ──────────────────────────────────────────────────── */}
      <section className="bg-[#f5f9ff] pb-24 pt-4">
        <Container>
          <MotionReveal>
            <SectionHeader
              eyebrow="Servicios principales"
              title="Soluciones técnicas para producir mejor con el agua disponible"
              description="Integramos diagnóstico, diseño, equipos, instalación y soporte para proyectos agrícolas y agroindustriales."
            />
          </MotionReveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <MotionReveal key={service.slug} delay={i * 0.07} className="h-full">
                <ServiceCard service={service} compact />
              </MotionReveal>
            ))}
          </div>
          <MotionReveal className="mt-8 flex justify-center">
            <Button href="/servicios" variant="ghost" className="border border-[#c8ddf0] hover:border-[#1b6cb6]">
              Ver todos los servicios <ArrowRight size={16} />
            </Button>
          </MotionReveal>
        </Container>
      </section>

      {/* ── Cómo trabajamos ────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <Container>
          <MotionReveal>
            <SectionHeader
              eyebrow="Cómo trabajamos"
              title="Cinco pasos. Ninguno se salta, ninguno se improvisa."
              description="Cada proyecto es diferente, pero nuestro proceso no cambia: entendemos su predio, diseñamos con datos reales, instalamos con equipo propio y nos quedamos hasta que el sistema funcione como debe."
            />
          </MotionReveal>
          <WorkProcess />
        </Container>
      </section>

      {/* ── Proyectos destacados ───────────────────────────────────────── */}
      <section className="bg-[#f5f9ff] py-24">
        <Container>
          <MotionReveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHeader
                eyebrow="Proyectos destacados"
                title="Experiencia demostrada en campo"
                description="Casos de referencia que ilustran nuestra capacidad técnica. Reemplazables por proyectos reales del cliente."
              />
              <Button href="/proyectos" variant="secondary" className="shrink-0">
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

      {/* ── Sectores ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#06131f] py-24 text-white">
        <Image
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=2000&q=60"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-10"
          aria-hidden="true"
        />
        <Container className="relative">
          <MotionReveal>
            <SectionHeader
              eyebrow="Sectores que atendemos"
              title="Campo, finca y agroindustria"
              description="Soluciones adaptadas al tipo de cultivo, escala productiva y condición operativa del predio."
              className="[&_h2]:text-white [&_p]:text-[#a8c8e0] [&_p:first-child]:text-[#60b5e8]"
            />
          </MotionReveal>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {sectors.map((sector, i) => (
              <MotionReveal key={sector} delay={i * 0.05}>
                <div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-[#3baa6e]/50 hover:bg-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#3baa6e]/20">
                    <CheckCircle2 className="text-[#3baa6e]" size={16} />
                  </span>
                  <span className="font-semibold">{sector}</span>
                </div>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Testimonios ────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <Container>
          <MotionReveal>
            <SectionHeader eyebrow="Testimonios" title="Confianza construida en campo" />
          </MotionReveal>
        </Container>
        <div className="mt-10">
          <TestimonialsCarousel />
        </div>
      </section>

      {/* ── CTA final — full bleed ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#06131f] py-28">
        <Image
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=2000&q=60"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-15"
          aria-hidden="true"
        />
        {/* degradado lateral izquierdo */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06131f]/90 via-[#06131f]/60 to-transparent" />

        <Container className="relative">
          <MotionReveal>
            <div className="max-w-2xl">
              <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#60b5e8]">
                <ClipboardCheck size={16} /> Visita técnica
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">
                ¿Necesita una solución para su cultivo?
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-8 text-[#a8c8e0]">
                Nuestro equipo visita su predio, evalúa su situación real y diseña una solución a medida.
                Sin suposiciones, sin presupuestos genéricos.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={getWhatsAppUrl("Hola, quiero solicitar una visita técnica para mi cultivo.")}
                  style={{ color: "white" }}
                >
                  <MapPinned size={18} /> Solicitar visita técnica
                </Button>
                <Button
                  href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`}
                  variant="ghost"
                  className="border border-white/30 text-white hover:bg-white/10"
                  style={{ color: "white" }}
                >
                  <PhoneCall size={18} /> {siteConfig.phones[0]}
                </Button>
              </div>
            </div>
          </MotionReveal>
        </Container>
      </section>
    </main>
  );
}
