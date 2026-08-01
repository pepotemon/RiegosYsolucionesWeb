"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type MediaItem = { src: string; label: string; type?: "video" | "image" };

export function VideoCarousel({ videos }: { videos: MediaItem[] }) {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const [lockedHeight, setLockedHeight] = useState<number | undefined>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const isVideo = (item: MediaItem) => item.type !== "image";

  useEffect(() => {
    if (isVideo(videos[current])) {
      videoRef.current?.load();
    }
  }, [current]);

  const go = (next: number) => {
    if (next === current || fading) return;
    videoRef.current?.pause();

    // Bloquear altura actual → evita que el layout colapse mientras el
    // nuevo contenido no tiene dimensiones cargadas todavía.
    const h = wrapperRef.current?.offsetHeight;
    if (h) setLockedHeight(h);

    setFading(true);

    // Fase 1: fade out (200ms) → swap de contenido
    setTimeout(() => {
      setCurrent(next);
      setFading(false);
    }, 220);

    // Fase 2: liberar el bloqueo DESPUÉS de que el fade-in termina +
    // suficiente tiempo para que el video/imagen cargue sus dimensiones.
    setTimeout(() => setLockedHeight(undefined), 600);
  };

  const prev = () => go((current - 1 + videos.length) % videos.length);
  const next = () => go((current + 1) % videos.length);
  const item = videos[current];

  return (
    <div className="flex flex-col gap-6">

      <div className="flex justify-center">
        <div
          ref={wrapperRef}
          className="relative overflow-hidden rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.55)]"
          style={{
            opacity: fading ? 0 : 1,
            transition: "opacity 0.2s ease",
            // min-height: si el nuevo contenido es más alto, crece naturalmente.
            // Si es más bajo, mantiene la altura hasta que el lock se libere.
            minHeight: lockedHeight,
          }}
        >
          {isVideo(item) ? (
            <video
              ref={videoRef}
              src={item.src}
              controls
              preload="metadata"
              playsInline
              className="block max-h-[70vh] max-w-full"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.src}
              alt={item.label}
              className="block max-h-[70vh] max-w-full object-contain"
            />
          )}
        </div>
      </div>

      <div className="flex items-center justify-between gap-2">
        <button
          onClick={prev}
          aria-label="Anterior"
          className="flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-2.5 text-sm font-bold text-white/60 transition-all duration-200 hover:text-white sm:px-5"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}
        >
          <ChevronLeft size={15} />
          <span className="hidden sm:inline">Anterior</span>
        </button>

        <div className="flex min-w-0 flex-1 flex-col items-center gap-2">
          <div className="flex gap-2">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Elemento ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  height: "5px",
                  width: i === current ? "22px" : "5px",
                  background: i === current ? "#2DBA45" : "rgba(255,255,255,0.22)",
                }}
              />
            ))}
          </div>
          <p className="w-full truncate text-center text-xs text-white/40">
            {item.label}
          </p>
        </div>

        <button
          onClick={next}
          aria-label="Siguiente"
          className="flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-2.5 text-sm font-bold text-white/60 transition-all duration-200 hover:text-white sm:px-5"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}
        >
          <span className="hidden sm:inline">Siguiente</span>
          <ChevronRight size={15} />
        </button>
      </div>

    </div>
  );
}
