import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "sistema-bombeo-fotovoltaico-anserma-nuevo",
    name: "Sistema de bombeo fotovoltaico — Cultivo de pimentón",
    location: "Anserma Nuevo, Valle del Cauca",
    crop: "Pimentón",
    area: "120 m³/día garantizados",
    service: "Energia solar",
    image: "/images/proyectos/bombeo-solar-fotovoltaico/foto-1.jpg",
    gallery: [
      "/images/proyectos/bombeo-solar-fotovoltaico/foto-1.jpg",
      "/images/proyectos/bombeo-solar-fotovoltaico/foto-2.jpg",
      "/images/proyectos/bombeo-solar-fotovoltaico/foto-3.jpg",
    ],
    problem:
      "El cultivo de pimentón requería un suministro hídrico constante de 120 m³ diarios. Las condiciones del terreno —900 metros de longitud de conducción y 280 metros de diferencia de altura— hacían inviable el bombeo convencional por sus altos costos operativos y dependencia de combustible.",
    solution:
      "Se diseñó e implementó un sistema de bombeo fotovoltaico compuesto por 72 paneles solares distribuidos en dos bombas de 10 HP, dimensionado específicamente para vencer la carga hidráulica del terreno y garantizar el caudal requerido durante las horas de radiación solar.",
    result:
      "El sistema entrega de forma autónoma los 120 m³ diarios necesarios para el cultivo, eliminando la dependencia de combustible y estabilizando el abastecimiento hídrico sin costos operativos variables.",
  },
  {
    slug: "riego-fertirrigacion-pimenton-agropepersas",
    name: "Riego y fertirrigación para pimentón de exportación",
    location: "Hacienda San Miguel, Colombia",
    crop: "Pimentón orgánico (exportación USA)",
    area: "Invernaderos con riego presurizado",
    service: "Riego y fertirrigación",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=80",
    gallery: [],
    video: "/videos/agropepersas-testimonio.mp4",
    testimonial: {
      name: "Fabián Méndez",
      role: "Director Agronómico — Agropepersas",
      quote: "Vimos una muy buena oferta por parte de Riegos y Soluciones, los cuales nos permitieron tener sistemas de riegos especializados para una fertirrigación, y de tal manera tener un uso eficiente de nuestras aguas y de nuestros riegos para ser amigables con el medio ambiente.",
    },
    problem:
      "Los cultivos de pimentón orgánico de Agropepersas, destinados al mercado de exportación a Estados Unidos, requerían un sistema de irrigación preciso que garantizara el uso eficiente del agua y cumpliera con los estándares de producción orgánica, en invernaderos con topografía de pendiente pronunciada que dificultaba la distribución hídrica uniforme.",
    solution:
      "Se implementó un sistema de riego por goteo con fertirrigación compuesto por conducción principal de 3 pulgadas, secundaria de 2 pulgadas y terciaria de 1 pulgada, calibrado según la topografía de cada invernadero para igualar el caudal entre zonas altas y bajas. Se complementó con un sistema de fumigación para aplicación foliar.",
    result:
      "Sistema de fertirrigación operativo con uso eficiente del agua, sin desperdicio de insumos, y distribución hídrica equilibrada en toda la extensión del cultivo, cumpliendo los estándares para producción orgánica de exportación al mercado estadounidense.",
  },
];
