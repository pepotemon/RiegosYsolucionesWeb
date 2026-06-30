"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { workProcess } from "@/data/services";

// ─── Animaciones por paso ────────────────────────────────────────────────────

function AnalysisAnim() {
  return (
    <svg viewBox="0 0 80 80" className="h-20 w-20 shrink-0" fill="none">
      {/* Documento */}
      <rect x="14" y="12" width="36" height="46" rx="3" fill="#f0f7ff" stroke="#1b6cb6" strokeWidth="1.5" />
      <rect x="14" y="12" width="36" height="9" rx="3" fill="#1b6cb6" />
      {/* Líneas de texto */}
      <line x1="20" y1="32" x2="44" y2="32" stroke="#c8ddf0" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="38" x2="44" y2="38" stroke="#c8ddf0" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="44" x2="36" y2="44" stroke="#c8ddf0" strokeWidth="2" strokeLinecap="round" />
      {/* Lupa moviéndose */}
      <motion.g
        animate={{ x: [0, 16, 0], y: [0, 6, 12, 6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", times: [0, 0.25, 0.5, 0.75, 1] }}
      >
        <circle cx="26" cy="32" r="7" fill="white" fillOpacity="0.85" stroke="#1b6cb6" strokeWidth="2" />
        <line x1="31" y1="37" x2="37" y2="43" stroke="#1b6cb6" strokeWidth="2.5" strokeLinecap="round" />
        <motion.circle
          cx="24" cy="30" r="2"
          fill="#1b6cb6" fillOpacity="0.15"
          animate={{ opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.g>
    </svg>
  );
}

function VisitAnim() {
  return (
    <svg viewBox="0 0 80 80" className="h-20 w-20 shrink-0" fill="none">
      {/* Ondas de pulso */}
      {[10, 18, 26].map((r, i) => (
        <motion.circle
          key={r}
          cx="40" cy="52" r={r}
          stroke="#1b6cb6" strokeWidth="1.5"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: [0, 0.5, 0], scale: [0.6, 1, 1.1] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.55, ease: "easeOut" }}
        />
      ))}
      {/* Pin */}
      <motion.g
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", times: [0, 0.4, 1] }}
      >
        <path
          d="M40 14 C32 14 26 20 26 28 C26 38 40 54 40 54 C40 54 54 38 54 28 C54 20 48 14 40 14Z"
          fill="#1b6cb6"
        />
        <circle cx="40" cy="28" r="6" fill="white" />
        <circle cx="40" cy="28" r="2.5" fill="#1b6cb6" />
      </motion.g>
    </svg>
  );
}

function DesignAnim() {
  return (
    <svg viewBox="0 0 80 80" className="h-20 w-20 shrink-0" fill="none">
      {/* Fondo tipo plano */}
      <rect x="6" y="6" width="68" height="68" rx="5" fill="#0d1f35" />
      {/* Cuadrícula tenue */}
      {[16, 26, 36, 46, 56, 66].map((v) => (
        <g key={v}>
          <line x1="6" y1={v} x2="74" y2={v} stroke="#ffffff" strokeWidth="0.4" strokeOpacity="0.12" />
          <line x1={v} y1="6" x2={v} y2="74" stroke="#ffffff" strokeWidth="0.4" strokeOpacity="0.12" />
        </g>
      ))}
      {/* Círculo que se va dibujando */}
      <motion.circle
        cx="40" cy="44" r="18"
        stroke="#60b5e8" strokeWidth="2" fill="none"
        transform="rotate(-90 40 44)"
        animate={{ pathLength: [0, 1, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 0.8, 1], ease: "easeInOut" }}
      />
      {/* Brazo fijo del compás */}
      <line x1="40" y1="44" x2="32" y2="28" stroke="#c8ddf0" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
      <circle cx="31" cy="26" r="2.5" fill="none" stroke="#c8ddf0" strokeWidth="1.5" strokeOpacity="0.5" />
      {/* Brazo giratorio del compás */}
      <motion.g
        animate={{ rotate: [0, 360, 360, 0] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 0.8, 1], ease: "easeInOut" }}
        style={{ transformOrigin: "40px 44px" }}
      >
        <line x1="40" y1="44" x2="40" y2="27" stroke="#60b5e8" strokeWidth="2" strokeLinecap="round" />
        <polygon points="37,24 43,24 40,18" fill="#60b5e8" />
      </motion.g>
      {/* Pivote central */}
      <circle cx="40" cy="44" r="3.5" fill="#0d1f35" stroke="#60b5e8" strokeWidth="2" />
    </svg>
  );
}

function InstallAnim() {
  return (
    <svg viewBox="0 0 80 80" className="h-20 w-20 shrink-0" fill="none">
      {/* Engranaje grande */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "36px 36px" }}
      >
        <circle cx="36" cy="36" r="13" stroke="#1b6cb6" strokeWidth="3" fill="#f0f7ff" />
        <circle cx="36" cy="36" r="5" fill="#1b6cb6" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <rect
            key={angle}
            x="33.5" y="19"
            width="5" height="8"
            rx="1.5"
            fill="#1b6cb6"
            transform={`rotate(${angle} 36 36)`}
          />
        ))}
      </motion.g>
      {/* Engranaje pequeño (gira al revés) */}
      <motion.g
        animate={{ rotate: -360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "58px 54px" }}
      >
        <circle cx="58" cy="54" r="9" stroke="#134f88" strokeWidth="2.5" fill="#f0f7ff" />
        <circle cx="58" cy="54" r="3.5" fill="#134f88" />
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <rect
            key={angle}
            x="56" y="42"
            width="4" height="6"
            rx="1"
            fill="#134f88"
            transform={`rotate(${angle} 58 54)`}
          />
        ))}
      </motion.g>
    </svg>
  );
}

function SupportAnim() {
  return (
    <svg viewBox="0 0 80 80" className="h-20 w-20 shrink-0" fill="none">
      {/* Teléfono con vibración suave */}
      <motion.g
        animate={{ rotate: [-6, 6, -6, 6, 0, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, times: [0, 0.12, 0.24, 0.36, 0.5, 1], ease: "easeInOut" }}
        style={{ transformOrigin: "34px 40px" }}
      >
        <rect x="22" y="18" width="24" height="44" rx="5" fill="#1b6cb6" />
        <rect x="26" y="24" width="16" height="28" rx="2" fill="#f0f7ff" />
        <circle cx="34" cy="57" r="2.5" fill="#60b5e8" />
        {/* Pantalla (ondas de llamada) */}
        <motion.line
          x1="29" y1="30" x2="39" y2="30"
          stroke="#1b6cb6" strokeWidth="1.5" strokeLinecap="round"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
        <motion.line
          x1="31" y1="34" x2="37" y2="34"
          stroke="#1b6cb6" strokeWidth="1.5" strokeLinecap="round"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      </motion.g>
      {/* Arcos de señal */}
      {[8, 14, 20].map((r, i) => (
        <motion.path
          key={r}
          d={`M ${50} ${40 - r * 0.6} A ${r} ${r} 0 0 1 ${50} ${40 + r * 0.6}`}
          stroke="#3baa6e" strokeWidth="2" strokeLinecap="round" fill="none"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.35, ease: "easeOut" }}
        />
      ))}
    </svg>
  );
}

// ─── Animación por índice ────────────────────────────────────────────────────

const animations = [
  <AnalysisAnim key="analysis" />,
  <VisitAnim key="visit" />,
  <DesignAnim key="design" />,
  <InstallAnim key="install" />,
  <SupportAnim key="support" />,
];

// ─── Componente principal ────────────────────────────────────────────────────

export function WorkProcess() {
  const [active, setActive] = useState(0);
  const step = workProcess[active];

  return (
    <div className="mt-12">
      {/* Fila de pasos */}
      <div className="relative flex items-start justify-between gap-2">
        <div className="absolute left-0 right-0 top-5 h-px bg-[#c8ddf0]" aria-hidden="true" />
        {workProcess.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={s.title}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              className="group relative flex flex-1 flex-col items-center gap-3 text-center focus:outline-none"
              aria-pressed={isActive}
            >
              <motion.span
                animate={{
                  backgroundColor: isActive ? "#1b6cb6" : "#ffffff",
                  color: isActive ? "#ffffff" : "#566a7a",
                  scale: isActive ? 1.12 : 1,
                  boxShadow: isActive ? "0 0 0 4px #dbeeff" : "0 0 0 0px transparent",
                }}
                transition={{ duration: 0.25 }}
                className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#c8ddf0] text-sm font-black"
              >
                {i + 1}
              </motion.span>
              <motion.p
                animate={{ color: isActive ? "#1a2b3c" : "#566a7a" }}
                transition={{ duration: 0.25 }}
                className="text-xs font-semibold leading-snug sm:text-sm"
              >
                {s.title}
              </motion.p>
            </button>
          );
        })}
      </div>

      {/* Panel de descripción con animación */}
      <div className="relative mt-8 min-h-[120px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex items-center gap-6 rounded-xl border border-[#c8ddf0] bg-[#f0f7ff] px-6 py-5 sm:gap-8"
          >
            {/* Animación SVG */}
            <div className="hidden sm:block">
              {animations[active]}
            </div>
            {/* Texto */}
            <div className="flex-1">
              <p className="text-sm font-bold text-[#1b6cb6]">Paso {active + 1}</p>
              <p className="mt-1 text-lg font-black text-[#1a2b3c]">{step.title}</p>
              <p className="mt-2 text-sm leading-7 text-[#3a5268]">{step.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
