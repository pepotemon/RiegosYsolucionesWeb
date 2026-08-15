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
];
