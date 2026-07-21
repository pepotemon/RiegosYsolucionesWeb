"use client";

import { motion } from "motion/react";
import { Cpu, Globe2, MessageCircle, Wrench } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const stats = [
  { value: "40+", label: "Años de experiencia técnica combinada", color: "text-[#60b5e8]" },
  { value: "8", label: "Años liderando proyectos de ingeniería", color: "text-[#2DBA45]" },
  { value: "35", label: "Años de operación técnica en campo", color: "text-white" },
];

const team = [
  {
    num: "01",
    Icon: Cpu,
    tag: "8 años de experiencia",
    role: "Liderazgo de Ingeniería",
    description:
      "Cada proyecto está dirigido por un ingeniero con ocho años de trayectoria comprobada en diseño, supervisión y optimización de sistemas, garantizando rigor metodológico e innovación técnica.",
    accent: "#2DBA45",
  },
  {
    num: "02",
    Icon: Wrench,
    tag: "35 años de experiencia",
    role: "Maestría en Campo",
    description:
      "La ejecución en terreno está respaldada por un especialista con alrededor de treinta y cinco años de labor ininterrumpida, con maestría operativa y capacidad excepcional para resolver imprevistos.",
    accent: "#0077C8",
  },
];

const WA_URL = getWhatsAppUrl(
  "Hola, quiero solicitar una asesoría técnica para mi proyecto."
);

export function AboutPageContent({ paragraphs }: { paragraphs: string[] }) {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#06131f] pb-24 pt-20 lg:pb-32 lg:pt-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0,119,200,0.18) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(0,119,200,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em]"
              style={{
                background: "rgba(45,186,69,0.08)",
                borderColor: "rgba(45,186,69,0.22)",
                color: "#2DBA45",
              }}
            >
              Quiénes somos
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 text-4xl font-black leading-[1.06] text-white sm:text-5xl lg:text-[3.25rem]"
            >
              Décadas de experiencia.{" "}
              <span className="text-[#2DBA45]">Una sola empresa.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-lg leading-8 text-white/50"
            >
              Fusionamos el rigor técnico de la ingeniería moderna con más de cuatro décadas
              de práctica ininterrumpida al servicio del campo colombiano.
            </motion.p>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.value}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="rounded-2xl p-8 text-center"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <p className={`text-6xl font-black leading-none ${s.color}`}>{s.value}</p>
                <p className="mt-3 text-sm leading-6 text-white/40">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Historia ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border-l-4 border-[#2DBA45] pl-6"
            >
              <p className="text-xl font-black italic leading-8 text-[#082033] lg:text-2xl">
                "Más de cuarenta años de conocimiento técnico y operativo, ahora en una
                estructura formal, moderna y eficiente."
              </p>
            </motion.blockquote>

            <div className="mt-10 divide-y divide-[#E0EEF9]">
              {paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={
                    i === 0
                      ? "py-7 text-base font-semibold leading-8 text-[#082033]"
                      : "py-7 text-base leading-8 text-[#566a7a]"
                  }
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Equipo ── */}
      <section className="bg-[#06131f] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-14 max-w-2xl text-center"
          >
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#2DBA45]">
              Equipo técnico
            </p>
            <h2 className="text-3xl font-black text-white lg:text-4xl">
              Dos perfiles.{" "}
              <span className="text-[#2DBA45]">Una sola garantía.</span>
            </h2>
            <p className="mt-4 leading-7 text-white/50">
              Cada proyecto tiene el respaldo de ingeniería especializada y décadas de práctica
              real en terreno.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2">
            {team.map((t, i) => (
              <motion.div
                key={t.role}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="relative overflow-hidden rounded-3xl"
                style={{
                  background: "#082033",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Ghost number */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-4 -top-8 select-none font-black leading-none text-white"
                  style={{ fontSize: 140, opacity: 0.04 }}
                >
                  {t.num}
                </span>

                {/* Left accent */}
                <div
                  className="absolute inset-y-0 left-0 w-1 rounded-l-3xl"
                  style={{
                    background: t.accent,
                    boxShadow: `2px 0 14px ${t.accent}66`,
                  }}
                />

                <div className="relative z-10 flex flex-col gap-5 p-8 pl-10">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.10)",
                    }}
                  >
                    <t.Icon size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                      {t.tag}
                    </p>
                    <h3 className="mt-1 text-2xl font-black text-white">{t.role}</h3>
                    <p className="mt-3 leading-7 text-white/60">{t.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-[#06131f] py-20 lg:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0,119,200,0.12) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(45,186,69,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <div
              className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <Globe2 size={32} className="text-white" />
            </div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#2DBA45]">
              Cobertura
            </p>
            <h2 className="text-3xl font-black text-white lg:text-4xl">
              Cobertura nacional{" "}
              <span className="text-[#2DBA45]">e internacional</span>
            </h2>
            <p className="mt-5 leading-7 text-white/50">
              Llevamos soluciones hídricas y agrícolas a todo el territorio colombiano y más
              allá de sus fronteras, adaptadas al contexto, la topografía y las necesidades
              reales de cada predio.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 rounded-xl bg-[#2DBA45] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#2DBA45]/25 transition-all duration-200 hover:bg-[#26a33d]"
            >
              <MessageCircle size={17} />
              Solicitar asesoría técnica
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
