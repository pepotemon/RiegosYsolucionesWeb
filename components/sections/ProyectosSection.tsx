import Image from "next/image"
import { MapPin, ArrowRight } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { Container } from "@/components/ui/Container"
import { projects } from "@/data/projects"
import type { Project } from "@/types/project"

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const num = String(index + 1).padStart(2, "0")
  return (
    <a
      href={`/proyectos/${project.slug}`}
      className="group relative block h-[380px] overflow-hidden rounded-[32px] md:h-[490px]"
    >
      <Image
        src={project.image}
        alt={project.name}
        fill
        sizes="(max-width: 768px) 100vw, 66vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#082033]/92 via-[#082033]/30 to-transparent" />

      {/* Top badges */}
      <div className="absolute left-5 right-5 top-5 flex items-start justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2DBA45] text-sm font-black text-white shadow-lg">
          {num}
        </div>
        <div
          className="rounded-full px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm"
          style={{ background: "rgba(255,255,255,0.15)" }}
        >
          {project.service}
        </div>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <div className="mb-2 flex items-center gap-1.5 text-xs font-bold text-[#2DBA45]">
          <MapPin size={13} />
          {project.location}
        </div>
        <h3 className="mb-4 text-2xl font-black leading-tight text-white md:text-3xl">
          {project.name}
        </h3>
        <div className="mb-5 flex flex-wrap gap-3">
          <div
            className="rounded-xl px-3 py-2 backdrop-blur-sm"
            style={{ background: "rgba(255,255,255,0.12)" }}
          >
            <p className="text-[10px] uppercase tracking-wider text-white/60">Área</p>
            <p className="text-sm font-bold text-white">{project.area}</p>
          </div>
          <div
            className="rounded-xl px-3 py-2 backdrop-blur-sm"
            style={{ background: "rgba(255,255,255,0.12)" }}
          >
            <p className="text-[10px] uppercase tracking-wider text-white/60">Cultivo</p>
            <p className="text-sm font-bold text-white">{project.crop}</p>
          </div>
        </div>
        <div className="flex translate-y-2 items-center gap-2 text-sm font-bold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Ver proyecto completo <ArrowRight size={16} />
        </div>
      </div>
    </a>
  )
}

function SmallCard({ project, index }: { project: Project; index: number }) {
  const num = String(index + 1).padStart(2, "0")
  return (
    <a
      href={`/proyectos/${project.slug}`}
      className="group relative block h-[220px] overflow-hidden rounded-[28px] md:h-[235px]"
    >
      <Image
        src={project.image}
        alt={project.name}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#082033]/90 via-[#082033]/20 to-transparent" />

      {/* Top */}
      <div className="absolute left-4 right-4 top-4 flex items-start justify-between">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2DBA45] text-[11px] font-black text-white">
          {num}
        </div>
        <div
          className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm"
          style={{ background: "rgba(255,255,255,0.15)" }}
        >
          {project.service}
        </div>
      </div>

      {/* Bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="mb-1 flex items-center gap-1 text-[10px] font-bold text-[#2DBA45]">
          <MapPin size={10} />
          {project.location}
        </div>
        <h3 className="text-base font-black leading-tight text-white">{project.name}</h3>
        <div className="mt-2 flex translate-y-1 items-center gap-1.5 text-xs font-bold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Ver proyecto <ArrowRight size={13} />
        </div>
      </div>
    </a>
  )
}

export function ProyectosSection() {
  const [featured, ...rest] = projects

  return (
    <section
      className="relative py-24"
      style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F3F9FF 100%)" }}
    >
      <Container>
        {/* Header */}
        <BlurFade inView inViewMargin="-60px">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div
                className="mb-5 inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#0077C8]"
                style={{
                  background: "rgba(0,119,200,0.08)",
                  borderRadius: "20px",
                  border: "1px solid rgba(0,119,200,0.15)",
                }}
              >
                Proyectos destacados
              </div>
              <h2 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl">
                <span className="text-[#082033]">Experiencia </span>
                <span className="text-[#2DBA45]">demostrada</span>
                <br />
                <span className="text-[#082033]">en campo</span>
              </h2>
              <p className="mt-4 max-w-md text-base text-gray-500">
                Casos reales de clientes en distintos sectores y regiones del país.
              </p>
            </div>
            <a
              href="/proyectos"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl border-2 border-[#082033] px-6 py-3 text-sm font-bold text-[#082033] transition duration-200 hover:bg-[#082033] hover:text-white"
            >
              Ver portafolio <ArrowRight size={16} />
            </a>
          </div>
        </BlurFade>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <BlurFade
            inView
            inViewMargin="-60px"
            className="md:col-span-2 md:row-span-2"
          >
            <FeaturedCard project={featured} index={0} />
          </BlurFade>
          {rest.map((project, i) => (
            <BlurFade
              key={project.slug}
              inView
              inViewMargin="-60px"
              delay={(i + 1) * 0.14}
            >
              <SmallCard project={project} index={i + 1} />
            </BlurFade>
          ))}
        </div>
      </Container>
    </section>
  )
}
