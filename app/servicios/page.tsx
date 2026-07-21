import { ArrowRight, CheckCircle2, Droplets, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = createMetadata({
  title: "Servicios",
  description:
    "Sistemas de riego, recursos hídricos, pozos profundos, bombeo, automatización, energía solar y mantenimiento para el campo colombiano.",
  path: "/servicios",
});

const WA_URL = getWhatsAppUrl(
  "Hola, quiero solicitar una cotización para mi proyecto agrícola."
);

export default function ServicesPage() {
  return (
    <main>

      {/* ── 1. Hero ── */}
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

        <Container className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <span
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em]"
              style={{
                background: "rgba(45,186,69,0.08)",
                borderColor: "rgba(45,186,69,0.22)",
                color: "#2DBA45",
              }}
            >
              <Droplets size={13} />
              7 especialidades · Una sola empresa
            </span>
            <h1 className="mt-5 text-4xl font-black leading-[1.06] text-white sm:text-5xl lg:text-[3.5rem]">
              Agua en el lugar correcto.{" "}
              <br className="hidden sm:block" />
              <span className="text-[#2DBA45]">En el momento preciso.</span>
            </h1>
            <p className="mt-5 text-lg leading-8 text-white/50">
              Diseñamos, instalamos y sostenemos sistemas hídricos para el campo colombiano.
              Desde el primer diagnóstico hasta el soporte en operación.
            </p>
          </div>

          {/* Service pills */}
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/servicios/${s.slug}`}
                  style={{ color: "white" }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold transition hover:border-[#2DBA45]/60 hover:bg-[#2DBA45]/15"
                >
                  <Icon size={14} />
                  {s.title}
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── 2. Lista de servicios ── */}
      <section className="bg-white pb-16 pt-16">
        <Container>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#2DBA45]">
            Especialidades
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-black text-[#082033] lg:text-4xl">
            Todo lo que necesita su proyecto,{" "}
            <span className="text-[#0077C8]">en una sola empresa</span>
          </h2>
        </Container>

        <div className="mt-10 border-t border-[#E0EEF9]">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/servicios/${service.slug}`}
                className="group relative block border-b border-[#E0EEF9] bg-white py-7 transition-colors hover:bg-[#F3F9FF]"
              >
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-[3px] origin-center scale-y-0 bg-[#2DBA45] transition-transform duration-300 group-hover:scale-y-100"
                />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center gap-5 lg:gap-8">
                    <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-32">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 640px) 96px, 128px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[#06131f]/30 transition-colors group-hover:bg-[#06131f]/10" />
                      <div className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white/90 text-[#0077C8] shadow-sm transition-all group-hover:bg-[#2DBA45] group-hover:text-white">
                        <Icon size={16} />
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-black text-[#082033] sm:text-xl">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-[#566a7a]">
                        {service.shortDescription}
                      </p>
                      <div className="mt-3 hidden flex-wrap gap-2 sm:flex">
                        {service.audience.map((a) => (
                          <span
                            key={a}
                            className="inline-flex items-center gap-1 rounded-full bg-[#F3F9FF] px-2.5 py-1 text-xs font-semibold text-[#566a7a] transition-colors group-hover:bg-white"
                          >
                            <CheckCircle2 size={10} className="text-[#2DBA45]" />
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-1.5 text-sm font-bold text-[#566a7a] transition-colors group-hover:text-[#2DBA45]">
                      <span className="hidden whitespace-nowrap sm:inline">Ver servicio</span>
                      <ArrowRight
                        size={20}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── 3. Metodología ── */}
      <section className="bg-[#06131f] py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#2DBA45]">
              Metodología
            </p>
            <h2 className="mt-3 text-3xl font-black text-white lg:text-4xl">
              Cómo llegamos a{" "}
              <span className="text-[#2DBA45]">su proyecto</span>
            </h2>
            <p className="mt-4 leading-7 text-white/50">
              Sin visita técnica no hay propuesta. Sin propuesta no hay instalación.
              Cada paso tiene un propósito.
            </p>
          </div>
          <ProcessSteps />
        </Container>
      </section>

      {/* ── 4. Separador editorial ── */}
      <section className="bg-[#082033] py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <div className="h-px flex-1 bg-white/10" />
            <p className="max-w-2xl text-center text-lg font-black italic leading-8 text-white/70 lg:text-xl">
              "Cada proyecto es diferente. Por eso no vendemos paquetes — diseñamos soluciones."
            </p>
            <div className="h-px flex-1 bg-white/10" />
          </div>
        </div>
      </section>

      {/* ── 5. CTA ── */}
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
        <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
          <div
            className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            <Droplets size={28} className="text-white" />
          </div>
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#2DBA45]">
            Cotización sin costo
          </p>
          <h2 className="text-3xl font-black text-white lg:text-4xl">
            ¿Su proyecto necesita{" "}
            <span className="text-[#2DBA45]">agua?</span>
          </h2>
          <p className="mt-5 leading-7 text-white/50">
            Cuéntenos sobre su cultivo, su predio y sus necesidades. Le respondemos con una
            propuesta técnica real, sin compromisos.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-[#2DBA45] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#2DBA45]/25 transition-all duration-200 hover:bg-[#26a33d]"
            >
              <MessageCircle size={17} />
              Cotizar por WhatsApp
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-bold text-white/70 transition-all hover:text-white"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
            >
              Ver formas de contacto
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
