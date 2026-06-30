# AGENTS.md — Riegos y Soluciones Agrícolas del Norte

Instrucciones para Claude Code y cualquier agente de IA que trabaje en este proyecto.

---

## Contexto del proyecto

Sitio web comercial B2B para empresa colombiana de ingeniería agrícola y recursos hídricos.
**Objetivo principal:** Convertir visitantes en solicitudes de cotización — no es un portafolio decorativo.
**Regla central:** Conversión primero. Cada sección debe generar confianza, autoridad o acción.

---

## Segundo Cerebro — Leer antes de trabajar

Este proyecto tiene documentación viva en `docs-obsidian/`. Antes de cualquier tarea relevante:

```
docs-obsidian/
├── 00_Index.md       ← Estado actual, bugs activos, próximas tareas
├── 01_Project.md     ← Contexto comercial, servicios, objetivos
├── 02_Architecture.md ← Stack, componentes, rutas, estructura
├── 03_Decisions.md   ← Decisiones técnicas tomadas y por qué
├── 04_Errors.md      ← Bugs activos y deuda técnica
├── 05_Ideas.md       ← Mejoras futuras
├── 06_Changelog.md   ← Historial de cambios
├── 07_Prompts.md     ← Prompts probados para tareas frecuentes
├── 08_Workflows.md   ← Flujos de trabajo recomendados
├── 09_Glossary.md    ← Términos técnicos y de negocio
└── Daily/            ← Notas de sesión por fecha
```

**Para sesiones nuevas:** Leer `00_Index.md` primero para obtener contexto rápido.
**Para bugs:** Consultar `04_Errors.md` antes de implementar soluciones.
**Para nuevas features:** Verificar `03_Decisions.md` para respetar decisiones previas.

---

## Stack técnico

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| Next.js | ^16 | Framework (App Router) |
| React | ^19 | UI |
| TypeScript | ^5.7 | Lenguaje |
| Tailwind CSS | ^4.1 | Estilos (sin tailwind.config.ts) |
| Framer Motion | ^12 | Animaciones |
| Lucide React | ^0.468 | Iconos |

---

## Fuente única de verdad

| Dato | Archivo |
|------|---------|
| Contacto (tel, WhatsApp, email, URL, redes) | `lib/site.ts → siteConfig` |
| Contenido (servicios, proyectos, blog, etc.) | `data/*.ts` |
| Colores del sitio | `app/globals.css → :root variables` |
| Metadatos SEO | `lib/seo.ts → createMetadata()` |
| URL WhatsApp | `lib/whatsapp.ts → getWhatsAppUrl()` |

**Nunca** hardcodear datos de contacto, colores hex o URLs en componentes.

---

## Bugs críticos — resolver antes de cualquier otra cosa

1. **BUG-001** `components/layout/Header.tsx` — Hamburger redirige a /contacto en vez de abrir menú móvil
2. **BUG-002** `components/contact/ContactForm.tsx` — Formulario sin handler, no envía datos
3. **BUG-003** `components/ui/Button.tsx` — Solo soporta `href`, no puede ser `<button>`

Ver detalles completos en `docs-obsidian/04_Errors.md`.

---

## Reglas de desarrollo

### Arquitectura
- Separar datos (`data/`), lógica (`lib/`), presentación (`components/`), páginas (`app/`)
- Componentes en `components/ui/` deben ser primitivos reutilizables sin lógica de negocio
- Componentes específicos de dominio van en `components/[dominio]/`
- No crear abstracciones prematuras — tres líneas similares no necesitan un helper

### Código
- TypeScript estricto en todos los archivos
- Preferir Server Components — solo `"use client"` cuando sea necesario (hooks, eventos)
- Usar `cn()` de `lib/utils.ts` para combinar clases condicionales de Tailwind
- Usar variables CSS (`var(--primary)`) en vez de hex directos

### Contenido y conversión
- Toda sección debe tener un CTA claro (WhatsApp o cotización)
- Textos deben responder: qué hace la empresa, por qué confiar, cómo contactar
- No agregar secciones decorativas sin propósito de conversión

### Imágenes
- Usar `next/image` siempre, nunca `<img>`
- Imágenes externas deben estar en `remotePatterns` de `next.config.ts`
- Al agregar fotos propias, usar `public/images/[categoria]/`

---

## Sistema de mantenimiento automático del Segundo Cerebro

El Segundo Cerebro se mantiene actualizado **dentro de la misma sesión** en que se hacen los cambios. No es un paso opcional — es parte del flujo de entrega.

### Regla principal

> Ningún cambio significativo se considera completo hasta que docs-obsidian/ refleje ese cambio.

---

### Mapa de eventos → documentos a actualizar

| Evento | Documentos a actualizar | Qué registrar |
|--------|------------------------|---------------|
| Nuevo componente creado | `06_Changelog` + `02_Architecture` | Nombre, ubicación, props principales |
| Feature completa | `06_Changelog` + `00_Index` | Qué hace, qué archivos toca |
| Bug corregido | `04_Errors` (marcar ✅) + `06_Changelog` | Cómo se resolvió |
| Bug nuevo encontrado | `04_Errors` (nueva entrada BUG-XXX) | Síntoma, impacto, causa, solución esperada |
| Decisión técnica tomada | `03_Decisions` (nueva entrada DEC-XXX) | Qué, por qué, impacto |
| Cambio en estructura de carpetas | `02_Architecture` | Árbol actualizado |
| Datos del cliente recibidos | `01_Project` + `00_Index` | Qué llegó, qué falta |
| Idea nueva durante el trabajo | `05_Ideas` | IDEA-XXX con descripción e impacto |
| Dependencia nueva instalada | `02_Architecture#Stack` | Nombre, versión, uso |
| Sesión terminada | `Daily/YYYY-MM-DD.md` | Qué se hizo, qué quedó pendiente |

---

### Cuándo NO actualizar docs-obsidian/

- Cambios de formato o typos menores en código
- Ajustes de padding/margin sin impacto en arquitectura
- Comentarios en código
- Cambios que revierten otros cambios de la misma sesión

---

### Formato de entrada en 06_Changelog.md

```markdown
## v0.X.0 — YYYY-MM-DD · [Descripción corta]

### Cambios
- ✅ [Feature/componente implementado]
- 🐛 [Bug corregido] — ver [[04_Errors#BUG-XXX]]
- 🔧 [Deuda técnica resuelta]
- 📝 [Contenido/datos actualizado]

### Decisiones tomadas
- [[03_Decisions#DEC-XXX]] — resumen en una línea

### Queda pendiente
- [ ] [Lo que no se terminó en esta sesión]
```

---

### Formato de entrada en 03_Decisions.md

```markdown
## DEC-XXX — [Título de la decisión]

**Decisión:** Qué se decidió hacer (o no hacer).

**Por qué:** Razón técnica, comercial o de tiempo.

**Impacto:** Qué archivos/comportamientos cambia. Qué se debe saber para no romperlo.
```

---

### Formato de entrada en 04_Errors.md

```markdown
## BUG-XXX — [Título del bug]
**Archivo:** `ruta/al/archivo.tsx`
**Síntoma:** Lo que el usuario/desarrollador ve mal.
**Impacto:** 🔴 CRÍTICO / 🟡 MODERADO / 🟢 MENOR
**Causa:** Por qué ocurre.
**Solución esperada:** Cómo se debería resolver.
**Estado:** ⏳ Pendiente / ✅ Resuelto YYYY-MM-DD
```

---

## Flujo de trabajo Claude Code ↔ Git ↔ docs-obsidian/

```
┌──────────────────────────────────────────────────────────────┐
│  INICIO DE SESIÓN                                            │
│  └─ Leer 00_Index.md → contexto en 30 segundos              │
│  └─ Si tarea compleja → leer 03_Decisions + 04_Errors        │
└───────────────────────┬──────────────────────────────────────┘
                        │
                        ▼
┌──────────────────────────────────────────────────────────────┐
│  ANTES DE IMPLEMENTAR (cambios grandes)                      │
│  └─ Proponer plan → usuario aprueba → implementar            │
│  └─ Registrar decisión en 03_Decisions si aplica             │
└───────────────────────┬──────────────────────────────────────┘
                        │
                        ▼
┌──────────────────────────────────────────────────────────────┐
│  IMPLEMENTACIÓN                                              │
│  └─ Código siguiendo reglas de desarrollo de este AGENTS.md  │
│  └─ Si se encuentra un bug nuevo → registrar en 04_Errors    │
└───────────────────────┬──────────────────────────────────────┘
                        │
                        ▼
┌──────────────────────────────────────────────────────────────┐
│  POST-IMPLEMENTACIÓN (obligatorio)                           │
│  └─ Actualizar docs-obsidian/ según mapa de eventos          │
│  └─ Crear Daily/YYYY-MM-DD.md si no existe                   │
└───────────────────────┬──────────────────────────────────────┘
                        │
                        ▼
┌──────────────────────────────────────────────────────────────┐
│  GIT COMMIT                                                  │
│  └─ feat: / fix: / content: / docs: / chore: / refactor:    │
│  └─ El commit incluye tanto el código como docs-obsidian/    │
└──────────────────────────────────────────────────────────────┘
```

**Regla Git:** Los commits de código y de documentación van juntos en el mismo commit — nunca documentar en un commit separado posterior que se olvida hacer.

---

## Flujo de trabajo recomendado (resumen rápido)

```
1. Leer docs-obsidian/00_Index.md
2. Consultar 03_Decisions y 04_Errors para contexto de la tarea
3. Proponer plan si el cambio afecta múltiples archivos
4. Implementar
5. Actualizar docs-obsidian/ según tabla de eventos
6. Commit único: código + documentación juntos
```

Ver `docs-obsidian/08_Workflows.md` para flujos detallados y prompts listos para usar.

---

## Roadmap — estado actual

```
Fase 1 — Base              ✅ Completada
Fase 2 — Componentes       ✅ Completada
Fase 3 — Páginas           ✅ Completada
Fase 4 — Contenido real    ⏳ Requiere info del cliente
Fase 5 — Optimización      ⏳ Pendiente
Fase 6 — Publicación       ⏳ Pendiente
```
