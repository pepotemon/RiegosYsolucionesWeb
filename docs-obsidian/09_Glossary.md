# 09 — Glosario

> [[00_Index]] · [[01_Project]] · [[02_Architecture]]

Términos técnicos y de negocio usados en este proyecto.

---

## Términos de negocio

**Riego tecnificado**
Sistema de riego diseñado e instalado profesionalmente (goteo, aspersión, microaspersión) en contraste con el riego por gravedad o manguera manual.

**Riego por goteo**
Sistema que lleva agua directamente a la raíz de la planta mediante tuberías y goteros. Alta eficiencia hídrica. Ideal para frutales, hortalizas, café.

**Riego por aspersión**
Sistema que distribuye agua en forma de lluvia mediante aspersores. Cubre grandes áreas. Ideal para pasturas, palma, arroz.

**Pozo profundo**
Perforación en el subsuelo para extraer agua subterránea (acuífero). Alternativa cuando no hay fuentes superficiales disponibles.

**Sistema de bombeo**
Conjunto de equipos (bomba, motor, tablero eléctrico) para mover agua desde una fuente hasta el punto de uso o sistema de riego.

**Automatización agrícola**
Uso de controladores, sensores y electroválvulas para regar automáticamente según programación o condiciones del suelo, sin intervención manual.

**Bombeo solar**
Sistema de bombeo que usa paneles solares como fuente de energía. Elimina costos de electricidad en zonas remotas.

**Hectárea (ha)**
Unidad de medida de área. 1 ha = 10.000 m². Referencia para dimensionar sistemas de riego.

**Caudal**
Volumen de agua que fluye por unidad de tiempo (litros/segundo o m³/hora). Determina el tamaño de la bomba y tuberías.

**Presión (PSI / Bar)**
Fuerza del agua en el sistema. Determina el tipo de aspersores o goteros a usar.

**Cultivo**
Tipo de planta que el cliente produce (palma, café, banano, arroz, hortalizas, pasturas, etc.).

**Finca**
Propiedad rural donde se realiza la actividad agrícola o ganadera. Equivalente a "rancho" o "hacienda" en otros países.

**Agroindustria**
Empresa que procesa productos agrícolas (aceite de palma, café tostado, azúcar, etc.).

---

## Términos técnicos del stack

**App Router**
Sistema de enrutamiento de Next.js 13+. Las rutas se definen por carpetas en `/app`. Los componentes son Server Components por defecto.

**Server Component**
Componente de React que se renderiza en el servidor. No tiene acceso a estado, eventos del navegador ni APIs del cliente. Más performante.

**Client Component**
Componente marcado con `"use client"`. Tiene acceso a hooks, estado, eventos. Necesario para interactividad.

**generateStaticParams**
Función de Next.js que pre-genera rutas dinámicas en build time. Usada en `/servicios/[slug]`, `/proyectos/[slug]`, `/blog/[slug]`.

**Server Action**
Función marcada con `"use server"` que se ejecuta en el servidor al ser llamada desde el cliente (formularios, botones). Solución para el formulario de contacto.

**siteConfig**
Objeto exportado desde `lib/site.ts` con toda la información del sitio (nombre, contacto, redes). Fuente única de verdad.

**MotionReveal**
Componente wrapper (`components/ui/MotionReveal.tsx`) que aplica animación de entrada (reveal) con Framer Motion cuando el elemento entra en el viewport.

**cn()**
Función utilitaria en `lib/utils.ts` que combina clases de Tailwind usando `clsx`. Evita conflictos entre clases condicionales.

**getWhatsAppUrl()**
Función en `lib/whatsapp.ts` que genera URLs `https://wa.me/573000000000?text=...` con mensaje prellenado.

**trustStats**
Array en `data/services.ts` con las 4 estadísticas de confianza mostradas en el homepage (proyectos, cobertura, equipo, personalización).

**workProcess**
Array en `data/services.ts` con los 5 pasos del proceso de trabajo de la empresa, renderizados en el componente `WorkProcess.tsx`.

**slug**
Identificador URL de un recurso. Ejemplo: el servicio "Sistemas de Riego" tiene slug `sistemas-de-riego`, accesible en `/servicios/sistemas-de-riego`.

**remotePatterns**
Configuración en `next.config.ts` que permite a `next/image` cargar imágenes de dominios externos (actualmente solo `images.unsplash.com`).

---

## Abreviaciones usadas en el proyecto

| Abreviación | Significado |
|------------|-------------|
| CTA | Call to Action (llamado a la acción) |
| SEO | Search Engine Optimization |
| OG | Open Graph (metadatos para redes sociales) |
| DX | Developer Experience |
| SSR | Server-Side Rendering |
| SSG | Static Site Generation |
| CMS | Content Management System |
| CRM | Customer Relationship Management |
| TD | Technical Debt (deuda técnica) |
| BUG | Error activo en el sistema |
| DEC | Decision (decisión técnica registrada) |
| IDEA | Mejora o funcionalidad futura |
