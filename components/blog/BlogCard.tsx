import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { BlogPost } from "@/types/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="group h-full overflow-hidden transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[16/10]">
        <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
      </div>
      <div className="p-6">
        <p className="text-sm font-semibold text-[#1b6cb6]">
          {post.date} · {post.readTime}
        </p>
        <h3 className="mt-3 text-xl font-bold text-[#1a2b3c]">{post.title}</h3>
        <p className="mt-3 text-sm leading-7 text-[#566a7a]">{post.excerpt}</p>
        <a
          href={`/blog/${post.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#1b6cb6] transition group-hover:gap-3"
        >
          Leer articulo <ArrowRight size={17} />
        </a>
      </div>
    </Card>
  );
}
