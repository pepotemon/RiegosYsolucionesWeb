import { HeroSlider } from "@/components/layout/HeroSlider"
import { ConfianzaSection } from "@/components/sections/ConfianzaSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { BannerSection } from "@/components/sections/BannerSection"
import { WorkProcess } from "@/components/sections/WorkProcess"
import { ProyectosSection } from "@/components/sections/ProyectosSection"
import { SectoresSection } from "@/components/sections/SectoresSection"
import { TestimoniosSection } from "@/components/sections/TestimoniosSection"
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

      {/* 8. Testimonios — video real de cliente */}
      <TestimoniosSection />

      {/* 9. CTA final */}
      <CTASection />

    </main>
  )
}
