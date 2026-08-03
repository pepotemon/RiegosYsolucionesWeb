import Image from "next/image"
import {
  Sprout,
  Droplets,
  TreePine,
  Coffee,
  Leaf,
  Wheat,
  SunMedium,
  Factory,
  Shield,
  Headphones,
} from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import type { ElementType } from "react"

const SECTORS: { name: string; icon: ElementType; image: string }[] = [
  {
    name: "Agricultura",
    icon: Sprout,
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Ganadería",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Palma",
    icon: TreePine,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Café",
    icon: Coffee,
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Banano",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Arroz",
    icon: Wheat,
    image: "https://images.unsplash.com/photo-1516996087931-5ae405802f9f?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Invernaderos",
    icon: SunMedium,
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Agroindustria",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=400&q=80",
  },
]

const BENEFITS = [
  { Icon: Shield, title: "Cobertura confiable", sub: "En todo el territorio" },
  { Icon: Headphones, title: "Atención especializada", sub: "Estamos para ayudarte" },
  { Icon: Leaf, title: "Soluciones sostenibles", sub: "Para un futuro mejor" },
]

export function SectoresSection() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ background: "linear-gradient(180deg, #F3F9FF 0%, #FFFFFF 100%)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,119,200,0.13) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 18%, rgba(0,119,200,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <BlurFade inView inViewMargin="-80px">
          <div className="mb-10 flex justify-center">
            <div
              className="flex items-center gap-2 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#0077C8]"
              style={{
                background: "rgba(0,119,200,0.08)",
                borderRadius: "20px",
                border: "1px solid rgba(0,119,200,0.15)",
              }}
            >
              <Leaf size={11} />
              Cobertura de Servicio
              <Leaf size={11} />
            </div>
          </div>

          <div className="mb-4 text-center">
            <h2 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-[#082033]">Campo, finca</span>
              <br />
              <span className="text-[#2DBA45]">y agroindustria</span>
            </h2>
          </div>

          <p className="mx-auto mb-16 max-w-md text-center text-base text-gray-500 sm:text-lg">
            Soluciones integrales para cada etapa de{" "}
            <span className="font-semibold text-[#2DBA45]">tu producción</span>.
          </p>
        </BlurFade>

        {/* Sector cards grid */}
        <BlurFade inView inViewMargin="-40px">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {SECTORS.map((sector) => {
              const Icon = sector.icon
              return (
                <div
                  key={sector.name}
                  className="group relative aspect-[3/4] overflow-hidden rounded-[20px]"
                  style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
                >
                  <Image
                    src={sector.image}
                    alt={sector.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082033]/90 via-[#082033]/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 pb-5">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2DBA45]"
                      style={{ boxShadow: "0 4px 16px rgba(45,186,69,0.50)" }}
                    >
                      <Icon size={20} color="white" />
                    </div>
                    <p className="text-center text-sm font-black text-white">{sector.name}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </BlurFade>

        {/* Benefits bar */}
        <BlurFade inView inViewMargin="-40px">
          <div className="mx-auto mt-10 max-w-3xl">
            <div
              className="flex flex-col divide-y divide-gray-100 rounded-[25px] bg-white sm:flex-row sm:divide-x sm:divide-y-0"
              style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}
            >
              {BENEFITS.map(({ Icon, title, sub }) => (
                <div
                  key={title}
                  className="flex flex-1 flex-col items-center gap-2 px-6 py-6 text-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
                    <Icon size={22} className="text-[#2DBA45]" />
                  </div>
                  <p className="text-sm font-bold text-[#082033]">{title}</p>
                  <p className="text-xs text-gray-400">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

      </div>
    </section>
  )
}
