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
Fase 4 — Contenido real           ⏳ Pendiente (requiere info del cliente)
Fase 5 — Optimización             ⏳ Pendiente
Fase 6 — Publicación              ⏳ Pendiente
```

---

## 🚨 Bugs críticos activos

1. **Mobile nav roto** → Hamburger redirige a `/contacto` en vez de abrir menú
2. **ContactForm no envía** → Sin handler, sin server action, es decorativo
3. **Button no acepta `type`** → Solo soporta `href`, no puede ser `<button>`

→ Ver detalles en [[04_Errors]]

---

## 📋 Próximas tareas prioritarias

- [ ] Corregir navegación móvil
- [ ] Implementar envío del formulario (Server Action o EmailJS)
- [ ] Refactorizar Button para soportar `as="button"`
- [ ] Obtener información real del cliente (teléfono, email, logo, fotos)
- [ ] Reemplazar imágenes Unsplash con fotos reales

---

## 🔑 Contexto rápido para IA

- **Proyecto:** Sitio web comercial B2B para empresa colombiana de riego agrícola
- **Stack:** Next.js 16 · React 19 · TypeScript · Tailwind v4 · Framer Motion 12
- **Datos:** En `/data/*.ts` — editables sin tocar componentes
- **Config central:** `lib/site.ts` — teléfono, WhatsApp, email, URL, redes
- **Colores:** Variables CSS en `app/globals.css`
- **Conversión primero** — cada sección debe llevar al usuario a cotizar
