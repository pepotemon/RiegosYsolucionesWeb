import { siteConfig } from "@/lib/site";

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export interface QuoteData {
  nombre: string;
  empresa: string;
  telefono: string;
  whatsapp: string;
  correo: string;
  departamento: string;
  municipio: string;
  cultivo: string;
  hectareas: string;
  servicio: string;
  mensaje: string;
}

export function buildQuoteMessage(d: QuoteData): string {
  const lines: string[] = [
    "*Nueva solicitud de cotización — Riegos y Soluciones Agrícolas del Norte*",
    "",
    `Nombre: ${d.nombre}`,
  ];
  if (d.empresa)      lines.push(`Empresa / Finca: ${d.empresa}`);
                      lines.push(`Teléfono: ${d.telefono}`);
  if (d.whatsapp)     lines.push(`WhatsApp: ${d.whatsapp}`);
  if (d.correo)       lines.push(`Correo: ${d.correo}`);
                      lines.push(`Ubicación: ${d.departamento} / ${d.municipio}`);
  if (d.cultivo)      lines.push(`Tipo de cultivo: ${d.cultivo}`);
  if (d.hectareas)    lines.push(`Hectáreas: ${d.hectareas}`);
                      lines.push(`Servicio requerido: ${d.servicio}`);
  if (d.mensaje) {
    lines.push("");
    lines.push(`Mensaje:\n${d.mensaje}`);
  }
  return lines.join("\n");
}
