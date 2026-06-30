import Image from "next/image";
import { Info } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[4/3]">
        <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1b6cb6]">{product.category}</p>
        <h3 className="mt-2 text-xl font-bold text-[#1a2b3c]">{product.name}</h3>
        <p className="mt-1 text-sm font-semibold text-[#566a7a]">{product.brand}</p>
        <p className="mt-4 flex-1 text-sm leading-7 text-[#566a7a]">{product.description}</p>
        <ul className="mt-4 grid gap-2 text-sm text-[#3a5268]">
          {product.features.map((feature) => (
            <li key={feature} className="flex gap-2">
              <Info size={16} className="mt-0.5 shrink-0 text-[#3baa6e]" />
              {feature}
            </li>
          ))}
        </ul>
        <a
          href={getWhatsAppUrl(`Hola, quiero informacion sobre ${product.name}.`)}
          className="focus-ring mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-[#1b6cb6] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#134f88]"
          target="_blank"
          rel="noreferrer"
        >
          Solicitar informacion
        </a>
      </div>
    </Card>
  );
}
