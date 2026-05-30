"use client"

import { useEffect, useRef } from "react"

export function GridBackground() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const isCoarse = window.matchMedia("(pointer: coarse)").matches

    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight * 0.28
    root.style.setProperty("--mx", `${centerX}px`)
    root.style.setProperty("--my", `${centerY}px`)

    const hero = document.getElementById("home")
    let io: IntersectionObserver | null = null
    if (hero) {
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const inHero = entry.intersectionRatio > 0.25
            root.dataset.heroVisible = inHero ? "true" : "false"
          }
        },
        { threshold: [0, 0.25, 0.6] },
      )
      io.observe(hero)
    }

    let rafId = 0
    let pendingX = centerX
    let pendingY = centerY
    const apply = () => {
      root.style.setProperty("--mx", `${pendingX}px`)
      root.style.setProperty("--my", `${pendingY}px`)
      rafId = 0
    }
    const onMove = (e: PointerEvent) => {
      pendingX = e.clientX
      pendingY = e.clientY
      if (!rafId) rafId = requestAnimationFrame(apply)
    }

    if (!reduced && !isCoarse) {
      window.addEventListener("pointermove", onMove, { passive: true })
    }

    return () => {
      window.removeEventListener("pointermove", onMove)
      if (rafId) cancelAnimationFrame(rafId)
      io?.disconnect()
    }
  }, [])

  return (
    <div
      ref={rootRef}
      aria-hidden
      data-hero-visible="true"
      className="grid-bg pointer-events-none fixed inset-0 z-0"
    >
      <div className="grid-bg-base" />
      <div className="grid-bg-spotlight" />
      <div className="grid-bg-blob grid-bg-blob--purple" />
      <div className="grid-bg-blob grid-bg-blob--blue" />
    </div>
  )
}
