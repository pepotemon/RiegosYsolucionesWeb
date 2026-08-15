export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "callout"; title?: string; text: string; variant: "tip" | "warning" | "info" | "success" }
  | { type: "quote"; text: string; source?: string }
  | { type: "stats"; items: { value: string; label: string }[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  content: ContentBlock[];
};
