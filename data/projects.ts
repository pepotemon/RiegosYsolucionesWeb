import type { Project } from "@/types/project";

const irrigation =
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1400&q=80";
const solar =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80";
const greenhouse =
  "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1400&q=80";

export const projects: Project[] = [
  {
    slug: "riego-tecnificado-finca-la-esperanza",
    name: "Riego tecnificado Finca La Esperanza",
    location: "Cesar, Colombia",
    crop: "Palma y pasturas",
    area: "85 hectareas",
    service: "Sistemas de riego",
    image: irrigation,
    gallery: [irrigation, greenhouse, solar],
    problem:
      "La finca presentaba baja uniformidad de riego, altos consumos de agua y tiempos operativos extensos durante temporadas secas.",
    solution:
      "Se diseno una red sectorizada con bombeo eficiente, filtracion, valvulas de control y programacion operativa por bloques.",
    result:
      "La operacion redujo tiempos de riego, mejoro la distribucion de agua y dejo el sistema preparado para automatizacion por etapas.",
  },
  {
    slug: "bombeo-solar-unidad-productiva-norte",
    name: "Bombeo solar Unidad Productiva Norte",
    location: "La Guajira, Colombia",
    crop: "Ganaderia",
    area: "12 puntos de abastecimiento",
    service: "Energia solar",
    image: solar,
    gallery: [solar, irrigation, greenhouse],
    problem:
      "El predio dependia de combustible para extraer y mover agua, con costos variables y fallas frecuentes por disponibilidad logistica.",
    solution:
      "Se implemento un sistema de bombeo solar con tableros de proteccion, almacenamiento y distribucion hacia bebederos estrategicos.",
    result:
      "El cliente estabilizo el abastecimiento diario y redujo su dependencia operativa de combustibles en campo.",
  },
  {
    slug: "automatizacion-invernadero-hortalizas",
    name: "Automatizacion de invernadero de hortalizas",
    location: "Santander, Colombia",
    crop: "Hortalizas",
    area: "4.500 m2",
    service: "Automatizacion agricola",
    image: greenhouse,
    gallery: [greenhouse, irrigation, solar],
    problem:
      "El manejo manual del riego generaba variaciones de humedad, consumo innecesario de agua y dificultad para estandarizar labores.",
    solution:
      "Se instalaron controladores, sensores, electrovavulas y programacion de ciclos de riego por zonas productivas.",
    result:
      "La operacion gano control, trazabilidad y capacidad de ajustar el riego segun etapa del cultivo.",
  },
];
