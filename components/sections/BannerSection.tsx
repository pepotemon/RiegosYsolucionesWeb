import Image from "next/image"
import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { Container } from "@/components/ui/Container"
import { RainEffect } from "@/components/ui/rain-effect"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export function BannerSection() {
  return (
    <section className="relative overflow-hidden py-28 text-white">
      <Image
        src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=2000&q=60"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden="true"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#06131f]/96 via-[#09213d]/88 to-[#09213d]/65" />

      {/* Lluvia */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <RainEffect count={50} />
      </div>

      <Container className="relative">
        <BlurFade inView inViewMargin="-60px">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#3baa6e]">
              <span className="h-px w-6 bg-[#3baa6e]" />
              Ingeniería agrícola
            </p>
            <h2 className="text-4xl font-black leading-tight lg:text-5xl">
              Riega mejor,{" "}
              <span className="text-[#60b5e8]">produce más</span>
              <br />y reduce costos
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#a8c8e0]">
              Con el sistema correcto, el agua deja de ser un problema y se convierte en su ventaja
              competitiva. Visita técnica sin costo. Propuesta en 5 días.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={getWhatsAppUrl("Hola, quiero solicitar información sobre soluciones de riego para mi predio.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#3baa6e] px-8 py-4 text-sm font-black text-white shadow-lg transition hover:bg-[#2d8757] hover:shadow-xl"
              >
                <MessageCircle size={18} /> Hablar con un técnico
              </a>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/18 hover:border-white/50"
              >
                Ver todos los servicios
              </Link>
            </div>
          </div>
        </BlurFade>
      </Container>
    </section>
  )
}
