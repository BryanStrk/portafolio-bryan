import Image from "next/image"
import { ArrowRight, CircleCheck, Clock, Download, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ImageCarousel } from "@/components/image-carousel"
import { SectionReveal } from "@/components/section-reveal"
import { IMAGES } from "@/lib/images"
import { cn } from "@/lib/utils"

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

            <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3 md:gap-5">
              <Card className={cn(cardBase, "md:col-span-2")}>
                <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />

                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-card/70">
                  <div className="flex h-7 items-center gap-2 border-b border-white/8 bg-card/80 px-3">
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-red-500/40" />
                      <span className="h-2 w-2 rounded-full bg-yellow-500/40" />
                      <span className="h-2 w-2 rounded-full bg-emerald-500/40" />
                    </div>
                    <div className="ml-2 flex-1 rounded-md border border-white/6 bg-background/70 px-2 py-0.5 font-mono text-[10px] text-muted-foreground/60">
                      drive-arena.app
                    </div>
                  </div>

                  <div className="relative h-56 overflow-hidden sm:h-72 md:h-[26rem]">
                    <ImageCarousel images={IMAGES.driveArena} name="Drive Arena" />
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

                  <a
                    href={IMAGES.cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block pt-1"
                  >
                    <Button variant="gradient" size="sm" className="gap-2 rounded-full">
                      <Download className="h-3.5 w-3.5" />
                      Descargar CV
                    </Button>
                  </a>
                </div>
              </Card>

              <div className="flex flex-col gap-4 md:gap-5">
                <Card
                  className={cn(
                    cardBase,
                    "aspect-[4/5] p-0 md:aspect-auto md:flex-[3]",
                  )}
                >
                  <Image
                    src={IMAGES.photo}
                    alt="Foto de Bryan Paico, desarrollador full stack"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background via-background/75 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="mb-1.5 flex items-center gap-1.5">
                      <span className="relative inline-flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/40 opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400/85" />
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-400/90">
                        Disponible
                      </span>
                    </div>
                    <p className="text-base font-semibold text-foreground">Bryan Paico</p>
                    <p className="text-xs text-muted-foreground">Desarrollador Full Stack</p>
                  </div>
                </Card>

                <Card
                  className={cn(
                    cardBase,
                    "bg-gradient-to-br from-purple-600/22 via-indigo-600/18 to-blue-600/22 p-5 hover:border-white/25 md:flex-[2]",
                  )}
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

                  <div className="relative flex h-full flex-col justify-between gap-3">
                    <div>
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/80">
                        Colaboremos
                      </p>
                      <h3 className="text-base font-semibold leading-tight text-foreground md:text-lg">
                        ¿Empezamos un proyecto?
                      </h3>
                      <p className="mt-2 text-xs text-muted-foreground">
                        Si tienes una idea o un equipo donde encajar a un junior fullstack,
                        hablémoslo.
                      </p>

                      <ul className="mt-5 space-y-5 text-xs text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <MapPin className="h-3.5 w-3.5 shrink-0 text-primary/85" aria-hidden />
                          Barcelona · Híbrido o remoto
                        </li>
                        <li className="flex items-center gap-2">
                          <CircleCheck className="h-3.5 w-3.5 shrink-0 text-primary/85" aria-hidden />
                          Disponible para incorporarme
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-3.5 w-3.5 shrink-0 text-primary/85" aria-hidden />
                          Respondo en ~24h
                        </li>
                      </ul>
                    </div>

                    <Button
                      asChild
                      size="sm"
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
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
