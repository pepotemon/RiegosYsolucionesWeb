import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contacto",
  description: "Solicite cotización, visita técnica o asesoría para su proyecto agrícola en Colombia.",
  path: "/contacto",
});

export default function ContactPage() {
  return (
    <main className="py-16">
      <Container>
        <SectionHeader
          eyebrow="Contacto"
          title="Solicite una cotización o visita técnica"
          description="Complete el formulario con la información de su predio para preparar una respuesta comercial más precisa."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <ContactForm />
          <aside className="grid content-start gap-5">
            <div className="rounded-lg border border-[#c8ddf0] bg-white p-6">
              <h2 className="text-2xl font-black text-[#1a2b3c]">Canales directos</h2>

              {/* Teléfonos */}
              <div className="mt-5 grid gap-3">
                {siteConfig.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-[#3a5268] transition hover:text-[#1b6cb6]"
                  >
                    <Phone className="shrink-0 text-[#1b6cb6]" size={18} />
                    {phone}
                  </a>
                ))}
              </div>

              {/* Correos */}
              <div className="mt-4 grid gap-3">
                {siteConfig.emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="flex items-center gap-3 text-[#3a5268] transition hover:text-[#1b6cb6]"
                  >
                    <Mail className="shrink-0 text-[#1b6cb6]" size={18} />
                    {email}
                  </a>
                ))}
              </div>

              {/* Dirección */}
              <div className="mt-4 flex items-start gap-3 text-[#3a5268]">
                <MapPin className="mt-0.5 shrink-0 text-[#1b6cb6]" size={18} />
                <span>{siteConfig.address}</span>
              </div>

              {/* Horarios */}
              <div className="mt-4 flex items-center gap-3 text-[#3a5268]">
                <Clock className="shrink-0 text-[#1b6cb6]" size={18} />
                <span>{siteConfig.hours}</span>
              </div>

              {/* Redes sociales */}
              <div className="mt-6 flex gap-3">
                <a href={siteConfig.social.facebook} aria-label="Facebook" className="rounded-md bg-[#ebf4ff] p-3 text-[#1b6cb6] transition hover:bg-[#1b6cb6] hover:text-white">
                  <Facebook size={20} />
                </a>
                <a href={siteConfig.social.instagram} aria-label="Instagram" className="rounded-md bg-[#ebf4ff] p-3 text-[#1b6cb6] transition hover:bg-[#1b6cb6] hover:text-white">
                  <Instagram size={20} />
                </a>
                <a href={siteConfig.social.linkedin} aria-label="LinkedIn" className="rounded-md bg-[#ebf4ff] p-3 text-[#1b6cb6] transition hover:bg-[#1b6cb6] hover:text-white">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Mapa placeholder */}
            <div className="flex min-h-[280px] items-center justify-center rounded-lg border border-[#c8ddf0] bg-[#ebf4ff] p-6 text-center">
              <div>
                <MapPin className="mx-auto text-[#1b6cb6]" size={36} />
                <p className="mt-4 font-black text-[#1a2b3c]">Calle 12 # 11-80, Barrio Belén</p>
                <p className="mt-2 text-sm leading-6 text-[#566a7a]">
                  Pendiente integración Google Maps.<br />Comparte el enlace de ubicación para activarlo.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}
