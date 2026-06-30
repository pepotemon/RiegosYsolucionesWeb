# 02 — Arquitectura

> [[00_Index]] · [[01_Project]] · [[03_Decisions]]

---

## Stack técnico

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Framework | Next.js (App Router) | ^16.0.0 |
| UI | React | ^19.0.0 |
| Lenguaje | TypeScript | ^5.7.0 |
| Estilos | Tailwind CSS | ^4.1.0 |
| Animaciones | Framer Motion | ^12.0.0 |
| Iconos | Lucide React | ^0.468.0 |
| Utilidades | clsx | ^2.1.1 |
| Imágenes | Unsplash (placeholder) | — |

---

## Estructura de carpetas

```
├── app/                          # Rutas (Next.js App Router)
│   ├── page.tsx                  # Homepage
│   ├── layout.tsx                # Layout raíz (Header + Footer + WhatsApp)
│   ├── globals.css               # Variables CSS + estilos globales
│   ├── robots.ts                 # SEO — robots.txt dinámico
│   ├── sitemap.ts                # SEO — sitemap.xml dinámico
│   ├── blog/
│   │   ├── page.tsx              # Lista de artículos
│   │   └── [slug]/page.tsx       # Artículo individual
│   ├── catalogo/page.tsx         # Catálogo de productos
│   ├── contacto/page.tsx         # Formulario + mapa
│   ├── nosotros/page.tsx         # Historia, misión, valores
│   ├── proyectos/
│   │   ├── page.tsx              # Lista de proyectos
│   │   └── [slug]/page.tsx       # Proyecto individual
│   └── servicios/
│       ├── page.tsx              # Lista de servicios
│       └── [slug]/page.tsx       # Servicio individual
│
├── components/
│   ├── ui/                       # Primitivos reutilizables
│   │   ├── Button.tsx            # Variantes: primary, secondary, ghost
│   │   ├── Card.tsx              # Contenedor base
│   │   ├── Container.tsx         # Layout wrapper (max-w-7xl)
│   │   ├── MotionReveal.tsx      # Animación scroll reveal
│   │   └── SectionHeader.tsx     # Eyebrow + título + descripción
│   ├── layout/                   # Estructura global
│   │   ├── Header.tsx            # Navegación + efecto scroll
│   │   ├── Footer.tsx            # 4 columnas + redes + contacto
│   │   ├── HeroSlider.tsx        # Slider 4 slides, crossfade
│   │   └── WhatsAppButton.tsx    # Botón flotante
│   ├── blog/BlogCard.tsx
│   ├── catalog/ProductCard.tsx
│   ├── contact/ContactForm.tsx
│   ├── projects/ProjectCard.tsx
│   ├── sections/
│   │   ├── TestimonialsCarousel.tsx   # Carrusel infinito CSS
│   │   └── WorkProcess.tsx            # 5 pasos interactivos + SVG
│   └── services/ServiceCard.tsx
│
├── data/                         # Fuente de verdad de contenido
│   ├── blog.ts                   # 5 artículos
│   ├── company.ts                # Historia, misión, visión, valores
│   ├── products.ts               # 6 productos del catálogo
│   ├── projects.ts               # 3 proyectos/casos de éxito
│   ├── sectors.ts                # 8 sectores
│   ├── services.ts               # 7 servicios + workProcess + stats
│   └── testimonials.ts           # 9 testimonios
│
├── lib/                          # Utilidades
│   ├── site.ts                   # ⭐ Config central (URL, teléfono, WhatsApp, email)
│   ├── seo.ts                    # createMetadata() — OpenGraph, canonical
│   ├── utils.ts                  # cn() para clsx, absoluteUrl()
│   └── whatsapp.ts               # getWhatsAppUrl(message)
│
├── types/                        # Tipos TypeScript
│   ├── blog.ts                   # BlogPost
│   ├── product.ts                # Product + ProductCategory (enum)
│   ├── project.ts                # Project
│   └── service.ts                # Service
│
├── docs/                         # Documentación operativa anterior
│   ├── 00-dashboard.md
│   ├── 01-client-content-checklist.md
│   ├── 02-seo-and-content-plan.md
│   ├── 03-roadmap.md
│   └── 04-editing-guide.md
│
└── docs-obsidian/                # ← Este Segundo Cerebro
```

---

## Componentes — mapa rápido

### UI Primitivos
| Componente | Props clave | Notas |
|-----------|-------------|-------|
| `Button` | `variant`, `href`, `size` | ⚠️ Solo acepta `href`, siempre renderiza `<a>` |
| `Card` | `className` | Wrapper visual con sombra y borde |
| `Container` | `className` | `max-w-7xl` + padding responsive |
| `SectionHeader` | `eyebrow`, `title`, `description` | Centrado por defecto |
| `MotionReveal` | `delay`, `direction` | Framer Motion scroll reveal |

### Layout
| Componente | Comportamiento |
|-----------|---------------|
| `Header` | Sticky, transparente en home, opaco al hacer scroll |
| `Footer` | 4 columnas: Marca / Servicios / Empresa / Contacto |
| `HeroSlider` | 4 slides, crossfade cada 3.8s, pause on hover |
| `WhatsAppButton` | `position: fixed`, bottom-right, z-50 |

### Contenido
| Componente | Datos de |
|-----------|----------|
| `ServiceCard` | `data/services.ts` |
| `ProjectCard` | `data/projects.ts` |
| `BlogCard` | `data/blog.ts` |
| `ProductCard` | `data/products.ts` |
| `TestimonialsCarousel` | `data/testimonials.ts` |
| `WorkProcess` | `data/services.ts → workProcess` |

---

## Variables CSS globales (`app/globals.css`)

```css
--background:    #f8faf8   /* Fondo general */
--foreground:    #10231c   /* Texto principal */
--primary:       #12663f   /* Verde principal */
--primary-dark:  #0b432b   /* Verde oscuro hover */
--water:         #0f7da3   /* Azul agua */
--muted:         #64736d   /* Texto secundario */
--border:        #dfe8e3   /* Bordes suaves */
```

> ⚠️ Deuda técnica: Muchos archivos todavía usan los hex directamente en vez de las variables.

---

## Configuración central (`lib/site.ts`)

```typescript
// Todos los datos de contacto del sitio están aquí:
siteConfig.phone      // "+57 300 000 0000" (placeholder)
siteConfig.whatsapp   // "573000000000" (placeholder)
siteConfig.email      // "contacto@riegosdelnorte.com" (placeholder)
siteConfig.url        // "https://riegosdelnorte.com" (placeholder)
siteConfig.social     // { facebook, instagram, linkedin } (URLs genéricas)
```

**Regla:** Para cambiar datos de contacto, editar SOLO `lib/site.ts`.

---

## Rutas dinámicas — generación estática

Las rutas con `[slug]` usan:
- `generateStaticParams()` — pre-renderiza en build
- `generateMetadata()` — SEO por página

Afecta: `/servicios/[slug]`, `/proyectos/[slug]`, `/blog/[slug]`

---

## Imágenes

- **Origen:** Unsplash (`images.unsplash.com`)
- **Configurado en:** `next.config.ts → remotePatterns`
- **Componente:** `next/image` con `blur` placeholder
- **Pendiente:** Reemplazar con fotos reales del cliente

---

## SEO

- **Metadata dinámica:** `lib/seo.ts → createMetadata()`
- **Sitemap:** `app/sitemap.ts` — generado dinámicamente
- **Robots:** `app/robots.ts`
- **Pendiente:** JSON-LD structured data (LocalBusiness, Service schemas)

---

## Preparado para escalar hacia

Firebase · Firestore · Firebase Storage · CMS headless · CRM · WhatsApp API · Panel administrativo
