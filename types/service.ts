import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  icon: LucideIcon;
  audience: string[];
  benefits: string[];
  process: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedProjectSlugs: string[];
};
