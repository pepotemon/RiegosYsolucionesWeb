"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { MapPin, ArrowRight, MessageCircle, ChevronDown } from "lucide-react"
import type { Project } from "@/types/project"
import { getWhatsAppUrl } from "@/lib/whatsapp"

const WA_URL = getWhatsAppUrl(
  "Hola, vi su portafolio de proyectos y quiero conocer más sobre sus soluciones."
)

const caseItems = (p: Project) => [
  { label: "Problema", text: p.problem },
  { label: "Solución", text: p.solution },
  { label: "Resultado", text: p.result },
]

function ProjectSection({ project, index }: { project: Project; index: number }) {
  const imageFirst = index % 2 === 1
  const num = String(index + 1).padStart(2, "0")

  return (
    <section className="relative flex flex-col bg-white md:min-h-screen md:flex-row md:items-stretch">
      {/* Image column */}
      <motion.div
        className={`relative h-[62vw] w-full shrink-0 overflow-hidden md:h-auto md:w-[55%] ${
          imageFirst ? "md:order-1" : "md:order-2"
        }`}
        initial={{ opacity: 0, scale: 1.06 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, 55vw"
          quality={90}
          className="object-cover"
          priority={index === 0}
        />
        <div
          className="absolute inset-0"
          style={{
            background: imageFirst
              ? "linear-gradient(to right, rgba(255,255,255,0) 72%, rgba(255,255,255,0.45) 100%)"
              : "linear-gradient(to left, rgba(255,255,255,0) 72%, rgba(255,255,255,0.45) 100%)",
          }}
        />
      </motion.div>

      {/* Content column */}
      <div
        className={`relative flex w-full flex-col justify-center overflow-hidden px-8 py-16 md:w-[45%] md:px-14 lg:px-20 ${
          imageFirst ? "md:order-2" : "md:order-1"
        }`}
      >
        {/* Ghost number */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-2 top-1/2 -translate-y-1/2 select-none text-[160px] font-black leading-none md:text-[210px]"
          style={{ color: "#082033", opacity: 0.04 }}
        >
          {num}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.72, delay: 0.14 }}
          className="relative z-10"
        >
          {/* Badges */}
          <div className="mb-5 flex items-center gap-3">
            <span
              className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest"
              style={{
                background: "rgba(45,186,69,0.12)",
                color: "#2DBA45",
                border: "1px solid rgba(45,186,69,0.22)",
              }}
            >
              {project.service}
            </span>
            <span className="font-mono text-xs font-bold text-[#082033]/20">
              #{num}
            </span>
          </div>

          {/* Location */}
          <div className="mb-3 flex items-center gap-1.5 text-sm font-semibold text-[#1b6cb6]">
            <MapPin size={14} strokeWidth={2.5} />
            {project.location}
          </div>

          {/* Title */}
          <h2 className="mb-8 text-3xl font-black leading-[1.07] tracking-tight text-[#082033] sm:text-4xl xl:text-[2.6rem]">
            {project.name}
          </h2>

          {/* Problem / Solution / Result */}
          <div className="mb-8 space-y-5">
            {caseItems(project).map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.48, delay: 0.28 + i * 0.08 }}
                className="flex gap-3.5"
              >
                <div className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2DBA45] text-[9px] font-black text-white">
                  {i + 1}
                </div>
                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#0077C8]">
                    {item.label}
                  </p>
                  <p className="text-sm leading-relaxed text-[#566a7a]">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats pills */}
          <div className="mb-8 flex flex-wrap gap-2.5">
            {[
              { label: "Área", value: project.area },
              { label: "Cultivo", value: project.crop },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl px-4 py-2.5"
                style={{
                  background: "rgba(0,119,200,0.06)",
                  border: "1px solid rgba(0,119,200,0.14)",
                }}
              >
                <p className="text-[10px] uppercase tracking-wider text-[#566a7a]">
                  {s.label}
                </p>
                <p className="text-sm font-bold text-[#082033]">{s.value}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href={`/proyectos/${project.slug}`}
            className="group inline-flex items-center gap-2 rounded-xl bg-[#2DBA45] px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-[#26a33d]"
          >
            Ver caso completo
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export function ProjectsPageContent({ projects }: { projects: Project[] }) {
  return (
    <main>
      {/* ── HERO ── */}
      <section
        className="relative flex min-h-[65vh] flex-col items-center justify-center overflow-hidden py-28 text-center"
        style={{
          background: "linear-gradient(155deg, #06131f 0%, #0d2340 55%, #082033 100%)",
        }}
      >
        {/* Dot grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0,119,200,0.2) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(0,119,200,0.13) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span
              className="mb-7 inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em]"
              style={{
                background: "rgba(45,186,69,0.08)",
                borderColor: "rgba(45,186,69,0.22)",
                color: "#2DBA45",
              }}
            >
              Portafolio de proyectos
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.08 }}
            className="mx-auto max-w-3xl text-5xl font-black leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Proyectos que{" "}
            <span className="text-[#2DBA45]">hablan</span>
            {" "}por sí solos
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.2 }}
            className="mx-auto mt-5 max-w-lg text-base text-white/55 sm:text-lg"
          >
            Cada caso: un reto hídrico resuelto, agua optimizada y producción transformada.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.33 }}
            className="mx-auto mt-14 flex flex-wrap justify-center gap-x-14 gap-y-7"
          >
            {[
              { value: `${projects.length}+`, label: "Proyectos ejecutados" },
              { value: "3", label: "Departamentos" },
              { value: "100+", label: "Hectáreas intervenidas" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-black text-white sm:text-5xl">{stat.value}</p>
                <p className="mt-1.5 text-[10px] uppercase tracking-[0.18em] text-white/38">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.62 }}
            className="mt-14 flex flex-col items-center gap-2"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
              Explorar
            </p>
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={18} className="text-white/25" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      {projects.map((project, i) => (
        <ProjectSection key={project.slug} project={project} index={i} />
      ))}

      {/* ── BOTTOM CTA ── */}
      <section
        className="relative overflow-hidden py-28 text-center"
        style={{
          background: "linear-gradient(155deg, #082033 0%, #06131f 100%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(45,186,69,0.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#2DBA45]">
              ¿Listo para empezar?
            </p>
            <h2 className="mx-auto mb-5 max-w-2xl text-4xl font-black leading-tight text-white sm:text-5xl">
              Tu proyecto puede ser el próximo caso de éxito
            </h2>
            <p className="mx-auto mb-10 max-w-md text-base text-white/50">
              Cuéntanos tu reto hídrico o agrícola. Hacemos el diagnóstico inicial sin costo.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-[#2DBA45] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#2DBA45]/25 transition-all duration-200 hover:bg-[#26a33d] hover:shadow-[#2DBA45]/35"
            >
              <MessageCircle size={18} />
              Solicitar diagnóstico por WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
