import Link from "next/link"
import { MessageCircle, Phone } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { Container } from "@/components/ui/Container"
import { FallingLeaves } from "@/components/ui/falling-leaves"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#06131f] via-[#0d2d54] to-[#1b6cb6]" />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Glow accent */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1b6cb6]/20 blur-[120px]" />

      {/* Hojas cayendo */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <FallingLeaves number={18} />
      </div>

      <Container className="relative">
        <BlurFade inView inViewMargin="-60px">
          <div className="text-center text-white">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#60b5e8]">
              Visita técnica gratuita
            </p>
            <h2 className="text-4xl font-black leading-tight lg:text-5xl">
              ¿Necesita una solución<br />para su cultivo?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#a8c8e0]">
              Solicite una visita técnica y reciba asesoría especializada para su proyecto.
              Presupuesto sin compromiso en 5 días hábiles.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={getWhatsAppUrl("Hola, quiero solicitar una visita tecnica para mi cultivo.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#3baa6e] px-8 py-4 text-sm font-black text-white shadow-lg transition hover:bg-[#2d8757] hover:shadow-xl"
              >
                <MessageCircle size={18} /> Cotizar por WhatsApp
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:border-white/50 hover:bg-white/18"
              >
                <Phone size={18} /> Ver contacto
              </Link>
            </div>
          </div>
        </BlurFade>
      </Container>
    </section>
  )
}
