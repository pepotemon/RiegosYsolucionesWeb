import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary: "bg-[#1b6cb6] text-white hover:bg-[#134f88]",
  secondary: "bg-white text-[#1b6cb6] ring-1 ring-[#c8ddf0] hover:bg-[#ebf4ff]",
  ghost: "text-[#1b6cb6] hover:bg-[#ebf4ff]",
};

export function Button({ href, children, variant = "primary", className, ...props }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
