import {
  BadgeCheck,
  Droplets,
  Gauge,
  Hammer,
  Leaf,
  Settings2,
  SunMedium,
  Waves,
} from "lucide-react";
import type { Service } from "@/types/service";

const serviceImage =
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1400&q=80";

export const services: Service[] = [
  {
    slug: "sistemas-de-riego",
    title: "Sistemas de riego",
    shortDescription: "Diseno e instalacion de riego por goteo, aspersion y soluciones tecnificadas.",
    description:
      "Desarrollamos sistemas de riego ajustados al cultivo, fuente hidrica, topografia y metas productivas del cliente.",
    image: serviceImage,
    icon: Droplets,
    audience: ["Fincas agricolas", "Productores con expansion de area", "Cultivos que requieren uniformidad hidrica"],
    benefits: ["Mejor aprovechamiento del agua", "Mayor uniformidad de aplicacion", "Operacion mas ordenada y medible"],
    process: ["Diagnostico hidrico", "Levantamiento tecnico", "Diseno hidraulico", "Instalacion", "Puesta en marcha"],
    faqs: [
      {
        question: "Que sistema de riego necesita mi cultivo?",
        answer: "Depende del tipo de cultivo, area, suelo, fuente de agua, presion disponible y objetivos productivos.",
      },
      {
        question: "Realizan visita tecnica?",
        answer: "Si. La visita permite validar condiciones reales y preparar una propuesta mas precisa.",
      },
    ],
    relatedProjectSlugs: ["riego-tecnificado-finca-la-esperanza"],
  },
  {
    slug: "recursos-hidricos",
    title: "Recursos hidricos",
    shortDescription: "Evaluacion, captacion, conduccion y uso eficiente del agua para proyectos rurales.",
    description:
      "Acompanamos decisiones tecnicas sobre disponibilidad, almacenamiento, conduccion y distribucion de agua en predios productivos.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1400&q=80",
    icon: Waves,
    audience: ["Predios con limitaciones de agua", "Agroindustrias", "Proyectos en etapa de planeacion"],
    benefits: ["Planeacion hidrica clara", "Reduccion de desperdicios", "Mejor capacidad de abastecimiento"],
    process: ["Revision de fuentes", "Analisis de necesidad", "Propuesta tecnica", "Ejecucion", "Seguimiento"],
    faqs: [
      {
        question: "Pueden ayudar si no conozco mi caudal disponible?",
        answer: "Si. Se puede iniciar con una visita y mediciones preliminares para orientar el proyecto.",
      },
    ],
    relatedProjectSlugs: ["riego-tecnificado-finca-la-esperanza"],
  },
  {
    slug: "pozos-profundos",
    title: "Pozos profundos",
    shortDescription: "Soluciones para captacion subterranea, equipos y operacion segura del sistema.",
    description:
      "Orientamos proyectos de pozos profundos desde el analisis inicial hasta la seleccion de equipos de bombeo y proteccion.",
    image: "https://images.unsplash.com/photo-1596120236172-231999844ade?auto=format&fit=crop&w=1400&q=80",
    icon: Gauge,
    audience: ["Fincas sin fuente superficial estable", "Proyectos ganaderos", "Cultivos en zonas secas"],
    benefits: ["Mayor autonomia hidrica", "Suministro estable", "Equipos seleccionados segun condicion real"],
    process: ["Evaluacion del predio", "Revision tecnica", "Seleccion de bomba", "Instalacion", "Pruebas"],
    faqs: [
      {
        question: "Cuando conviene perforar un pozo profundo?",
        answer: "Cuando el proyecto requiere una fuente alternativa y existe viabilidad tecnica, legal y operativa.",
      },
    ],
    relatedProjectSlugs: ["bombeo-solar-unidad-productiva-norte"],
  },
  {
    slug: "sistemas-de-bombeo",
    title: "Sistemas de bombeo",
    shortDescription: "Bombeo agricola, tableros, protecciones y soluciones para transporte de agua.",
    description:
      "Dimensionamos e instalamos sistemas de bombeo para riego, abastecimiento, drenaje y operacion agroindustrial.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    icon: Settings2,
    audience: ["Productores que necesitan mover agua", "Sistemas existentes con fallas", "Proyectos de riego nuevos"],
    benefits: ["Menos fallas", "Consumo energetico optimizado", "Mejor presion y caudal operativo"],
    process: ["Calculo de demanda", "Seleccion de equipo", "Tablero y protecciones", "Montaje", "Capacitacion"],
    faqs: [
      {
        question: "Como se selecciona una bomba?",
        answer: "Se define con caudal requerido, altura dinamica, tipo de energia, calidad del agua y uso final.",
      },
    ],
    relatedProjectSlugs: ["bombeo-solar-unidad-productiva-norte"],
  },
  {
    slug: "automatizacion-agricola",
    title: "Automatizacion agricola",
    shortDescription: "Control de riego, sensores, programacion, valvulas y tableros inteligentes.",
    description:
      "Implementamos automatizacion por etapas para mejorar precision, ahorrar tiempo y controlar variables criticas del cultivo.",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1400&q=80",
    icon: BadgeCheck,
    audience: ["Invernaderos", "Cultivos de alto valor", "Fincas con operacion repetitiva"],
    benefits: ["Menos operacion manual", "Mayor precision", "Datos para tomar decisiones"],
    process: ["Diagnostico", "Diseno de control", "Instalacion", "Programacion", "Acompanamiento"],
    faqs: [
      {
        question: "Se puede automatizar un sistema existente?",
        answer: "En muchos casos si. Primero se revisan presiones, valvulas, filtracion y estado electrico.",
      },
    ],
    relatedProjectSlugs: ["automatizacion-invernadero-hortalizas"],
  },
  {
    slug: "energia-solar",
    title: "Energia solar",
    shortDescription: "Sistemas solares aplicados a bombeo, abastecimiento y operacion rural.",
    description:
      "Integramos energia solar en soluciones de campo para reducir dependencia de combustibles y mejorar continuidad operativa.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80",
    icon: SunMedium,
    audience: ["Predios aislados", "Ganaderia", "Sistemas de bombeo con alto costo energetico"],
    benefits: ["Menor gasto operativo", "Operacion mas estable", "Solucion escalable"],
    process: ["Calculo energetico", "Diseno solar", "Montaje", "Protecciones", "Entrega tecnica"],
    faqs: [
      {
        question: "El bombeo solar funciona todos los dias?",
        answer: "El diseno considera radiacion, demanda diaria y almacenamiento para dar continuidad al suministro.",
      },
    ],
    relatedProjectSlugs: ["bombeo-solar-unidad-productiva-norte"],
  },
  {
    slug: "mantenimiento",
    title: "Mantenimiento",
    shortDescription: "Revision, correctivos y mejora de sistemas hidraulicos y agroindustriales.",
    description:
      "Realizamos mantenimiento preventivo y correctivo para prolongar la vida util de equipos y evitar paradas costosas.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80",
    icon: Hammer,
    audience: ["Sistemas con baja presion", "Equipos con fallas recurrentes", "Empresas agroindustriales"],
    benefits: ["Menos paradas", "Mayor vida util", "Operacion mas confiable"],
    process: ["Inspeccion", "Diagnostico", "Plan de accion", "Intervencion", "Reporte"],
    faqs: [
      {
        question: "Atienden sistemas instalados por terceros?",
        answer: "Si. Se revisa el estado actual y se propone un plan de mejora o mantenimiento.",
      },
    ],
    relatedProjectSlugs: ["riego-tecnificado-finca-la-esperanza"],
  },
];

export const workProcess = [
  {
    title: "Analizamos su necesidad",
    description:
      "Antes de hablar de equipos o costos, nos interesa entender el proyecto real: que cultivo maneja, que problemas enfrenta con el agua, cual es su escala productiva y que espera lograr. Esta conversacion inicial nos permite identificar si la solucion es un sistema de riego, una mejora de bombeo, un recurso hidrico nuevo o una combinacion de varias cosas. No proponemos nada hasta tener claridad sobre lo que realmente necesita.",
  },
  {
    title: "Realizamos visita tecnica",
    description:
      "Una propuesta sin visita es una suposicion. Por eso desplazamos a nuestro equipo al predio para tomar medidas reales: topografia, presion disponible, caudal de la fuente, condicion del suelo, distancias de conduccion y estado de la infraestructura existente. Esa informacion de campo es la base de un diseno preciso y de un presupuesto sin sorpresas. Sin visita, no emitimos propuesta tecnica.",
  },
  {
    title: "Disenamos la solucion",
    description:
      "Con los datos de campo, elaboramos el diseno tecnico del sistema: calculo hidraulico, seleccion de equipos, esquema de instalacion y especificaciones de materiales. Todo queda documentado en una memoria de calculo que usted puede revisar, comparar y aprobar antes de que iniciemos cualquier obra. El diseno es propio, no un catalogo generico: se ajusta a su predio, su presupuesto y sus metas productivas.",
  },
  {
    title: "Instalamos el sistema",
    description:
      "La instalacion la realizamos con nuestro propio equipo tecnico, usando materiales certificados y siguiendo los protocolos definidos en el diseno. Durante la ejecucion mantenemos comunicacion constante con el cliente, registramos el avance y resolvemos en campo cualquier ajuste que requiera la realidad del terreno. Entregamos el sistema probado, con presiones verificadas, caudales medidos y cada componente en su lugar.",
  },
  {
    title: "Brindamos soporte",
    description:
      "La entrega del sistema no es el final de nuestro trabajo. Capacitamos al operario o encargado del predio para que pueda manejar, programar y realizar el mantenimiento basico del sistema con confianza. Ademas, dejamos un canal de comunicacion abierto para resolver dudas, atender ajustes y acompañar el proyecto en su primera temporada de operacion. Queremos que el sistema funcione bien, no solo que quede instalado.",
  },
];

export const trustStats = [
  { value: "40+", label: "Años de experiencia técnica combinada" },
  { value: "35", label: "Años de especialización en campo" },
  { value: "8", label: "Años liderando proyectos de ingeniería" },
  { value: "100%", label: "Soluciones diseñadas a medida" },
];
