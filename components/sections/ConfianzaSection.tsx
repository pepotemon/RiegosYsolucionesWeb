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
    title: "Ahorro de agua",
    description:
      "Tecnología de precisión para aplicar exactamente el agua que su cultivo necesita, sin desperdicios.",
  },
  {
    icon: Leaf,
    color: "text-[#3baa6e]",
    bg: "bg-[#e6f7ed]",
    title: "Mayor productividad",
    description:
      "Cultivos mejor hidratados y más uniformes con mayor rendimiento por hectárea en cada ciclo.",
  },
  {
    icon: Users,
    color: "text-[#1b6cb6]",
    bg: "bg-[#e8f2fc]",
    title: "Asesoría técnica",
    description:
      "Acompañamiento especializado desde el diagnóstico inicial hasta la puesta en marcha del sistema.",
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
                Tecnología, experiencia y compromiso con el agricultor
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#566a7a]">
                Combinamos ingeniería de precisión con conocimiento del campo colombiano para entregar
                soluciones que funcionan en la realidad del predio, no solo en papel.
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
