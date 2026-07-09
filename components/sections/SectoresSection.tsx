"use client"

import { Sprout, Droplets, TreePine, Coffee, Leaf, Wheat, SunMedium, Factory } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { Container } from "@/components/ui/Container"
import { sectors } from "@/data/sectors"

const ICONS = [
  { icon: Sprout,    color: "text-[#3baa6e]", bg: "bg-[#e6f7ed]" },
  { icon: Droplets,  color: "text-[#1b6cb6]", bg: "bg-[#e8f2fc]" },
  { icon: TreePine,  color: "text-[#3baa6e]", bg: "bg-[#e6f7ed]" },
  { icon: Coffee,    color: "text-[#8B5E3C]", bg: "bg-[#f5ede4]" },
  { icon: Leaf,      color: "text-[#5d9e27]", bg: "bg-[#edf7e0]" },
  { icon: Wheat,     color: "text-[#b8920a]", bg: "bg-[#fdf5e0]" },
  { icon: SunMedium, color: "text-[#d97706]", bg: "bg-[#fef3c7]" },
  { icon: Factory,   color: "text-[#1b6cb6]", bg: "bg-[#e8f2fc]" },
]

export function SectoresSection() {
  return (
    <section className="bg-[#f5f9ff] py-24">
      <Container>
        <BlurFade inView inViewMargin="-60px">
          <div className="mb-12 text-center">
            <p className="mb-3 inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#1b6cb6]">
              <span className="h-px w-6 bg-[#1b6cb6]" />
              Cobertura de servicio
              <span className="h-px w-6 bg-[#1b6cb6]" />
            </p>
            <h2 className="text-4xl font-black leading-tight text-[#1a2b3c]">
              Campo, finca y agroindustria
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#566a7a]">
              Soluciones adaptadas al tipo de cultivo, escala productiva y condición operativa del predio.
            </p>
          </div>
        </BlurFade>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {sectors.map((sector, i) => {
            const { icon: Icon, color, bg } = ICONS[i] ?? ICONS[0]
            return (
              <BlurFade key={sector} inView inViewMargin="-60px" delay={i * 0.06}>
                <div className="flex flex-col items-center gap-3 rounded-2xl border border-white bg-white p-6 text-center shadow-[0_2px_16px_rgba(27,108,182,0.07)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(27,108,182,0.14)]">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${bg} ${color}`}
                  >
                    <Icon size={22} />
                  </div>
                  <p className="text-sm font-bold text-[#1a2b3c]">{sector}</p>
                </div>
              </BlurFade>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
