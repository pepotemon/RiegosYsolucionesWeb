"use client"

import { useState } from "react"
import Image from "next/image"
import { Sprout, Droplets, TreePine, Coffee, Leaf, Wheat, SunMedium, Factory } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import type { ElementType } from "react"

const SECTORS: { name: string; icon: ElementType; image: string }[] = [
  {
    name: "Agricultura",
    icon: Sprout,
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=300&q=75",
  },
  {
    name: "Ganadería",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=300&q=75",
  },
  {
    name: "Palma",
    icon: TreePine,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=300&q=75",
  },
  {
    name: "Café",
    icon: Coffee,
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=300&q=75",
  },
  {
    name: "Banano",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=300&q=75",
  },
  {
    name: "Arroz",
    icon: Wheat,
    image: "https://images.unsplash.com/photo-1516996087931-5ae405802f9f?auto=format&fit=crop&w=300&q=75",
  },
  {
    name: "Invernaderos",
    icon: SunMedium,
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=300&q=75",
  },
  {
    name: "Agroindustrial",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=300&q=75",
  },
]

export function SectoresSection() {
  const [paused, setPaused] = useState(false)
  const ps = paused ? "paused" : "running"

  return (
    <section className="overflow-hidden bg-[#f5f9ff] py-24">
      <BlurFade inView inViewMargin="-80px">
        <div
          className="relative mx-auto select-none"
          style={
            {
              width: "min(90vw, 560px)",
              height: "min(90vw, 560px)",
              "--orbit-r": "min(37vw, 226px)",
            } as React.CSSProperties
          }
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Fondo radial suave */}
          <div
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(27,108,182,0.06) 0%, rgba(27,108,182,0.02) 42%, transparent 68%)",
            }}
          />

          {/* Anillo decorativo — ruta de la órbita */}
          <div
            className="pointer-events-none absolute rounded-full border border-dashed border-[#1b6cb6]/18"
            style={{
              top: "calc(50% - var(--orbit-r))",
              left: "calc(50% - var(--orbit-r))",
              width: "calc(var(--orbit-r) * 2)",
              height: "calc(var(--orbit-r) * 2)",
            }}
          />

          {/* Anillo interior decorativo */}
          <div className="pointer-events-none absolute inset-[22%] rounded-full border border-[#c8ddf0]/40" />

          {/* Pista orbital — rota continuamente */}
          <div
            className="absolute inset-0"
            style={{
              animation: "orbit-forward 34s linear infinite",
              animationPlayState: ps,
            }}
          >
            {SECTORS.map((sector, i) => {
              const Icon = sector.icon
              const angle = (i / SECTORS.length) * 360
              return (
                <div
                  key={sector.name}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `rotate(${angle}deg) translateY(calc(-1 * var(--orbit-r))) translateX(-50%)`,
                    animation: "orbit-backward 34s linear infinite",
                    animationPlayState: ps,
                  }}
                >
                  {/* Tarjeta foto */}
                  <div
                    className="group relative overflow-hidden rounded-2xl shadow-lg ring-2 ring-white/80"
                    style={{ width: "min(16vw, 88px)", height: "min(20vw, 110px)" }}
                  >
                    <Image
                      src={sector.image}
                      alt={sector.name}
                      fill
                      sizes="88px"
                      className="object-cover transition duration-600 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06131f]/90 via-[#06131f]/25 to-transparent" />
                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-2 text-center">
                      <div className="mb-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white/22 text-white backdrop-blur-sm">
                        <Icon size={12} />
                      </div>
                      <p
                        className="font-bold leading-tight text-white"
                        style={{ fontSize: "clamp(8px, 2.1vw, 10.5px)" }}
                      >
                        {sector.name}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Texto central */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center">
            <p
              className="mb-2 inline-flex items-center justify-center gap-1.5 font-bold uppercase tracking-[0.16em] text-[#1b6cb6]"
              style={{ fontSize: "clamp(8px, 2vw, 10px)" }}
            >
              <span className="h-px w-4 bg-[#1b6cb6]" />
              Cobertura de servicio
              <span className="h-px w-4 bg-[#1b6cb6]" />
            </p>
            <h2
              className="font-black leading-tight text-[#1a2b3c]"
              style={{ fontSize: "clamp(18px, 5vw, 28px)" }}
            >
              Campo, finca<br />y agroindustria
            </h2>
            <div className="mt-2 h-0.5 w-8 rounded-full bg-[#3baa6e]" />
            <p
              className="mt-3 leading-snug text-[#566a7a]"
              style={{ fontSize: "clamp(10px, 2.5vw, 13px)", maxWidth: "min(34vw, 185px)" }}
            >
              Soluciones adaptadas al cultivo, escala y condición del predio.
            </p>
          </div>
        </div>
      </BlurFade>
    </section>
  )
}
