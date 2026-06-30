import { siteConfig } from "@/lib/site";

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}
