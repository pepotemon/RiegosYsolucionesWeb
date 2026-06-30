import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/servicios", "/proyectos", "/catalogo", "/blog", "/nosotros", "/contacto"];
  const dynamicRoutes = [
    ...services.map((service) => `/servicios/${service.slug}`),
    ...projects.map((project) => `/proyectos/${project.slug}`),
    ...blogPosts.map((post) => `/blog/${post.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
