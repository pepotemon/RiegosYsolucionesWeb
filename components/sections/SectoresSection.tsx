"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
  type MotionValue,
} from "motion/react"
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
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=300&q=75",
  },
  {
    name: "Ganadería",
    icon: Droplets,
    image:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=300&q=75",
  },
  {
    name: "Palma",
    icon: TreePine,
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=300&q=75",
  },
  {
    name: "Café",
    icon: Coffee,
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=300&q=75",
  },
  {
    name: "Banano",
    icon: Leaf,
    image:
      "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=300&q=75",
  },
  {
    name: "Arroz",
    icon: Wheat,
    image:
      "https://images.unsplash.com/photo-1516996087931-5ae405802f9f?auto=format&fit=crop&w=300&q=75",
  },
  {
    name: "Invernaderos",
    icon: SunMedium,
    image:
      "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=300&q=75",
  },
  {
    name: "Agroindustria",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=300&q=75",
  },
]

const REVOLUTION_MS = 48000

function OrbitCard({
  sector,
  index,
  total,
  angle,
  radius,
  cardW,
  cardH,
}: {
  sector: (typeof SECTORS)[number]
  index: number
  total: number
  angle: MotionValue<number>
  radius: number
  cardW: number
  cardH: number
}) {
  const Icon = sector.icon
  const offsetRad = (index / total) * Math.PI * 2
  const [hovered, setHovered] = useState(false)

  const x = useTransform(angle, (deg) => {
    const rad = (deg * Math.PI) / 180 + offsetRad - Math.PI / 2
    return Math.cos(rad) * radius - cardW / 2
  })

  const posY = useTransform(angle, (deg) => {
    const rad = (deg * Math.PI) / 180 + offsetRad - Math.PI / 2
    return Math.sin(rad) * radius - cardH / 2
  })

  const rawY = useTransform(posY, (v) => v + cardH / 2)
  const depthScale = useTransform(rawY, [-radius, radius], [0.72, 1.0])
  const opacity = useTransform(rawY, [-radius, radius], [0.48, 1.0])
  const zIndex = useTransform(rawY, [-radius, radius], [1, 10])

  const iconSize = Math.max(Math.round(cardW * 0.25), 30)
  const iconHalf = iconSize / 2
  const iconInner = Math.round(iconSize * 0.48)
  const fontSize = Math.max(Math.round(cardW * 0.082), 10)

  return (
    <motion.div
      className="absolute"
      style={{
        left: "50%",
        top: "50%",
        x,
        y: posY,
        scale: depthScale,
        opacity,
        zIndex,
        width: cardW,
        height: cardH,
      }}
    >
      {/* Subtle float */}
      <motion.div
        className="relative h-full w-full"
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 3 + index * 0.45,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.38,
        }}
      >
        {/* Hover lift */}
        <motion.div
          className="relative h-full w-full cursor-pointer"
          whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.22, ease: "easeOut" } }}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
        >
          {/* Card body */}
          <div
            className="relative h-full w-full rounded-[28px] bg-white"
            style={{
              boxShadow: hovered
                ? "0 30px 60px rgba(0,0,0,0.18)"
                : "0 20px 40px rgba(0,0,0,0.10)",
              transition: "box-shadow 0.3s ease",
            }}
          >
            {/* Image: top 60% */}
            <div
              className="relative overflow-hidden rounded-t-[28px]"
              style={{ height: "60%" }}
            >
              <Image
                src={sector.image}
                alt={sector.name}
                fill
                sizes={`${Math.round(cardW)}px`}
                className="object-cover"
              />
            </div>

            {/* Text: bottom 40% */}
            <div
              className="flex items-end justify-center px-2 pb-3"
              style={{ height: "40%", paddingTop: iconHalf + 4 }}
            >
              <p
                className="text-center font-bold leading-tight text-[#082033]"
                style={{ fontSize }}
              >
                {sector.name}
              </p>
            </div>
          </div>

          {/* Circular icon overlay between image and text */}
          <div
            className="absolute flex items-center justify-center rounded-full bg-[#2DBA45]"
            style={{
              width: iconSize,
              height: iconSize,
              top: `calc(60% - ${iconHalf}px)`,
              left: "50%",
              transform: "translateX(-50%)",
              boxShadow: "0 4px 16px rgba(45,186,69,0.50)",
              zIndex: 5,
            }}
          >
            <Icon size={iconInner} color="white" />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export function SectoresSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState(0)
  const [paused, setPaused] = useState(false)
  const angle = useMotionValue(0)

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) setSize(containerRef.current.offsetWidth)
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  useAnimationFrame((_, delta) => {
    if (!paused) {
      angle.set((angle.get() + (delta * 360) / REVOLUTION_MS) % 360)
    }
  })

  const radius = size * 0.42
  const cardW = Math.max(Math.min(size * 0.22, 148), 62)
  const cardH = Math.max(Math.min(size * 0.30, 185), 82)
  const logoSize = Math.min(size * 0.33, 218)

  const BENEFITS = [
    {
      Icon: Shield,
      title: "Cobertura confiable",
      sub: "En todo el territorio",
    },
    {
      Icon: Headphones,
      title: "Atención especializada",
      sub: "Estamos para ayudarte",
    },
    {
      Icon: Leaf,
      title: "Soluciones sostenibles",
      sub: "Para un futuro mejor",
    },
  ]

  return (
    <section
      className="relative overflow-hidden py-24"
      style={{
        background: "linear-gradient(180deg, #F3F9FF 0%, #FFFFFF 100%)",
      }}
    >
      {/* Dot grid pattern — premium SaaS feel */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,119,200,0.13) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Soft color radial glow top-center */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 18%, rgba(0,119,200,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <BlurFade inView inViewMargin="-80px">
          {/* Pill badge */}
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

          {/* Hero title */}
          <div className="mb-4 text-center">
            <h2 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-[#082033]">Campo, finca</span>
              <br />
              <span className="text-[#2DBA45]">y agroindustria</span>
            </h2>
          </div>

          {/* Subtitle */}
          <p className="mx-auto mb-16 max-w-md text-center text-base text-gray-500 sm:text-lg">
            Soluciones integrales para cada etapa de{" "}
            <span className="font-semibold text-[#2DBA45]">tu producción</span>.
          </p>
        </BlurFade>

        {/* Orbit composition */}
        <BlurFade inView inViewMargin="-40px">
          <div
            ref={containerRef}
            className="relative mx-auto w-full max-w-[700px] select-none"
            style={{ aspectRatio: "1 / 1" }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Soft color glow behind orbit area */}
            {size > 0 && (
              <div
                className="pointer-events-none absolute rounded-full"
                style={{
                  width: radius * 2,
                  height: radius * 2,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  background:
                    "radial-gradient(circle at 42% 38%, rgba(45,186,69,0.07) 0%, rgba(0,119,200,0.09) 50%, transparent 75%)",
                }}
              />
            )}

            {/* Green dashed orbit ring */}
            {size > 0 && (
              <div
                className="pointer-events-none absolute rounded-full"
                style={{
                  width: radius * 2,
                  height: radius * 2,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  border: "2px dashed rgba(45,186,69,0.45)",
                }}
              />
            )}

            {/* Orbit cards */}
            {size > 0 &&
              SECTORS.map((sector, i) => (
                <OrbitCard
                  key={`${sector.name}-${size}`}
                  sector={sector}
                  index={i}
                  total={SECTORS.length}
                  angle={angle}
                  radius={radius}
                  cardW={cardW}
                  cardH={cardH}
                />
              ))}

            {/* Central planet Earth */}
            {size > 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Outer rotating dashed orbit ring */}
                <motion.div
                  className="pointer-events-none absolute rounded-full"
                  style={{
                    width: logoSize + 40,
                    height: logoSize + 40,
                    border: "2px dashed rgba(45,186,69,0.38)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                />

                {/* Atmospheric glow — pure green pulse */}
                <motion.div
                  className="pointer-events-none absolute rounded-full"
                  style={{
                    width: logoSize + 14,
                    height: logoSize + 14,
                    boxShadow:
                      "0 0 55px 24px rgba(45,186,69,0.32), 0 0 100px 40px rgba(45,186,69,0.14)",
                  }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Green Planet sphere */}
                <div
                  className="relative overflow-hidden rounded-full"
                  style={{
                    width: logoSize,
                    height: logoSize,
                    background:
                      "radial-gradient(circle at 35% 30%, #86efac 0%, #22c55e 28%, #16a34a 55%, #14532d 80%, #052e16 100%)",
                    boxShadow:
                      "0 0 0 2px rgba(45,186,69,0.22), 0 24px 64px rgba(0,0,0,0.45), inset 0 0 55px rgba(0,20,0,0.50)",
                  }}
                >
                  {/* Rotating continent-texture layer */}
                  <motion.div
                    className="absolute inset-0 scale-[1.18]"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                    style={{
                      background: [
                        "radial-gradient(ellipse 42% 28% at 28% 42%, rgba(5,46,22,0.60) 0%, transparent 70%)",
                        "radial-gradient(ellipse 28% 22% at 68% 58%, rgba(5,46,22,0.50) 0%, transparent 70%)",
                        "radial-gradient(ellipse 22% 26% at 52% 22%, rgba(5,46,22,0.45) 0%, transparent 70%)",
                        "radial-gradient(ellipse 24% 16% at 18% 72%, rgba(5,46,22,0.40) 0%, transparent 70%)",
                        "radial-gradient(ellipse 16% 20% at 82% 28%, rgba(5,46,22,0.35) 0%, transparent 70%)",
                        "radial-gradient(ellipse 18% 14% at 62% 80%, rgba(134,239,172,0.18) 0%, transparent 70%)",
                        "radial-gradient(ellipse 12% 12% at 38% 60%, rgba(187,247,208,0.14) 0%, transparent 70%)",
                      ].join(", "),
                    }}
                  />

                  {/* Specular highlight — top-left sun */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle at 32% 27%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.04) 38%, transparent 55%)",
                    }}
                  />

                  {/* Limb darkening — deep space edge */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-full"
                    style={{
                      boxShadow:
                        "inset 0 0 60px rgba(0,15,0,0.65), inset -14px -14px 40px rgba(0,8,0,0.45)",
                    }}
                  />

                </div>

                {/* Logo flotando encima del planeta — más grande que el propio círculo */}
                <div
                  className="pointer-events-none absolute flex items-center justify-center"
                  style={{ width: logoSize * 1.45, height: logoSize * 1.45, zIndex: 20 }}
                >
                  <Image
                    src="/logo-icon.png"
                    alt="Riegos y Soluciones Agrícolas del Norte"
                    width={512}
                    height={512}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      filter:
                        "brightness(0) invert(1) drop-shadow(0 0 8px rgba(255,255,255,0.35)) drop-shadow(0 2px 6px rgba(0,0,0,0.30))",
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </BlurFade>

        {/* Benefits bar */}
        <BlurFade inView inViewMargin="-40px">
          <div className="mx-auto mt-12 max-w-3xl">
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
