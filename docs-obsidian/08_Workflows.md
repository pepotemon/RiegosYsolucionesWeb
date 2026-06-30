# 08 — Flujos de Trabajo

> [[00_Index]] · [[07_Prompts]] · [[06_Changelog]]

---

## Flujo de trabajo diario con Claude Code

### Al iniciar una sesión de trabajo

1. Abrir Claude Code en el proyecto
2. Claude lee automáticamente `AGENTS.md` al iniciar
3. Si es una sesión larga o nueva, pedir resumen:
   ```
   Lee docs-obsidian/00_Index.md y dame el estado actual del proyecto en 5 puntos.
   ```
4. Identificar la tarea del día
5. Si la tarea es compleja, pedir plan antes de implementar:
   ```
   Antes de implementar [TAREA], analiza el código relevante y propón un plan de 3-5 pasos.
   ```

---

### Al terminar una sesión de trabajo

1. Pedir actualización de documentación:
   ```
   Actualiza docs-obsidian/ con los cambios de esta sesión:
   - 06_Changelog.md: qué se implementó hoy
   - 04_Errors.md: bugs resueltos o nuevos encontrados
   - 03_Decisions.md: si se tomó alguna decisión técnica relevante
   ```
2. Hacer commit con mensaje descriptivo
3. Actualizar el checklist en `00_Index.md` si hay progreso

---

## Flujo de trabajo con Git

### Commits recomendados

```bash
# Nuevo componente o feature
git commit -m "feat: implementar menú móvil en Header"

# Corrección de bug
git commit -m "fix: corregir navegación hamburger que redirigía a /contacto"

# Actualización de datos/contenido
git commit -m "content: agregar proyecto Finca La Esperanza con fotos reales"

# Documentación
git commit -m "docs: actualizar changelog y architecture en docs-obsidian"

# Refactor
git commit -m "refactor: migrar colores hex a CSS variables en components/"

# Deuda técnica
git commit -m "chore: agregar error.tsx y not-found.tsx"
```

### Flujo para cambios grandes

```
main
├── feat/menu-movil         # Bug BUG-001
├── feat/formulario-envio   # Bug BUG-002
├── feat/button-refactor    # Bug BUG-003
└── content/datos-reales    # Fase 4 — datos del cliente
```

---

## Flujo para actualizar contenido del cliente

Cuando el cliente entregue información real:

### 1. Datos de contacto
- Editar `lib/site.ts` únicamente
- Verificar que Footer y /contacto los muestren correctamente
- Commit: `content: actualizar datos de contacto reales`

### 2. Imágenes
- Subir a `public/images/[categoria]/`
- Reemplazar URLs de Unsplash en `/data/*.ts`
- Verificar `next.config.ts` si se usan dominios externos propios
- Commit: `content: reemplazar imágenes placeholder con fotos reales`

### 3. Proyectos nuevos
- Agregar entrada en `data/projects.ts`
- Slug en kebab-case del nombre del proyecto
- Incluir: nombre, ubicación, cultivo, área, servicio, problema, solución, resultado, imágenes
- Commit: `content: agregar proyecto [nombre]`

### 4. Estadísticas reales
- Editar `data/services.ts` → sección `trustStats`
- Editar `app/page.tsx` si los números están hardcodeados
- Commit: `content: actualizar estadísticas con datos reales`

---

## Flujo de relación Claude Code ↔ docs-obsidian ↔ Git

```
┌─────────────────────────────────────────────────────┐
│                   SESIÓN DE TRABAJO                 │
│                                                     │
│  1. Claude lee AGENTS.md + docs-obsidian/           │
│     (contexto completo del proyecto)                │
│                  ↓                                  │
│  2. Usuario pide tarea                              │
│                  ↓                                  │
│  3. Claude analiza código relevante                 │
│     (respeta decisiones en 03_Decisions)            │
│                  ↓                                  │
│  4. Claude implementa cambio                        │
│                  ↓                                  │
│  5. Claude actualiza docs-obsidian/                 │
│     - 06_Changelog: qué cambió                      │
│     - 04_Errors: bug resuelto / nuevo              │
│     - 03_Decisions: si hubo decisión nueva          │
│                  ↓                                  │
│  6. Git commit con mensaje descriptivo              │
│                  ↓                                  │
│  7. Siguiente tarea o cerrar sesión                 │
└─────────────────────────────────────────────────────┘
```

---

## Protocolo de cambios importantes

Antes de refactors grandes o cambios de arquitectura:

1. Registrar la decisión en `03_Decisions.md` con el número siguiente (DEC-XXX)
2. Comunicar al usuario el impacto esperado
3. Pedir confirmación si el cambio afecta múltiples archivos
4. Implementar
5. Actualizar `06_Changelog.md`

---

## Comando rápido de estado

Pegar esto al iniciar cualquier sesión nueva para contexto inmediato:

```
Soy Claude Code trabajando en el sitio web de Riegos y Soluciones Agrícolas del Norte.
Lee docs-obsidian/00_Index.md y dame:
1. Los 3 bugs más críticos activos
2. El estado del roadmap
3. Qué datos del cliente faltan
Luego te digo qué hacemos hoy.
```
