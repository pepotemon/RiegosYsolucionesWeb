"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { buildQuoteMessage, getWhatsAppUrl, QuoteData } from "@/lib/whatsapp";

const SERVICIOS = [
  "Sistemas de riego",
  "Recursos hídricos",
  "Pozos profundos",
  "Sistemas de bombeo",
  "Automatización agrícola",
  "Energía solar",
  "Mantenimiento",
];

const INITIAL: QuoteData = {
  nombre: "", empresa: "", telefono: "", whatsapp: "",
  correo: "", departamento: "", municipio: "",
  cultivo: "", hectareas: "", servicio: SERVICIOS[0], mensaje: "",
};

const inputCls = [
  "min-h-11 w-full rounded-xl border border-[#E0EEF9] bg-[#F8FBFF]",
  "px-4 py-2.5 text-sm text-[#082033] outline-none transition-all duration-150",
  "placeholder:text-[#566a7a]/45",
  "focus:border-[#0077C8] focus:bg-white focus:ring-2 focus:ring-[#0077C8]/10",
].join(" ");

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="col-span-full flex items-center gap-3 pt-2 first:pt-0">
      <p className="shrink-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#566a7a]">
        {children}
      </p>
      <div className="h-px flex-1 bg-[#E0EEF9]" />
    </div>
  );
}

function Field({
  label,
  full,
  children,
}: {
  label: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label
      className={`grid gap-1.5 ${full ? "col-span-full" : ""}`}
    >
      <span className="text-xs font-bold uppercase tracking-wider text-[#566a7a]">
        {label}
      </span>
      {children}
    </label>
  );
}

export function ContactForm() {
  const [data, setData] = useState<QuoteData>(INITIAL);

  const set =
    (field: keyof QuoteData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(getWhatsAppUrl(buildQuoteMessage(data)), "_blank", "noopener");
    setData(INITIAL);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-4 gap-y-4">
      {/* ── SOBRE TI ── */}
      <SectionLabel>Sobre ti</SectionLabel>
      <Field label="Nombre *">
        <input
          required
          type="text"
          value={data.nombre}
          onChange={set("nombre")}
          placeholder="Nombre completo"
          className={inputCls}
        />
      </Field>
      <Field label="Empresa / Finca">
        <input
          type="text"
          value={data.empresa}
          onChange={set("empresa")}
          placeholder="Empresa o nombre de la finca"
          className={inputCls}
        />
      </Field>

      {/* ── TU CONTACTO ── */}
      <SectionLabel>Tu contacto</SectionLabel>
      <Field label="Teléfono *">
        <input
          required
          type="tel"
          value={data.telefono}
          onChange={set("telefono")}
          placeholder="300 123 4567"
          className={inputCls}
        />
      </Field>
      <Field label="WhatsApp (si es diferente)">
        <input
          type="tel"
          value={data.whatsapp}
          onChange={set("whatsapp")}
          placeholder="300 765 4321"
          className={inputCls}
        />
      </Field>
      <Field label="Correo electrónico" full>
        <input
          type="email"
          value={data.correo}
          onChange={set("correo")}
          placeholder="correo@ejemplo.com"
          className={inputCls}
        />
      </Field>

      {/* ── UBICACIÓN ── */}
      <SectionLabel>Ubicación del proyecto</SectionLabel>
      <Field label="Departamento *">
        <input
          required
          type="text"
          value={data.departamento}
          onChange={set("departamento")}
          placeholder="Ej: Córdoba"
          className={inputCls}
        />
      </Field>
      <Field label="Municipio *">
        <input
          required
          type="text"
          value={data.municipio}
          onChange={set("municipio")}
          placeholder="Ej: Montería"
          className={inputCls}
        />
      </Field>

      {/* ── TU PROYECTO ── */}
      <SectionLabel>Tu proyecto</SectionLabel>
      <Field label="Tipo de cultivo">
        <input
          type="text"
          value={data.cultivo}
          onChange={set("cultivo")}
          placeholder="Ej: Aguacate, palma, arroz..."
          className={inputCls}
        />
      </Field>
      <Field label="Número de hectáreas">
        <input
          type="number"
          min="0"
          value={data.hectareas}
          onChange={set("hectareas")}
          placeholder="Ej: 50"
          className={inputCls}
        />
      </Field>
      <Field label="Servicio requerido *" full>
        <select
          required
          value={data.servicio}
          onChange={set("servicio")}
          className={inputCls}
        >
          {SERVICIOS.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </Field>

      {/* ── MENSAJE ── */}
      <SectionLabel>Cuéntanos más</SectionLabel>
      <Field label="Mensaje" full>
        <textarea
          value={data.mensaje}
          onChange={set("mensaje")}
          rows={4}
          placeholder="Describe tu necesidad, el área aproximada y los tiempos del proyecto."
          className={`${inputCls} min-h-[110px] resize-none`}
        />
      </Field>

      {/* ── SUBMIT ── */}
      <button
        type="submit"
        className="col-span-full mt-2 flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-[#2DBA45] px-6 text-sm font-bold text-white shadow-lg shadow-[#2DBA45]/25 transition-all duration-200 hover:bg-[#26a33d] hover:shadow-[#2DBA45]/35"
      >
        <MessageCircle size={17} />
        Enviar solicitud por WhatsApp
      </button>
      <p className="col-span-full text-center text-[11px] text-[#566a7a]/65">
        Al enviar, se abrirá WhatsApp con tu solicitud lista para enviar.
      </p>
    </form>
  );
}
