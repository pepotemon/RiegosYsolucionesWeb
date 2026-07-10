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
| UI Sistema | shadcn/ui | ^4.13.0 |
| Animaciones | Framer Motion / Motion | ^12.0.0 |
| Animaciones avanzadas | GSAP + ScrollTrigger | latest (100% free) |
| Smooth Scroll | Lenis | latest |
| Componentes visuales | Magic UI | (registry, no npm) |
| Variantes de estilos | class-variance-authority | latest |
| Merge de clases | tailwind-merge | latest |
| Iconos | Lucide React | ^0.468.0 |
| Iconos (shadcn/MagicUI) | @radix-ui/react-icons | latest |
| UI Primitivos accesibles | @base-ui/react | latest |
| CSS Animaciones | tw-animate-css | latest |
| Imágenes | Unsplash (placeholder) | — |

---

## Estructura de carpetas

```
├── app/                          # Rutas (Next.js App Router)
│   ├── page.tsx                  # Homepage
│   ├── layout.tsx                # Layout raíz (SmoothScroll + Header + Footer + WhatsApp)
│   ├── globals.css               # Variables CSS marca + shadcn @theme inline
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
│   │   ├── Button.tsx            # ✅ Soporta href (→Link) y sin href (→button) + CVA variants
│   │   ├── Card.tsx              # Contenedor base
│   │   ├── Container.tsx         # Layout wrapper (max-w-7xl)
│   │   ├── MotionReveal.tsx      # Animación scroll reveal (Framer Motion)
│   │   ├── SectionHeader.tsx     # Eyebrow + título + descripción
│   │   │
│   │   ── Magic UI (instalados vía shadcn registry) ──
│   │   ├── number-ticker.tsx     # Contadores animados (proyectos, hectáreas, años)
│   │   ├── bento-grid.tsx        # Grid de cards con hover reveal
│   │   ├── blur-fade.tsx         # Reveal de contenido al hacer scroll
│   │   ├── animated-gradient-text.tsx  # Texto con gradiente animado
│   │   ├── animated-shiny-text.tsx     # Texto con efecto brillante
│   │   ├── word-rotate.tsx       # Rotación de palabras en hero
│   │   ├── typing-animation.tsx  # Efecto máquina de escribir
│   │   ├── shimmer-button.tsx    # Botón CTA con efecto shimmer
│   │   ├── meteors.tsx           # Partículas/meteoros de fondo
│   │   ├── dot-pattern.tsx       # Patrón de puntos para secciones
│   │   ├── marquee.tsx           # Carrusel infinito (logos/clientes)
│   │   ├── animated-list.tsx     # Lista con animaciones secuenciales
│   │   │
│   │   ── Efectos ambientales (custom) ──
│   │   ├── falling-leaves.tsx    # 🌿 Hojas SVG verdes cayendo — CSS keyframe, hydration-safe
│   │   └── rain-effect.tsx       # 🌧️ Lluvia CSS puro — spans gradient, sin SVG, hydration-safe
│   │
│   ├── layout/                   # Estructura global
│   │   ├── Header.tsx            # Navegación + efecto scroll + hide-on-scroll
│   │   ├── Footer.tsx            # 4 columnas + redes + contacto
│   │   ├── HeroSlider.tsx        # Slider 4 slides, crossfade
│   │   ├── SmoothScroll.tsx      # ✅ Wrapper Lenis — activo globalmente en layout.tsx
│   │   └── WhatsAppButton.tsx    # Botón flotante
│   ├── blog/BlogCard.tsx
│   ├── catalog/ProductCard.tsx
│   ├── contact/ContactForm.tsx
│   ├── projects/ProjectCard.tsx
│   ├── sections/
│   │   ├── ConfianzaSection.tsx       # Split layout: texto + 3 cards glassmorphism + NumberTicker stats
│   │   ├── BannerSection.tsx          # Foto fondo + overlay + RainEffect ambiental
│   │   ├── ServicesSection.tsx        # Carousel horizontal con mouse-edge scroll
│   │   ├── SectoresSection.tsx        # Órbita Framer Motion — 8 tarjetas foto + logo central + profundidad 3D
│   │   ├── CTASection.tsx             # Gradient oscuro + FallingLeaves + CTA WhatsApp
│   │   ├── TestimonialsCarousel.tsx   # Horizontal scroll con mouse-edge scroll + mask-image fade
│   │   └── WorkProcess.tsx            # 5 paneles alternados imagen/texto con slide-x Framer Motion
│   └── services/ServiceCard.tsx
│
├── data/                         # Fuente de verdad de contenido
│   ├── blog.ts
│   ├── company.ts
│   ├── products.ts
│   ├── projects.ts
│   ├── sectors.ts
│   ├── services.ts
│   └── testimonials.ts
│
├── lib/
│   ├── site.ts                   # ⭐ Config central (URL, teléfono, WhatsApp, email)
│   ├── seo.ts                    # createMetadata() — OpenGraph, canonical
│   ├── utils.ts                  # cn() con clsx + tailwind-merge, absoluteUrl()
│   ├── whatsapp.ts               # getWhatsAppUrl(message)
│   └── useEdgeScroll.ts          # Hook compartido: mouse-edge scroll con RAF + cursor dinámico
│
└── types/
    ├── blog.ts · product.ts · project.ts · service.ts
```

---

## Componentes — mapa rápido

### UI Primitivos
| Componente | Props clave | Notas |
|-----------|-------------|-------|
| `Button` | `variant`, `href?`, `size`, `onClick` | Con `href` → `<Link>`. Sin `href` → `<button>`. CVA variants |
| `Card` | `className` | Wrapper visual con sombra y borde |
| `Container` | `className` | `max-w-7xl` + padding responsive |
| `SectionHeader` | `eyebrow`, `title`, `description` | Centrado por defecto |
| `MotionReveal` | `delay`, `direction` | Framer Motion scroll reveal |

### Magic UI (listos para usar)
| Componente | Uso sugerido |
|-----------|-------------|
| `NumberTicker` | Indicadores de confianza (proyectos, hectáreas, años) |
| `BentoGrid` / `BentoCard` | Sección de servicios en grid |
| `BlurFade` | Reveal progresivo de secciones al scroll |
| `AnimatedGradientText` | Eyebrows del hero |
| `AnimatedShinyText` | Badges o labels destacados |
| `WordRotate` | Hero — rotar palabras clave (riego, bombeo, energía...) |
| `TypingAnimation` | Subtítulos animados |
| `ShimmerButton` | CTA principal (Solicitar cotización) |
| `Meteors` | Background del hero oscuro |
| `DotPattern` | Background de secciones claras |
| `Marquee` | Logos de clientes / sectores |
| `AnimatedList` | Beneficios / features con entrada secuencial |

### Layout
| Componente | Comportamiento |
|-----------|---------------|
| `SmoothScroll` | Client component. Inicializa Lenis. Wrappea todo en `layout.tsx` |
| `Header` | Hide-on-scroll (sube al subir, oculta al bajar). Desktop siempre visible. |
| `Footer` | 4 columnas: Marca / Servicios / Empresa / Contacto |
| `HeroSlider` | 4 slides, crossfade cada 3.8s, pause on hover |
| `WhatsAppButton` | `position: fixed`, bottom-right, z-50 |

---

## Variables CSS globales (`app/globals.css`)

```css
/* Paleta de marca */
--background:         #f5f9ff   /* Fondo general */
--foreground:         #1a2b3c   /* Texto principal */
--primary:            #1b6cb6   /* Azul gota de agua — botones, links, eyebrows */
--primary-dark:       #134f88   /* Hover states */
--primary-foreground: #ffffff
--green:              #3baa6e   /* Verde hojas — checkmarks, iconos naturaleza */
--green-dark:         #2d8757
--muted:              #566a7a   /* Texto secundario */
--border:             #c8ddf0   /* Bordes suaves */

/* shadcn/ui (necesarios para componentes Magic UI) */
--card, --popover, --secondary, --accent, --destructive, --ring, --radius, etc.
```

> La estructura `@theme inline { --color-primary: var(--primary) ... }` conecta las variables con las clases de Tailwind v4.
> El `scroll-behavior: smooth` fue eliminado — Lenis lo reemplaza.

---

## Configuración central (`lib/site.ts`)

```typescript
siteConfig.phone      // "+57 300 000 0000" (placeholder)
siteConfig.whatsapp   // "573000000000" (placeholder)
siteConfig.email      // "contacto@riegosdelnorte.com" (placeholder)
siteConfig.url        // "https://riegosdelnorte.com" (placeholder)
siteConfig.social     // { facebook, instagram, linkedin }
```

**Regla:** Para cambiar datos de contacto, editar SOLO `lib/site.ts`.

---

## Rutas dinámicas — generación estática

Las rutas con `[slug]` usan:
- `generateStaticParams()` — pre-renderiza en build
- `generateMetadata()` — SEO por página

Afecta: `/servicios/[slug]`, `/proyectos/[slug]`, `/blog/[slug]`

---

## SEO

- **Metadata dinámica:** `lib/seo.ts → createMetadata()`
- **Sitemap:** `app/sitemap.ts` — generado dinámicamente
- **Robots:** `app/robots.ts`
- **Pendiente:** JSON-LD structured data (LocalBusiness, Service schemas)

---

## Preparado para escalar hacia

Firebase · Firestore · Firebase Storage · CMS headless · CRM · WhatsApp API · Panel administrativo
