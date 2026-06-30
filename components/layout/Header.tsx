"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { X, Menu, PhoneCall } from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  // Desktop animated logo — transforms based on scroll position
  const rawScale = useTransform(scrollY, [0, 160], isHome ? [1, 0.55] : [0.55, 0.55]);
  const rawY     = useTransform(scrollY, [0, 160], isHome ? [36, 10]  : [10, 10]);
  const rawX     = useTransform(scrollY, [0, 160], isHome ? [-68, 0]  : [0, 0]);

  const logoScale = useSpring(rawScale, { stiffness: 150, damping: 25 });
  const logoY     = useSpring(rawY,     { stiffness: 150, damping: 25 });
  const logoX     = useSpring(rawX,     { stiffness: 150, damping: 25 });

  const rawTextScale = useTransform(scrollY, [0, 160], isHome ? [0.55, 1.0] : [1.0, 1.0]);
  const textScale    = useSpring(rawTextScale, { stiffness: 150, damping: 25 });

  const rawNavX = useTransform(scrollY, [0, 160], isHome ? [32, 0] : [0, 0]);
  const navX    = useSpring(rawNavX, { stiffness: 150, damping: 25 });

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobileOpen]);

  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-300",
          transparent
            ? "border-transparent bg-transparent"
            : "border-[#c8ddf0] bg-white/95 shadow-sm backdrop-blur",
        )}
        style={{ overflow: "visible" }}
      >
        <div
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
          style={{ overflow: "visible" }}
        >

          {/* ── Logo ─────────────────────────────────────────────────────── */}
          <div className="w-48 shrink-0 lg:w-60" style={{ overflow: "visible" }}>
            <Link
              href="/"
              className="focus-ring inline-flex items-center rounded-md"
              style={{ overflow: "visible" }}
            >
              {/* Móvil: logo compacto sin transforms — tamaño real, sin overflow */}
              <div className="mt-5 flex items-center gap-0 lg:hidden">
                <Image
                  src="/logo-icon.png"
                  alt="Riegos y Soluciones Agrícolas del Norte"
                  width={120}
                  height={120}
                  className="h-[104px] w-[104px] shrink-0 object-contain drop-shadow-sm"
                  priority
                />
                <div className="-ml-4 flex flex-col leading-none">
                  <span
                    className={cn(
                      "whitespace-nowrap text-[17px] font-black uppercase tracking-[0.04em] transition-colors duration-300",
                      transparent ? "text-white" : "text-[#1b6cb6]",
                    )}
                  >
                    Riegos y Soluciones
                  </span>
                  <span
                    className={cn(
                      "mt-0.5 whitespace-nowrap text-[12px] font-bold uppercase tracking-[0.1em] transition-colors duration-300",
                      transparent ? "text-white/80" : "text-[#3baa6e]",
                    )}
                  >
                    Agrícolas del Norte S.A.S
                  </span>
                </div>
              </div>

              {/* Desktop: logo grande animado */}
              <motion.div
                className="hidden items-center gap-0 lg:flex"
                style={{
                  scale: logoScale,
                  y: logoY,
                  x: logoX,
                  originX: 0,
                  originY: 0.5,
                }}
              >
                <Image
                  src="/logo-icon.png"
                  alt=""
                  width={260}
                  height={260}
                  className="shrink-0 object-contain drop-shadow-sm"
                  aria-hidden="true"
                />
                <motion.div
                  style={{ scale: textScale, originX: 0, originY: 0.5 }}
                  className="-ml-16 -mt-3 flex flex-col leading-none"
                >
                  <span
                    className={cn(
                      "whitespace-nowrap text-[26px] font-black uppercase tracking-[0.06em] transition-colors duration-300",
                      transparent ? "text-white" : "text-[#1b6cb6]",
                    )}
                  >
                    Riegos y Soluciones
                  </span>
                  <span
                    className={cn(
                      "mt-1 whitespace-nowrap text-[18px] font-bold uppercase tracking-[0.14em] transition-colors duration-300",
                      transparent ? "text-white/80" : "text-[#3baa6e]",
                    )}
                  >
                    Agrícolas del Norte S.A.S
                  </span>
                </motion.div>
              </motion.div>
            </Link>
          </div>

          {/* ── Nav desktop ─────────────────────────────────────────────── */}
          <motion.nav
            style={{ x: navX }}
            className="hidden items-center gap-1 lg:flex"
            aria-label="Navegacion principal"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={transparent ? { color: "rgba(255,255,255,0.92)" } : undefined}
                className={cn(
                  "focus-ring rounded-md px-3 py-2 text-sm font-semibold transition-colors duration-300",
                  !transparent && "text-[#1a2b3c] hover:bg-[#ebf4ff] hover:text-[#1b6cb6]",
                  transparent && "hover:bg-white/10 hover:!text-white",
                )}
              >
                {item.label}
              </Link>
            ))}
          </motion.nav>

          {/* ── CTA desktop ─────────────────────────────────────────────── */}
          <motion.div
            style={{ x: navX }}
            className="hidden shrink-0 items-center gap-3 lg:flex"
          >
            <Button
              href={getWhatsAppUrl("Hola, quiero solicitar una cotizacion para un proyecto agricola.")}
              style={{ color: "white" }}
            >
              <PhoneCall size={18} />
              Cotizar
            </Button>
          </motion.div>

          {/* ── Hamburger mobile ────────────────────────────────────────── */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            style={transparent ? { color: "white", borderColor: "rgba(255,255,255,0.3)" } : undefined}
            className={cn(
              "focus-ring relative z-50 flex h-11 w-11 items-center justify-center rounded-md border transition-colors duration-300 lg:hidden",
              !transparent && "border-[#c8ddf0] text-[#1b6cb6]",
            )}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* ── Menú mobile ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={menuRef}
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-40 border-b border-[#c8ddf0] bg-white/98 px-4 pb-6 pt-4 shadow-lg backdrop-blur lg:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Navegacion mobile">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="focus-ring rounded-md px-4 py-3 text-base font-semibold text-[#1a2b3c] transition hover:bg-[#ebf4ff] hover:text-[#1b6cb6]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-5 border-t border-[#c8ddf0] pt-5">
              <Button
                href={getWhatsAppUrl("Hola, quiero solicitar una cotizacion para un proyecto agricola.")}
                className="w-full justify-center"
                style={{ color: "white" }}
              >
                <PhoneCall size={18} />
                Solicitar cotización
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
