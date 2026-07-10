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
