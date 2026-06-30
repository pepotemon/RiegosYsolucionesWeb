import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contacto",
  description: "Solicite cotizacion, visita tecnica o asesoria para su proyecto agricola en Colombia.",
  path: "/contacto",
});

export default function ContactPage() {
  return (
    <main className="py-16">
      <Container>
        <SectionHeader
          eyebrow="Contacto"
          title="Solicite una cotizacion o visita tecnica"
          description="Complete el formulario con la informacion de su predio para preparar una respuesta comercial mas precisa."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <ContactForm />
          <aside className="grid content-start gap-5">
            <div className="rounded-lg border border-[#c8ddf0] bg-white p-6">
              <h2 className="text-2xl font-black text-[#1a2b3c]">Canales directos</h2>
              <div className="mt-5 grid gap-4 text-[#3a5268]">
                <p className="flex items-center gap-3">
                  <Phone className="text-[#1b6cb6]" size={20} /> {siteConfig.phone}
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="text-[#1b6cb6]" size={20} /> {siteConfig.email}
                </p>
                <p className="flex items-center gap-3">
                  <MapPin className="text-[#1b6cb6]" size={20} /> {siteConfig.address}
                </p>
              </div>
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
            <div className="flex min-h-[280px] items-center justify-center rounded-lg border border-[#c8ddf0] bg-[#ebf4ff] p-6 text-center">
              <div>
                <MapPin className="mx-auto text-[#1b6cb6]" size={36} />
                <p className="mt-4 font-black text-[#1a2b3c]">Mapa placeholder</p>
                <p className="mt-2 text-sm leading-6 text-[#566a7a]">Listo para integrar Google Maps, Mapbox o ubicacion comercial.</p>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}
