import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Droplets } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { services } from "@/data/services";

const companyLinks = [
  { label: "Nosotros", href: "/nosotros" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Catalogo", href: "/catalogo" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

const socialLinks = [
  { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
  { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-[#06131f] text-white">

      {/* Cuerpo principal */}
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.8fr_1fr_1fr_1.2fr] lg:gap-8 lg:px-8">

        {/* Columna 1 — Marca */}
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="relative h-12 w-12 shrink-0">
              <Image
                src="/logo-icon.png"
                alt=""
                fill
                sizes="48px"
                className="object-contain brightness-0 invert"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[15px] font-black uppercase tracking-[0.06em] text-white">
                Riegos y Soluciones
              </span>
              <span className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#3baa6e]">
                Agrícolas del Norte S.A.S
              </span>
            </div>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-7 text-[#7a9ab8]">
            Ingenieria hidrica y agricola para el campo colombiano.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 text-xs font-bold text-[#60b5e8]">
            <Droplets size={14} /> Soluciones hidricas para Colombia
          </div>
          {/* Redes sociales */}
          <div className="mt-7 flex gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-[#7a9ab8] transition hover:border-[#1b6cb6] hover:bg-[#1b6cb6] hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Columna 2 — Servicios */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#60b5e8]">Servicios</p>
          <ul className="mt-5 grid gap-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/servicios/${s.slug}`}
                  className="text-sm text-[#7a9ab8] transition hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3 — Empresa */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#60b5e8]">Empresa</p>
          <ul className="mt-5 grid gap-2.5">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-[#7a9ab8] transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 4 — Contacto */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#60b5e8]">Contacto directo</p>
          <ul className="mt-5 grid gap-4">
            <li>
              <a
                href={`tel:${siteConfig.phone}`}
                className="group flex items-start gap-3 text-sm text-[#7a9ab8] transition hover:text-white"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/5 text-[#60b5e8] transition group-hover:bg-[#1b6cb6] group-hover:text-white">
                  <Phone size={15} />
                </span>
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-start gap-3 text-sm text-[#7a9ab8] transition hover:text-white"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/5 text-[#60b5e8] transition group-hover:bg-[#1b6cb6] group-hover:text-white">
                  <Mail size={15} />
                </span>
                {siteConfig.email}
              </a>
            </li>
            <li>
              <span className="flex items-start gap-3 text-sm text-[#7a9ab8]">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/5 text-[#60b5e8]">
                  <MapPin size={15} />
                </span>
                {siteConfig.address}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-[#4a6a80] sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1.5">
            <Droplets size={13} className="text-[#60b5e8]" />
            Ingenieria hidrica para el campo colombiano
          </p>
        </div>
      </div>

    </footer>
  );
}
