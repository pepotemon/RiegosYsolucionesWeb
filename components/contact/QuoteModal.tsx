"use client";

import { useEffect, useRef, useState } from "react";
import { X, Send } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
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

interface Props {
  open: boolean;
  onClose: () => void;
}

export function QuoteModal({ open, onClose }: Props) {
  const [data, setData] = useState<QuoteData>(INITIAL);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const set = (field: keyof QuoteData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(getWhatsAppUrl(buildQuoteMessage(data)), "_blank", "noopener");
    onClose();
    setData(INITIAL);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={overlayRef}
          key="quote-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
          className="fixed inset-0 z-[200] flex items-end justify-center bg-black/60 backdrop-blur-sm sm:items-center sm:p-4"
        >
          <motion.div
            key="quote-panel"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl"
          >
            {/* Cabecera del modal */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#c8ddf0] bg-white px-6 py-4">
              <div>
                <h2 className="text-lg font-black text-[#1a2b3c]">Solicitar cotización</h2>
                <p className="text-sm text-[#566a7a]">Le responderemos por WhatsApp</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar"
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-full text-[#566a7a] transition hover:bg-[#ebf4ff] hover:text-[#1b6cb6]"
              >
                <X size={20} />
              </button>
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="grid gap-4 p-6 sm:grid-cols-2">
              <Field label="Nombre *">
                <input required type="text" value={data.nombre} onChange={set("nombre")}
                  placeholder="Su nombre completo" className={cls} />
              </Field>
              <Field label="Empresa / Finca">
                <input type="text" value={data.empresa} onChange={set("empresa")}
                  placeholder="Nombre de la empresa o finca" className={cls} />
              </Field>
              <Field label="Teléfono *">
                <input required type="tel" value={data.telefono} onChange={set("telefono")}
                  placeholder="300 123 4567" className={cls} />
              </Field>
              <Field label="Servicio requerido *">
                <select required value={data.servicio} onChange={set("servicio")} className={cls}>
                  {SERVICIOS.map((s) => <option key={s}>{s}</option>)}
                </select>
              </Field>
              <Field label="Departamento *">
                <input required type="text" value={data.departamento} onChange={set("departamento")}
                  placeholder="Ej: Córdoba" className={cls} />
              </Field>
              <Field label="Municipio *">
                <input required type="text" value={data.municipio} onChange={set("municipio")}
                  placeholder="Ej: Montería" className={cls} />
              </Field>
              <Field label="WhatsApp (si es diferente al teléfono)">
                <input type="tel" value={data.whatsapp} onChange={set("whatsapp")}
                  placeholder="300 765 4321" className={cls} />
              </Field>
              <Field label="Correo electrónico">
                <input type="email" value={data.correo} onChange={set("correo")}
                  placeholder="correo@ejemplo.com" className={cls} />
              </Field>
              <Field label="Tipo de cultivo">
                <input type="text" value={data.cultivo} onChange={set("cultivo")}
                  placeholder="Ej: Aguacate, palma, arroz..." className={cls} />
              </Field>
              <Field label="Número de hectáreas">
                <input type="number" min="0" value={data.hectareas} onChange={set("hectareas")}
                  placeholder="Ej: 50" className={cls} />
              </Field>
              <label className="grid gap-2 text-sm font-semibold text-[#3a5268] sm:col-span-2">
                Mensaje
                <textarea
                  value={data.mensaje} onChange={set("mensaje")} rows={3}
                  placeholder="Cuéntenos sobre su necesidad, ubicación y tiempos del proyecto."
                  className={`${cls} min-h-24 resize-none`}
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
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
