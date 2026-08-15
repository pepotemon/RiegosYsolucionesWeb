export type Project = {
  slug: string;
  name: string;
  location: string;
  crop: string;
  area: string;
  service: string;
  image: string;
  gallery: string[];
  problem: string;
  solution: string;
  result: string;
  videos?: string[];
  testimonial?: {
    name: string;
    role: string;
    quote: string;
  };
};
