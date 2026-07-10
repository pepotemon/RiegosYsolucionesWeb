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

## DEC-011 — shadcn/ui + Magic UI como sistema de componentes visual

**Decisión:** Integrar shadcn/ui como base de infraestructura y Magic UI como librería de componentes animados.

**Por qué:**
- shadcn/ui es el estándar 2026 para Next.js — accesible, tipado, copy-paste (no black box)
- Magic UI provee 150+ componentes animados gratis, construidos sobre Framer Motion y Tailwind
- Eliminan la necesidad de construir NumberTicker, BentoGrid, Marquee, etc. desde cero
- Compatible 100% con el stack existente (TailwindCSS v4, Framer Motion 12)

**Trampas encontradas:**
- shadcn init sobrescribió `Button.tsx` y `lib/utils.ts` — se restauraron manualmente
- shadcn init sobreescribe colores de `globals.css` con valores `oklch` genéricos — se restauraron los hex de marca
- Conflicto de casing `button.tsx` vs `Button.tsx` en Windows — resuelto unificando en `Button.tsx`

**Componentes Magic UI instalados:** `number-ticker`, `bento-grid`, `blur-fade`, `animated-gradient-text`, `animated-shiny-text`, `word-rotate`, `typing-animation`, `shimmer-button`, `meteors`, `dot-pattern`, `marquee`, `animated-list`

---

## DEC-012 — Lenis para smooth scroll global

**Decisión:** Reemplazar el `scroll-behavior: smooth` nativo de CSS con Lenis.

**Por qué:**
- El scroll nativo es "jumpy" — Lenis usa física de easing para un desplazamiento fluido y premium
- Mejora el Core Web Vital INP directamente
- Se sincroniza con GSAP ScrollTrigger (si se usa en el futuro)
- Se implementa como un `SmoothScroll` client component en `components/layout/SmoothScroll.tsx`

**Impacto:** Eliminado `scroll-behavior: smooth` de `globals.css`. Toda la física de scroll la maneja Lenis.

---

## DEC-013 — Button refactorizado con CVA (class-variance-authority)

**Decisión:** Reescribir `Button.tsx` usando CVA + discriminated union por `href`.

**Por qué:**
- El Button original solo renderizaba `<a>` — no podía usarse en formularios
- shadcn/ui y Magic UI esperan un Button estándar con variantes
- CVA permite gestionar variantes (default, secondary, outline, ghost, link, destructive) y tamaños de forma tipada

**Comportamiento actual:**
- Con `href` → renderiza `<Link href>` de Next.js
- Sin `href` → renderiza `<button>` HTML nativo
- Variantes: `default | secondary | outline | ghost | link | destructive`
- Tamaños: `default | xs | sm | lg | icon`

---

## DEC-010 — Next.js Image con remote patterns

**Decisión:** Usar `next/image` para todas las imágenes, con `remotePatterns` para Unsplash.

**Por qué:** Optimización automática (WebP, lazy loading, blur placeholder). La configuración en `next.config.ts` permite solo el dominio de Unsplash como fuente externa.

**Al reemplazar imágenes:** Si se usan imágenes propias, pueden ir en `public/` y la config de `remotePatterns` puede limpiarse.

---

## DEC-014 — Órbitas CSS con doble-rotación: por qué fallan

**Decisión:** NO usar CSS animations en el mismo elemento que tenga un `transform` de posicionamiento.

**Por qué falla la técnica CSS:**
```tsx
// ❌ ROTO — la animación CSS sobreescribe el transform estático en el MISMO elemento
<div
  style={{ transform: `rotate(${deg}deg) translateY(-${radius}px)` }}
  className="animate-orbit-backward"   // → animation: orbit-backward 34s linear infinite
/>
```
CSS animations que tocan `transform` reemplazan **completamente** cualquier `transform` inline del mismo elemento. El valor del `style` es ignorado y las tarjetas orbitan desde el centro en lugar de sus posiciones calculadas.

**Alternativa correcta — Framer Motion (`useMotionValue` + `useTransform`):**
```tsx
// En el padre: ángulo compartido como MotionValue
const angle = useMotionValue(0)
useAnimationFrame((_, delta) => {
  angle.set((angle.get() + (delta * 360) / REVOLUTION_MS) % 360)
})

// En cada OrbitCard: posición x,y calculada matemáticamente
const x = useTransform(angle, (deg) => Math.cos(rad) * radius - cardW / 2)
const y = useTransform(angle, (deg) => Math.sin(rad) * radius - cardH / 2)
return <motion.div style={{ left: '50%', top: '50%', x, y }} />
```
Las tarjetas se posicionan con coordenadas `x,y` absolutas (sin rotación aplicada al elemento) → sin conflicto, siempre erguidas.

---

## DEC-015 — Técnica "desbordante": elementos más anchos que el viewport sin scroll horizontal

**Decisión:** Para efectos donde los elementos deben sobresalir del borde de la pantalla (órbitas, sliders, carruseles), se permite que el contenedor o las tarjetas excedan el viewport. No se añade `overflow-hidden` en la sección.

**Por qué es seguro:** `html { overflow-x: clip }` instalado en `globals.css` recorta a nivel del viewport sin crear un scroll container. Los elementos que sobresalen lateralmente son invisibles sin que el usuario pueda scrollear hacia ellos.

**Precaución crítica:** `overflow-x: clip` en `html` es el requisito. Si se quita, el usuario sí puede scrollear horizontalmente. Verificar que esté activo antes de aplicar esta técnica.

**Efecto visual logrado en SectoresSection:** Con `radius = size * 0.50`, las tarjetas en posición 90°/270° (izquierda/derecha de la órbita) asoman ~50px fuera del viewport en móvil. Al orbitar, entran y salen de la pantalla de manera orgánica — el área central visible es mucho más amplia.

---

## DEC-016 — Planeta verde CSS puro como centro de la órbita

**Decisión:** Reemplazar el logo circular central de `SectoresSection` por un planeta verde construido completamente con CSS/gradientes. El logo de la empresa se superpone encima como imagen flotante.

**Por qué:**
- El planeta verde refuerza la identidad de naturaleza y sostenibilidad del negocio agrícola
- CSS puro = cero requests de imagen, carga instantánea, sin dependencia de Unsplash
- El efecto 3D (specular highlight + limb darkening) se logra solo con `radial-gradient` y `box-shadow inset`
- El logo encima del planeta (no dentro) evita el recorte de `overflow-hidden` — permite hacerlo más grande que el propio planeta

**Implementación:**
- Base esfera: `radial-gradient(circle at 35% 30%, #86efac → #22c55e → #16a34a → #14532d → #052e16)`
- Continentes: 7 `radial-gradient` elípticos superpuestos en una capa con `rotate: 360, 90s`
- Specular: `radial-gradient` blanco en `34% 27%` — simula sol top-left
- Limb darkening: `box-shadow inset` verde muy oscuro en todos los bordes
- Logo: fuera del `overflow-hidden`, `width: logoSize * 1.45`, `filter: brightness(0) invert(1)` + drop-shadow suave
