"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Droplets } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const SLIDE_DURATION = 3800;

const slides = [
  {
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=2000&q=80",
    eyebrow: "Sistemas de riego tecnificado",
    title: "Mas produccion con menos agua",
    subtitle:
      "Disenamos redes de riego por goteo y aspersion ajustadas a su cultivo, topografia y metas productivas del predio.",
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=80",
    eyebrow: "Energia solar para el campo",
    title: "Independencia energetica en su finca",
    subtitle:
      "Bombeo solar sin combustible. Reduccion de costos operativos y mayor autonomia en zonas rurales y aisladas.",
  },
  {
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=2000&q=80",
    eyebrow: "Automatizacion agricola",
    title: "Control preciso de cada zona de riego",
    subtitle:
      "Valvulas, sensores y programacion inteligente para operar con datos reales, no con suposiciones.",
  },
  {
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=2000&q=80",
    eyebrow: "Recursos hidricos",
    title: "El agua disponible, bien aprovechada",
    subtitle:
      "Evaluamos, captamos y distribuimos el recurso hidrico de su predio con criterio tecnico y sostenible.",
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: "easeOut" },
  }),
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
};

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [paused, current]);

  const slide = slides[current];

  return (
    <section
      className="-mt-[81px] relative overflow-hidden bg-[#06131f]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Crossfade background image */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={current === 0}
            sizes="100vw"
            className="object-cover object-center"
            aria-hidden="true"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark gradient overlay — heavier on left for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#06131f]/92 via-[#06131f]/60 to-[#06131f]/20" />

      {/* Content */}
      <Container className="relative flex min-h-screen flex-col justify-center pb-16 pt-32 lg:pb-24 lg:pt-36">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.p
              key={`eyebrow-${current}`}
              className="mb-5 inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-bold text-[#60b5e8] backdrop-blur-sm"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              custom={0}
            >
              <Droplets size={17} />
              {slide.eyebrow}
            </motion.p>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${current}`}
              className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-[3.5rem]"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              custom={0.1}
            >
              {slide.title}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`subtitle-${current}`}
              className="mt-5 max-w-xl text-lg leading-8 text-[#a8c8e0]"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              custom={0.22}
            >
              {slide.subtitle}
            </motion.p>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`cta-${current}`}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              custom={0.34}
            >
              <Button
                href={getWhatsAppUrl("Hola, quiero solicitar una cotizacion para mi cultivo.")}
                style={{ color: "white" }}
              >
                Solicitar cotizacion <ArrowRight size={18} />
              </Button>
              <Button
                href="/servicios"
                variant="ghost"
                style={{ color: "white" }}
                className="border border-white/30 hover:bg-white/10"
              >
                Conocer servicios
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress indicators */}
        <div className="mt-12 flex items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.eyebrow}
              onClick={() => { setCurrent(i); setPaused(false); }}
              aria-label={`Ver slide: ${s.eyebrow}`}
              className={cn(
                "group relative h-[3px] overflow-hidden rounded-full transition-all duration-500",
                i === current ? "w-12 bg-white/30" : "w-6 bg-white/25 hover:bg-white/40",
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
          <span className="ml-2 text-xs font-semibold text-white/40">
            {current + 1} / {slides.length}
          </span>
        </div>
      </Container>
    </section>
  );
}
