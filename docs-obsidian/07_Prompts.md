# 07 — Prompts para Claude Code

> [[00_Index]] · [[08_Workflows]]

Prompts probados y optimizados para tareas frecuentes en este proyecto.

---

## Mantenimiento del Segundo Cerebro

### Actualizar documentación tras cambios
```
Analiza los cambios recientes del proyecto y actualiza docs-obsidian/:
- 06_Changelog.md: registra qué se cambió y por qué
- 04_Errors.md: marca como resuelto cualquier bug corregido, agrega nuevos
- 03_Decisions.md: registra cualquier decisión técnica nueva
- 02_Architecture.md: actualiza si cambió la estructura de carpetas o componentes
No modifiques código de negocio. Solo actualiza la documentación.
```

### Sincronizar estado del proyecto
```
Lee docs-obsidian/00_Index.md y dime:
1. Qué bugs críticos siguen activos
2. Qué está en el roadmap para esta semana
3. Qué información del cliente sigue faltando
```

---

## Corrección de bugs

### Arreglar menú móvil
```
En components/layout/Header.tsx hay un bug: el botón hamburguesa del menú móvil
redirige a /contacto en vez de abrir el menú. 
Implementa un menú móvil tipo drawer/overlay con useState que muestre los 7 items
de navegación de lib/site.ts. Debe tener botón de cierre y cerrar al hacer clic
en un link. Revisa primero 04_Errors.md#BUG-001 para contexto.
```

### Implementar envío del formulario
```
En components/contact/ContactForm.tsx el formulario no envía nada.
Implementa el envío usando EmailJS (sin backend) o un Server Action de Next.js.
Los campos son: nombre, empresa, teléfono, whatsapp, correo, departamento,
municipio, cultivo, hectáreas, servicio, mensaje.
Al enviar con éxito: mostrar mensaje de confirmación. Al fallar: mostrar error.
Ver 04_Errors.md#BUG-002 para contexto completo.
```

---

## Actualización de contenido

### Reemplazar datos de contacto
```
El cliente ha enviado sus datos reales. Actualiza lib/site.ts con:
- Teléfono: [NÚMERO]
- WhatsApp: [NÚMERO sin + ni espacios]
- Email: [EMAIL]
- URL: [DOMINIO]
- Facebook: [URL]
- Instagram: [URL]
Verifica que el Footer y la página /contacto usen estos datos vía siteConfig.
```

### Agregar proyecto nuevo
```
Agrega un nuevo proyecto al catálogo en data/projects.ts con esta información:
[PEGAR DATOS DEL PROYECTO]
El slug debe ser kebab-case del nombre. Revisa la estructura del tipo Project
en types/project.ts para asegurarte de incluir todos los campos requeridos.
```

### Agregar servicio nuevo
```
Agrega un nuevo servicio en data/services.ts. Nombre: [NOMBRE].
Usa la estructura exacta del tipo Service en types/service.ts.
Incluye: slug, title, shortDescription, description, audience, 3 benefits,
5 pasos del proceso, 2 FAQs. El icon debe ser de lucide-react.
```

---

## Revisiones de calidad

### Auditoría de conversión
```
Revisa todas las páginas del sitio y dime:
1. Qué páginas no tienen un CTA claro de contacto/cotización
2. Qué secciones tienen texto genérico que debería ser más específico
3. Dónde falta el botón/link de WhatsApp
Prioriza por impacto en conversión. Referencia 01_Project.md para el objetivo comercial.
```

### Auditoría SEO
```
Revisa lib/seo.ts y todas las páginas con generateMetadata.
Dime qué páginas tienen metadata incompleta (título, descripción, OG image).
Sugiere mejoras basadas en las palabras clave en 01_Project.md#SEO.
```

### Auditoría de deuda técnica
```
Busca en todos los archivos de components/ usos de colores hex directos
(#12663f, #10231c, #0f7da3, etc.) que deberían ser variables CSS.
Lista los archivos afectados y propone el plan de migración.
Ver 04_Errors.md#TD-001 para contexto.
```

---

## Optimización y refactor

### Refactorizar Button para soportar `<button>`
```
El componente components/ui/Button.tsx solo soporta href (siempre renderiza <a>).
Refactorizalo para que acepte también type="button" | "submit" y renderice
un <button> HTML cuando no se pasa href.
El ContactForm usa estilos duplicados del botón — después del refactor, 
debería poder usar <Button type="submit">.
Ver 04_Errors.md#BUG-003 para contexto.
```

### Agregar JSON-LD structured data
```
Agrega JSON-LD schema de tipo LocalBusiness en app/layout.tsx.
Usa los datos de lib/site.ts. El schema debe incluir:
name, url, telephone, email, address, geo (si disponible),
openingHours, sameAs (redes sociales), serviceType.
Ver 04_Errors.md#TD-003 y 03_Decisions.md para contexto.
```

---

## Preparación para despliegue

### Checklist de producción
```
Revisa el proyecto y dime qué falta para hacer el deploy en Vercel:
1. Variables de entorno necesarias
2. Imágenes o assets faltantes
3. Errores de TypeScript o build
4. Metadatos SEO incompletos
5. Links rotos o rutas 404
6. Formulario sin funcionar (BUG-002)
7. Performance issues obvios
Genera un checklist priorizado.
```
