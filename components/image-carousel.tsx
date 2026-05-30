"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"

export function ImageCarousel({
  images,
  name,
  intervalMs = 5000,
  sizes = "(min-width: 768px) 66vw, 100vw",
  priorityFirst = true,
}: {
  images: readonly string[]
  name: string
  intervalMs?: number
  sizes?: string
  priorityFirst?: boolean
}) {
  const [index, setIndex] = useState(0)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return
    if (images.length <= 1) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, intervalMs)
    return () => clearInterval(id)
  }, [images.length, intervalMs, reducedMotion])

  const altFor = (i: number) =>
    i === 0
      ? `${name} — captura principal`
      : `${name} — captura ${i + 1}`

  return (
    <>
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={altFor(i)}
          fill
          sizes={sizes}
          priority={priorityFirst && i === 0}
          className={cn(
            "object-cover object-top transition-opacity duration-700 ease-out motion-reduce:transition-none",
            i === index ? "opacity-100" : "opacity-0",
          )}
        />
      ))}

      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-background/60 px-2.5 py-1.5 backdrop-blur-sm">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ver captura ${i + 1} de ${images.length}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300 motion-reduce:transition-none",
              i === index
                ? "w-5 bg-foreground/90"
                : "w-1.5 bg-foreground/35 hover:bg-foreground/60",
            )}
          />
        ))}
      </div>
    </>
  )
}
