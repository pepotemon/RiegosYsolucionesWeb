"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Headphones,
  MapPin,
  PenLine,
  Wrench,
  type LucideIcon,
} from "lucide-react";

interface Step {
  icon: LucideIcon;
  color: string;
  label: string;
  num: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    icon: ClipboardList,
    color: "#1b6cb6",
    label: "#60b5e8",
    num: "01",
    title: "Analizamos su necesidad",
    description:
      "Entendemos su cultivo, sus problemas con el agua y sus metas antes de hablar de equipos o costos.",
  },
  {
    icon: MapPin,
    color: "#2d8757",
    label: "#3baa6e",
    num: "02",
    title: "Realizamos visita técnica",
    description:
      "Nos desplazamos al predio para tomar medidas reales. Sin visita, no emitimos propuesta técnica.",
  },
  {
    icon: PenLine,
    color: "#1b6cb6",
    label: "#60b5e8",
    num: "03",
    title: "Diseñamos la solución",
    description:
      "Elaboramos el diseño hidráulico con los datos de campo. Usted lo revisa y aprueba antes de que iniciemos.",
  },
  {
    icon: Wrench,
    color: "#2d8757",
    label: "#3baa6e",
    num: "04",
    title: "Instalamos el sistema",
    description:
      "Instalamos con nuestro propio equipo y materiales certificados. Entregamos el sistema probado y verificado.",
  },
  {
    icon: Headphones,
    color: "#1b6cb6",
    label: "#60b5e8",
    num: "05",
    title: "Brindamos soporte",
    description:
      "Capacitamos al operario y dejamos un canal abierto para resolver dudas durante la primera temporada.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export function ProcessSteps() {
  return (
    <motion.div
      className="mt-14 space-y-3"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {STEPS.map((step) => {
        const Icon = step.icon;
        return (
          <motion.div
            key={step.num}
            variants={item}
            className="flex overflow-hidden rounded-2xl"
          >
            {/* Bloque izquierdo coloreado */}
            <div
              className="relative flex w-24 shrink-0 flex-col items-center justify-center gap-2 py-7 sm:w-36"
              style={{ backgroundColor: step.color }}
            >
              <Icon size={30} className="text-white" />
              <span className="text-xs font-black uppercase tracking-widest text-white/50">
                {step.num}
              </span>
              {/* Número decorativo de fondo */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-3 right-1 select-none text-7xl font-black leading-none text-white/[0.08]"
              >
                {step.num}
              </span>
            </div>

            {/* Contenido derecho */}
            <div className="flex flex-1 flex-col justify-center border border-l-0 border-white/[0.07] bg-white/[0.04] px-6 py-7 sm:px-8">
              <p
                className="text-xs font-black uppercase tracking-[0.18em]"
                style={{ color: step.label }}
              >
                Paso {step.num}
              </p>
              <h3 className="mt-1.5 text-xl font-black text-white sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm leading-7 text-[#7a9ab8]">
                {step.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
