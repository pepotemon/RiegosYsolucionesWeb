"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
  type MotionValue,
} from "motion/react"
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

const REVOLUTION_MS = 36000 // 36 segundos por vuelta completa

/* Cada tarjeta calcula su posición x,y a partir del ángulo compartido */
function OrbitCard({
  sector,
  index,
  total,
  angle,
  radius,
  cardW,
  cardH,
}: {
  sector: (typeof SECTORS)[number]
  index: number
  total: number
  angle: MotionValue<number>
  radius: number
  cardW: number
  cardH: number
}) {
  const Icon = sector.icon
  const offsetRad = (index / total) * Math.PI * 2 // ángulo inicial de esta tarjeta

  const x = useTransform(angle, (deg) => {
    const rad = (deg * Math.PI) / 180 + offsetRad - Math.PI / 2
    return Math.cos(rad) * radius - cardW / 2
  })

  const y = useTransform(angle, (deg) => {
    const rad = (deg * Math.PI) / 180 + offsetRad - Math.PI / 2
    return Math.sin(rad) * radius - cardH / 2
  })

  return (
    <motion.div
      className="absolute"
      style={{ left: "50%", top: "50%", x, y, width: cardW, height: cardH }}
    >
      <div className="group relative h-full w-full overflow-hidden rounded-2xl shadow-lg ring-2 ring-white">
        <Image
          src={sector.image}
          alt={sector.name}
          fill
          sizes={`${Math.round(cardW)}px`}
          className="object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06131f]/90 via-[#06131f]/25 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-2 text-center">
          <div className="mb-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur-sm ring-1 ring-white/30">
            <Icon size={14} />
          </div>
          <p className="text-[11px] font-bold leading-tight text-white drop-shadow">
            {sector.name}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function SectoresSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState(0)
  const [paused, setPaused] = useState(false)
  const angle = useMotionValue(0)

  /* Medir el contenedor y escuchar cambios de tamaño */
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) setSize(containerRef.current.offsetWidth)
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  /* Avanzar el ángulo en cada frame */
  useAnimationFrame((_, delta) => {
    if (!paused) {
      angle.set((angle.get() + (delta * 360) / REVOLUTION_MS) % 360)
    }
  })

  const radius = size * 0.38
  const cardW  = Math.min(size * 0.23, 100)
  const cardH  = Math.min(size * 0.28, 124)

  return (
    <section className="overflow-hidden bg-[#f5f9ff] py-24">
      <BlurFade inView inViewMargin="-80px">
        <div
          ref={containerRef}
          className="relative mx-auto w-full max-w-[580px] select-none px-4"
          style={{ aspectRatio: "1 / 1" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Fondo radial suave */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle, rgba(27,108,182,0.06) 0%, transparent 62%)",
            }}
          />

          {/* Anillo decorativo en la ruta orbital */}
          {size > 0 && (
            <div
              className="pointer-events-none absolute rounded-full border border-dashed border-[#1b6cb6]/20"
              style={{
                width: radius * 2,
                height: radius * 2,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          )}

          {/* Tarjetas orbitando */}
          {size > 0 &&
            SECTORS.map((sector, i) => (
              <OrbitCard
                key={`${sector.name}-${size}`}
                sector={sector}
                index={i}
                total={SECTORS.length}
                angle={angle}
                radius={radius}
                cardW={cardW}
                cardH={cardH}
              />
            ))}

          {/* Texto central */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
            <p className="mb-2 inline-flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1b6cb6] sm:text-xs">
              <span className="h-px w-4 bg-[#1b6cb6]" />
              Cobertura de servicio
              <span className="h-px w-4 bg-[#1b6cb6]" />
            </p>
            <h2 className="text-xl font-black leading-tight text-[#1a2b3c] sm:text-2xl md:text-3xl">
              Campo, finca<br />y agroindustria
            </h2>
            <div className="mt-2 h-0.5 w-8 rounded-full bg-[#3baa6e]" />
            <p className="mt-3 max-w-[160px] text-xs leading-snug text-[#566a7a] sm:max-w-[200px] sm:text-sm">
              Soluciones adaptadas al tipo de cultivo, escala y condición del predio.
            </p>
          </div>
        </div>
      </BlurFade>
    </section>
  )
}
