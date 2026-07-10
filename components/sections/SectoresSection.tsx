"use client"

import Image from "next/image"
import { Sprout, Droplets, TreePine, Coffee, Leaf, Wheat, SunMedium, Factory } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { Container } from "@/components/ui/Container"
import type { ElementType } from "react"

const SECTORS: { name: string; icon: ElementType; image: string }[] = [
  {
    name: "Agricultura",
    icon: Sprout,
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=72",
  },
  {
    name: "Ganadería",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=600&q=72",
  },
  {
    name: "Palma",
    icon: TreePine,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=600&q=72",
  },
  {
    name: "Café",
    icon: Coffee,
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=600&q=72",
  },
  {
    name: "Banano",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=600&q=72",
  },
  {
    name: "Arroz",
    icon: Wheat,
    image: "https://images.unsplash.com/photo-1516996087931-5ae405802f9f?auto=format&fit=crop&w=600&q=72",
  },
  {
    name: "Invernaderos",
    icon: SunMedium,
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=72",
  },
  {
    name: "Agroindustrial",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=600&q=72",
  },
]

const DOUBLED = [...SECTORS, ...SECTORS]

function SectorCard({ sector, sizes }: { sector: typeof SECTORS[number]; sizes: string }) {
  const Icon = sector.icon
  return (
    <div className="group relative h-full w-full overflow-hidden rounded-2xl">
      <Image
        src={sector.image}
        alt={sector.name}
        fill
        sizes={sizes}
        className="object-cover transition duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#06131f]/88 via-[#06131f]/35 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-5 text-center">
        <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-sm ring-1 ring-white/30 transition duration-300 group-hover:bg-white/30">
          <Icon size={20} />
        </div>
        <p className="text-sm font-bold text-white drop-shadow">{sector.name}</p>
      </div>
    </div>
  )
}

export function SectoresSection() {
  return (
    <section className="overflow-hidden bg-[#f5f9ff] py-24">
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
      </Container>

      {/* Móvil — marquee infinito */}
      <div className="md:hidden mt-2">
        <div
          className="flex gap-3"
          style={{ animation: "marquee-loop 28s linear infinite", width: "max-content" }}
        >
          {DOUBLED.map((sector, i) => (
            <div key={i} className="h-52 w-44 shrink-0">
              <SectorCard sector={sector} sizes="176px" />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop — grid 4 columnas */}
      <Container className="hidden md:block">
        <div className="grid grid-cols-4 gap-4">
          {SECTORS.map((sector, i) => (
            <BlurFade key={sector.name} inView inViewMargin="-60px" delay={i * 0.07}>
              <div className="aspect-square">
                <SectorCard sector={sector} sizes="25vw" />
              </div>
            </BlurFade>
          ))}
        </div>
      </Container>
    </section>
  )
}
