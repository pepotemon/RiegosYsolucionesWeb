"use client"

import Link from "next/link"
import { Droplets, Leaf, Users, ArrowRight } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { Container } from "@/components/ui/Container"

const features = [
  {
    icon: Droplets,
    color: "text-[#1b6cb6]",
    bg: "bg-[#e8f2fc]",
    title: "Soluciones a la medida",
    description:
      "Cada proyecto es único. Diseñamos soluciones adaptadas a las condiciones reales del proyecto, el presupuesto y los objetivos del cliente.",
  },
  {
    icon: Leaf,
    color: "text-[#3baa6e]",
    bg: "bg-[#e6f7ed]",
    title: "Ingeniería y calidad",
    description:
      "Materiales de alta calidad, cálculos técnicos precisos y optimización del recurso hídrico en cada diseño e instalación.",
  },
  {
    icon: Users,
    color: "text-[#1b6cb6]",
    bg: "bg-[#e8f2fc]",
    title: "Acompañamiento permanente",
    description:
      "Estamos presentes antes, durante y después de la instalación, con soporte técnico y cumplimiento en cada etapa del proyecto.",
  },
]


export function ConfianzaSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left — text */}
          <BlurFade inView inViewMargin="-60px">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#3baa6e]">
                <span className="h-px w-6 bg-[#3baa6e]" />
                Por qué elegirnos
              </p>
              <h2 className="text-4xl font-black leading-tight text-[#1a2b3c] lg:text-[2.6rem]">
                Ingeniería, experiencia y compromiso con cada proyecto
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#566a7a]">
                Somos un aliado estratégico que diseña, desarrolla e implementa soluciones integrales
                para optimizar el uso del agua, mejorar la eficiencia de los procesos y ejecutar
                proyectos confiables, eficientes y sostenibles.
              </p>
              <Link
                href="/nosotros"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#1b6cb6] transition-all hover:gap-3"
              >
                Conocer la empresa <ArrowRight size={15} />
              </Link>
            </div>
          </BlurFade>

          {/* Right — feature cards */}
          <div className="flex flex-col gap-4">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <BlurFade key={f.title} inView inViewMargin="-60px" delay={i * 0.1}>
                  <div className="flex items-start gap-5 rounded-[20px] border border-[#eaf3fb] bg-white p-6 shadow-[0_4px_24px_rgba(27,108,182,0.08)]">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${f.bg} ${f.color}`}
                    >
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#1a2b3c]">{f.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[#566a7a]">{f.description}</p>
                    </div>
                  </div>
                </BlurFade>
              )
            })}
          </div>
        </div>

      </Container>
    </section>
  )
}
