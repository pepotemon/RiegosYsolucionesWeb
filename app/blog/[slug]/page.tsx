import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { blogPosts } from "@/data/blog";
import { createMetadata } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
  });
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <main>
      <article className="bg-white py-16">
        <Container className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1b6cb6]">
            {post.date} · {post.readTime}
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-[#1a2b3c] sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-8 text-[#3a5268]">{post.excerpt}</p>
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-lg">
            <Image src={post.image} alt={post.title} fill priority sizes="(max-width: 768px) 100vw, 900px" className="object-cover" />
          </div>
          <div className="mt-10 grid gap-6 text-lg leading-8 text-[#3a5268]">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 rounded-lg bg-[#ebf4ff] p-6">
            <h2 className="text-2xl font-black text-[#1a2b3c]">Necesita asesoria para aplicar esto en su finca?</h2>
            <p className="mt-3 text-[#3a5268]">Conversemos sobre su cultivo, area y disponibilidad de agua.</p>
            <div className="mt-5">
              <Button href={getWhatsAppUrl(`Hola, lei el articulo ${post.title} y quiero asesoria.`)}>Solicitar asesoria</Button>
            </div>
          </div>
        </Container>
      </article>
    </main>
  );
}
