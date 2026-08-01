import {
  BadgeCheck,
  Droplets,
  Gauge,
  Hammer,
  Settings2,
  SunMedium,
  Waves,
} from "lucide-react";
import type { Service } from "@/types/service";

const serviceImage = "/images/servicios/riego-goteo-pimenton-2.png";

export const services: Service[] = [
  {
    slug: "sistemas-de-riego",
    title: "Sistemas de riego",
    shortDescription: "Riego por goteo, aspersión, microaspersión, pivotes y soluciones especiales a la medida de cada proyecto.",
    description:
      "Diseñamos e implementamos sistemas de riego tecnificado adaptados a las condiciones reales de cada predio: tipo de cultivo, fuente hídrica, topografía, suelo y metas productivas. Trabajamos con riego por goteo, aspersión, microaspersión, pivotes centrales y soluciones especiales para cultivos con requerimientos específicos. Cada sistema es calculado hidráulicamente, instalado con materiales certificados y entregado con las presiones y caudales verificados. El resultado es un sistema que ahorra agua, mejora la uniformidad de aplicación y opera con eficiencia desde el primer día.",
    image: serviceImage,
    videos: [
      { src: "/images/servicios/riego-goteo-pimenton-2.png",   label: "Riego por goteo en pimentón", type: "image" as const },
      { src: "/videos/servicios/riego-goteo-invernadero.mp4", label: "Cinta de goteo en invernadero de pimentón" },
      { src: "/videos/servicios/riego-goteo-pimenton.mp4",    label: "Goteo en campo abierto · pimentón" },
      { src: "/videos/servicios/riego-goteo-papaya.mp4",      label: "Goteo en cultivo de papaya" },
    ],
    icon: Droplets,
    audience: [
      "Agricultores con cultivos de ciclo corto y largo",
      "Predios en expansión que requieren nuevos sistemas",
      "Productores que buscan mejorar el riego existente",
      "Proyectos de horticultura, fruticultura y extensivos",
    ],
    benefits: [
      "Reducción del consumo de agua entre 30% y 50%",
      "Mayor uniformidad y mejor desarrollo del cultivo",
      "Menor dependencia de mano de obra operativa",
      "Sistemas escalables que crecen con el proyecto",
    ],
    process: [
      "Diagnóstico hídrico y revisión de la fuente",
      "Levantamiento técnico del predio",
      "Diseño hidráulico y selección de componentes",
      "Instalación y montaje por equipo propio",
      "Puesta en marcha, pruebas y capacitación",
    ],
    faqs: [
      {
        question: "¿Qué sistema de riego es más adecuado para mi cultivo?",
        answer:
          "Depende del tipo de cultivo, espaciado de siembra, tipo de suelo, topografía del terreno y disponibilidad de agua. El riego por goteo es ideal para cultivos en surco o bajo cubierta; la aspersión y microaspersión para cultivos rastreros o pasturas; los pivotes para grandes extensiones planas. Lo definimos después de la visita técnica.",
      },
      {
        question: "¿El riego por goteo funciona bien en terrenos con pendiente?",
        answer:
          "Sí. Con el diseño hidráulico correcto — incluyendo compensadores de presión y sectorización adecuada — el riego por goteo opera con alta uniformidad incluso en pendientes pronunciadas. La clave está en un cálculo preciso, no en el sistema.",
      },
      {
        question: "¿Puedo ampliar el sistema en el futuro si expando el área?",
        answer:
          "Sí. Diseñamos los sistemas con criterios de expansión: la fuente, la bomba y la red principal se dimensionan con capacidad de crecimiento para que una ampliación no implique reemplazar toda la infraestructura.",
      },
      {
        question: "¿Cuánto tiempo demora la instalación de un sistema de riego?",
        answer:
          "Depende del área, la complejidad del diseño y las condiciones del terreno. Proyectos pequeños pueden completarse en pocos días; proyectos medianos o grandes pueden requerir semanas. Antes de iniciar la obra entregamos un cronograma claro.",
      },
    ],
    relatedProjectSlugs: ["riego-tecnificado-finca-la-esperanza"],
  },

  {
    slug: "recursos-hidricos",
    title: "Soluciones hidráulicas",
    shortDescription: "Diseño hidráulico, redes, bombeo, filtración, conducción y distribución de agua para proyectos de cualquier escala.",
    description:
      "Desarrollamos soluciones hidráulicas integrales que cubren todo el ciclo del agua dentro de un proyecto: captación, conducción, almacenamiento, filtración, bombeo y distribución. Cada red es diseñada con cálculo hidráulico riguroso para garantizar la presión y el caudal correctos en cada punto de consumo, sin sobredimensionamiento ni pérdidas innecesarias. Trabajamos con proyectos agrícolas, pecuarios, industriales y comerciales, adaptando la solución a la escala y las exigencias de cada cliente. La ingeniería detrás de cada instalación es lo que garantiza que el sistema funcione como fue proyectado, año tras año.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1400&q=80",
    icon: Waves,
    audience: [
      "Agroindustrias con redes de distribución de agua",
      "Proyectos con múltiples puntos de consumo",
      "Desarrollos rurales que requieren infraestructura hídrica",
      "Sistemas existentes que necesitan mejora o ampliación",
    ],
    benefits: [
      "Redes dimensionadas con criterios técnicos precisos",
      "Menor pérdida de presión y mayor eficiencia hidráulica",
      "Soluciones que cubren captación, almacenamiento y distribución",
      "Materiales certificados y especificación técnica documentada",
    ],
    process: [
      "Revisión de fuentes disponibles y caudales",
      "Análisis de demanda hídrica por sector o zona",
      "Diseño de la red y cálculo hidráulico",
      "Selección de materiales y especificación técnica",
      "Instalación, prueba hidrostática y entrega",
    ],
    faqs: [
      {
        question: "¿Pueden diseñar redes para proyectos con múltiples fuentes de agua?",
        answer:
          "Sí. Diseñamos redes que integran varias fuentes — ríos, pozos, reservorios o acueductos — con los controles necesarios para asegurar el suministro continuo y la correcta distribución por zonas o sectores.",
      },
      {
        question: "¿Qué diferencia hay entre una red de conducción y una de distribución?",
        answer:
          "La red de conducción transporta grandes volúmenes desde la fuente hasta un punto de entrega o almacenamiento, generalmente en tuberías de mayor diámetro. La red de distribución lleva el agua desde ese punto hasta los puntos finales de uso, con ramificaciones y presiones específicas por sector.",
      },
      {
        question: "¿Con qué materiales trabajan — PVC, HDPE, acero?",
        answer:
          "Trabajamos con los materiales más adecuados para cada condición: PVC para redes internas y distribución, HDPE para líneas de conducción o terrenos con movimiento, y acero para sistemas de alta presión o temperatura. La selección se define en el diseño según las condiciones del proyecto.",
      },
      {
        question: "¿Diseñan sistemas de filtración integrados a la red?",
        answer:
          "Sí. La filtración es parte del diseño hidráulico, no un accesorio. Según la calidad del agua y el uso final, dimensionamos filtros de malla, anillas, arena o combinados para proteger los equipos y garantizar la calidad del agua distribuida.",
      },
    ],
    relatedProjectSlugs: ["riego-tecnificado-finca-la-esperanza"],
  },

  {
    slug: "pozos-profundos",
    title: "Fertirriego",
    shortDescription: "Aplicación eficiente de nutrientes mediante sistemas automatizados integrados directamente al riego.",
    description:
      "El fertirriego permite aplicar fertilizantes y nutrientes disueltos directamente a través de la red de riego, llevando los insumos exactamente a la zona radical del cultivo en el momento preciso. Diseñamos e integramos sistemas de fertirriego adaptados al tipo de cultivo, el plan nutricional y el sistema de riego existente, utilizando equipos de dosificación — inyectores Venturi, bombas dosificadoras o sistemas multi-tanque — calibrados para una distribución uniforme y precisa. El resultado es una menor pérdida de nutrientes por lixiviación, una reducción en el consumo de insumos y un cultivo con mayor eficiencia en la absorción. El fertirriego no reemplaza la agronomía, pero potencia cada decisión nutricional que toma el productor.",
    image: "https://images.unsplash.com/photo-1596120236172-231999844ade?auto=format&fit=crop&w=1400&q=80",
    icon: Gauge,
    audience: [
      "Cultivos de alto valor comercial (flores, hortalizas, frutales)",
      "Productores con sistemas de riego tecnificado instalados",
      "Invernaderos y cultivos bajo cubierta",
      "Agricultores que buscan eficiencia en el uso de insumos",
    ],
    benefits: [
      "Aplicación uniforme y precisa en la zona radical",
      "Reducción del consumo de fertilizantes y costos",
      "Menor riesgo de contaminación del suelo y fuentes de agua",
      "Compatible con automatización y monitoreo digital",
    ],
    process: [
      "Análisis del sistema de riego existente",
      "Revisión de requerimientos nutricionales del cultivo",
      "Diseño e integración del sistema de fertirriego",
      "Instalación de equipos de dosificación y mezcla",
      "Calibración, pruebas y capacitación del operario",
    ],
    faqs: [
      {
        question: "¿El fertirriego requiere tener un sistema de riego tecnificado previo?",
        answer:
          "Sí. El fertirriego se integra a una red de riego presurizado — goteo, microaspersión u otros — que ya exista o que instalemos junto con el sistema de dosificación. No funciona con riego por gravedad o inundación convencional.",
      },
      {
        question: "¿Qué equipos se utilizan para dosificar los fertilizantes?",
        answer:
          "Trabajamos con inyectores Venturi (simples, sin electricidad), bombas dosificadoras peristálticas o de pistón (mayor precisión y control), y sistemas multi-tanque para mezclas complejas. La elección depende del volumen de aplicación, el número de nutrientes y el nivel de automatización deseado.",
      },
      {
        question: "¿Es posible controlar el fertirriego de forma automática?",
        answer:
          "Sí. Cuando el sistema de riego ya cuenta con automatización, el fertirriego puede integrarse al mismo controlador o programador para ejecutar planes nutricionales por zonas, turnos y dosis, sin intervención manual en cada aplicación.",
      },
      {
        question: "¿Pueden apoyar con el plan nutricional del cultivo?",
        answer:
          "Nuestro enfoque es la ingeniería del sistema de fertirriego: el diseño, la instalación y la calibración de los equipos. Para el plan nutricional del cultivo recomendamos trabajar con un agrónomo especializado, con quien podemos coordinar para que el sistema funcione en línea con las recomendaciones técnicas.",
      },
    ],
    relatedProjectSlugs: ["riego-tecnificado-finca-la-esperanza"],
  },

  {
    slug: "ingenieria-consultoria",
    title: "Ingeniería y consultoría",
    shortDescription: "Analizamos cada proyecto para desarrollar soluciones técnicas adaptadas a las necesidades reales del cliente.",
    description:
      "La consultoría técnica es el primer paso para que cualquier proyecto hídrico se ejecute con éxito. Acompañamos a nuestros clientes desde la etapa de planificación: evaluamos las condiciones del predio, analizamos alternativas técnicas y desarrollamos propuestas sustentadas en datos reales, no en suposiciones. Trabajamos con proyectos nuevos, ampliaciones de sistemas existentes y diagnósticos de instalaciones con bajo rendimiento o fallas recurrentes. Toda consultoría queda documentada en una memoria técnica que sirve de base para la ejecución del proyecto o para la toma de decisiones de inversión. Invertir en consultoría antes de construir siempre es más económico que corregir después de haber instalado.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    icon: Settings2,
    audience: [
      "Empresas y productores con proyectos en planificación",
      "Clientes que necesitan validar una idea antes de invertir",
      "Propietarios de sistemas con bajo rendimiento o fallas",
      "Proyectos que requieren documentación técnica formal",
    ],
    benefits: [
      "Decisiones de inversión respaldadas por datos técnicos",
      "Identificación temprana de riesgos y problemas del proyecto",
      "Propuestas ajustadas a la realidad del predio",
      "Documentación técnica que respalda cada etapa de ejecución",
    ],
    process: [
      "Reunión inicial para entender los objetivos del proyecto",
      "Visita técnica al predio o revisión de información existente",
      "Análisis de alternativas y elaboración de propuesta",
      "Presentación de resultados y recomendaciones",
      "Acompañamiento durante la ejecución si se requiere",
    ],
    faqs: [
      {
        question: "¿En qué momento del proyecto debo buscar consultoría técnica?",
        answer:
          "Idealmente antes de comprar equipos o iniciar cualquier obra. La consultoría en etapa de planificación permite elegir la solución correcta desde el principio, evitar gastos en equipos sobredimensionados o inadecuados, y tener una base técnica sólida para presupuestar con precisión.",
      },
      {
        question: "¿La consultoría incluye visita técnica al predio?",
        answer:
          "Sí. Para proyectos nuevos, la visita técnica es parte del proceso de consultoría. Para diagnósticos de sistemas existentes, la visita es el punto de partida: no emitimos conceptos técnicos sin conocer las condiciones reales del sitio.",
      },
      {
        question: "¿Pueden emitir memorias de cálculo o documentos técnicos formales?",
        answer:
          "Sí. Entregamos documentación técnica con la metodología de cálculo, los criterios de diseño, la selección de equipos y los esquemas del sistema. Este documento puede usarse para gestionar financiamiento, presentar ante entidades o coordinar con otros profesionales del proyecto.",
      },
      {
        question: "¿Qué pasa si tengo un sistema instalado que no funciona bien?",
        answer:
          "Realizamos un diagnóstico técnico del sistema: revisamos presiones, caudales, estado de los componentes, diseño original y operación actual. Con base en ese diagnóstico elaboramos un plan de mejora o corrección, con las alternativas y sus costos estimados.",
      },
    ],
    relatedProjectSlugs: ["riego-tecnificado-finca-la-esperanza"],
  },

  {
    slug: "automatizacion-agricola",
    title: "Automatización",
    shortDescription: "Control inteligente mediante programadores, sensores, válvulas automáticas y tecnologías de monitoreo.",
    description:
      "La automatización transforma un sistema de riego o hidráulico en una operación inteligente: los tiempos, los volúmenes y las zonas de riego se controlan con precisión sin depender de la intervención manual constante. Implementamos automatización por etapas, desde programadores básicos con válvulas eléctricas hasta sistemas con sensores de humedad, presión y caudal integrados a tableros de control y plataformas de monitoreo remoto. Cada proyecto de automatización parte de un diagnóstico del sistema existente para definir el nivel de control más adecuado, el hardware necesario y el protocolo de operación. El resultado es un sistema que opera con mayor precisión, consume menos agua y reduce los errores propios del manejo manual.",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1400&q=80",
    icon: BadgeCheck,
    audience: [
      "Invernaderos con alta demanda operativa de riego",
      "Fincas con sistemas en múltiples zonas o turnos",
      "Productores que buscan reducir mano de obra operativa",
      "Empresas agroindustriales con procesos repetitivos",
    ],
    benefits: [
      "Control preciso de tiempos y volúmenes por zona",
      "Reducción de errores operativos y riegos inadecuados",
      "Monitoreo en tiempo real de variables críticas",
      "Mayor autonomía operativa con menor intervención",
    ],
    process: [
      "Diagnóstico del sistema hidráulico existente",
      "Definición de zonas, turnos y parámetros de control",
      "Diseño del sistema y selección de componentes",
      "Instalación de programadores, válvulas y sensores",
      "Programación, pruebas y capacitación del personal",
    ],
    faqs: [
      {
        question: "¿Qué tecnologías de control pueden implementar?",
        answer:
          "Trabajamos con programadores de riego por tiempo y volumen, controladores con comunicación WiFi o GSM, válvulas solenoides de 24V o 9V, sensores de humedad de suelo, presostatos, caudalímetros y tableros con lógica programable. La tecnología se selecciona según las necesidades y el presupuesto del proyecto.",
      },
      {
        question: "¿Se puede monitorear el sistema desde el celular o el computador?",
        answer:
          "Sí, en los sistemas donde se integran controladores con conectividad remota. Esto permite revisar el estado del riego, ajustar programas y recibir alertas de fallas desde cualquier lugar. No todos los proyectos requieren este nivel de conectividad; lo definimos según el caso.",
      },
      {
        question: "¿La automatización funciona con sistemas de riego ya instalados?",
        answer:
          "En la mayoría de los casos sí. Se evalúan las presiones disponibles, el estado de las válvulas y la infraestructura eléctrica. En algunos casos se requieren ajustes menores al sistema existente para asegurar una automatización confiable.",
      },
      {
        question: "¿Qué pasa si hay un corte de energía o falla del controlador?",
        answer:
          "Diseñamos los sistemas con protecciones eléctricas y, según el nivel de criticidad del proyecto, con respaldo de energía o válvulas de operación manual que permiten continuar el riego si el sistema automático falla. La resiliencia operativa hace parte del diseño.",
      },
    ],
    relatedProjectSlugs: ["automatizacion-invernadero-hortalizas"],
  },

  {
    slug: "energia-solar",
    title: "Soluciones energéticas",
    shortDescription: "Bombeo solar, integración fotovoltaica y soluciones energéticas para sistemas hidráulicos y proyectos especiales.",
    description:
      "Integramos energía solar fotovoltaica en sistemas hidráulicos para reducir la dependencia de combustibles fósiles y redes eléctricas convencionales, mejorando la continuidad operativa y reduciendo los costos de energía a largo plazo. Diseñamos sistemas de bombeo solar directamente acoplados o con inversores, sistemas con almacenamiento en baterías para operación nocturna o en días de baja radiación, y soluciones fotovoltaicas para alimentar tableros de control, automatización o cualquier componente eléctrico del sistema. Cada proyecto parte del cálculo real de la demanda energética y del recurso solar disponible en el sitio, para entregar un sistema dimensionado correctamente y que opere con confiabilidad desde el primer día.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80",
    icon: SunMedium,
    audience: [
      "Predios en zonas rurales sin acceso a red eléctrica",
      "Sistemas de bombeo con altos costos de combustible",
      "Proyectos ganaderos con fuentes de agua alejadas",
      "Agroindustrias que buscan reducir su huella energética",
    ],
    benefits: [
      "Eliminación o reducción de costos de energía convencional",
      "Operación continua sin depender de la red eléctrica",
      "Sistemas escalables que crecen con el proyecto",
      "Menor impacto ambiental y mayor sostenibilidad operativa",
    ],
    process: [
      "Evaluación de la demanda energética del sistema",
      "Análisis de radiación solar y condiciones del sitio",
      "Diseño del sistema fotovoltaico y selección de equipos",
      "Montaje de paneles, inversores, controladores y protecciones",
      "Puesta en marcha, pruebas y entrega técnica documentada",
    ],
    faqs: [
      {
        question: "¿El bombeo solar funciona en días nublados o con poca radiación?",
        answer:
          "Sí, aunque con menor potencia. El diseño considera la radiación solar promedio del sitio, incluyendo días de menor irradiación, para garantizar que el sistema cubra la demanda diaria de agua. En proyectos críticos se puede incluir almacenamiento en baterías o un respaldo de red convencional.",
      },
      {
        question: "¿Es necesario un banco de baterías para el sistema solar?",
        answer:
          "Depende del uso. Si el sistema bombea durante el día y almacena el agua en un tanque o reservorio, generalmente no se necesitan baterías. Si se requiere operación nocturna o suministro continuo independientemente de la radiación, se incluye almacenamiento en baterías como parte del diseño.",
      },
      {
        question: "¿El sistema solar puede complementar la red eléctrica convencional?",
        answer:
          "Sí. Diseñamos sistemas híbridos que utilizan energía solar cuando está disponible y cambian automáticamente a la red convencional cuando la radiación no es suficiente. Esto garantiza continuidad operativa y maximiza el aprovechamiento de la energía solar.",
      },
      {
        question: "¿Cuánto dura un sistema de bombeo solar bien instalado?",
        answer:
          "Los paneles fotovoltaicos tienen una vida útil de 25 a 30 años con muy poco mantenimiento. Los inversores y controladores suelen durar entre 10 y 15 años. Las bombas solares, según el modelo y las condiciones de uso, tienen una vida útil de 8 a 15 años. Con mantenimiento preventivo básico, el sistema es una inversión de muy largo plazo.",
      },
    ],
    relatedProjectSlugs: ["bombeo-solar-unidad-productiva-norte"],
  },

  {
    slug: "mantenimiento",
    title: "Instalación y servicio técnico",
    shortDescription: "Montaje, puesta en marcha, mantenimiento preventivo y soporte técnico especializado.",
    description:
      "Un sistema bien instalado y bien mantenido es un sistema que dura. Realizamos la instalación técnica de sistemas hidráulicos, de riego, bombeo y automatización con nuestro propio equipo, siguiendo protocolos precisos de montaje, prueba y puesta en marcha. También atendemos sistemas ya instalados — por nosotros o por terceros — con servicios de mantenimiento preventivo, diagnóstico de fallas y correctivos en campo. Cada intervención queda registrada en un reporte técnico que documenta el estado del sistema, las acciones realizadas y las recomendaciones de seguimiento. Nuestro objetivo no es solo reparar lo que falla, sino mantener los sistemas operando al máximo de su capacidad.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80",
    icon: Hammer,
    audience: [
      "Propietarios de sistemas instalados por terceros",
      "Empresas agroindustriales con equipos en operación",
      "Sistemas con baja presión, fugas o componentes deteriorados",
      "Proyectos que requieren un plan de mantenimiento preventivo",
    ],
    benefits: [
      "Mayor vida útil de equipos e instalaciones",
      "Reducción de paradas no planificadas y pérdidas operativas",
      "Diagnóstico técnico preciso antes de cada intervención",
      "Reporte técnico con registro de cada visita y acción",
    ],
    process: [
      "Inspección visual y técnica del sistema",
      "Diagnóstico de fallas o puntos de mejora",
      "Elaboración del plan de intervención",
      "Ejecución del mantenimiento preventivo o correctivo",
      "Reporte técnico y recomendaciones de seguimiento",
    ],
    faqs: [
      {
        question: "¿Atienden sistemas instalados por otras empresas o terceros?",
        answer:
          "Sí. Revisamos el estado actual del sistema independientemente de quién lo haya instalado, diagnosticamos las fallas o los puntos de mejora y proponemos un plan de intervención con las opciones disponibles y sus costos. No condicionamos el servicio a que el sistema sea de nuestra instalación.",
      },
      {
        question: "¿Ofrecen contratos de mantenimiento preventivo periódico?",
        answer:
          "Sí. Desarrollamos planes de mantenimiento preventivo con visitas programadas — mensual, trimestral o semestral — según el tipo de sistema y la intensidad de uso. Cada plan incluye las actividades a realizar, los registros de operación y las recomendaciones de reposición de componentes.",
      },
      {
        question: "¿Qué incluye una visita de mantenimiento preventivo?",
        answer:
          "Incluye revisión de presiones y caudales, inspección de emisores, tuberías y conexiones, limpieza o reposición de filtros, verificación del estado de la bomba y el tablero eléctrico, y revisión del sistema de automatización si existe. Al finalizar se entrega un reporte con el estado del sistema.",
      },
      {
        question: "¿Pueden reponer o reparar componentes directamente en campo?",
        answer:
          "En la mayoría de los casos sí. Nuestro equipo llega a la visita con los componentes más comunes (emisores, conectores, filtros, protecciones eléctricas, entre otros) para resolver en campo sin generar una segunda visita. Para repuestos específicos o poco comunes lo coordinamos con anticipación.",
      },
    ],
    relatedProjectSlugs: ["riego-tecnificado-finca-la-esperanza"],
  },
];

export const workProcess = [
  {
    title: "Escuchamos",
    description:
      "Antes de proponer soluciones, nos tomamos el tiempo para comprender las necesidades reales del cliente: qué tipo de proyecto enfrenta, cuáles son sus condiciones operativas y qué objetivos espera alcanzar. Esa conversación inicial es la base sobre la que construimos una propuesta técnica pertinente. No proponemos nada hasta tener claridad sobre lo que realmente necesita.",
  },
  {
    title: "Analizamos",
    description:
      "Evaluamos las condiciones técnicas del proyecto en campo: topografía, fuentes de agua disponibles, presiones, distancias de conducción y estado de la infraestructura existente. Una propuesta sin visita técnica es una suposición. Por eso desplazamos a nuestro equipo al predio para tomar medidas reales que sean la base de un diseño preciso y un presupuesto sin sorpresas.",
  },
  {
    title: "Diseñamos",
    description:
      "Desarrollamos la solución técnica a la medida del proyecto: cálculo hidráulico, selección de equipos, esquema de instalación y especificaciones de materiales. Todo queda documentado en una memoria técnica que el cliente puede revisar y aprobar antes de que iniciemos cualquier obra. El diseño es propio, no un catálogo genérico.",
  },
  {
    title: "Implementamos",
    description:
      "Ejecutamos el proyecto con nuestro propio equipo técnico, usando materiales certificados y siguiendo los protocolos definidos en el diseño. Durante la ejecución mantenemos comunicación constante con el cliente y resolvemos en campo cualquier ajuste que requiera la realidad del terreno. Entregamos el sistema probado, con presiones verificadas y cada componente en su lugar.",
  },
  {
    title: "Acompañamos",
    description:
      "La entrega del sistema no es el final de nuestro trabajo. Capacitamos al personal encargado y brindamos soporte técnico para garantizar el éxito del proyecto en su operación. Dejamos un canal de comunicación abierto para resolver dudas, atender ajustes y acompañar el proyecto en su primera temporada de operación. Queremos que cada solución funcione bien, no solo que quede instalada.",
  },
];

export const trustStats = [
  { value: "+XX", label: "proyectos realizados" },
  { value: "Colombia", label: "cobertura nacional" },
  { value: "Equipo", label: "personal especializado" },
  { value: "100%", label: "soluciones personalizadas" },
];
