"use client"

import { useEffect, useState } from "react"

interface DropStyle {
  left: string
  animationDelay: string
  "--rain-duration": string
  opacity: number
}

export function RainEffect({ count = 45 }: { count?: number }) {
  const [drops, setDrops] = useState<DropStyle[]>([])

  useEffect(() => {
    setDrops(
      Array.from({ length: count }, () => ({
        left: `${(Math.random() * 110 - 5).toFixed(1)}%`,
        animationDelay: `${(Math.random() * 1.6).toFixed(2)}s`,
        "--rain-duration": `${(0.5 + Math.random() * 0.5).toFixed(2)}s`,
        opacity: 0.45 + Math.random() * 0.45,
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
          <svg width="1.5" height="13" viewBox="0 0 1.5 13" fill="none">
            <rect x="0" y="0" width="1.5" height="13" rx="0.75" fill="rgba(155,215,248,0.85)" />
          </svg>
        </span>
      ))}
    </>
  )
}
