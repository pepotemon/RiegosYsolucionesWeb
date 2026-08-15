"use client";

import Link from "next/link";
import { Play, Quote } from "lucide-react";
import { useRef, useState } from "react";
import { Container } from "@/components/ui/Container";

const FEATURED = {
  slug: "riego-fertirrigacion-pimenton-agropepersas",
  video: "/videos/agropepersas-testimonio.mp4",
  quote:
    "Vimos una muy buena oferta por parte de Riegos y Soluciones, los cuales nos permitieron tener sistemas de riegos especializados para una fertirrigación, y de tal manera tener un uso eficiente de nuestras aguas y de nuestros riegos para ser amigables con el medio ambiente.",
  name: "Fabián Méndez",
  role: "Director Agronómico — Agropepersas",
  project: "Riego y fertirrigación para pimentón de exportación",
};

export function TestimoniosSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function handlePlayOverlay() {
    if (!videoRef.current) return;
    videoRef.current.play();
    setPlaying(true);
  }

  function handleVideoClick() {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  }

  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "linear-gradient(180deg, #F3F9FF 0%, #FFFFFF 100%)" }}
    >
      <Container>
        {/* Header */}
        <div className="mb-14 text-center">
          <span
            className="mb-4 inline-block rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em]"
            style={{
              background: "rgba(45,186,69,0.10)",
              color: "#2DBA45",
              border: "1px solid rgba(45,186,69,0.20)",
            }}
          >
            En campo
          </span>
          <h2 className="text-3xl font-black text-[#082033] sm:text-4xl lg:text-5xl">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        {/* Layout: video izquierda, quote derecha */}
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px]">

          {/* Video player */}
          <div className="relative overflow-hidden rounded-3xl bg-[#06131f] shadow-2xl shadow-[#082033]/20">
            <video
              ref={videoRef}
              src={FEATURED.video}
              className="w-full"
              preload="metadata"
              onClick={handleVideoClick}
              onEnded={() => setPlaying(false)}
              playsInline
            />
            {/* Overlay play button */}
            {!playing && (
              <button
                onClick={handlePlayOverlay}
                aria-label="Reproducir video"
                className="absolute inset-0 flex items-center justify-center transition-colors hover:bg-black/10"
              >
                <div
                  className="flex h-20 w-20 items-center justify-center rounded-full shadow-xl transition-transform hover:scale-105"
                  style={{ background: "#2DBA45" }}
                >
                  <Play size={30} fill="white" stroke="none" className="ml-1" />
                </div>
              </button>
            )}
          </div>

          {/* Quote card */}
          <div
            className="flex flex-col justify-between rounded-3xl p-8 md:p-10"
            style={{
              background: "#082033",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <Quote
              size={32}
              className="mb-6 opacity-30"
              style={{ color: "#2DBA45" }}
            />
            <blockquote className="mb-8 text-lg font-medium leading-[1.75] text-white/85">
              &ldquo;{FEATURED.quote}&rdquo;
            </blockquote>

            <div>
              <p className="font-bold text-white">{FEATURED.name}</p>
              <p className="mb-8 text-sm text-white/45">{FEATURED.role}</p>

              <Link
                href={`/proyectos/${FEATURED.slug}`}
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition-all duration-200"
                style={{
                  background: "rgba(45,186,69,0.15)",
                  color: "#2DBA45",
                  border: "1px solid rgba(45,186,69,0.25)",
                }}
              >
                Ver caso completo
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
