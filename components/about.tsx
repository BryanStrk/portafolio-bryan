import Image from "next/image"
import {
  ArrowRight,
  Code2,
  Database,
  Download,
  GitBranch,
  Globe,
  Server,
  Sparkles,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { SectionReveal } from "@/components/section-reveal"
import { cn } from "@/lib/utils"

const skills = [
  { label: "Angular", icon: Globe },
  { label: "TypeScript", icon: Code2 },
  { label: "Java", icon: Code2 },
  { label: "MySQL", icon: Database },
  { label: "Spring Boot", icon: Server },
  { label: "Git", icon: GitBranch },
]

const stats = [
  { value: "6+", label: "Proyectos" },
  { value: "3", label: "Tecnologías" },
  { value: "2", label: "Años" },
]

const cardBase =
  "group relative overflow-hidden rounded-[1.75rem] border-white/10 bg-background/65 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-white/20"

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <div className="section-shell mx-auto max-w-6xl rounded-[2rem] px-6 py-10 md:px-10 md:py-14">
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">
                Sobre mí
              </p>
              <h2 className="text-2xl font-semibold md:text-3xl">
                Desarrollo soluciones web con enfoque en claridad, estructura y rendimiento
              </h2>
            </div>

            <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3 md:grid-rows-3 md:gap-5">
              <Card className={cn(cardBase, "md:col-span-2 md:row-span-2")}>
                <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />

                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-card/70">
                  <div className="flex h-7 items-center gap-2 border-b border-white/8 bg-card/80 px-3">
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-red-500/40" />
                      <span className="h-2 w-2 rounded-full bg-yellow-500/40" />
                      <span className="h-2 w-2 rounded-full bg-emerald-500/40" />
                    </div>
                    <div className="ml-2 flex-1 rounded-md border border-white/6 bg-background/70 px-2 py-0.5 font-mono text-[10px] text-muted-foreground/60">
                      bryanpaico.dev/work
                    </div>
                  </div>

                  <div className="relative h-44 overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgb(99_120_210/0.18),transparent_55%)]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* TODO: reemplazar por screenshot real del proyecto destacado en /public */}
                      <span className="font-mono text-[10px] text-muted-foreground/35">
                        // TODO: src/projects/featured.png
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative mt-6 space-y-4">
                  <h3 className="text-lg font-semibold leading-tight text-foreground/95 md:text-xl">
                    Aplicaciones full stack pensadas para mantenerse en el tiempo
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    He finalizado el ciclo de Desarrollo de Aplicaciones Web. Trabajo con
                    Angular, Java y MySQL, y construyo proyectos pensados para crecer sin
                    romperse.
                  </p>

                  <div className="grid grid-cols-3 gap-3 pt-1">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl border border-white/8 bg-white/[0.03] p-3 text-center"
                      >
                        <p className="text-xl font-bold text-primary">{stat.value}</p>
                        <p className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <a href="/cv-bryan-paico.pdf" download className="inline-block pt-1">
                    <Button variant="outline" size="sm" className="gap-2 rounded-full">
                      <Download className="h-3.5 w-3.5" />
                      Descargar CV
                    </Button>
                  </a>
                </div>
              </Card>

              <Card className={cn(cardBase, "md:row-span-2")}>
                <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-sky-400/15 blur-3xl" />

                <div className="relative flex h-full flex-col">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Mi stack
                      </p>
                      <h3 className="text-base font-semibold text-foreground md:text-lg">
                        Lo que uso a diario
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-wrap content-start gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill.label}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-primary/20 bg-primary/8 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:border-primary/35 hover:bg-primary/14"
                      >
                        <skill.icon className="h-3 w-3 opacity-70" />
                        {skill.label}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>

              <Card className={cn(cardBase)}>
                <div className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-emerald-400/10 blur-2xl" />

                <div className="relative flex h-full items-center gap-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-primary/10">
                    <Image
                      src="/bryan-about.jpg"
                      alt="Foto de Bryan Paico"
                      width={128}
                      height={128}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="mb-1 flex items-center gap-1.5">
                      <span className="relative inline-flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/40 opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-400/85">
                        Disponible
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-foreground/95">Bryan Paico</p>
                    <p className="text-xs text-muted-foreground">Full Stack Developer</p>
                  </div>
                </div>
              </Card>

              <Card className={cn(cardBase)}>
                <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-amber-400/10 blur-2xl" />

                <div className="relative flex h-full flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="relative inline-flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400/40 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400/80" />
                    </span>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-400/80">
                      Actualmente construyendo
                    </p>
                  </div>
                  <h3 className="text-sm font-semibold leading-snug text-foreground/90">
                    Refactor visual y de rendimiento de este propio portfolio
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Migrando a Tailwind v4, limpiando capas de fondo y armando un sistema
                    bento más coherente.
                  </p>
                </div>
              </Card>

              <Card
                className={cn(
                  cardBase,
                  "border-white/10 bg-gradient-to-br from-purple-600/22 via-indigo-600/18 to-blue-600/22 hover:border-white/25",
                )}
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

                <div className="relative flex h-full flex-col justify-between gap-4">
                  <div>
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/80">
                      Let&apos;s collaborate
                    </p>
                    <h3 className="text-base font-semibold leading-tight text-foreground md:text-lg">
                      ¿Empezamos un proyecto?
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Si tienes una idea o un equipo donde encajar a un junior fullstack,
                      hablémoslo.
                    </p>
                  </div>

                  <Button
                    asChild
                    size="sm"
                    variant="gradient"
                    className="gap-2 rounded-full self-start"
                  >
                    <a href="#contact">
                      Empezar
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
