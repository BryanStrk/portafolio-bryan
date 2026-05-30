import {
  ArrowRight,
  Atom,
  Braces,
  Code2,
  Container,
  Database,
  GitBranch,
  Globe,
  Layers,
  Server,
  Sparkles,
  Triangle,
  Wrench,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { SectionReveal } from "@/components/section-reveal"
import { TechMarquee } from "@/components/tech-marquee"
import { cn } from "@/lib/utils"

const priorities = [
  {
    title: "Estructura primero",
    description:
      "Capas claras Controller → Service → Repository, carpetas que cuentan la historia y nombres que no necesitan comentario.",
  },
  {
    title: "Rendimiento perceptible",
    description: "Lo que el usuario ve y siente importa tanto como las métricas técnicas.",
  },
  {
    title: "Accesible por defecto",
    description:
      "POUR aplicado a esta web: foco visible con teclado, alt en imágenes, roles aria y respeto a prefers-reduced-motion.",
  },
  {
    title: "Commits pequeños",
    description: "Cambios atómicos que cualquiera puede revisar sin saber el contexto entero.",
  },
]

const techStack = [
  { label: "Java", icon: Code2 },
  { label: "Spring Boot", icon: Server },
  { label: "Angular", icon: Globe },
  { label: "React", icon: Atom },
  { label: "TypeScript", icon: Code2 },
  { label: "JavaScript", icon: Braces },
  { label: "MySQL", icon: Database },
  { label: "MongoDB", icon: Database },
  { label: "Docker", icon: Container },
  { label: "Nginx", icon: Server },
  { label: "Git", icon: GitBranch },
  { label: "Tailwind", icon: Wrench },
  { label: "Vercel", icon: Triangle },
]

const designTags = ["Figma", "Prototipado", "Wireframing"]

const cardBase =
  "group relative overflow-hidden rounded-[1.75rem] border-white/10 bg-background/65 p-7 backdrop-blur-sm transition-colors duration-300 hover:border-white/20"

export function SkillsBento() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="section-shell mx-auto max-w-6xl rounded-[2rem] px-6 py-10 md:px-10 md:py-14">
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">
              Aptitudes
            </p>
            <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
              Perfil y stack
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">
              Cómo enfoco el desarrollo, las herramientas que uso a diario y una invitación directa
              si quieres construir algo juntos.
            </p>
          </div>

          <SectionReveal>
            <div className="mx-auto flex max-w-5xl flex-col gap-5">
              <Card className={cn(cardBase)}>
                <div className="pointer-events-none absolute -top-12 -right-12 h-48 w-48 rounded-full bg-sky-400/20 blur-3xl" />

                <div className="relative">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-400/25 bg-sky-400/10 text-sky-300">
                      <Layers className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Stack
                      </p>
                      <h3 className="text-lg font-semibold text-foreground md:text-xl">
                        Lo que uso hoy
                      </h3>
                    </div>
                  </div>

                  <TechMarquee items={techStack} rows={1} speed={34} />
                </div>
              </Card>

              <Card className={cn(cardBase)}>
                <div className="pointer-events-none absolute -top-12 -left-12 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />

                <div className="relative">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Prioridades
                      </p>
                      <h3 className="text-lg font-semibold text-foreground md:text-xl">
                        Cómo construyo
                      </h3>
                    </div>
                  </div>

                  <ul className="grid gap-3 sm:grid-cols-2">
                    {priorities.map((item) => (
                      <li
                        key={item.title}
                        className="rounded-xl border border-white/8 bg-white/[0.03] p-4 transition-colors hover:border-white/15"
                      >
                        <p className="mb-1 text-sm font-semibold text-foreground/90">
                          {item.title}
                        </p>
                        <p className="text-xs leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 border-t border-white/8 pt-4 text-[11px] uppercase tracking-[0.16em] text-muted-foreground/55">
                    {designTags.join(" · ")}
                  </p>
                </div>
              </Card>

              <Card
                className={cn(
                  cardBase,
                  "bg-gradient-to-br from-purple-600/20 via-indigo-600/15 to-blue-600/20 hover:border-white/25",
                )}
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

                <div className="relative flex h-full flex-col items-start justify-between gap-5 md:flex-row md:items-center">
                  <div className="max-w-xl">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
                      Colaboremos
                    </p>
                    <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                      ¿Empezamos un proyecto juntos?
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Si tienes una idea o necesitas un dev fullstack en el equipo, escríbeme y lo
                      hablamos.
                    </p>
                  </div>

                  <a href="#contact" className="shrink-0">
                    <Button className="soft-shine blue-glow h-12 gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 text-sm font-semibold text-white shadow-xl shadow-purple-900/20 transition-all hover:-translate-y-0.5 hover:opacity-95">
                      Empezar
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </Card>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
