# 04 — Errores y Deuda Técnica

> [[00_Index]] · [[03_Decisions]] · [[06_Changelog]]

---

## 🚨 Bugs críticos activos

*(Todos los bugs críticos originales fueron resueltos — ver sección Historial)*

---

## ⚠️ Deuda técnica activa

### TD-002 — Información de contacto duplicada
**Afecta:** `components/layout/Footer.tsx` y `app/contacto/page.tsx`
**Problema:** El teléfono, email y dirección están escritos en dos lugares a pesar de que `lib/site.ts` existe para esto.
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
**Problema:** Los números de proyectos, hectáreas, años, etc. son inventados.
**Solución:** Reemplazar con datos reales cuando el cliente los provea.

---

### TD-006 — Mapa de contacto es placeholder
**Afecta:** `app/contacto/page.tsx`
**Problema:** La sección del mapa no está implementada.
**Solución:** Embed de Google Maps con la dirección real cuando el cliente la proporcione.

---

## ✅ Resuelto (historial)

| ID | Descripción | Fecha | Cómo se resolvió |
|----|-------------|-------|-----------------|
| BUG-001 | Mobile nav roto — hamburger redirigía a `/contacto` | 2026-06 | Estado `isMenuOpen` con `useState` + dropdown con `AnimatePresence` |
| BUG-002 | ContactForm no enviaba datos | 2026-06 | Ahora es stateful — genera mensaje WhatsApp vía `buildQuoteMessage` + `getWhatsAppUrl` |
| BUG-003 | Button no soportaba `type="button"` | 2026-07-09 | Reescrito con CVA: `href?` → `<Link>`, sin href → `<button>` nativo |
| BUG-005 | Scroll horizontal en móvil al cargar landing | 2026-07-09 | Ver [[04_Errors#BUG-005]] |
| BUG-006 | Clases Tailwind `text-*` ignoradas en todos los `<a>` del sitio | 2026-07-09 | Ver [[04_Errors#BUG-006]] |
| BUG-007 | Botón "Ver servicios" demasiado ancho en móvil | 2026-07-09 | Ver [[04_Errors#BUG-007]] |
| TD-001 | Colores hex hardcodeados en 15+ archivos | 2026-06 | Paleta de marca aplicada como variables CSS en todos los archivos |
| TD-001b | Variables CSS incorrectas tras shadcn init | 2026-07-09 | globals.css restaurado con colores de marca en hex, manteniendo estructura shadcn |

---

## BUG-005 — Scroll horizontal en móvil

**Síntoma:** Al cargar la landing page en móvil se podía hacer scroll lateral y ver un área blanca vacía.

**Causa raíz:** Dos fuentes de overflow simultáneas:
1. `WorkProcess.tsx` usaba `initial={{ x: ±70 }}` en Framer Motion sin `overflow-hidden` en la sección → los 70px de offset inicial ampliaban el `scrollWidth` del documento.
2. `overflow-x: hidden` solo en `body` no previene scroll horizontal en todos los browsers (el `html` element puede seguir scrolleando).

**Fix aplicado:**
```css
/* globals.css */
html  { overflow-x: clip;   } /* clip no crea scroll container → window.scrollY sigue funcionando */
body  { overflow-x: hidden; } /* segunda línea de defensa */
```
```tsx
/* WorkProcess.tsx */
<section className="overflow-hidden bg-white">
```

**Lección:** Nunca usar solo `body { overflow-x: hidden }`. Siempre `html { overflow-x: clip }` + `overflow-hidden` en secciones con entrance animations de Framer Motion con `x` offset.

---

## BUG-006 — Clases Tailwind `text-*` ignoradas en links

**Síntoma:** `text-white`, `text-[#1b6cb6]` y cualquier `text-*` en elementos `<a>` eran completamente ignorados. Links heredaban el color del body sin importar la clase aplicada. El bug afectaba TODO el sitio.

**Causa raíz:** La regla `a { color: inherit }` estaba fuera de cualquier `@layer`. En CSS, estilos sin layer tienen MAYOR especificidad que cualquier layer (incluyendo `@layer utilities` donde viven las clases de Tailwind). Jerarquía: `sin-layer > @layer utilities > @layer components > @layer base`.

**Fix aplicado:**
```css
/* globals.css — mover DENTRO de @layer base */
@layer base {
  a {
    color: inherit;
    text-decoration: none;
  }
}
```

**Lección:** Todo reset de `a`, `button`, `*` DEBE ir dentro de `@layer base`. Nunca fuera de un layer.

---

## BUG-007 — Botón "Ver servicios" demasiado ancho en móvil

**Síntoma:** El botón "Ver servicios" ocupaba el 100% del ancho en móvil, se veía como un bloque.

**Causa raíz:** El contenedor flex tenía `flex-col` en móvil. En `flex-col`, los hijos se estiran al 100% del ancho del padre por defecto (comportamiento `align-items: stretch`).

**Fix aplicado:**
```tsx
/* HeroSlider.tsx */
<div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
```
`items-start` cancela el stretch y los botones toman su tamaño natural (`width: fit-content`).

**Lección:** `flex-col` sin `items-start`/`items-center` estira children al 100% de ancho. Siempre verificar `align-items` al cambiar la dirección del flex.
