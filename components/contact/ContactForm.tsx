"use client";

import { Send } from "lucide-react";

export function ContactForm() {
  return (
    <form className="grid gap-4 rounded-lg border border-[#c8ddf0] bg-white p-5 shadow-sm sm:grid-cols-2">
      {[
        ["Nombre", "text"],
        ["Empresa", "text"],
        ["Telefono", "tel"],
        ["WhatsApp", "tel"],
        ["Correo", "email"],
        ["Departamento", "text"],
        ["Municipio", "text"],
        ["Tipo de cultivo", "text"],
        ["Numero de hectareas", "number"],
      ].map(([label, type]) => (
        <label key={label} className="grid gap-2 text-sm font-semibold text-[#3a5268]">
          {label}
          <input
            type={type}
            className="focus-ring min-h-11 rounded-md border border-[#c8ddf0] bg-[#f5f9ff] px-3 text-[#1a2b3c]"
            placeholder={label}
          />
        </label>
      ))}
      <label className="grid gap-2 text-sm font-semibold text-[#3a5268]">
        Servicio requerido
        <select className="focus-ring min-h-11 rounded-md border border-[#c8ddf0] bg-[#f5f9ff] px-3 text-[#1a2b3c]">
          <option>Sistemas de riego</option>
          <option>Recursos hidricos</option>
          <option>Pozos profundos</option>
          <option>Sistemas de bombeo</option>
          <option>Automatizacion agricola</option>
          <option>Energia solar</option>
          <option>Mantenimiento</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-[#3a5268] sm:col-span-2">
        Mensaje
        <textarea
          className="focus-ring min-h-32 rounded-md border border-[#c8ddf0] bg-[#f5f9ff] p-3 text-[#1a2b3c]"
          placeholder="Cuentenos sobre su necesidad, ubicacion y tiempos del proyecto."
        />
      </label>
      <button
        type="button"
        className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#1b6cb6] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#134f88] sm:col-span-2"
      >
        <Send size={18} />
        Enviar solicitud
      </button>
    </form>
  );
}
