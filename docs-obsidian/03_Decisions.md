# 03 — Decisiones Técnicas

> [[00_Index]] · [[02_Architecture]] · [[04_Errors]]

Registro de decisiones arquitecturales importantes, con contexto y justificación.

---

## DEC-001 — Next.js App Router (no Pages Router)

**Decisión:** Usar App Router de Next.js 16.

**Por qué:** Server Components por defecto (mejor performance), `generateStaticParams` y `generateMetadata` integrados, preparado para React Server Actions en formularios, arquitectura actual y con soporte a largo plazo.

**Impacto:** Toda la carpeta `app/` usa convenciones de App Router. Los layouts se heredan automáticamente. Los `loading.tsx` y `error.tsx` son opcionales pero disponibles.

---

## DEC-002 — Datos en archivos TypeScript locales

**Decisión:** Todo el contenido (servicios, proyectos, blog, productos) vive en `/data/*.ts`.

**Por qué:** 
- El cliente no tiene CMS ni quiere administrarlo inicialmente
- Permite iterar rápido en fase de construcción
- TypeScript garantiza integridad de datos (tipado estricto)
- Fácil de migrar a Firestore/CMS en el futuro (misma estructura de tipos)

**Impacto:** Para actualizar contenido hay que editar los archivos `.ts` y hacer redeploy. Aceptable para este alcance.

---

## DEC-003 — Tailwind CSS v4 (sin tailwind.config.ts)

**Decisión:** Tailwind v4 configurado solo via PostCSS, sin archivo `tailwind.config.ts`.

**Por qué:** Tailwind v4 cambió el paradigma — la config vive en CSS (`globals.css`) o se omite usando defaults. Reduce archivos de configuración.

**Impacto:** Las variables de color están en `app/globals.css` como CSS custom properties. No hay `theme.extend.colors`. Las clases Tailwind estándar funcionan igual.

---

## DEC-004 — Framer Motion para animaciones

**Decisión:** Framer Motion 12 para todas las animaciones de entrada.

**Por qué:** API declarativa, integración natural con React, `MotionReveal` reutilizable para cualquier sección. Mejor alternativa a CSS puro para animaciones complejas de scroll.

**Excepción:** El carrusel de testimonios usa CSS animation (`@keyframes`) por performance — JavaScript animando 18+ items simultáneos es innecesario.

---

## DEC-005 — Imágenes de Unsplash como placeholder

**Decisión:** Todas las imágenes del sitio son de Unsplash durante el desarrollo.

**Por qué:** El cliente no ha entregado fotografías reales. Unsplash provee imágenes de alta calidad y relevantes que permiten mostrar el diseño real sin assets finales.

**Pendiente:** Reemplazar con fotos reales en Fase 4. Cada imagen tiene URL de Unsplash en los archivos de `/data`.

---

## DEC-006 — `lib/site.ts` como fuente única de contacto

**Decisión:** Toda la información de contacto (teléfono, WhatsApp, email, URL, redes) vive SOLO en `lib/site.ts`.

**Por qué:** Evitar duplicación — si el cliente cambia el número, se edita en un solo lugar y se propaga a Header, Footer, WhatsApp button, formularios y metadatos.

**Regla:** Nunca hardcodear datos de contacto en componentes. Siempre importar desde `lib/site.ts`.

---

## DEC-007 — Rutas estáticas pre-renderizadas

**Decisión:** Usar `generateStaticParams()` en todas las rutas `[slug]`.

**Por qué:** Performance máximo — páginas pre-generadas en build, sin latencia de servidor. Los datos no cambian frecuentemente y el tráfico inicial será bajo.

**Impacto:** Al agregar un nuevo servicio/proyecto/post, hay que hacer redeploy para que aparezca en el sitio.

---

## DEC-008 — WhatsApp como canal principal de contacto

**Decisión:** WhatsApp es el CTA principal en todo el sitio, no el formulario.

**Por qué:** El cliente colombiano del sector agrícola prefiere WhatsApp para comunicación inicial. Tasa de conversión mayor que formulario tradicional. El formulario recolecta datos estructurados, WhatsApp genera el contacto inmediato.

**Implementación:** `lib/whatsapp.ts → getWhatsAppUrl(message)` genera URLs `wa.me` con mensaje prellenado contextual según la página.

---

## DEC-009 — CSS variables para colores (pendiente completar)

**Decisión:** Los colores del sitio deben ser CSS custom properties, no valores hex hardcodeados.

**Estado:** PARCIALMENTE implementado. Las variables están definidas en `globals.css` pero al menos 15 archivos todavía usan los hex directamente.

**Pendiente:** Migrar todos los hex a variables. Ver [[04_Errors#Deuda técnica]].

---

## DEC-010 — Next.js Image con remote patterns

**Decisión:** Usar `next/image` para todas las imágenes, con `remotePatterns` para Unsplash.

**Por qué:** Optimización automática (WebP, lazy loading, blur placeholder). La configuración en `next.config.ts` permite solo el dominio de Unsplash como fuente externa.

**Al reemplazar imágenes:** Si se usan imágenes propias, pueden ir en `public/` y la config de `remotePatterns` puede limpiarse.
