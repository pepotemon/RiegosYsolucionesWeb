import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function absoluteUrl(path = "") {
  return `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://riegosdelnorte.com"}${path}`;
}
