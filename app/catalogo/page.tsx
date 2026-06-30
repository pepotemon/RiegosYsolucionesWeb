import { ProductCard } from "@/components/catalog/ProductCard";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { products } from "@/data/products";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Catalogo",
  description: "Vitrina comercial de bombas, aspersores, tuberias, filtros, paneles solares y accesorios agricolas.",
  path: "/catalogo",
});

export default function CatalogPage() {
  const categories = Array.from(new Set(products.map((product) => product.category)));
  return (
    <main className="py-16">
      <Container>
        <SectionHeader
          eyebrow="Catalogo"
          title="Vitrina comercial para soluciones de campo"
          description="Productos de referencia para solicitar informacion tecnica. No es tienda online; cada solicitud se cotiza segun el proyecto."
        />
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <span key={category} className="rounded-md border border-[#c8ddf0] bg-white px-3 py-2 text-sm font-bold text-[#1b6cb6]">
              {category}
            </span>
          ))}
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </main>
  );
}
