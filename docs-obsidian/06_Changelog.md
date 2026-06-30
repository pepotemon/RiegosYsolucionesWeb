# 06 — Changelog

> [[00_Index]] · [[04_Errors]] · [[03_Decisions]]

Historial de lo que se ha construido y cuándo. Registrar aquí todo cambio significativo.

---

## v0.3.0 — 2026-06-27 · Sistema de documentación

- Creado `docs-obsidian/` con estructura completa de Segundo Cerebro
- Creado `AGENTS.md` con instrucciones para Claude Code
- Memoria del proyecto sincronizada con Claude Code persistent memory

---

## v0.2.0 — 2026-06 · Sitio completo funcional

### Páginas implementadas
- ✅ Homepage (`/`) con 8 secciones completas
- ✅ Lista de servicios (`/servicios`) — 7 servicios en grid
- ✅ Servicio individual (`/servicios/[slug]`) — descripción, beneficios, proceso, FAQs
- ✅ Lista de proyectos (`/proyectos`) — 3 casos de éxito
- ✅ Proyecto individual (`/proyectos/[slug]`) — problema → solución → resultado
- ✅ Catálogo (`/catalogo`) — 6 productos con filtros de categoría
- ✅ Blog (`/blog`) — 5 artículos SEO
- ✅ Artículo individual (`/blog/[slug]`) — contenido completo + CTA
- ✅ Nosotros (`/nosotros`) — historia, misión, visión, valores
- ✅ Contacto (`/contacto`) — formulario + info + mapa placeholder

### Componentes implementados
- ✅ `Header` — navegación con efecto scroll, logo dinámico
- ✅ `Footer` — 4 columnas, redes, contacto
- ✅ `HeroSlider` — 4 slides, crossfade, animaciones de texto
- ✅ `WhatsAppButton` — botón flotante
- ✅ `Button` — 3 variantes
- ✅ `Card`, `Container`, `SectionHeader`, `MotionReveal`
- ✅ `ServiceCard`, `ProjectCard`, `BlogCard`, `ProductCard`
- ✅ `TestimonialsCarousel` — carrusel infinito CSS (9 testimonios)
- ✅ `WorkProcess` — 5 pasos interactivos con animaciones SVG personalizadas
- ✅ `ContactForm` — 9 campos (sin backend)

### Datos creados
- ✅ 7 servicios con proceso detallado, FAQs y proyectos relacionados
- ✅ 3 proyectos con problema/solución/resultado
- ✅ 6 productos en catálogo
- ✅ 5 artículos de blog SEO
- ✅ 9 testimonios de clientes
- ✅ 8 sectores atendidos
- ✅ Información de empresa (misión, visión, valores)

### SEO y técnico
- ✅ `lib/site.ts` — configuración central del sitio
- ✅ `lib/seo.ts` — metadata dinámica + OpenGraph
- ✅ `app/sitemap.ts` — sitemap dinámico
- ✅ `app/robots.ts` — robots.txt
- ✅ TypeScript estricto en todo el proyecto
- ✅ `generateStaticParams` en rutas dinámicas

---

## v0.1.0 — 2026-06 · Base del proyecto

- ✅ Proyecto Next.js 16 creado con App Router
- ✅ TypeScript configurado (strict mode)
- ✅ Tailwind CSS v4 configurado via PostCSS
- ✅ Framer Motion instalado
- ✅ Lucide React instalado
- ✅ Estructura de carpetas definida
- ✅ Variables CSS de color en `globals.css`

---

## Plantilla para próximas entradas

```markdown
## v0.X.0 — YYYY-MM-DD · [Descripción corta]

### Cambios
- ✅ [Qué se implementó]
- 🐛 [Bug que se corrigió] — ver [[04_Errors#BUG-XXX]]
- 🔧 [Deuda técnica resuelta]
- 📝 [Contenido actualizado]

### Decisiones tomadas
- [[03_Decisions#DEC-XXX]]

### Pendiente de esta versión
- [ ] [Qué quedó sin terminar]
```
