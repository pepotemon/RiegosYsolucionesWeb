import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl("Hola, necesito asesoria para un proyecto agricola.")}
      className="focus-ring fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition hover:scale-105"
      aria-label="Contactar por WhatsApp"
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle size={26} />
    </a>
  );
}
