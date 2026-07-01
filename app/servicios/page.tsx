import { ArrowRight, CheckCircle2, Droplets, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
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

export default function ServicesPage() {
  return (
    <main>

      {/* ── 1. Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#06131f] pb-24 pt-20 lg:pb-32 lg:pt-28">
        {/* Dot grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(27,108,182,0.18) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        {/* Blue glow orb */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1b6cb6]/10 blur-[120px]"
        />

        <Container className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-bold text-[#60b5e8] backdrop-blur-sm">
              <Droplets size={15} />
              7 especialidades · Una sola empresa
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-[3.5rem]">
              Agua en el lugar correcto.<br className="hidden sm:block" />
              En el momento preciso.
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#a8c8e0]">
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
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2.5 text-sm font-semibold transition hover:border-[#1b6cb6] hover:bg-[#1b6cb6]"
                >
                  <Icon size={14} />
                  {s.title}
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── 2. Índice de servicios ───────────────────────────────────────── */}
      <section className="bg-white pb-16 pt-16">
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#1b6cb6]">
            Especialidades
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-black text-[#1a2b3c] lg:text-4xl">
            Todo lo que necesita su proyecto, en una sola empresa
          </h2>
        </Container>

        <div className="mt-10 border-t border-[#c8ddf0]">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/servicios/${service.slug}`}
                className="group relative block border-b border-[#c8ddf0] bg-white py-7 transition-colors hover:bg-[#f5f9ff]"
              >
                {/* Left accent bar */}
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-[3px] origin-center scale-y-0 bg-[#1b6cb6] transition-transform duration-300 group-hover:scale-y-100"
                />

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center gap-5 lg:gap-8">

                    {/* Thumbnail con icono overlay */}
                    <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-32">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 640px) 96px, 128px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[#06131f]/30 transition-colors group-hover:bg-[#06131f]/10" />
                      <div className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white/90 text-[#1b6cb6] shadow-sm transition-all group-hover:bg-[#1b6cb6] group-hover:text-white">
                        <Icon size={16} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-black text-[#1a2b3c] sm:text-xl">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-[#566a7a]">
                        {service.shortDescription}
                      </p>
                      <div className="mt-3 hidden flex-wrap gap-2 sm:flex">
                        {service.audience.map((a) => (
                          <span
                            key={a}
                            className="inline-flex items-center gap-1 rounded-full bg-[#f0f7ff] px-2.5 py-1 text-xs font-semibold text-[#566a7a] transition-colors group-hover:bg-white"
                          >
                            <CheckCircle2 size={10} className="text-[#3baa6e]" />
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA arrow */}
                    <div className="flex shrink-0 items-center gap-1.5 text-sm font-bold text-[#566a7a] transition-colors group-hover:text-[#1b6cb6]">
                      <span className="hidden sm:inline whitespace-nowrap">Ver servicio</span>
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

      {/* ── 3. Metodología ───────────────────────────────────────────────── */}
      <section className="bg-[#06131f] py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#3baa6e]">
              Metodología
            </p>
            <h2 className="mt-3 text-3xl font-black text-white lg:text-4xl">
              Cómo llegamos a su proyecto
            </h2>
            <p className="mt-4 leading-7 text-[#7a9ab8]">
              Sin visita técnica no hay propuesta. Sin propuesta no hay instalación.
              Cada paso tiene un propósito.
            </p>
          </div>

          <ProcessSteps />
        </Container>
      </section>

      {/* ── 4. Separador ─────────────────────────────────────────────────── */}
      <section className="bg-[#2d8757] py-10">
        <Container>
          <p className="text-center text-lg font-black italic leading-8 text-white lg:text-xl">
            "Cada proyecto es diferente. Por eso no vendemos paquetes — diseñamos soluciones."
          </p>
        </Container>
      </section>

      {/* ── 5. CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-[#f5f9ff] py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-2xl rounded-3xl border border-[#c8ddf0] bg-white p-10 text-center shadow-sm lg:p-14">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ebf4ff]">
              <Droplets size={28} className="text-[#1b6cb6]" />
            </div>
            <h2 className="mt-6 text-3xl font-black text-[#1a2b3c] lg:text-4xl">
              ¿Su proyecto necesita agua?
            </h2>
            <p className="mt-4 leading-7 text-[#566a7a]">
              Cuéntenos sobre su cultivo, su predio y sus necesidades.
              Le respondemos con una propuesta técnica real, sin compromisos.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                href={getWhatsAppUrl("Hola, quiero solicitar una cotización para mi proyecto agrícola.")}
                style={{ color: "white" }}
              >
                <PhoneCall size={18} />
                Cotizar por WhatsApp
              </Button>
              <Button href="/contacto" variant="secondary">
                Ver formas de contacto
              </Button>
            </div>
          </div>
        </Container>
      </section>

    </main>
  );
}
