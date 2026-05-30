import type { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export type TechItem = {
  label: string
  icon: LucideIcon
}

type Direction = "left" | "right"

const chipClass =
  "inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-foreground/85 transition-colors hover:border-primary/30 hover:bg-primary/8 hover:text-primary"

function SingleMarquee({
  items,
  direction = "left",
  speed = 32,
  className,
}: {
  items: TechItem[]
  direction?: Direction
  speed?: number
  className?: string
}) {
  const duplicated = [...items, ...items]
  return (
    <div className={cn("tech-marquee", className)}>
      <div
        className="tech-marquee-track"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {duplicated.map((item, i) => (
          <span
            key={`${item.label}-${i}`}
            aria-hidden={i >= items.length ? true : undefined}
            className={chipClass}
          >
            <item.icon className="h-3 w-3 opacity-70" />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  )
}

export function TechMarquee({
  items,
  rows = 1,
  speed = 32,
  className,
}: {
  items: TechItem[]
  rows?: 1 | 2
  speed?: number
  className?: string
}) {
  if (rows === 2) {
    return (
      <div className={cn("tech-marquee-stack", className)}>
        <SingleMarquee items={items} direction="left" speed={speed} />
        <SingleMarquee items={items} direction="right" speed={Math.round(speed * 1.18)} />
      </div>
    )
  }
  return <SingleMarquee items={items} speed={speed} className={className} />
}
