"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, motion } from "motion/react"
import { ArrowRight, Droplets } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { WordRotate } from "@/components/ui/word-rotate"
import { FallingLeaves } from "@/components/ui/falling-leaves"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { NumberTicker } from "@/components/ui/number-ticker"
import { Container } from "@/components/ui/Container"
import { cn } from "@/lib/utils"
import { getWhatsAppUrl } from "@/lib/whatsapp"

const SLIDE_DURATION = 4200

const slides = [
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=2000&q=80",
]

const ROTATING_SERVICES = [
  "riego tecnificado.",
  "bombeo solar.",
  "pozos profundos.",
  "automatización.",
  "gestión hídrica.",
]

const stats = [
  { value: 150, suffix: "+", label: "Proyectos realizados" },
  { value: 7,   suffix: "",  label: "Servicios especializados" },
  { value: 100, suffix: "%", label: "Soluciones personalizadas" },
  { value: 10,  suffix: "+", label: "Años de experiencia" },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const whatsappUrl = getWhatsAppUrl(
    "Hola, quiero solicitar una cotización para mi cultivo."
  )

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [paused, current])

  return (
    <section
      className="-mt-[81px] relative flex flex-col overflow-hidden bg-[#06131f]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >

      {/* ── Imágenes en crossfade ── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          <Image
            src={slides[current]}
            alt=""
            fill
            priority={current === 0}
            sizes="100vw"
            className="object-cover object-center"
            aria-hidden="true"
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Gradientes sobre la imagen ── */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#06131f]/96 via-[#06131f]/78 to-[#06131f]/25" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06131f] via-transparent to-transparent" />

      {/* ── Hojas cayendo ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <FallingLeaves number={14} />
      </div>

      {/* ── Contenido principal ── */}
      <Container className="relative flex min-h-screen flex-col justify-center pb-10 pt-32 lg:pb-16 lg:pt-44">
        <div className="max-w-3xl">

          {/* h1 semántico para SEO */}
          <h1 className="sr-only">
            Sistemas de riego tecnificado y recursos hídricos en Colombia
          </h1>

          {/* Badge */}
          <BlurFade delay={0} duration={0.55}>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#1b6cb6]/40 bg-[#1b6cb6]/12 px-4 py-2 backdrop-blur-sm">
              <Droplets size={14} className="text-[#60b5e8]" />
              <span className="text-sm font-semibold tracking-wide text-[#93c5fd]">
                Ingeniería hídrica y agrícola · Colombia
              </span>
            </div>
          </BlurFade>

          {/* Headline visual */}
          <div
            aria-hidden="true"
            className="text-[2.6rem] font-black leading-[1.08] sm:text-5xl lg:text-[3.8rem]"
          >
            <BlurFade delay={0.12} duration={0.65}>
              <p className="text-white">Su cultivo merece</p>
            </BlurFade>

            {/* Altura fija = 1 línea en cada breakpoint → nunca empuja el layout */}
            <div className="h-[3.6rem] overflow-hidden sm:h-[4rem] lg:h-[5rem]">
              <BlurFade delay={0.22} duration={0.65}>
                <WordRotate
                  words={ROTATING_SERVICES}
                  duration={2800}
                  className="text-[#60b5e8] drop-shadow-[0_0_28px_rgba(96,181,232,0.4)]"
                />
              </BlurFade>
            </div>
          </div>

          {/* Subtítulo */}
          <BlurFade delay={0.38} duration={0.6}>
            <p className="mt-6 max-w-[520px] text-lg leading-relaxed text-[#8db8d8]">
              Diseñamos, instalamos y respaldamos sistemas hídricos a la medida de su
              predio. Del diagnóstico técnico a la puesta en marcha, con equipo propio.
            </p>
          </BlurFade>

          {/* CTAs */}
          <BlurFade delay={0.5} duration={0.5}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <ShimmerButton
                  shimmerColor="#93c5fd"
                  background="rgba(27, 108, 182, 0.95)"
                  borderRadius="8px"
                  className="gap-2 px-7 py-3.5 text-sm font-bold"
                >
                  Solicitar cotización
                  <ArrowRight size={15} />
                </ShimmerButton>
              </a>

              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white/75 backdrop-blur-sm transition-all duration-200 hover:border-white/40 hover:bg-white/8 hover:text-white"
              >
                Ver servicios
              </Link>
            </div>
          </BlurFade>

          {/* Indicadores de slide */}
          <BlurFade delay={0.6} duration={0.5}>
            <div className="mt-12 flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setPaused(false) }}
                  aria-label={`Slide ${i + 1}`}
                  className={cn(
                    "relative h-[3px] overflow-hidden rounded-full transition-all duration-500",
                    i === current ? "w-12 bg-white/25" : "w-5 bg-white/20 hover:bg-white/35"
                  )}
                >
                  {i === current && !paused && (
                    <motion.span
                      className="absolute inset-y-0 left-0 bg-[#60b5e8]"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                    />
                  )}
                  {i === current && paused && (
                    <span className="absolute inset-y-0 left-0 w-full bg-[#60b5e8]" />
                  )}
                </button>
              ))}
            </div>
          </BlurFade>
        </div>
      </Container>

      {/* ── Strip de estadísticas ── */}
      <div className="relative border-t border-white/8 bg-[#030c15]/75 backdrop-blur-md">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <BlurFade key={stat.label} delay={0.65 + i * 0.08} duration={0.5}>
                <div className="flex flex-col items-center py-6 px-4 text-center">
                  <p className="flex items-baseline gap-0.5 text-3xl font-black">
                    <NumberTicker
                      value={stat.value}
                      delay={0.7 + i * 0.1}
                      className="text-[#60b5e8]"
                    />
                    <span className="text-[#60b5e8] text-2xl">{stat.suffix}</span>
                  </p>
                  <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#3d5f78]">
                    {stat.label}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </Container>
      </div>

    </section>
  )
}
