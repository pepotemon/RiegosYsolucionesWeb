"use client"

import { useEffect, useState } from "react"

interface LeafStyle {
  left: string
  animationDelay: string
  "--leaf-duration": string
  "--sway": string
  transform: string
}

interface FallingLeavesProps {
  number?: number
}

export function FallingLeaves({ number = 14 }: FallingLeavesProps) {
  const [leaves, setLeaves] = useState<LeafStyle[]>([])

  useEffect(() => {
    setLeaves(
      Array.from({ length: number }, () => ({
        left: `${Math.random() * 100}%`,
        animationDelay: `${(Math.random() * 14).toFixed(1)}s`,
        "--leaf-duration": `${(10 + Math.random() * 12).toFixed(1)}s`,
        "--sway": `${20 + Math.floor(Math.random() * 45)}px`,
        transform: `scale(${(0.55 + Math.random() * 0.7).toFixed(2)})`,
      }))
    )
  }, [number])

  return (
    <>
      {leaves.map((style, i) => (
        <span
          key={i}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          style={style as any}
          className="pointer-events-none absolute -top-4 animate-falling-leaf"
          aria-hidden="true"
        >
          <svg
            width="11"
            height="15"
            viewBox="0 0 11 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Hoja */}
            <path
              d="M5.5 14 C5.5 14, 1 9.5, 1 6 C1 3.2 3 1 5.5 1 C8 1 10 3.2 10 6 C10 9.5 5.5 14 5.5 14Z"
              fill="#3baa6e"
              fillOpacity="0.72"
            />
            {/* Nervio central */}
            <line
              x1="5.5" y1="14"
              x2="5.5" y2="4"
              stroke="#2d8757"
              strokeWidth="0.6"
              strokeOpacity="0.6"
            />
          </svg>
        </span>
      ))}
    </>
  )
}
