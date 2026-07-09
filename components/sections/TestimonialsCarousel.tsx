"use client"

import { MapPin, Quote } from "lucide-react"
import { testimonials } from "@/data/testimonials"
import { useEdgeScroll } from "@/lib/useEdgeScroll"

// Duplicamos para tener más recorrido de scroll
const items = [...testimonials, ...testimonials]

export function TestimonialsCarousel() {
  const { containerRef, handleMouseMove, handleMouseLeave } = useEdgeScroll(0.2, 10)

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex gap-5 overflow-x-auto py-2 select-none"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
    >
      {items.map((t, i) => (
        <article
          key={i}
          className="flex w-[320px] shrink-0 flex-col rounded-2xl border border-[#c8ddf0] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <Quote className="text-[#1b6cb6]" size={22} />
          <p className="mt-4 flex-1 text-sm leading-7 text-[#3a5268]">
            &ldquo;{t.quote}&rdquo;
          </p>
          <div className="mt-5 flex items-center gap-3 border-t border-[#ebf4ff] pt-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#dbeeff] text-sm font-black text-[#1b6cb6]">
              {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-[#1a2b3c]">{t.name}</p>
              <p className="flex items-center gap-1 truncate text-xs text-[#566a7a]">
                {t.role}
                <span className="mx-0.5 text-[#c8ddf0]">·</span>
                <MapPin size={11} className="shrink-0 text-[#3baa6e]" />
                {t.location}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
