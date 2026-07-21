# 🌿 Segundo Cerebro — Riegos y Soluciones Agrícolas del Norte

> **Frase guía:** No estamos construyendo una página web. Estamos construyendo el vendedor digital de la empresa.

---

## 🗂️ Navegación del Segundo Cerebro

| Archivo | Descripción |
|--------|-------------|
| [[01_Project]] | Contexto comercial, empresa, servicios, objetivos |
| [[02_Architecture]] | Stack, estructura de carpetas, componentes, rutas |
| [[03_Decisions]] | Decisiones técnicas importantes y su justificación |
| [[04_Errors]] | Bugs activos, deuda técnica, problemas conocidos |
| [[05_Ideas]] | Mejoras futuras, ideas pendientes, roadmap ampliado |
| [[06_Changelog]] | Historial de cambios y funcionalidades entregadas |
| [[07_Prompts]] | Prompts probados para Claude Code en este proyecto |
| [[08_Workflows]] | Flujos de trabajo diarios con Claude Code y Git |
| [[09_Glossary]] | Glosario técnico y de negocio del proyecto |
| [[Daily/]] | Notas diarias de sesión |

---

## 📊 Estado actual del proyecto

```
Fase 1 — Base del proyecto        ✅ Completada
Fase 2 — Componentes              ✅ Completada
Fase 3 — Páginas                  ✅ Completada
Fase 3.5 — Design System 2026     ✅ Completada (shadcn + Magic UI + Lenis + GSAP)
Fase 3.6 — Rediseño Home          ✅ Completada (v0.9.0 — todas las secciones rediseñadas)
Fase 4 — Contenido real           ⏳ Pendiente (requiere info del cliente)
Fase 5 — Optimización             ⏳ Pendiente
Fase 6 — Publicación              ⏳ Pendiente
```

> Versión actual: **v1.3.0** — 2026-07-21

---

## 🏠 Home — secciones activas (estado 2026-07-09)

| Sección | Componente | Estado |
|---------|-----------|--------|
| Hero | `HeroSlider` | ✅ 4 slides crossfade, WordRotate, FallingLeaves (14), stats strip |
| Confianza | `ConfianzaSection` | ✅ Split layout + 3 feature cards + NumberTicker |
| Servicios | `ServicesSection` | ✅ Carousel horizontal, mouse-edge scroll, 5 tarjetas + "ver todos" |
| Banner | `BannerSection` | ✅ Foto fondo + overlay + RainEffect (50 gotas) |
| Cómo trabajamos | `WorkProcess` | ✅ 5 paneles alternados imagen/texto, Framer Motion slide-x |
| Proyectos | ProjectCards | ✅ Grid en bg-[#f5f9ff] con BlurFade |
| Sectores | `SectoresSection` | ✅ Órbita Framer Motion, 8 tarjetas foto, efecto 3D profundidad, **planeta verde CSS** + logo blanco central |
| Testimonios | `TestimonialsCarousel` | ✅ Horizontal scroll, mouse-edge scroll, mask-image fade |
| CTA final | `CTASection` | ✅ Gradient oscuro + FallingLeaves (18) + CTA WhatsApp |

---

## 🚨 Bugs activos

*Ninguno* ✅ — todos los bugs originales fueron resueltos.

→ Ver deuda técnica pendiente en [[04_Errors]]

---

## ⚠️ Deuda técnica activa

| ID | Descripción | Prioridad |
|----|-------------|-----------|
| TD-002 | Info contacto duplicada en Footer y /contacto | 🟡 Media |
| TD-003 | Sin JSON-LD structured data (LocalBusiness schema) | 🟡 Media |
| TD-004 | Sin `error.tsx`, `not-found.tsx`, `loading.tsx` | 🟢 Baja |
| TD-005 | Estadísticas del Hero son placeholder | ⏳ Requiere cliente |
| TD-006 | Mapa de contacto es placeholder | ⏳ Requiere cliente |

---

## 📋 Tareas prioritarias

### Pendientes — desarrollo
- [ ] JSON-LD structured data (LocalBusiness + Service schemas)
- [ ] Crear `error.tsx`, `not-found.tsx`, `loading.tsx`
- [ ] Hacer sectores de SectoresSection clickeables (link a /servicios o filtro)
- [ ] SectoresSection en móvil: evaluar marquee en lugar de órbita (tarjetas muy pequeñas)

### Pendientes — contenido del cliente
- [ ] Fotografías reales de proyectos y equipo
- [ ] Testimonios reales con nombres y resultados
- [ ] Estadísticas reales (proyectos, hectáreas, años)
- [ ] Misión, visión y valores (actualmente vacíos en `data/company.ts`)
- [ ] Redes sociales (URLs reales — actualmente apuntan a facebook.com / instagram.com)
- [ ] Google Maps embed (enlace real de ubicación)
- [ ] Dominio real (actualmente riegosdelnorte.com placeholder)

### Completadas ✅
- [x] Rediseño completo Home — Design System 2026
- [x] SectoresSection — órbita orbital con Framer Motion + efecto 3D
- [x] BannerSection — RainEffect ambiental
- [x] CTASection — FallingLeaves (18)
- [x] Fix scroll horizontal móvil (`html { overflow-x: clip }`)
- [x] Fix `text-*` Tailwind en links (`a { color: inherit }` en `@layer base`)
- [x] Mouse-edge scroll en ServicesSection y TestimonialsCarousel

---

## 🔑 Contexto rápido para IA

- **Proyecto:** Sitio web comercial B2B para empresa colombiana de riego agrícola
- **Stack:** Next.js 16 · React 19 · TypeScript · Tailwind v4 · shadcn/ui · Framer Motion 12 (`motion/react`) · GSAP · Lenis · Magic UI
- **Datos:** En `/data/*.ts` — editables sin tocar componentes
- **Config central:** `lib/site.ts` — teléfono, WhatsApp, email, URL, redes
- **Colores:** Variables CSS en `app/globals.css` (hex de marca — NO usar oklch de shadcn)
- **Button:** Con `href` → `<Link>`. Sin `href` → `<button>`. CVA variants.
- **Smooth scroll:** Lenis activo via `SmoothScroll` en `layout.tsx`
- **Overflow:** `html { overflow-x: clip }` + `body { overflow-x: hidden }` — AMBOS necesarios
- **CSS layers:** Reglas de reset (`a`, `button`, `*`) SIEMPRE dentro de `@layer base`
- **Conversión primero** — cada sección debe llevar al usuario a cotizar
