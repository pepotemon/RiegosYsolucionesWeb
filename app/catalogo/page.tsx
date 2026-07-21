import { products } from "@/data/products";
import { createMetadata } from "@/lib/seo";
import { CatalogPageContent } from "@/components/catalog/CatalogPageContent";

export const metadata = createMetadata({
  title: "Catálogo",
  description:
    "Catálogo técnico de bombas, aspersores, tuberías, filtros, paneles solares y accesorios agrícolas. Cotización personalizada por proyecto.",
  path: "/catalogo",
});

export default function CatalogPage() {
  return <CatalogPageContent products={products} />;
}
