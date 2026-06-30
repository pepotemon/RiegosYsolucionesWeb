export type Product = {
  slug: string;
  category: "Bombas" | "Aspersores" | "Tuberias" | "Filtros" | "Paneles solares" | "Accesorios";
  name: string;
  brand: string;
  description: string;
  image: string;
  features: string[];
};
