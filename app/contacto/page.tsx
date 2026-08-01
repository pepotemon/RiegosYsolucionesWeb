import { createMetadata } from "@/lib/seo";
import { ContactPageContent } from "@/components/contacto/ContactPageContent";

export const metadata = createMetadata({
  title: "Contacto",
  description:
    "Solicite cotización, visita técnica o asesoría para su proyecto agrícola en Colombia.",
  path: "/contacto",
});

export default function ContactPage() {
  return <ContactPageContent />;
}
