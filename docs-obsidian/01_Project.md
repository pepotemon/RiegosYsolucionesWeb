# 01 — Proyecto

> [[00_Index]] · [[02_Architecture]] · [[03_Decisions]]

---

## Información comercial

| Campo | Valor |
|-------|-------|
| Nombre | Riegos y Soluciones Agrícolas del Norte |
| Tipo | Sitio web comercial B2B |
| País | Colombia |
| Cliente | Colega/amiga del desarrollador |
| Precio acordado | $1.000.000 COP |
| Meta adicional | Plantilla reutilizable para futuros proyectos |

---

## Objetivo del sitio

El sitio **no es un portafolio estático**. Es el vendedor digital de la empresa. Cada sección debe:

- Generar solicitudes de cotización
- Mostrar proyectos realizados como prueba social
- Crear confianza mediante autoridad técnica
- Explicar servicios con claridad
- Facilitar contacto inmediato por WhatsApp
- Posicionar en Google con SEO local y artículos

---

## Servicios de la empresa

1. Sistemas de riego
2. Recursos hídricos
3. Pozos profundos
4. Sistemas de bombeo
5. Automatización agrícola
6. Energía solar
7. Mantenimiento

---

## Sectores que atiende

Agricultura · Ganadería · Palma · Café · Banano · Arroz · Invernaderos · Agroindustria

---

## Páginas del sitio

| Ruta | Descripción |
|------|-------------|
| `/` | Homepage — Hero, stats, servicios, proceso, proyectos, sectores, testimonios, CTA |
| `/servicios` | Lista de los 7 servicios |
| `/servicios/[slug]` | Detalle: descripción, beneficios, proceso, FAQs, proyectos relacionados |
| `/proyectos` | Lista de casos de éxito |
| `/proyectos/[slug]` | Detalle: problema → solución → resultado + galería |
| `/catalogo` | 6 productos con filtros por categoría |
| `/blog` | 5 artículos SEO |
| `/blog/[slug]` | Artículo completo |
| `/nosotros` | Historia, misión, visión, valores, equipo |
| `/contacto` | Formulario de cotización + mapa (placeholder) |

---

## Secciones del Home (en orden)

1. HeroSlider — 4 slides, cambio cada 3.8s, textos animados
2. Stats — 4 indicadores de confianza (números placeholder)
3. Servicios principales — grid 3 columnas
4. Cómo trabajamos — WorkProcess 5 pasos interactivo con animaciones SVG
5. Proyectos destacados — 3 cases de éxito
6. Sectores que atendemos — 8 badges
7. Testimonios — carrusel infinito CSS con 9 clientes
8. CTA final — enlace directo a WhatsApp

---

## Datos del cliente pendientes

> ⚠️ Toda esta información es placeholder. Debe reemplazarse con datos reales.

- [ ] Logo y favicon
- [ ] Colores corporativos reales
- [ ] Historia de la empresa
- [ ] Misión y visión definitivas
- [ ] Valores corporativos
- [ ] Teléfono real
- [ ] WhatsApp real
- [ ] Correo electrónico real
- [ ] Dirección física
- [ ] Link a Google Maps
- [ ] Redes sociales reales (Facebook, Instagram, LinkedIn)
- [ ] Estadísticas reales (años de experiencia, proyectos, cobertura)
- [ ] Fotografías de proyectos reales (antes/durante/después)
- [ ] Testimonios reales con nombre y empresa
- [ ] Proyectos reales documentados
- [ ] Productos/equipos que comercializan
- [ ] Fichas técnicas de productos

---

## Formulario de cotización — campos

```
Nombre · Empresa · Teléfono · WhatsApp · Correo
Departamento · Municipio · Tipo de cultivo
Número de hectáreas · Servicio requerido · Mensaje
```

---

## Plan incluido / no incluido

**Incluye:**
Web completa · Home · Servicios individuales · Portafolio · Catálogo · Blog · Nosotros · Contacto · Formulario de cotización · Botón WhatsApp · Diseño responsive · SEO básico

**No incluye (futuro):**
CRM · Panel admin · WhatsApp API · Portal clientes · Portal técnicos · Pasarela de pagos · E-commerce

---

## SEO — palabras clave objetivo

sistemas de riego en Colombia · riego agrícola · soluciones agrícolas · recursos hídricos · pozos profundos · sistemas de bombeo · riego por goteo · riego por aspersión · ingeniería agrícola · soluciones hídricas para fincas

→ Ver plan completo en [[02_Architecture#SEO]]
