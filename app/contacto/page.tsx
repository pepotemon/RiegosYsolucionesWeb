import {
  Clock,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/site";
import { createMetadata } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = createMetadata({
  title: "Contacto",
  description:
    "Solicite cotización, visita técnica o asesoría para su proyecto agrícola en Colombia.",
  path: "/contacto",
});

const WA_URL = getWhatsAppUrl(
  "Hola, quiero información sobre sus servicios de riego y soluciones agrícolas."
);

export default function ContactPage() {
  return (
    <main className="grid min-h-screen lg:grid-cols-[44%_56%]">
      {/* ── PANEL IZQUIERDO — Info ── */}
      <div className="relative overflow-hidden bg-[#06131f] px-8 py-20 lg:px-14 lg:py-28">
        {/* Dot grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0,119,200,0.18) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 top-1/3 h-[400px] w-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(0,119,200,0.1) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10">
          {/* Badge + headline */}
          <div className="mb-12">
            <span
              className="mb-6 inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em]"
              style={{
                background: "rgba(45,186,69,0.08)",
                borderColor: "rgba(45,186,69,0.22)",
                color: "#2DBA45",
              }}
            >
              Contacto
            </span>
            <h1 className="mt-5 text-4xl font-black leading-[1.06] text-white sm:text-5xl">
              Cuéntenos{" "}
              <span className="text-[#2DBA45]">su proyecto</span>
            </h1>
            <p className="mt-4 text-base text-white/50">
              Complete el formulario o escríbanos directamente.
              Respondemos en horas hábiles.
            </p>
          </div>

          {/* ── CANALES ── */}
          <div className="mb-10 space-y-3">
            {/* WhatsApp — primario */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-2xl p-4 transition-colors hover:bg-white/5"
              style={{ border: "1px solid rgba(45,186,69,0.22)" }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#2DBA45] shadow-lg shadow-[#2DBA45]/30">
                <MessageCircle size={22} className="text-white" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/38">
                  WhatsApp
                </p>
                <p className="font-bold text-white">
                  {siteConfig.phones[0]}
                </p>
                <p className="text-xs text-[#2DBA45] transition-all group-hover:translate-x-0.5">
                  Enviar mensaje →
                </p>
              </div>
            </a>

            {/* Teléfonos */}
            <div
              className="flex items-start gap-5 rounded-2xl p-4"
              style={{ border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <Phone size={19} className="text-[#0077C8]" />
              </div>
              <div>
                <p className="mb-2 text-[10px] uppercase tracking-widest text-white/38">
                  Teléfonos
                </p>
                {siteConfig.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="block text-sm font-semibold text-white/75 transition hover:text-white"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            {/* Correo */}
            <div
              className="flex items-start gap-5 rounded-2xl p-4"
              style={{ border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <Mail size={19} className="text-[#0077C8]" />
              </div>
              <div>
                <p className="mb-2 text-[10px] uppercase tracking-widest text-white/38">
                  Correo
                </p>
                {siteConfig.emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="block break-all text-sm font-semibold text-white/75 transition hover:text-white"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── DETALLES ── */}
          <div className="mb-8 space-y-3.5">
            <div className="flex items-start gap-3">
              <MapPin size={15} className="mt-0.5 shrink-0 text-white/30" />
              <p className="text-sm text-white/50">{siteConfig.address}</p>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={15} className="shrink-0 text-white/30" />
              <p className="text-sm text-white/50">{siteConfig.hours}</p>
            </div>
            <div className="flex items-center gap-3">
              <Globe size={15} className="shrink-0 text-white/30" />
              <p className="text-sm text-white/50">
                Cobertura {siteConfig.coverage}
              </p>
            </div>
          </div>

          {/* ── REDES SOCIALES ── */}
          <div className="mt-8 flex gap-3">
            {[
              {
                href: siteConfig.social.facebook,
                label: "Facebook",
                icon: <Facebook size={18} />,
              },
              {
                href: siteConfig.social.instagram,
                label: "Instagram",
                icon: <Instagram size={18} />,
              },
              {
                href: siteConfig.social.linkedin,
                label: "LinkedIn",
                icon: <Linkedin size={18} />,
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl text-white/45 transition-all hover:bg-white/10 hover:text-white"
                style={{ border: "1px solid rgba(255,255,255,0.10)" }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── PANEL DERECHO — Formulario ── */}
      <div className="flex-1 bg-white px-8 py-20 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-xl">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#0077C8]">
            Solicitud de cotización
          </p>
          <h2 className="mb-2 text-3xl font-black text-[#082033]">
            Completa tu solicitud
          </h2>
          <p className="mb-10 text-sm leading-relaxed text-[#566a7a]">
            Con más datos preparamos una propuesta técnica más precisa para tu
            proyecto.
          </p>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
