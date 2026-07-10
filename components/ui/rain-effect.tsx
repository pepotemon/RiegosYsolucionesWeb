"use client"

import { useEffect, useState } from "react"

interface DropStyle {
  left: string
  animationDelay: string
  "--rain-duration": string
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
        opacity: 0.25 + Math.random() * 0.35,
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
        >
          <svg width="1.5" height="16" viewBox="0 0 1.5 16" fill="none">
            <rect x="0" y="0" width="1.5" height="16" rx="0.75" fill="rgba(155,215,248,0.9)" />
          </svg>
        </span>
      ))}
    </>
  )
}
