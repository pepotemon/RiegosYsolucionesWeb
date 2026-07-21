"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { ArrowRight, MessageCircle, ChevronDown } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { getWhatsAppUrl } from "@/lib/whatsapp"
import type { Product } from "@/types/product"

const WA_GENERAL = getWhatsAppUrl(
  "Hola, quiero información sobre los productos del catálogo de Riegos y Soluciones Agrícolas del Norte."
)

function CatalogCard({ product }: { product: Product }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-[#082033] transition-shadow duration-300 hover:shadow-[0_24px_64px_rgba(8,32,51,0.5)]">
      {/* Image */}
      <div className="relative aspect-[4/3] shrink-0 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#082033]/70 via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-2">
          <span
            className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm"
            style={{
              background: "rgba(45,186,69,0.18)",
              color: "#2DBA45",
              border: "1px solid rgba(45,186,69,0.28)",
            }}
          >
            {product.category}
          </span>
          <span
            className="rounded-full px-3 py-1 text-[10px] font-semibold text-white backdrop-blur-sm"
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            {product.brand}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative flex flex-1 flex-col p-6 pl-8">
        {/* Left accent line with glow */}
        <div
          className="absolute bottom-8 left-0 top-8 w-[3px] rounded-r-full bg-[#2DBA45]"
          style={{ boxShadow: "2px 0 14px rgba(45,186,69,0.4)" }}
        />

        <h3 className="mb-1.5 text-lg font-black leading-tight text-white">
          {product.name}
        </h3>
        <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-white/40">
          {product.description}
        </p>

        {/* Feature list */}
        <ul className="mb-6 flex-1 space-y-2.5">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-white/65">
              <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2DBA45]" />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={getWhatsAppUrl(`Hola, quiero información sobre ${product.name}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn flex items-center justify-center gap-2 rounded-xl bg-[#2DBA45] py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-[#26a33d]"
        >
          Solicitar información
          <ArrowRight
            size={15}
            className="transition-transform duration-200 group-hover/btn:translate-x-0.5"
          />
        </a>
      </div>
    </div>
  )
}

export function CatalogPageContent({ products }: { products: Product[] }) {
  const uniqueCategories = Array.from(new Set(products.map((p) => p.category)))
  const categories = ["Todos", ...uniqueCategories]
  const [active, setActive] = useState<string>("Todos")

  const filtered =
    active === "Todos" ? products : products.filter((p) => p.category === active)

  return (
    <main>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden py-28 text-center"
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
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(0,119,200,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: -14 }}
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
              Catálogo técnico
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.08 }}
            className="mx-auto max-w-3xl text-5xl font-black leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Equipos y materiales{" "}
            <span className="text-[#2DBA45]">para el campo</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.2 }}
            className="mx-auto mt-5 max-w-lg text-base text-white/55 sm:text-lg"
          >
            Referencia técnica de productos. Cada solicitud se cotiza según el
            proyecto —{" "}
            <span className="font-medium text-white/80">
              no es una tienda online.
            </span>
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.33 }}
            className="mx-auto mt-14 flex flex-wrap justify-center gap-x-14 gap-y-7"
          >
            {[
              { value: `${products.length}`, label: "Productos en catálogo" },
              { value: `${uniqueCategories.length}`, label: "Categorías" },
              { value: "100%", label: "Cotización personalizada" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-black text-white sm:text-5xl">
                  {stat.value}
                </p>
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
              Ver productos
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

      {/* ── FILTER BAR ── */}
      <div className="border-b border-[#E0EEF9] bg-white">
        <Container>
          <div
            className="flex items-center gap-2 overflow-x-auto py-4"
            style={{ scrollbarWidth: "none" }}
          >
            {categories.map((cat) => {
              const count =
                cat === "Todos"
                  ? products.length
                  : products.filter((p) => p.category === cat).length
              const isActive = active === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`flex shrink-0 items-center gap-1.5 rounded-full px-5 py-2 text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-[#082033] text-white shadow-md shadow-[#082033]/20"
                      : "bg-[#F3F9FF] text-[#566a7a] hover:bg-[#E8F2FF] hover:text-[#082033]"
                  }`}
                >
                  {cat}
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none ${
                      isActive
                        ? "bg-white/15 text-white"
                        : "bg-[#082033]/8 text-[#082033]/50"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </Container>
      </div>

      {/* ── GRID ── */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(180deg, #F3F9FF 0%, #FFFFFF 100%)" }}
      >
        <Container>
          {/* Results label */}
          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm text-[#566a7a]">
              <span className="font-bold text-[#082033]">{filtered.length}</span>{" "}
              {filtered.length === 1 ? "producto" : "productos"}
              {active !== "Todos" && (
                <span>
                  {" "}· categoría{" "}
                  <span className="font-semibold text-[#082033]">{active}</span>
                </span>
              )}
            </p>
            {active !== "Todos" && (
              <button
                onClick={() => setActive("Todos")}
                className="text-sm font-bold text-[#1b6cb6] hover:underline"
              >
                Ver todos
              </button>
            )}
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((product) => (
                <motion.div
                  key={product.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex flex-col"
                >
                  <CatalogCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </Container>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section
        className="relative overflow-hidden py-28 text-center"
        style={{ background: "linear-gradient(155deg, #082033 0%, #06131f 100%)" }}
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
              ¿No encontraste lo que buscas?
            </p>
            <h2 className="mx-auto mb-5 max-w-2xl text-4xl font-black leading-tight text-white sm:text-5xl">
              Cotizamos cualquier equipo o material para tu proyecto
            </h2>
            <p className="mx-auto mb-10 max-w-md text-base text-white/50">
              Cuéntanos qué necesitas y nuestro equipo técnico te asesora sin
              costo.
            </p>
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-[#2DBA45] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#2DBA45]/25 transition-all duration-200 hover:bg-[#26a33d] hover:shadow-[#2DBA45]/35"
            >
              <MessageCircle size={18} />
              Consultar por WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
