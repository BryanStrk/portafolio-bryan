import { Compass, Code2, Rocket, type LucideIcon } from "lucide-react"

import { Card } from "@/components/ui/card"
import { SectionReveal } from "@/components/section-reveal"
import { cn } from "@/lib/utils"

interface Phase {
  label: string
  title: string
  description: string
  icon: LucideIcon
}

const phases: Phase[] = [
  {
    label: "Fase 01",
    title: "Descubrimiento y planificación",
    description:
      "Entender el problema antes de escribir código. Definimos objetivo, alcance, stack y entregables para evitar reescrituras costosas más adelante.",
    icon: Compass,
  },
  {
    label: "Fase 02",
    title: "Diseño y desarrollo",
    description:
      "Construyo en iteraciones cortas: prototipo, feedback, refactor. Frontend limpio, backend estructurado y commits pequeños que son fáciles de revisar.",
    icon: Code2,
  },
  {
    label: "Fase 03",
    title: "Lanzamiento y mantenimiento",
    description:
      "Despliegue cuidado, monitorización básica y soporte post-lanzamiento. El proyecto no termina cuando sale a producción, ahí empieza la parte interesante.",
    icon: Rocket,
  },
]

export function Approach() {
  return (
    <section id="approach" className="py-24">
      <div className="container mx-auto px-4">
        <div className="section-shell mx-auto max-w-6xl rounded-[2rem] px-6 py-10 md:px-10 md:py-14">
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">
              Cómo trabajo
            </p>
            <h2 className="mb-4 text-2xl font-semibold md:text-3xl">Mi enfoque</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">
              Un proceso de tres fases que aplico tanto a proyectos personales como en equipo.
              Pasa el cursor o el foco sobre cada fase para ver el detalle.
            </p>
          </div>

          <SectionReveal>
            <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
              {phases.map((phase, i) => (
                <ApproachCard key={phase.label} phase={phase} index={i} />
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}

function ApproachCard({ phase, index }: { phase: Phase; index: number }) {
  const Icon = phase.icon
  const titleId = `approach-title-${index}`

  return (
    <Card
      role="group"
      tabIndex={0}
      aria-labelledby={titleId}
      className={cn(
        "group relative h-[340px] gap-0 overflow-hidden rounded-[1.75rem] border-white/10 bg-background/65 p-0 py-0 shadow-none backdrop-blur-sm",
        "motion-safe:transition-[transform,border-color] duration-300",
        "hover:border-white/25 focus-within:border-white/25",
        "motion-safe:hover:-translate-y-1 motion-safe:focus-within:-translate-y-1",
        "focus:outline-none focus-visible:ring-1 focus-visible:ring-primary/40",
      )}
    >
      {/* Decorative gradient overlay — siempre presente, opacidad controlada por CSS */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600",
          "opacity-0 motion-safe:transition-opacity duration-300",
          "group-hover:opacity-95 group-focus-within:opacity-95",
          "pointer-coarse:opacity-95 motion-reduce:opacity-95 motion-reduce:transition-none",
        )}
      />

      {/* Crosshair "+" decorativos en las 4 esquinas */}
      <CornerCross className="left-3 top-3" />
      <CornerCross className="right-3 top-3" />
      <CornerCross className="left-3 bottom-3" />
      <CornerCross className="right-3 bottom-3" />

      {/* Contenido — la descripción vive aquí, siempre, accesible a SR */}
      <div className="relative flex h-full flex-col items-center justify-center gap-5 p-8 text-center">
        <div
          className={cn(
            "flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-primary",
            "motion-safe:transition-colors duration-300 motion-reduce:transition-none",
            "group-hover:border-white/30 group-hover:bg-white/15 group-hover:text-white",
            "group-focus-within:border-white/30 group-focus-within:bg-white/15 group-focus-within:text-white",
            "pointer-coarse:border-white/30 pointer-coarse:bg-white/15 pointer-coarse:text-white",
          )}
        >
          <Icon className="h-7 w-7" />
        </div>

        <span
          className={cn(
            "rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground",
            "motion-safe:transition-colors duration-300 motion-reduce:transition-none",
            "group-hover:border-white/25 group-hover:bg-white/10 group-hover:text-white",
            "group-focus-within:border-white/25 group-focus-within:bg-white/10 group-focus-within:text-white",
            "pointer-coarse:border-white/25 pointer-coarse:bg-white/10 pointer-coarse:text-white",
          )}
        >
          {phase.label}
        </span>

        <h3
          id={titleId}
          className={cn(
            "text-lg font-semibold text-foreground md:text-xl",
            "motion-safe:transition-colors duration-300 motion-reduce:transition-none",
            "group-hover:text-white group-focus-within:text-white pointer-coarse:text-white",
          )}
        >
          {phase.title}
        </h3>

        <p
          className={cn(
            "max-w-xs text-sm leading-relaxed text-white/95",
            "opacity-0 motion-safe:transition-opacity duration-300",
            "group-hover:opacity-100 group-focus-within:opacity-100",
            "pointer-coarse:opacity-100 motion-reduce:opacity-100 motion-reduce:transition-none",
          )}
        >
          {phase.description}
        </p>
      </div>
    </Card>
  )
}

function CornerCross({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute z-10 h-2.5 w-2.5 text-foreground/25",
        "motion-safe:transition-colors duration-300 motion-reduce:transition-none",
        "group-hover:text-white/70 group-focus-within:text-white/70 pointer-coarse:text-white/70",
        className,
      )}
    >
      <svg
        viewBox="0 0 10 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        aria-hidden="true"
        focusable="false"
      >
        <line x1="5" y1="0" x2="5" y2="10" />
        <line x1="0" y1="5" x2="10" y2="5" />
      </svg>
    </span>
  )
}
