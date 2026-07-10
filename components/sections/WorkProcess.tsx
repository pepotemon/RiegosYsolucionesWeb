"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { BlurFade } from "@/components/ui/blur-fade"
import { workProcess } from "@/data/services"

const STEP_IMAGES = [
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80",
]

export function WorkProcess() {
  return (
    <section className="overflow-hidden bg-white">

      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <BlurFade inView inViewMargin="-80px">
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#1b6cb6]">
            <span className="h-px w-6 bg-[#1b6cb6]" />
            Cómo trabajamos
          </p>
          <h2 className="max-w-2xl text-4xl font-black leading-tight text-[#1a2b3c] lg:text-5xl">
            Cinco pasos. Sin atajos.
          </h2>
        </BlurFade>
      </div>

      {/* Steps — alternating image / text */}
      {workProcess.map((step, i) => {
        const isEven = i % 2 === 0
        return (
          <div key={step.title} className="border-t border-[#e8f2fc]">
            <div className="grid md:grid-cols-2">

              {/* Image column */}
              <motion.div
                className={`relative min-h-[56vw] overflow-hidden md:min-h-[70vh] ${
                  isEven ? "md:order-1" : "md:order-2"
                }`}
                initial={{ opacity: 0, x: isEven ? -70 : 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={STEP_IMAGES[i]}
                  alt={step.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                {/* Number watermark — blanco con sombra para legibilidad */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute bottom-6 right-6 select-none text-[9rem] font-black leading-none text-white lg:text-[12rem]"
                  style={{ textShadow: "0 4px 32px rgba(0,0,0,0.55)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* Edge gradient toward text */}
                <div
                  className={`absolute inset-0 ${
                    isEven
                      ? "bg-gradient-to-r from-transparent via-transparent to-white/20"
                      : "bg-gradient-to-l from-transparent via-transparent to-white/20"
                  }`}
                />
              </motion.div>

              {/* Text column */}
              <motion.div
                className={`flex flex-col justify-center px-8 py-16 sm:px-14 lg:px-20 xl:px-28 ${
                  isEven ? "md:order-2" : "md:order-1"
                }`}
                initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              >
                <span className="text-xs font-black uppercase tracking-[0.22em] text-[#1b6cb6]">
                  Paso {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 max-w-sm text-3xl font-black leading-tight text-[#1a2b3c] lg:text-4xl">
                  {step.title}
                </h3>
                <div className="mt-5 h-1 w-12 rounded-full bg-[#3baa6e]" />
                <p className="mt-6 max-w-md text-lg leading-8 text-[#566a7a]">
                  {step.description}
                </p>
              </motion.div>

            </div>
          </div>
        )
      })}

    </section>
  )
}
