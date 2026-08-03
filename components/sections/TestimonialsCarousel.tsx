"use client"

import Image from "next/image"
import { MapPin, Quote } from "lucide-react"
import { testimonials } from "@/data/testimonials"
import { useEdgeScroll } from "@/lib/useEdgeScroll"

const featuredTestimonials = testimonials.slice(0, 5)

export function TestimonialsCarousel() {
  const { containerRef, handleMouseMove, handleMouseLeave } = useEdgeScroll(0.2, 10)

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex select-none gap-5 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
      }}
    >
      {featuredTestimonials.map((t) => (
        <article
          key={t.name}
          className="group relative flex w-[300px] shrink-0 flex-col items-center rounded-2xl border border-[#c8ddf0] bg-white px-6 py-7 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[340px]"
        >
          <div className="relative size-24 overflow-hidden rounded-full border-4 border-white bg-[#eaf4fb] shadow-[0_0_0_1px_#b8d8ee,0_18px_45px_rgba(8,32,51,0.16)]">
            <Image
              src={t.image}
              alt={`Retrato de ${t.name}`}
              fill
              sizes="96px"
              className="object-cover object-center transition duration-500 group-hover:scale-105"
            />
          </div>

          <span className="mt-5 rounded-full bg-[#ecf7ff] px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-[#1b6cb6]">
            {t.result}
          </span>

          <Quote className="mt-6 text-[#1b6cb6]" size={22} />
          <p className="mt-4 flex-1 text-[15px] leading-7 text-[#3a5268]">
            &ldquo;{t.quote}&rdquo;
          </p>

          <div className="mt-6 w-full border-t border-[#ebf4ff] pt-5">
            <p className="text-base font-black text-[#082033]">{t.name}</p>
            <p className="mt-1 text-sm text-[#566a7a]">{t.role}</p>
            <p className="mt-3 inline-flex items-center justify-center gap-1.5 text-sm font-bold text-[#315168]">
              <MapPin size={13} className="shrink-0 text-[#3baa6e]" />
              <span>{t.location}</span>
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}
