import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { VideoCarousel } from "@/components/ui/VideoCarousel";
import { ServiceDarkBackdrop } from "@/components/services/ServiceDarkBackdrop";
import { ServiceDetailsSection } from "@/components/services/ServiceDetailsSection";
import type { Service } from "@/types/service";

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

  const relatedProjects = projects.filter((p) =>
    service.relatedProjectSlugs.includes(p.slug)
  );

  const waUrl = getWhatsAppUrl(
    `Hola, quiero cotizar el servicio de ${service.title}.`
  );

  return (
    <main>

      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#06131f]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06131f] via-[#06131f]/68 to-[#06131f]/25" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06131f] to-transparent" />

        {/* Bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-16 md:px-12 lg:pb-20">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-black leading-[1.05] text-white sm:text-5xl lg:text-7xl">
              {service.title}
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/72 sm:text-xl">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* ── Descripción completa ── */}
      <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f3f9ff_100%)] py-14 lg:py-18">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[28px] border border-[#d7e9f7] bg-white p-6 shadow-[0_24px_80px_rgba(8,32,51,0.10)] sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1.5 bg-[#2DBA45]" />
            <p className="text-lg font-medium leading-8 text-[#3a5268] sm:text-xl">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      <ServiceDetailsSection service={service} />

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

      {/* ── Galería de videos ── */}
      {service.videos && service.videos.length > 0 && (
        <section className="relative overflow-hidden bg-[var(--service-dark)] py-16 lg:py-24">
          <ServiceDarkBackdrop />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.7fr] lg:items-center lg:gap-14">

              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#2DBA45]">
                  Galería
                </p>
                <h2 className="text-2xl font-black text-white">
                  El servicio en campo
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/50">
                  Vea aplicaciones reales antes de solicitar una solución para su proyecto.
                </p>
                <ul className="mt-7 space-y-4">
                  {service.benefits.slice(0, 3).map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-sm leading-6 text-white/70">
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#2DBA45]/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2DBA45]" />
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <VideoCarousel videos={service.videos} />
            </div>
          </div>
        </section>
      )}

      <ServiceFaqs faqs={service.faqs} />

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-[var(--service-dark)] py-20">
        <ServiceDarkBackdrop />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
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

function ServiceFaqs({ faqs }: { faqs: Service["faqs"] }) {
  if (faqs.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-[var(--service-dark)] py-16 lg:py-20">
      <ServiceDarkBackdrop />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#2DBA45]">
            Preguntas frecuentes
          </p>
          <h2 className="text-2xl font-black text-white sm:text-3xl">
            Resuelva dudas antes de cotizar
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-white/10 bg-[#082033] px-5 py-5 shadow-[0_18px_48px_rgba(0,0,0,0.18)] transition duration-200 open:border-[#2DBA45]/45 open:bg-[#0a2940] sm:px-6 sm:py-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-black leading-7 text-white marker:hidden sm:text-lg sm:leading-8">
                <span>{faq.question}</span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2DBA45]/12 text-[#2DBA45] transition duration-200 group-open:rotate-180">
                  <ChevronDown size={18} />
                </span>
              </summary>
              <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-7 text-white/62">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
