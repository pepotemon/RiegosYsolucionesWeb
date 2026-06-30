"use client";

import { useState } from "react";
import { MapPin, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const doubled = [...testimonials, ...testimonials];

export function TestimonialsCarousel() {
  const [paused, setPaused] = useState(false);

  return (
    <>
      <style>{`
        @keyframes carousel-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      <div
        className="overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          className="flex w-max gap-5 py-2"
          style={{
            animation: "carousel-scroll 70s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {doubled.map((t, i) => (
            <article
              key={i}
              className="flex w-[320px] shrink-0 flex-col rounded-xl border border-[#c8ddf0] bg-white p-6 shadow-sm"
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
      </div>
    </>
  );
}
