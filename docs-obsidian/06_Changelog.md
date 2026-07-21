# 06 — Changelog

> [[00_Index]] · [[04_Errors]] · [[03_Decisions]]

Historial de lo que se ha construido y cuándo. Registrar aquí todo cambio significativo.

---

## v1.5.0 — 2026-07-21 · Rediseño completo páginas Nosotros y Servicios

### /nosotros — AboutPageContent (client component)

- ✅ **Hero** — dot-grid + glow, green pill badge, H1 con acento verde, párrafo `text-white/50`
- ✅ **Stats animadas** — `initial/animate` escalonado, cards `bg-white/4 border-white/8` con números grandes de color
- ✅ **Historia** — `whileInView` blockquote con borde verde izquierdo, párrafos divididos por `divide-[#E0EEF9]`
- ✅ **Equipo** — sección dark `bg-[#06131f]`, 2 cards `bg-[#082033]` con ghost number, línea de acento lateral (verde / azul) con glow, icono translúcido
- ✅ **CTA** — dark con dot-grid + glow verde, icono Globe2, botón verde WhatsApp
- ✅ Eliminados: imports Container/Button/company icons no usados

### /servicios lista — rediseño de badge, separador y CTA

- ✅ **Badge hero** — cambio a pill verde `rounded-full border text-[#2DBA45]`
- ✅ **Pills** de servicio — hover cambia a verde en lugar de azul
- ✅ **Eyebrow** en lista — `text-[10px] tracking-[0.22em] text-[#2DBA45]`
- ✅ **Separador quote** — de `bg-[#2d8757]` sólido a `bg-[#082033]` con líneas decorativas laterales
- ✅ **CTA** — de `bg-[#f5f9ff]` light a dark full `bg-[#06131f]` con dot-grid + glow verde + botón `bg-[#2DBA45]` + link secundario fantasma

### /servicios/[slug] — rediseño completo

- ✅ **Hero inmersivo** — `min-h-[65vh]` imagen fill, `bg-gradient-to-t from-[#06131f]`, back link top + badge, icono + H1 + descripción al fondo
- ✅ **Descripción** — sección blanca con lead text `text-xl font-medium text-[#3a5268]` + divider verde/azul
- ✅ **Info blocks** — sección dark `bg-[#06131f]`, 3 `DarkInfoBlock` `bg-[#082033]` con ghost number, acento lateral de color diferente por bloque
- ✅ **Proyectos relacionados** — grid de mini-cards blancas estilo blog, imagen `aspect-[16/10]`, location en verde, título con hover azul
- ✅ **FAQs** — dark `bg-[#06131f]`, cards `bg-[#082033]` con ghost number, texto `text-white/55`
- ✅ **CTA** — `bg-[#082033]` editorial, eyebrow verde, H2 blanco, botón WhatsApp verde
- ✅ Eliminado `ProjectCard` e imports SectionHeader/Container no necesarios
- ✅ TypeScript 0 errores

---

## v1.3.0 — 2026-07-21 · Rediseño completo página de Contacto

### /contacto — Split screen: panel oscuro + formulario

- ✅ **Layout split full-screen** — `flex min-h-screen`: izquierda `44%` oscura pegajosa (`lg:sticky lg:top-0 lg:h-screen`), derecha `flex-1` blanca con formulario. En móvil: apiladas verticalmente
- ✅ **Panel izquierdo** — dot-grid azul + glow lateral; badge + título "Cuéntenos su proyecto"; 3 bloques de canal:
  - **WhatsApp** (primario): `rounded-2xl` con borde verde, icono `bg-[#2DBA45]` con shadow, "Enviar mensaje →" en verde
  - **Teléfonos** + **Correo**: `rounded-2xl` fondo translúcido, icono azul, cada entrada como link
  - Dirección · Horario · Cobertura como items con iconos sutiles
  - Iconos de redes sociales como botones cuadrados con hover
- ✅ **ContactForm — rediseño visual** (lógica intacta):
  - Sin wrapper de borde/sombra — vive directamente en el panel blanco
  - 4 secciones con `SectionLabel` (Sobre ti / Tu contacto / Ubicación / Tu proyecto + Cuéntanos más)
  - Inputs con `rounded-xl border border-[#E0EEF9] bg-[#F8FBFF]`, focus con ring azul
  - Labels en `text-[10px] font-bold uppercase tracking-wider`
  - Correo y Servicio en col-span-full; demás en 2 columnas
  - Botón verde `bg-[#2DBA45]` con shadow verde + icono `MessageCircle`
- ✅ TypeScript 0 errores

---

## v1.2.0 — 2026-07-21 · Rediseño completo páginas de Blog

### /blog — Lista editorial con artículo destacado

- ✅ **Hero oscuro** — mismo sistema editorial: "Conocimiento para el campo", stats (5 artículos / 5 temas / Gratis), scroll hint
- ✅ **Artículo destacado full-width** — tarjeta horizontal `rounded-[32px]` `bg-[#082033]`: imagen 55% izquierda con hover scale, número fantasma `01`, meta fecha/tiempo, título grande, excerpt, botón verde CTA
- ✅ **Divider "Más artículos"** — separador con label centrado entre featured y grid secundario
- ✅ **Grid 2×2 de posts secundarios** — tarjetas blancas `rounded-[24px]` con `ring-1 ring-[#E0EEF9]`, hover `shadow-xl`, badge verde de tiempo de lectura, título con hover a azul, `whileInView` escalonado
- ✅ **Bottom CTA** — "Un técnico puede responder puntualmente para tu cultivo"
- ✅ `BlogPageContent.tsx` — nuevo client component

### /blog/[slug] — Artículo tipo revista

- ✅ **Hero full-viewport** — imagen de fondo `min-h-[65vh]`, overlay gradient, back link + badge arriba, fecha/tiempo de lectura + título grande abajo
- ✅ **Tipografía editorial** — excerpt como lead `text-xl font-medium`, divider verde, párrafos `text-[17px] leading-[1.88]`, espaciado generoso
- ✅ **CTA box oscuro** — `rounded-3xl bg-[#082033]` con eyebrow verde, título blanco, botón WhatsApp con shadow verde
- ✅ **Sección "Más artículos"** — 3 artículos relacionados (excluye el actual) con mini-cards blancas, link "Ver todos" al blog
- ✅ TypeScript 0 errores

---

## v1.1.0 — 2026-07-21 · Rediseño completo página de Catálogo

### /catalogo — Catálogo técnico oscuro con filtros interactivos

- ✅ **Hero full-screen oscuro** — mismo patrón que proyectos: gradient `#06131f → #0d2340`, dot-grid azul, título "Equipos y materiales para el campo", disclaimer "no es tienda online", stats (productos / categorías / cotización personalizada)
- ✅ **Filter bar interactivo** — pills por categoría con contador de productos; estado activo `bg-[#082033]` vs. inactivo `bg-[#F3F9FF]`; "Ver todos" para resetear; "X productos" label dinámico
- ✅ **Tarjetas tipo ficha técnica industrial** — fondo `#082033` oscuro, imagen top 60%, category badge verde + brand badge blanco sobre imagen, **línea de acento verde izquierda con glow**, nombre, descripción muted, bullets de features con dot verde, CTA WhatsApp full-width verde
- ✅ **AnimatePresence `mode="popLayout"`** — filtrado con animación de escala + opacidad; `layout` prop para reposicionamiento suave del grid
- ✅ **Bottom CTA** — sección oscura dot-grid verde + "Cotizamos cualquier equipo" + WhatsApp
- ✅ `CatalogPageContent.tsx` — nuevo client component; `app/catalogo/page.tsx` queda como server component puro
- ✅ TypeScript 0 errores

---

## v1.0.0 — 2026-07-21 · Rediseño completo páginas de Proyectos

### /proyectos — Lista editorial inmersiva

- ✅ **Hero full-screen oscuro** — gradient `#06131f → #0d2340`, dot-grid azul, título "Proyectos que hablan por sí solos", stats (3+ proyectos / 3 departamentos / 100+ hectáreas), scroll hint animado
- ✅ **Secciones alternadas por proyecto** — cada proyecto ocupa `min-h-screen` en desktop; imagen 55% / contenido 45%; alternancia blanco/oscuro por índice par/impar; imagen con edge-gradient de transición
- ✅ **Número fantasma** — `01/02/03` en tipografía masiva (210px), opacity 4%, posicionado como watermark en el fondo del contenido
- ✅ **Narrativa inline** — Problema / Solución / Resultado con bullets numerados `#2DBA45`, label coloreado, texto legible
- ✅ **Pills de stats** — Área y Cultivo con fondo traslúcido adaptativo (claro/oscuro)
- ✅ **CTA por proyecto** — botón que lleva al caso completo
- ✅ **Bottom CTA** — sección oscura con dot-grid verde + WhatsApp CTA
- ✅ `ProjectsPageContent.tsx` — nuevo componente cliente con Framer Motion (`whileInView`, `initial/animate`)

### /proyectos/[slug] — Caso de estudio

- ✅ **Hero full-viewport** — imagen de fondo `min-h-screen`, gradient overlay `from-[#06131f]`, back link + service badge en top, título gigante + metadata pills en bottom
- ✅ **Stats bar oscura** — 4 columnas (Área / Cultivo / Departamento / Servicio) con dividers
- ✅ **Caso de estudio 3 columnas** — tarjetas con `border-radius 24px`, ghost number de color por tipo (rojo/azul/verde), accent line, texto legible
- ✅ **Galería editorial** — imagen principal `aspect-[16/7]` full-width rounded, imágenes secundarias en grid 2 columnas
- ✅ **CTA final oscuro** — mismo patrón que lista, con texto personalizado al proyecto

### Arquitectura

- `app/proyectos/page.tsx` → server component, delega a `ProjectsPageContent`
- `components/projects/ProjectsPageContent.tsx` → client component (Framer Motion)
- `app/proyectos/[slug]/page.tsx` → server component, rediseño completo
- TypeScript: 0 errores

---

## v0.9.0 — 2026-07-10 · Planeta verde + automatización Obsidian

### SectoresSection — Planeta verde en el centro de la órbita

- ✅ **Planeta verde CSS puro** reemplaza el logo central — esfera con `radial-gradient` de `#86efac` (iluminado) a `#052e16` (borde oscuro)
- ✅ **Textura de continentes** — 7 manchas elípticas en tonos verde oscuro/claro que rotan lentamente (90s/vuelta) con `scale-[1.18]` para no mostrar esquinas
- ✅ **Specular highlight** — destello blanco en la esquina superior izquierda simula fuente de luz solar
- ✅ **Limb darkening** — bordes muy oscuros con `inset box-shadow` para efecto de esfera 3D realista
- ✅ **Glow atmosférico** verde pulsante (`rgba(45,186,69,0.32)`, 4s) — doble capa de halo
- ✅ **Logo encima del planeta** — `brightness(0) invert(1)` para hacerlo blanco; flota fuera del `overflow-hidden` para no recortarse; tamaño `logoSize × 1.45` (45% más grande que el planeta)
- ✅ **Glow del logo reducido** — drop-shadow suave `0.35 opacity` sin exceso de brillo

### Automatización documentación Obsidian

- ✅ **`CLAUDE.md`** — regla obligatoria de actualizar `docs-obsidian/` al final de cada sesión, con tabla de qué archivo actualizar y cuándo
- ✅ **`.claude/settings.json`** — hook `Stop` que muestra recordatorio de actualizar el changelog al cerrar la sesión

### Commits de esta sesión

- `0fd95ad` — chore(config): CLAUDE.md + Stop hook para recordar actualizar Obsidian
- `3923f98` — feat(sectores): planeta Tierra como centro de la órbita
- `f0d1e26` — feat(sectores): planeta verde CSS puro en centro de la órbita
- `b3d2ae6` — feat(sectores): logo encima del planeta verde, centrado y grande
- `9d9cccc` — fix(sectores): logo blanco con glow sobre el planeta verde
- `371b310` — feat(sectores): logo super grande — 85% del planeta
- `e831165` — feat(sectores): logo máximo — 96% del planeta
- `8a69f8e` — feat(sectores): logo 145% del planeta, flotando encima sin recorte
- `314138a` — fix(sectores): reduce brillo del logo sobre el planeta

---

## v0.8.0 — 2026-07-10 · Rediseño premium SaaS/Agrotech

### SectoresSection — Rediseño completo

- ✅ Fondo sección: `linear-gradient(#F3F9FF → #FFF)` + **dot-grid** azul CSS puro (`#0077C8 / 13%`, 28px) — estilo Vercel/Linear
- ✅ Pill badge "COBERTURA DE SERVICIO" con iconos Leaf, bordes suaves azules
- ✅ Hero title: "Campo, finca" `#082033` + "y agroindustria" `#2DBA45`, font-weight 900, responsive hasta `text-7xl`
- ✅ Subtítulo con "tu producción" en verde
- ✅ Tarjetas orbitales rediseñadas: `border-radius 28px`, bg blanco, imagen top 60%, **icono circular verde** superpuesto, nombre bold azul oscuro
- ✅ Animaciones: float `y:[0,-4,0]` por tarjeta, hover lift -8px + scale 1.03 + sombra dinámica
- ✅ Órbita: 48s/vuelta (era 36s), más suave
- ✅ **Logo central 18% más grande** (`size * 0.33`, máx 218px)
- ✅ **Anillo verde dashed** girando lento alrededor del logo (24s/vuelta)
- ✅ **Glow azul pulsante** alrededor del logo (opacity 0.35→1→0.35, GPU)
- ✅ **Logo respira** (scale 1→1.06→1 cada 4s)
- ✅ Barra beneficios: 3 columnas (Shield / Headphones / Leaf), card blanca `border-radius 25px`
- ✅ Anillo orbital: verde `#2DBA45` dashed (era azul)

### ProyectosSection — Nuevo componente bento editorial

- ✅ `components/sections/ProyectosSection.tsx` — reemplaza el grid inline de `page.tsx`
- ✅ Layout **bento asimétrico**: card grande `md:col-span-2` (`h-490px`) + 2 cards compactas (`h-235px`)
- ✅ Imágenes full-bleed con overlay `#082033/90 → transparent`
- ✅ Badge numerado verde (01/02/03) top-left en cada card
- ✅ Tag de servicio traslúcido top-right
- ✅ Location en `#2DBA45` con MapPin
- ✅ Stats pills (área, cultivo) con backdrop-blur en card grande
- ✅ CTA "Ver proyecto" aparece en hover (`opacity-0 translate-y-2 → opacity-100`)
- ✅ Hover: imagen escala suavemente

### Skills instaladas

14 skills vía `npx skills` en `.agents/skills/`:
- `web-design-guidelines`, `vercel-react-best-practices`, `vercel-optimize` (Vercel Labs)
- `emil-design-eng`, `animation-vocabulary`, `apple-design`, `review-animations` (emilkowalski)
- `ui-ux-pro-max`, `design`, `design-system`, `ui-styling`, `banner-design`, `brand` (nextlevelbuilder)
- `huashu-design` (alchaincyf)

### Commits de esta sesión

- `cdb7812` — feat(sectores): rediseño premium SaaS/agrotech completo
- `a552454` — feat: bento editorial proyectos + logo órbita animado
- `18a1639` — feat(sectores): fondo satelital GIS (revertido en siguiente commit)
- `e74779f` — feat(sectores): fondo dot-grid premium SaaS
- `a68fe88` — chore: skills instaladas

---

## v0.7.1 — 2026-07-09 · Fix órbita pisando el título

- ✅ `SectoresSection` — `mb-8` → `mb-20` en div del título: las tarjetas orbitales desbordan ~62px hacia arriba desde el contenedor; el título necesitaba ≥80px de separación para quedar limpio

---

## v0.7.0 — 2026-07-09 · Efectos ambientales + SectoresSection orbital

### Nuevos componentes

- ✅ `components/ui/rain-effect.tsx` — lluvia de CSS puro: spans con `linear-gradient(transparent → rgba(185,230,255))`, sin SVG, ~1–1.8px de ancho, 12–24px de alto, `--rain-duration` 1.8–3.6s + delay 0–4s. Usado en `BannerSection` con `count={50}`
- ✅ `components/sections/SectoresSection.tsx` — **reescritura completa** con órbita Framer Motion:
  - 8 tarjetas foto (Unsplash) orbitan con `useMotionValue` + `useTransform` + `useAnimationFrame`
  - `OrbitCard` sub-componente con hooks `useTransform` propios (reglas de hooks respetadas)
  - `radius = size * 0.50` → tarjetas desbordan el viewport en móvil (técnica "desbordante")
  - `ResizeObserver` mide el contenedor en vivo; `key={sector.name-${size}}` remonta en resize
  - Título "Campo, finca y agroindustria" movido ENCIMA de la órbita (fuera del div `aspectRatio: 1/1`)
  - Centro de la órbita: solo texto descriptivo + barra verde decorativa
  - Sección sin `overflow-hidden` — el `html { overflow-x: clip }` global lo maneja
  - `REVOLUTION_MS = 36_000` (36s por vuelta completa), pausa en hover
  - Anillo `border-dashed border-[#1b6cb6]/20` posicionado con `translate(-50%,-50%)` sobre el radio orbital

### Efectos añadidos a secciones existentes

- ✅ `BannerSection` — `<RainEffect count={50} />` dentro de `pointer-events-none absolute inset-0 overflow-hidden`
- ✅ `CTASection` — `<FallingLeaves number={18} />` dentro de `pointer-events-none absolute inset-0 overflow-hidden`

### Bugs resueltos

- 🐛 BUG-005 resuelto — scroll horizontal en móvil → ver [[04_Errors#BUG-005]]
- 🐛 BUG-006 resuelto — `text-*` Tailwind ignorado en links → ver [[04_Errors#BUG-006]]
- 🐛 BUG-007 resuelto — botón "Ver servicios" demasiado ancho en móvil → ver [[04_Errors#BUG-007]]

### Decisiones tomadas

- [[03_Decisions#DEC-014]] — por qué CSS double-rotation falla en órbitas
- [[03_Decisions#DEC-015]] — técnica "desbordante" para efectos que salen del viewport

---

## v0.6.4 — 2026-07-09 · Ajustes finales de sesión

- ✅ `ServicesSection` — fix scroll: eliminado `scroll-snap-type` y `scrollSnapAlign` que bloqueaban el mouse-edge scroll (navegador peleaba contra los cambios de `scrollLeft` por RAF)
- ✅ `Footer` — logo `h-24 w-24` (96px), texto con `-ml-5` para pegarlo visualmente al icono

---

## v0.6.3 — 2026-07-09 · Mouse-edge scroll + ajustes visuales

- ✅ `lib/useEdgeScroll.ts` — hook compartido: zona del 20% en cada borde → scroll progresivo con RAF, cursor w-resize/e-resize
- ✅ `ServicesSection` — header centrado con eyebrow doble, hint text, mouse-edge scroll (sin flechas), `useEdgeScroll(0.2, 14)`
- ✅ `TestimonialsCarousel` — reemplazado CSS animation por `overflow-x: auto` + `useEdgeScroll(0.2, 10)`, items duplicados para recorrido amplio, mask-image fade en bordes
- ✅ `WorkProcess` — números `text-white` + `textShadow 0 4px 32px rgba(0,0,0,0.55)` para legibilidad sobre cualquier imagen
- ✅ `Footer` — logo en contenedor `h-16 w-16` con gradiente azul + ring + glow, texto empresa más grande

---

## v0.6.2 — 2026-07-09 · Rediseño ServicesSection + WorkProcess

- ✅ `ServicesSection` — carousel horizontal de 5 servicios destacados con fotos full-bleed, gradiente oscuro, icon badge, scroll-snap CSS, flechas de navegación, card "Ver todos" al final
- ✅ `WorkProcess` — rediseño total: 5 paneles alternados imagen (full 50vw) / texto grande, scroll-driven con `whileInView` slide-x, número fantasma como watermark, divisor `border-t`, sección autónoma (no necesita wrapper en page.tsx)
- ✅ `page.tsx` — WorkProcess section wrapper eliminado, WorkProcess renderizado directamente

---

## v0.6.1 — 2026-07-09 · Mejoras post-revisión

- ✅ `ConfianzaSection` — eliminado strip de stats duplicado (ya existe en Hero)
- ✅ `ServicesSection` — nuevo header: ghost "07" decorativo, h2 "Del diagnóstico a la entrega", layout 2 columnas (título izq / desc+link der), bg-[#f5f9ff]
- ✅ `WorkProcess` — rediseño completo: tabs verticales izquierda + panel de contenido derecha, auto-avance cada 6s con barra de progreso animada, transición slide-x, imports actualizados a `motion/react`

---

## v0.6.0 — 2026-07-09 · Rediseño completo Home — todas las secciones

### Nuevos componentes
- ✅ `ConfianzaSection.tsx` — layout split: texto izquierda, 3 feature cards glassmorphism derecha, strip de 4 stats con NumberTicker
- ✅ `BannerSection.tsx` — sección oscura con imagen de fondo, overlay gradient, headline "Riega mejor, produce más", CTA verde + outline
- ✅ `SectoresSection.tsx` — grid de 8 cards blancas con icon badge por sector (Sprout, Droplets, TreePine, Coffee, Leaf, Wheat, SunMedium, Factory)
- ✅ `CTASection.tsx` — gradient oscuro (from-[#06131f] via-[#0d2d54] to-[#1b6cb6]), dot grid overlay, glow azul, CTA verde WhatsApp + outline contacto

### Actualizaciones `app/page.tsx`
- ✅ Orden de secciones redefinido: Hero → Confianza → Servicios → Banner → WorkProcess → Proyectos → Sectores → Testimonios → CTA
- ✅ WorkProcess: wrapper con eyebrow + h2 nuevo, BlurFade, bg-white
- ✅ Proyectos: bg-[#f5f9ff], eyebrow + descripción, BlurFade en cards
- ✅ Testimonios: header centrado con eyebrow + descripción bajo el título
- ✅ Eliminado: imports innecesarios (CheckCircle2, ClipboardCheck, MapPinned, MotionReveal, SectionHeader, trustStats, sectors)

### Build
- ✅ TypeScript 0 errores — 26 páginas

---

## v0.5.2 — 2026-07-09 · Rediseño sección Servicios Home

- ✅ Nuevo componente `components/sections/ServicesSection.tsx`
- ✅ Layout bento grid oscuro (3 columnas, 7 cards): featured (col-span-2) + standard (col-span-1)
- ✅ Tarjetas con fondo `#09213d → #06131f`, línea de acento azul, icono fantasma, badge, título, descripción
- ✅ Tarjetas destacadas (Sistemas de riego + Energía solar) muestran lista de 3 beneficios
- ✅ BlurFade escalonado con `inView` en cada card
- ✅ CTA "Ver todos los servicios" con link a /servicios
- ✅ `ServiceCard` anterior reemplazado en `page.tsx`
- ✅ Fix: hojas cayendo (FallingLeaves) reemplazaron Meteors en Hero
- ✅ Fix: "automatización agrícola." → "automatización." (evita salto de layout)
- ✅ Fix: WordRotate en contenedor de altura fija (`overflow-hidden`)

---

## v0.5.0 — 2026-07-09 · Design System 2026 (sesión actual)

### Nuevas dependencias instaladas
- ✅ `gsap` — animaciones timeline + ScrollTrigger (ahora 100% gratis)
- ✅ `lenis` — smooth scroll con física de easing
- ✅ `tailwind-merge` — merge de clases Tailwind sin conflictos
- ✅ `shadcn/ui v4.13` — infraestructura de componentes (shadcn init)
- ✅ `@base-ui/react`, `class-variance-authority`, `@radix-ui/react-icons`, `tw-animate-css`, `motion`

### Componentes Magic UI instalados (via shadcn registry)
- ✅ `NumberTicker` — contadores animados
- ✅ `BentoGrid` + `BentoCard` — grid de cards con hover
- ✅ `BlurFade` — reveal al scroll
- ✅ `AnimatedGradientText` — texto con gradiente animado
- ✅ `AnimatedShinyText` — texto brillante
- ✅ `WordRotate` — rotación de palabras
- ✅ `TypingAnimation` — efecto máquina de escribir
- ✅ `ShimmerButton` — CTA con shimmer
- ✅ `Meteors` — partículas de fondo
- ✅ `DotPattern` — patrón de puntos
- ✅ `Marquee` — carrusel infinito
- ✅ `AnimatedList` — lista animada secuencial

### Infraestructura
- ✅ `SmoothScroll.tsx` creado — wrapper Lenis activo globalmente en `layout.tsx`
- ✅ `Button.tsx` refactorizado con CVA — soporta `href` (Link) y sin href (button)
- ✅ `lib/utils.ts` actualizado — `cn()` usa `tailwind-merge` + `clsx`
- ✅ `globals.css` actualizado — estructura shadcn + colores de marca de Riegos del Norte
- ✅ Build de producción limpio — 26 páginas sin errores TypeScript

### Bugs resueltos
- 🐛 BUG-003 resuelto — Button ahora soporta `href` y `type="button"`

### Decisiones tomadas
- [[03_Decisions#DEC-011]] — shadcn/ui + Magic UI
- [[03_Decisions#DEC-012]] — Lenis smooth scroll
- [[03_Decisions#DEC-013]] — Button con CVA

---

## v0.4.0 — 2026-07 · Features post-lanzamiento inicial

### Cambios (commits entre 2026-06-28 y 2026-07-09)
- ✅ Modal de cotización vía WhatsApp — overlay en página de servicios
- ✅ Rediseño visual de página de servicios
- ✅ Header hide-on-scroll — se oculta al bajar, reaparece al subir (solo móvil; desktop siempre visible)
- 🔄 Rediseño home — intentado y revertido (el diseño original se mantuvo)

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
