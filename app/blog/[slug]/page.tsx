import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, MessageCircle, ArrowRight } from "lucide-react";
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

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const waUrl = getWhatsAppUrl(
    `Hola, leí el artículo "${post.title}" y quiero asesoría para aplicarlo en mi proyecto.`
  );

  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative min-h-[65vh]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06131f] via-[#06131f]/50 to-[#06131f]/15" />

        {/* Top bar */}
        <div className="absolute left-0 right-0 top-0 flex items-start justify-between px-6 pt-24 md:px-12 md:pt-28">
          <Link
            href="/blog"
            className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/15"
            style={{
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            <ArrowLeft size={15} />
            Todos los artículos
          </Link>
          <span
            className="rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur-sm"
            style={{
              background: "rgba(45,186,69,0.18)",
              color: "#2DBA45",
              border: "1px solid rgba(45,186,69,0.28)",
            }}
          >
            Blog técnico
          </span>
        </div>

        {/* Bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-14 md:px-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex items-center gap-5 text-sm text-white/45">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} />
                {post.readTime} de lectura
              </span>
            </div>
            <h1 className="text-4xl font-black leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <article className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6">
          {/* Lead */}
          <p className="mb-8 text-xl font-medium leading-relaxed text-[#3a5268]">
            {post.excerpt}
          </p>

          {/* Accent divider */}
          <div className="mb-10 flex items-center gap-4">
            <div className="h-0.5 w-12 rounded-full bg-[#2DBA45]" />
            <div className="h-px flex-1 bg-[#E0EEF9]" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-[17px] leading-[1.88] text-[#3a5268]">
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA box */}
          <div className="mt-16 overflow-hidden rounded-3xl bg-[#082033] p-8 md:p-10">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#2DBA45]">
              ¿Quieres aplicar esto en tu finca?
            </p>
            <h2 className="mb-3 text-2xl font-black leading-tight text-white sm:text-3xl">
              Hablemos de tu cultivo, área y disponibilidad de agua
            </h2>
            <p className="mb-7 text-sm leading-relaxed text-white/50">
              El diagnóstico inicial es sin costo. Nuestro equipo técnico te
              propone la mejor alternativa para tu proyecto.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-[#2DBA45] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#2DBA45]/25 transition-all duration-200 hover:bg-[#26a33d]"
            >
              <MessageCircle size={16} />
              Solicitar asesoría por WhatsApp
            </a>
          </div>
        </div>
      </article>

      {/* ── RELATED POSTS ── */}
      {related.length > 0 && (
        <section
          className="py-20"
          style={{ background: "linear-gradient(180deg, #F3F9FF 0%, #FFFFFF 100%)" }}
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-2xl font-black text-[#082033]">Más artículos</h2>
              <Link
                href="/blog"
                className="flex items-center gap-1.5 text-sm font-bold text-[#1b6cb6] transition-all duration-200 hover:gap-3"
              >
                Ver todos <ArrowRight size={15} />
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relPost) => (
                <Link
                  key={relPost.slug}
                  href={`/blog/${relPost.slug}`}
                  className="group flex flex-col overflow-hidden rounded-[24px] bg-white ring-1 ring-[#E0EEF9] transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={relPost.image}
                      alt={relPost.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-600 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <span
                        className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
                        style={{ background: "rgba(45,186,69,0.10)", color: "#2DBA45" }}
                      >
                        {relPost.readTime}
                      </span>
                      <span className="text-xs text-[#566a7a]">{relPost.date}</span>
                    </div>
                    <h3 className="mb-4 flex-1 text-base font-black leading-tight text-[#082033] transition-colors group-hover:text-[#1b6cb6]">
                      {relPost.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-sm font-bold text-[#1b6cb6] transition-all duration-200 group-hover:gap-3">
                      Leer <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
