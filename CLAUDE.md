# CLAUDE.md — Riegos y Soluciones Agrícolas del Norte

## Segundo Cerebro (Obsidian)

Este proyecto tiene un vault de Obsidian en `docs-obsidian/`. Es el cerebro vivo del proyecto.

**REGLA OBLIGATORIA:** Al final de cada sesión de trabajo — antes de hacer el último commit o al terminar — debes actualizar los archivos de Obsidian relevantes:

| Archivo | Cuándo actualizar |
|---|---|
| `docs-obsidian/06_Changelog.md` | Siempre — registrar qué se hizo, versión y fecha |
| `docs-obsidian/03_Decisions.md` | Si se tomó una decisión técnica importante |
| `docs-obsidian/04_Errors.md` | Si se resolvió o descubrió un bug |
| `docs-obsidian/05_Ideas.md` | Si surgió una idea para el futuro |
| `docs-obsidian/00_Index.md` | Si cambió el estado general del proyecto |

El formato del Changelog es:
```
## vX.Y.Z — YYYY-MM-DD · Título corto

- ✅ Qué se hizo
- ✅ Qué se hizo
```

Incrementar versión: patch (0.0.X) para fixes, minor (0.X.0) para features.

---

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- TailwindCSS v4 + Framer Motion (motion/react) + Lucide React
- Imágenes: Next/Image con Unsplash (placeholders)

## Design System

El diseño de referencia es `SectoresSection`. Ver `docs-obsidian/03_Decisions.md` para el sistema completo.

Paleta principal:
- Azul oscuro: `#082033`
- Verde acento: `#2DBA45`  
- Azul primario: `#0077C8`
- Fondo: `linear-gradient(#F3F9FF → #FFFFFF)`

## Reglas del proyecto

- Primero conversión, después decoración
- Sin comentarios innecesarios en el código
- Commitear con mensajes descriptivos en español usando feat/fix/chore
- Siempre `npx tsc --noEmit` antes de commitear
