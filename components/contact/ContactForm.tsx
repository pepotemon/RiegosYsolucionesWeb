"use client";

import { useState } from "react";
import { Send } from "lucide-react";
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

export function ContactForm() {
  const [data, setData] = useState<QuoteData>(INITIAL);

  const set = (field: keyof QuoteData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(getWhatsAppUrl(buildQuoteMessage(data)), "_blank", "noopener");
    setData(INITIAL);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-lg border border-[#c8ddf0] bg-white p-5 shadow-sm sm:grid-cols-2">
      <Field label="Nombre *">
        <input required type="text" value={data.nombre} onChange={set("nombre")}
          placeholder="Nombre completo" className={cls} />
      </Field>
      <Field label="Empresa / Finca">
        <input type="text" value={data.empresa} onChange={set("empresa")}
          placeholder="Nombre de la empresa o finca" className={cls} />
      </Field>
      <Field label="Teléfono *">
        <input required type="tel" value={data.telefono} onChange={set("telefono")}
          placeholder="300 123 4567" className={cls} />
      </Field>
      <Field label="WhatsApp (si es diferente)">
        <input type="tel" value={data.whatsapp} onChange={set("whatsapp")}
          placeholder="300 765 4321" className={cls} />
      </Field>
      <Field label="Correo electrónico">
        <input type="email" value={data.correo} onChange={set("correo")}
          placeholder="correo@ejemplo.com" className={cls} />
      </Field>
      <Field label="Departamento *">
        <input required type="text" value={data.departamento} onChange={set("departamento")}
          placeholder="Ej: Córdoba" className={cls} />
      </Field>
      <Field label="Municipio *">
        <input required type="text" value={data.municipio} onChange={set("municipio")}
          placeholder="Ej: Montería" className={cls} />
      </Field>
      <Field label="Tipo de cultivo">
        <input type="text" value={data.cultivo} onChange={set("cultivo")}
          placeholder="Ej: Aguacate, palma, arroz..." className={cls} />
      </Field>
      <Field label="Número de hectáreas">
        <input type="number" min="0" value={data.hectareas} onChange={set("hectareas")}
          placeholder="Ej: 50" className={cls} />
      </Field>
      <Field label="Servicio requerido *">
        <select required value={data.servicio} onChange={set("servicio")} className={cls}>
          {SERVICIOS.map((s) => <option key={s}>{s}</option>)}
        </select>
      </Field>
      <label className="grid gap-2 text-sm font-semibold text-[#3a5268] sm:col-span-2">
        Mensaje
        <textarea
          value={data.mensaje} onChange={set("mensaje")} rows={4}
          placeholder="Cuéntenos sobre su necesidad, ubicación y tiempos del proyecto."
          className={`${cls} min-h-32 resize-none`}
        />
      </label>
      <button
        type="submit"
        className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#1b6cb6] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#134f88] sm:col-span-2"
      >
        <Send size={18} />
        Enviar por WhatsApp
      </button>
      <p className="text-center text-xs text-[#566a7a] sm:col-span-2">
        Al enviar, se abrirá WhatsApp con su solicitud lista para enviar.
      </p>
    </form>
  );
}

const cls = "focus-ring min-h-11 w-full rounded-md border border-[#c8ddf0] bg-[#f5f9ff] px-3 py-2 text-sm text-[#1a2b3c]";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-[#3a5268]">
      {label}
      {children}
    </label>
  );
}
