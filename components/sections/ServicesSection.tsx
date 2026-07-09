"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { Container } from "@/components/ui/Container"
import { useEdgeScroll } from "@/lib/useEdgeScroll"
import { services } from "@/data/services"

// 5 servicios principales — no todos los 7
const FEATURED_SLUGS = [
  "sistemas-de-riego",
  "energia-solar",
  "automatizacion-agricola",
  "sistemas-de-bombeo",
  "pozos-profundos",
]

const featured = FEATURED_SLUGS
  .map((slug) => services.find((s) => s.slug === slug))
  .filter(Boolean) as typeof services

// Alinea el primer card con el borde izquierdo del Container
const TRACK_PADDING = "max(2rem, calc(50vw - 40rem + 2rem))"

export function ServicesSection() {
  const { containerRef, handleMouseMove, handleMouseLeave } = useEdgeScroll(0.2, 14)

  return (
    <section className="overflow-hidden bg-white py-24">

      {/* Header — centrado */}
      <Container>
        <BlurFade inView inViewMargin="-60px">
          <div className="mb-10 text-center">
            <p className="mb-3 inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#3baa6e]">
              <span className="h-px w-6 bg-[#3baa6e]" />
              Servicios principales
              <span className="h-px w-6 bg-[#3baa6e]" />
            </p>
            <h2 className="text-4xl font-black text-[#1a2b3c] lg:text-5xl">Lo que hacemos</h2>
            <p className="mx-auto mt-3 max-w-md text-[#566a7a]">
              Mueve el cursor hacia los bordes para explorar los servicios
            </p>
          </div>
        </BlurFade>
      </Container>

      {/* Scroll track — mouse-edge hover para navegar */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="flex gap-5 overflow-x-auto pb-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingLeft: TRACK_PADDING,
          paddingRight: TRACK_PADDING,
        }}
      >
        {featured.map((service, i) => {
          const Icon = service.icon
          return (
            <Link
              key={service.slug}
              href={`/servicios/${service.slug}`}
              className="group relative h-[480px] w-[300px] shrink-0 overflow-hidden rounded-3xl sm:w-[360px] lg:w-[400px]"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="400px"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06131f] via-[#06131f]/35 to-transparent" />

              {/* Icon badge */}
              <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm ring-1 ring-white/20 transition duration-300 group-hover:bg-white/25">
                <Icon size={18} />
              </div>

              {/* Index */}
              <span className="absolute right-5 top-5 text-xs font-black tabular-nums text-white/35">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <h3 className="text-xl font-black leading-tight text-white lg:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/55 line-clamp-2">
                  {service.shortDescription}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#60b5e8] transition-all duration-200 group-hover:gap-3">
                  Ver servicio <ChevronRight size={14} />
                </span>
              </div>

              {/* Hover top line accent */}
              <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#1b6cb6]/0 to-transparent transition-all duration-300 group-hover:via-[#1b6cb6]" />
            </Link>
          )
        })}

        {/* Card "Ver todos" */}
        <Link
          href="/servicios"
          className="group flex h-[480px] w-[180px] shrink-0 flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed border-[#c8ddf0] bg-[#f5f9ff] transition hover:border-[#1b6cb6]/50 hover:bg-[#eef6ff]"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1b6cb6]/10 text-[#1b6cb6] transition group-hover:bg-[#1b6cb6]/20">
            <ArrowRight size={20} />
          </div>
          <p className="text-center text-sm font-bold leading-snug text-[#1b6cb6]">
            Ver todos<br />los servicios
          </p>
        </Link>
      </div>

    </section>
  )
}
