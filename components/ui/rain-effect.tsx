"use client"

import { useEffect, useState } from "react"

interface DropStyle {
  left: string
  animationDelay: string
  "--rain-duration": string
  display: string
  width: string
  height: string
  borderRadius: string
  background: string
  opacity: number
}

export function RainEffect({ count = 35 }: { count?: number }) {
  const [drops, setDrops] = useState<DropStyle[]>([])

  useEffect(() => {
    setDrops(
      Array.from({ length: count }, () => ({
        left: `${(Math.random() * 112 - 6).toFixed(1)}%`,
        animationDelay: `${(Math.random() * 4).toFixed(2)}s`,
        "--rain-duration": `${(1.8 + Math.random() * 1.8).toFixed(2)}s`,
        display: "block",
        width: `${(1 + Math.random() * 0.8).toFixed(1)}px`,
        height: `${12 + Math.floor(Math.random() * 12)}px`,
        borderRadius: "0 0 2px 2px",
        background: "linear-gradient(to bottom, transparent 0%, rgba(185,230,255,1) 100%)",
        opacity: 0.28 + Math.random() * 0.48,
      }))
    )
  }, [count])

  return (
    <>
      {drops.map((style, i) => (
        <span
          key={i}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          style={style as any}
          className="pointer-events-none absolute -top-4 animate-falling-rain"
          aria-hidden="true"
        />
      ))}
    </>
  )
}
