"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight, MessageCircle, ChevronDown, Clock, Calendar } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { getWhatsAppUrl } from "@/lib/whatsapp"
import type { BlogPost } from "@/types/blog"

const WA_URL = getWhatsAppUrl(
  "Hola, leí un artículo del blog y quiero asesoría técnica para mi proyecto."
)

function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-[32px] bg-[#082033] md:h-[460px] md:flex-row"
    >
      {/* Image — left 55% */}
      <div className="relative h-[58vw] w-full shrink-0 overflow-hidden md:h-auto md:w-[55%]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 55vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#082033]/10 to-[#082033]/80 md:to-[#082033]/60" />
        <div className="absolute left-5 top-5">
          <span
            className="rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm"
            style={{
              background: "rgba(45,186,69,0.18)",
              color: "#2DBA45",
              border: "1px solid rgba(45,186,69,0.28)",
            }}
          >
            Artículo destacado
          </span>
        </div>
      </div>

      {/* Content — right 45% */}
      <div className="relative flex w-full flex-col justify-center overflow-hidden p-8 md:w-[45%] md:p-12">
        {/* Ghost number */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-3 top-1/2 -translate-y-1/2 select-none text-[170px] font-black leading-none text-white opacity-[0.035] md:text-[210px]"
        >
          01
        </div>

        <div className="relative z-10">
          <div className="mb-5 flex items-center gap-4 text-xs text-white/40">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              {post.readTime}
            </span>
          </div>

          <h2 className="mb-4 text-2xl font-black leading-tight text-white sm:text-3xl">
            {post.title}
          </h2>

          <p className="mb-8 line-clamp-3 text-sm leading-relaxed text-white/50">
            {post.excerpt}
          </p>

          <div className="inline-flex items-center gap-2 rounded-xl bg-[#2DBA45] px-5 py-2.5 text-sm font-bold text-white transition-all duration-200 group-hover:gap-3 group-hover:bg-[#26a33d]">
            Leer artículo <ArrowRight size={15} />
          </div>
        </div>
      </div>
    </Link>
  )
}

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      className="flex"
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group flex w-full flex-col overflow-hidden rounded-[24px] bg-white ring-1 ring-[#E0EEF9] transition-shadow duration-300 hover:shadow-xl"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
            className="object-cover transition-transform duration-600 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-3 flex items-center gap-3">
            <span
              className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
              style={{ background: "rgba(45,186,69,0.10)", color: "#2DBA45" }}
            >
              {post.readTime}
            </span>
            <span className="text-xs text-[#566a7a]">{post.date}</span>
          </div>

          <h3 className="mb-3 flex-1 text-lg font-black leading-tight text-[#082033] transition-colors duration-200 group-hover:text-[#1b6cb6]">
            {post.title}
          </h3>

          <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-[#566a7a]">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-1.5 text-sm font-bold text-[#1b6cb6] transition-all duration-200 group-hover:gap-3">
            Leer artículo <ArrowRight size={15} />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function BlogPageContent({ posts }: { posts: BlogPost[] }) {
  const [featured, ...rest] = posts

  return (
    <main>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden py-28 text-center"
        style={{
          background: "linear-gradient(155deg, #06131f 0%, #0d2340 55%, #082033 100%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0,119,200,0.2) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
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
              Blog técnico
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.08 }}
            className="mx-auto max-w-3xl text-5xl font-black leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Conocimiento{" "}
            <span className="text-[#2DBA45]">para el campo</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.2 }}
            className="mx-auto mt-5 max-w-lg text-base text-white/55 sm:text-lg"
          >
            Guías técnicas sobre riego, bombas, agua y productividad agrícola —
            escritas para quienes trabajan el campo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.33 }}
            className="mx-auto mt-14 flex flex-wrap justify-center gap-x-14 gap-y-7"
          >
            {[
              { value: `${posts.length}`, label: "Artículos publicados" },
              { value: "5", label: "Temas técnicos" },
              { value: "Gratis", label: "Sin suscripción" },
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.62 }}
            className="mt-14 flex flex-col items-center gap-2"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
              Explorar artículos
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

      {/* ── ARTICLES ── */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(180deg, #F3F9FF 0%, #FFFFFF 100%)" }}
      >
        <Container>
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <FeaturedCard post={featured} />
          </motion.div>

          {/* Divider */}
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#E0EEF9]" />
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#566a7a]">
              Más artículos
            </p>
            <div className="h-px flex-1 bg-[#E0EEF9]" />
          </div>

          {/* Grid */}
          <div className="grid gap-5 sm:grid-cols-2">
            {rest.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
            ))}
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
              ¿Prefieres asesoría directa?
            </p>
            <h2 className="mx-auto mb-5 max-w-2xl text-4xl font-black leading-tight text-white sm:text-5xl">
              Un técnico puede responder puntualmente para tu cultivo
            </h2>
            <p className="mx-auto mb-10 max-w-md text-base text-white/50">
              Los artículos son generales. El diagnóstico para tu finca es
              personalizado y sin costo.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-[#2DBA45] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#2DBA45]/25 transition-all duration-200 hover:bg-[#26a33d] hover:shadow-[#2DBA45]/35"
            >
              <MessageCircle size={18} />
              Solicitar asesoría por WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
