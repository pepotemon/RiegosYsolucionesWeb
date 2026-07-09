import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { BlurFade } from "@/components/ui/blur-fade"
import { HeroSlider } from "@/components/layout/HeroSlider"
import { ConfianzaSection } from "@/components/sections/ConfianzaSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { BannerSection } from "@/components/sections/BannerSection"
import { WorkProcess } from "@/components/sections/WorkProcess"
import { SectoresSection } from "@/components/sections/SectoresSection"
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel"
import { CTASection } from "@/components/sections/CTASection"
import { ProjectCard } from "@/components/projects/ProjectCard"
import { projects } from "@/data/projects"


export default function HomePage() {
  return (
    <main>

      {/* 1. Hero */}
      <HeroSlider />

      {/* 2. Confianza — split layout con feature cards + stats */}
      <ConfianzaSection />

      {/* 3. Servicios — bento grid oscuro */}
      <ServicesSection />

      {/* 4. Banner destacado */}
      <BannerSection />

      {/* 5. Cómo trabajamos — sección autónoma */}
      <WorkProcess />

      {/* 6. Proyectos destacados */}
      <section className="bg-[#f5f9ff] py-24">
        <Container>
          <BlurFade inView inViewMargin="-60px">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-xl">
                <p className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#1b6cb6]">
                  <span className="h-px w-6 bg-[#1b6cb6]" />
                  Proyectos destacados
                </p>
                <h2 className="text-4xl font-black leading-tight text-[#1a2b3c]">
                  Experiencia demostrada en campo
                </h2>
                <p className="mt-4 text-lg text-[#566a7a]">
                  Casos reales de clientes en distintos sectores y regiones del país.
                </p>
              </div>
              <Button href="/proyectos" variant="secondary" className="shrink-0">
                Ver portafolio
              </Button>
            </div>
          </BlurFade>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project, i) => (
              <BlurFade key={project.slug} inView inViewMargin="-60px" delay={i * 0.12} className="h-full">
                <ProjectCard project={project} />
              </BlurFade>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Sectores que atendemos */}
      <SectoresSection />

      {/* 8. Testimonios */}
      <section className="overflow-hidden bg-white py-24">
        <Container>
          <BlurFade inView inViewMargin="-60px">
            <div className="mb-10 text-center">
              <p className="mb-3 inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#1b6cb6]">
                <span className="h-px w-6 bg-[#1b6cb6]" />
                Testimonios
                <span className="h-px w-6 bg-[#1b6cb6]" />
              </p>
              <h2 className="text-4xl font-black text-[#1a2b3c]">
                Confianza construida en campo
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-[#566a7a]">
                Agricultores, ganaderos y agroindustriales de todo Colombia confían en nuestras
                soluciones.
              </p>
            </div>
          </BlurFade>
        </Container>
        <div className="mt-6">
          <TestimonialsCarousel />
        </div>
      </section>

      {/* 9. CTA final */}
      <CTASection />

    </main>
  )
}
