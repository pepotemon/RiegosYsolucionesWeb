import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, ArrowLeft, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return createMetadata({
    title: project.name,
    description: `${project.service} en ${project.location}. ${project.result}`,
    path: `/proyectos/${project.slug}`,
    image: project.image,
  });
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const waUrl = getWhatsAppUrl(
    `Hola, vi el proyecto "${project.name}" en su sitio y quiero una solución similar.`
  );

  return (
    <main>
      {/* ── HERO ── Full viewport con imagen */}
      <section className="relative min-h-screen">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06131f] via-[#06131f]/55 to-[#06131f]/15" />

        {/* Top bar — clearance para el header fijo */}
        <div className="absolute left-0 right-0 top-0 flex items-start justify-between px-6 pt-24 md:px-12 md:pt-28">
          <Link
            href="/proyectos"
            className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/15"
            style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.14)" }}
          >
            <ArrowLeft size={15} />
            Todos los proyectos
          </Link>
          <span
            className="rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur-sm"
            style={{
              background: "rgba(45,186,69,0.18)",
              color: "#2DBA45",
              border: "1px solid rgba(45,186,69,0.28)",
            }}
          >
            {project.service}
          </span>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-16 md:px-12">
          <div className="mb-3 flex items-center gap-1.5 text-sm font-semibold text-[#2DBA45]">
            <MapPin size={14} strokeWidth={2.5} />
            {project.location}
          </div>
          <h1 className="mb-7 max-w-3xl text-4xl font-black leading-[1.04] text-white sm:text-5xl lg:text-6xl">
            {project.name}
          </h1>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Área intervenida", value: project.area },
              { label: "Cultivo / Sector", value: project.crop },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-xl px-4 py-2.5 backdrop-blur-sm"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.14)",
                }}
              >
                <p className="text-[10px] uppercase tracking-wider text-white/45">{m.label}</p>
                <p className="text-sm font-bold text-white">{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="bg-[#06131f]">
        <Container>
          <div className="flex flex-wrap justify-center divide-x divide-white/8 py-0">
            {[
              { label: "Área", value: project.area },
              { label: "Cultivo / Sector", value: project.crop },
              { label: "Departamento", value: project.location },
              { label: "Tipo de proyecto", value: project.service },
            ].map((stat) => (
              <div key={stat.label} className="flex-1 px-8 py-7 text-center">
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">{stat.label}</p>
                <p className="mt-1 text-sm font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── CASO DE ESTUDIO ── */}
      <section className="bg-white py-24">
        <Container>
          <div className="mb-14 text-center">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#0077C8]">
              Caso de éxito
            </p>
            <h2 className="text-3xl font-black text-[#082033] sm:text-4xl">
              La historia del proyecto
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { num: "01", label: "Problema", text: project.problem, accent: "#ef4444" },
              { num: "02", label: "Solución", text: project.solution, accent: "#0077C8" },
              { num: "03", label: "Resultado", text: project.result, accent: "#2DBA45" },
            ].map((item) => (
              <div
                key={item.num}
                className="relative overflow-hidden rounded-3xl p-8"
                style={{
                  background: "#F3F9FF",
                  border: "1px solid #E0EEF9",
                }}
              >
                {/* Ghost number */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-3 -top-1 select-none text-[90px] font-black leading-none"
                  style={{ color: item.accent, opacity: 0.07 }}
                >
                  {item.num}
                </div>
                <div
                  className="mb-5 h-0.5 w-10 rounded-full"
                  style={{ background: item.accent }}
                />
                <p
                  className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: item.accent }}
                >
                  {item.label}
                </p>
                <p className="text-sm leading-7 text-[#566a7a]">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── GALERÍA ── */}
      {project.gallery.length > 0 && (
        <section
          className="py-24"
          style={{ background: "linear-gradient(180deg, #F3F9FF 0%, #FFFFFF 100%)" }}
        >
          <Container>
            <h2 className="mb-10 text-2xl font-black text-[#082033] sm:text-3xl">
              Galería del proyecto
            </h2>
            <div className="grid gap-4">
              {/* Imagen principal */}
              <div className="relative aspect-[16/7] w-full overflow-hidden rounded-3xl">
                <Image
                  src={project.gallery[0]}
                  alt={`${project.name} — vista general`}
                  fill
                  sizes="(max-width: 768px) 100vw, 90vw"
                  className="object-cover"
                />
              </div>
              {/* Imágenes secundarias */}
              {project.gallery.length > 1 && (
                <div className="grid gap-4 md:grid-cols-2">
                  {project.gallery.slice(1).map((img, i) => (
                    <div
                      key={img + i}
                      className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                    >
                      <Image
                        src={img}
                        alt={`${project.name} — foto ${i + 2}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 45vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* ── CTA ── */}
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
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#2DBA45]">
            ¿Tienes un reto similar?
          </p>
          <h2 className="mx-auto mb-5 max-w-2xl text-4xl font-black leading-tight text-white sm:text-5xl">
            Solicita una solución a la medida
          </h2>
          <p className="mx-auto mb-10 max-w-md text-base text-white/50">
            Nuestro equipo hace el diagnóstico inicial sin costo y te presenta una propuesta técnica.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-xl bg-[#2DBA45] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#2DBA45]/25 transition-all duration-200 hover:bg-[#26a33d] hover:shadow-[#2DBA45]/35"
          >
            <MessageCircle size={18} />
            Solicitar diagnóstico por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
