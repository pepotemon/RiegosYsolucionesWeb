import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { VideoCarousel } from "@/components/ui/VideoCarousel";
import { ServiceDetailsSection } from "@/components/services/ServiceDetailsSection";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return createMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/servicios/${service.slug}`,
    image: service.image,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const Icon = service.icon;
  const relatedProjects = projects.filter((p) =>
    service.relatedProjectSlugs.includes(p.slug)
  );

  const waUrl = getWhatsAppUrl(
    `Hola, quiero cotizar el servicio de ${service.title}.`
  );

  return (
    <main>

      {/* ── Hero ── */}
      <section className="relative min-h-[65vh]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06131f] via-[#06131f]/55 to-[#06131f]/20" />

        {/* Top bar */}
        <div className="absolute left-0 right-0 top-0 flex items-start justify-between px-6 pt-24 md:px-12 md:pt-28">
          <Link
            href="/servicios"
            className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/15"
            style={{
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            <ArrowLeft size={15} />
            Todos los servicios
          </Link>
          <span
            className="rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur-sm"
            style={{
              background: "rgba(45,186,69,0.18)",
              color: "#2DBA45",
              border: "1px solid rgba(45,186,69,0.28)",
            }}
          >
            Servicio
          </span>
        </div>

        {/* Bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-14 md:px-12">
          <div className="mx-auto max-w-4xl">
            <div
              className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              <Icon size={22} className="text-white" />
            </div>
            <h1 className="text-4xl font-black leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* ── Descripción completa ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="mb-8 text-xl font-medium leading-relaxed text-[#3a5268]">
              {service.description}
            </p>
            <div className="mb-10 flex items-center gap-4">
              <div className="h-0.5 w-12 rounded-full bg-[#2DBA45]" />
              <div className="h-px flex-1 bg-[#E0EEF9]" />
            </div>
          </div>
        </div>
      </section>

      <ServiceDetailsSection service={service} waUrl={waUrl} />

      {/* ── Proyectos relacionados ── */}
      {relatedProjects.length > 0 && (
        <section
          className="py-20"
          style={{ background: "linear-gradient(180deg, #F3F9FF 0%, #FFFFFF 100%)" }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex items-center justify-between">
              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#2DBA45]">
                  Casos reales
                </p>
                <h2 className="text-2xl font-black text-[#082033]">
                  Proyectos con este servicio
                </h2>
              </div>
              <Link
                href="/proyectos"
                className="flex items-center gap-1.5 text-sm font-bold text-[#0077C8] transition-all duration-200 hover:gap-3"
              >
                Ver todos <ArrowRight size={15} />
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/proyectos/${project.slug}`}
                  className="group flex flex-col overflow-hidden rounded-[24px] bg-white ring-1 ring-[#E0EEF9] transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#2DBA45]">
                      {project.location}
                    </p>
                    <h3 className="mb-4 flex-1 text-base font-black leading-tight text-[#082033] transition-colors group-hover:text-[#0077C8]">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-sm font-bold text-[#0077C8] transition-all duration-200 group-hover:gap-3">
                      Ver proyecto <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQs ── */}
      {service.faqs.length > 0 && (
        <section className="bg-[#06131f] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-10 text-[10px] font-bold uppercase tracking-[0.22em] text-[#2DBA45]">
              Preguntas frecuentes
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {service.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl p-6"
                  style={{
                    background: "#082033",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex gap-3">
                    <span className="mt-0.5 shrink-0 text-[10px] font-black uppercase tracking-widest text-[#2DBA45]">
                      P
                    </span>
                    <h3 className="font-bold leading-snug text-white">{faq.question}</h3>
                  </div>
                  <div className="mt-4 flex gap-3 border-t border-white/6 pt-4">
                    <span className="mt-0.5 shrink-0 text-[10px] font-black uppercase tracking-widest text-white/20">
                      R
                    </span>
                    <p className="text-sm leading-7 text-white/55">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Galería de videos ── */}
      {service.videos && service.videos.length > 0 && (
        <section className="bg-[#030c15] py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#2DBA45]">
                Galería
              </p>
              <h2 className="text-2xl font-black text-white">
                El servicio en campo
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/50">
                Vea aplicaciones reales antes de solicitar una solución para su proyecto.
              </p>
            </div>
            <VideoCarousel videos={service.videos} />
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="overflow-hidden bg-[#082033] py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#2DBA45]">
            ¿Listo para empezar?
          </p>
          <h2 className="mb-3 text-2xl font-black leading-tight text-white sm:text-3xl">
            Hablemos de su proyecto
          </h2>
          <p className="mb-7 text-sm leading-relaxed text-white/50">
            El diagnóstico inicial es sin costo. Nuestro equipo técnico le propone la mejor
            alternativa para su proyecto.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-xl bg-[#2DBA45] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#2DBA45]/25 transition-all duration-200 hover:bg-[#26a33d]"
          >
            <MessageCircle size={16} />
            Solicitar cotización por WhatsApp
          </a>
        </div>
      </section>

    </main>
  );
}
