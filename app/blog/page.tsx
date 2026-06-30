import { BlogCard } from "@/components/blog/BlogCard";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { blogPosts } from "@/data/blog";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Blog",
  description: "Articulos sobre riego agricola, bombas, ahorro de agua, pozos profundos y productividad en campo.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <main className="py-16">
      <Container>
        <SectionHeader
          eyebrow="Blog"
          title="Contenido SEO para educar y captar clientes"
          description="Guias iniciales pensadas para responder dudas frecuentes y atraer busquedas comerciales."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </main>
  );
}
