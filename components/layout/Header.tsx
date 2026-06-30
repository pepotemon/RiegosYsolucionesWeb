"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { X, Menu, PhoneCall } from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { navItems, siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isDesktop;
}

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();

  const { scrollY } = useScroll();

  // Large logo animation only on desktop (lg+) to avoid mobile overflow
  const animEnabled = isHome && isDesktop;

  const rawScale = useTransform(scrollY, [0, 160], animEnabled ? [1, 0.55] : [1.0, 1.0]);
  const rawY     = useTransform(scrollY, [0, 160], animEnabled ? [36, 10]  : [0, 0]);
  const rawX     = useTransform(scrollY, [0, 160], animEnabled ? [-68, 0]  : [0, 0]);

  const logoScale = useSpring(rawScale, { stiffness: 150, damping: 25 });
  const logoY     = useSpring(rawY,     { stiffness: 150, damping: 25 });
  const logoX     = useSpring(rawX,     { stiffness: 150, damping: 25 });

  // Texto: escala contraria al ícono → visualmente siempre igual, pero pequeño cuando ícono es grande
  const rawTextScale = useTransform(scrollY, [0, 160], animEnabled ? [0.55, 1.0] : [1.0, 1.0]);
  const textScale    = useSpring(rawTextScale, { stiffness: 150, damping: 25 });

  // Nav y botón se desplazan a la derecha cuando el logo está grande
  const rawNavX = useTransform(scrollY, [0, 160], animEnabled ? [32, 0] : [0, 0]);
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
          {/* Contenedor con ancho fijo para que el nav nunca colisione */}
          <div className="w-14 shrink-0 lg:w-60" style={isDesktop ? { overflow: "visible" } : undefined}>
            <Link
              href="/"
              className="focus-ring inline-flex items-center gap-3 rounded-md"
              style={isDesktop ? { overflow: "visible" } : undefined}
            >
              <motion.div
                className="flex items-center gap-0"
                style={{
                  scale: logoScale,
                  y: logoY,
                  x: logoX,
                  originX: 0,
                  originY: 0.5,
                }}
              >
                {/* Imagen renderizada grande → siempre nítida */}
                <Image
                  src="/logo-icon.png"
                  alt="Riegos y Soluciones Agrícolas del Norte"
                  width={260}
                  height={260}
                  className="h-12 w-12 shrink-0 object-contain drop-shadow-sm lg:h-[260px] lg:w-[260px]"
                  priority
                />

                {/* Texto: oculto en móvil, visible en desktop con contra-escala */}
                <motion.div
                  style={{ scale: textScale, originX: 0, originY: 0.5 }}
                  className="-ml-16 -mt-3 hidden flex-col leading-none lg:flex"
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
