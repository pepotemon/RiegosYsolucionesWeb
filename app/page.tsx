import { HeroSlider } from "@/components/layout/HeroSlider"
import { ConfianzaSection } from "@/components/sections/ConfianzaSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { BannerSection } from "@/components/sections/BannerSection"
import { WorkProcess } from "@/components/sections/WorkProcess"
import { ProyectosSection } from "@/components/sections/ProyectosSection"
import { SectoresSection } from "@/components/sections/SectoresSection"
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel"
import { CTASection } from "@/components/sections/CTASection"
import { BlurFade } from "@/components/ui/blur-fade"
import { Container } from "@/components/ui/Container"


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
      <ProyectosSection />

      {/* 7. Sectores que atendemos */}
      <SectoresSection />

      {/* 8. Testimonios */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f3f9ff_100%)] py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#E0EEF9]" />
        <Container>
          <BlurFade inView inViewMargin="-60px">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 inline-flex items-center justify-center gap-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#1b6cb6]">
                <span className="h-px w-8 bg-[#8fc8f3]" />
                <span>Testimonios</span>
                <span className="h-px w-8 bg-[#8fc8f3]" />
              </p>
              <h2 className="text-4xl font-black leading-tight text-[#082033] lg:text-5xl">
                Confianza construida en campo
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#566a7a]">
                Historias de productores y equipos que necesitaban una solución técnica clara,
                instalada con criterio y acompañada en operación.
              </p>
              <div className="mx-auto mt-7 flex max-w-2xl flex-wrap justify-center gap-2">
                {["Riego tecnificado", "Bombeo solar", "Automatización", "Soporte en campo"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#cfe3f5] bg-white px-4 py-2 text-sm font-bold text-[#315168] shadow-[0_10px_30px_rgba(8,32,51,0.06)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </BlurFade>
        </Container>
        <div className="mt-10">
          <TestimonialsCarousel />
        </div>
      </section>

      {/* 9. CTA final */}
      <CTASection />

    </main>
  )
}
