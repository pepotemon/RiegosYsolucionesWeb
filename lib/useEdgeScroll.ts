"use client"

import { useRef } from "react"

export function useEdgeScroll(zonePercent = 0.22, maxSpeed = 12) {
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const speedRef = useRef(0)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = containerRef.current
    if (!el) return
    const { left, width } = el.getBoundingClientRect()
    const x = e.clientX - left
    const zone = width * zonePercent

    if (x < zone) {
      el.style.cursor = "w-resize"
      speedRef.current = -((zone - x) / zone) * maxSpeed
    } else if (x > width - zone) {
      el.style.cursor = "e-resize"
      speedRef.current = ((x - (width - zone)) / zone) * maxSpeed
    } else {
      el.style.cursor = "default"
      speedRef.current = 0
    }

    if (speedRef.current !== 0 && !rafRef.current) {
      const tick = () => {
        const curr = containerRef.current
        if (!curr || speedRef.current === 0) { rafRef.current = null; return }
        curr.scrollLeft += speedRef.current
        rafRef.current = requestAnimationFrame(tick)
      }
      rafRef.current = requestAnimationFrame(tick)
    }
  }

  function handleMouseLeave() {
    speedRef.current = 0
    if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null }
    if (containerRef.current) containerRef.current.style.cursor = "default"
  }

  return { containerRef, handleMouseMove, handleMouseLeave }
}
