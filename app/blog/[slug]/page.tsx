import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Clock,
  Calendar,
  MessageCircle,
  ArrowRight,
  Lightbulb,
  AlertTriangle,
  Info,
  CheckCircle2,
} from "lucide-react";
import { blogPosts } from "@/data/blog";
import { createMetadata } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import type { ContentBlock } from "@/types/blog";

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

const CALLOUT_STYLES = {
  tip: {
    bg: "rgba(45,186,69,0.07)",
    border: "1px solid rgba(45,186,69,0.22)",
    iconColor: "#2DBA45",
    titleColor: "#15692a",
    Icon: Lightbulb,
  },
  warning: {
    bg: "rgba(234,179,8,0.07)",
    border: "1px solid rgba(234,179,8,0.25)",
    iconColor: "#b45309",
    titleColor: "#92400e",
    Icon: AlertTriangle,
  },
  info: {
    bg: "rgba(0,119,200,0.06)",
    border: "1px solid rgba(0,119,200,0.20)",
    iconColor: "#0077C8",
    titleColor: "#1b6cb6",
    Icon: Info,
  },
  success: {
    bg: "rgba(45,186,69,0.07)",
    border: "1px solid rgba(45,186,69,0.22)",
    iconColor: "#2DBA45",
    titleColor: "#15692a",
    Icon: CheckCircle2,
  },
} as const;

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={i} className="text-[17px] leading-[1.9] text-[#3a5268]">
          {block.text}
        </p>
      );

    case "h2":
      return (
        <h2
          key={i}
          className="border-b border-[#E0EEF9] pb-3 pt-10 text-[1.6rem] font-black leading-tight text-[#082033]"
        >
          {block.text}
        </h2>
      );

    case "h3":
      return (
        <h3
          key={i}
          className="pt-6 text-lg font-black text-[#082033]"
        >
          {block.text}
        </h3>
      );

    case "list":
      return block.ordered ? (
        <ol key={i} className="space-y-3.5">
          {block.items.map((item, j) => (
            <li key={j} className="flex gap-4 text-[16px] leading-relaxed text-[#3a5268]">
              <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#0077C8] text-[11px] font-black text-white">
                {j + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      ) : (
        <ul key={i} className="space-y-3">
          {block.items.map((item, j) => (
            <li key={j} className="flex gap-3.5 text-[16px] leading-relaxed text-[#3a5268]">
              <span className="mt-[0.55rem] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2DBA45]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "callout": {
      const s = CALLOUT_STYLES[block.variant];
      const Icon = s.Icon;
      return (
        <div
          key={i}
          className="rounded-2xl p-5 sm:p-6"
          style={{ background: s.bg, border: s.border }}
        >
          <div className="flex gap-3.5">
            <Icon size={19} style={{ color: s.iconColor }} className="mt-0.5 flex-shrink-0" />
            <div>
              {block.title && (
                <p
                  className="mb-1.5 text-[11px] font-black uppercase tracking-[0.14em]"
                  style={{ color: s.titleColor }}
                >
                  {block.title}
                </p>
              )}
              <p className="text-[15px] leading-relaxed text-[#3a5268]">{block.text}</p>
            </div>
          </div>
        </div>
      );
    }

    case "quote":
      return (
        <blockquote
          key={i}
          className="border-l-[3px] border-[#2DBA45] pl-6 my-2"
        >
          <p className="text-xl font-medium italic leading-relaxed text-[#082033]">
            &ldquo;{block.text}&rdquo;
          </p>
          {block.source && (
            <cite className="mt-2 block text-sm not-italic text-[#7a94a5]">
              — {block.source}
            </cite>
          )}
        </blockquote>
      );

    case "stats":
      return (
        <div
          key={i}
          className="grid grid-cols-3 gap-3 rounded-2xl bg-[#082033] px-5 py-7 sm:px-8 sm:py-9"
        >
          {block.items.map((stat, j) => (
            <div key={j} className="text-center">
              <p className="text-xl font-black text-white sm:text-3xl">{stat.value}</p>
              <p className="mt-1.5 text-[9px] uppercase leading-tight tracking-[0.14em] text-white/40 sm:text-[10px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
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

          {/* Rich content */}
          <div className="space-y-6">
            {post.content.map((block, i) => renderBlock(block, i))}
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
