# 04 — Errores y Deuda Técnica

> [[00_Index]] · [[03_Decisions]] · [[06_Changelog]]

---

## 🚨 Bugs críticos activos

### BUG-001 — Mobile nav roto
**Archivo:** `components/layout/Header.tsx`  
**Síntoma:** El icono hamburger (menú móvil) redirige a `/contacto` en vez de abrir el drawer/menú.  
**Impacto:** 🔴 CRÍTICO — Los usuarios móviles no pueden navegar por el sitio. Afecta directamente la conversión.  
**Causa probable:** El botón tiene un `href="/contacto"` o un `<Link>` en vez de un handler de estado `useState`.  
**Solución esperada:** Implementar estado `isMenuOpen` con `useState`, renderizar menú overlay condicional con las 7 rutas de navegación.  
**Estado:** ⏳ Pendiente

---

### BUG-002 — ContactForm no envía datos
**Archivo:** `components/contact/ContactForm.tsx`  
**Síntoma:** El formulario tiene `type="button"` sin handler. Al hacer clic en "Enviar solicitud" no pasa nada.  
**Impacto:** 🔴 CRÍTICO — El principal canal de cotización del sitio no funciona.  
**Causa:** Nunca se implementó el backend del formulario.  
**Soluciones posibles:**
1. **Server Action de Next.js** (recomendado) — `"use server"`, envío por email con Resend o Nodemailer
2. **EmailJS** — sin backend, desde el cliente, rápido de implementar
3. **Redirigir a WhatsApp** — solución mínima: formatear los campos y abrir `wa.me`  
**Estado:** ⏳ Pendiente

---

### BUG-003 — Componente Button no soporta `type="button"`
**Archivo:** `components/ui/Button.tsx`  
**Síntoma:** `Button` siempre renderiza un `<a>` (Link de Next.js). No puede usarse como `<button>` en formularios.  
**Impacto:** 🟡 MODERADO — `ContactForm.tsx` duplica estilos del botón en vez de reusar el componente.  
**Solución:** Implementar prop `as="button" | "a"` o usar discriminated union con `href` opcional. Cuando no hay `href`, renderizar `<button>`.  
**Estado:** ⏳ Pendiente

---

## ⚠️ Deuda técnica

### TD-001 — Colores hex hardcodeados en componentes
**Afecta:** 15+ archivos de componentes y páginas  
**Problema:** Los valores hex como `#12663f`, `#10231c`, `#0f7da3` están escritos directamente en las clases de Tailwind en vez de usar las variables CSS definidas en `globals.css`.  
**Riesgo:** Si el cliente cambia los colores corporativos, hay que buscar y reemplazar en docenas de archivos.  
**Solución:** Migrar a `text-[var(--primary)]`, `bg-[var(--water)]`, etc., o configurar los colores en Tailwind.  

---

### TD-002 — Información de contacto duplicada
**Afecta:** `components/layout/Footer.tsx` y `app/contacto/page.tsx`  
**Problema:** El teléfono, email y dirección están escritos dos veces. Si cambia el número, hay que editarlo en dos lugares (a pesar de que `lib/site.ts` existe para esto).  
**Solución:** Crear componente `ContactInfo` que lea de `siteConfig` y reusar en Footer y /contacto.

---

### TD-003 — Sin JSON-LD structured data
**Afecta:** Todo el sitio (SEO)  
**Problema:** Google no puede leer datos estructurados del negocio. Sin `LocalBusiness` schema, el sitio no aparece en resultados enriquecidos ni en Google Maps Knowledge Panel.  
**Solución:** Agregar en `app/layout.tsx`:
```typescript
<script type="application/ld+json">
  {JSON.stringify(localBusinessSchema)}
</script>
```
Y en cada `/servicios/[slug]`: schema `Service`.

---

### TD-004 — Sin páginas de error y loading
**Afecta:** `app/`  
**Problema:** No existen `error.tsx`, `not-found.tsx`, ni `loading.tsx`.  
**Impacto:** Errores muestran pantalla en blanco. 404s muestran el 404 genérico de Next.js.  
**Solución:** Crear archivos con diseño coherente al sitio.

---

### TD-005 — Estadísticas del Hero son placeholder
**Afecta:** `app/page.tsx` — sección Stats  
**Problema:** Los números "+XX proyectos", "Colombia", etc. son inventados.  
**Solución:** Reemplazar con datos reales cuando el cliente los provea. Ver [[01_Project#Datos del cliente pendientes]].

---

### TD-006 — Mapa de contacto es placeholder
**Afecta:** `app/contacto/page.tsx`  
**Problema:** La sección del mapa de Google Maps no está implementada.  
**Solución:** Embed de Google Maps con la dirección real cuando el cliente la proporcione.

---

## ✅ Resuelto (historial)

*(Registrar aquí bugs solucionados para referencia futura)*

| ID | Descripción | Fecha | Cómo se resolvió |
|----|-------------|-------|-----------------|
| — | — | — | — |
