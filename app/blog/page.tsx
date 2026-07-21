import { blogPosts } from "@/data/blog";
import { createMetadata } from "@/lib/seo";
import { BlogPageContent } from "@/components/blog/BlogPageContent";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Artículos técnicos sobre riego agrícola, bombas, ahorro de agua, pozos profundos y productividad en campo.",
  path: "/blog",
});

export default function BlogPage() {
  return <BlogPageContent posts={blogPosts} />;
}
