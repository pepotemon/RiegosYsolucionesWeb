import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

type SeoInput = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
};

export function createMetadata({ title, description = siteConfig.description, path = "/", image }: SeoInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "es_CO",
      type: "website",
      images: image ? [{ url: image }] : undefined,
    },
  };
}
