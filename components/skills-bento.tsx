"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  Layers,
  Sparkles,
  Code2,
  Database,
  Globe,
  GitBranch,
  Server,
  Wrench,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { TechMarquee } from "@/components/tech-marquee"

const priorities = [
  {
    title: "Estructura primero",
    description: "Carpetas claras, capas separadas y nombres que no necesitan comentario.",
  },
  {
    title: "Rendimiento perceptible",
    description: "Lo que el usuario ve y siente importa tanto como las métricas técnicas.",
  },
  {
    title: "Commits pequeños",
    description: "Cambios atómicos que cualquiera puede revisar sin saber el contexto entero.",
  },
]

const techStack = [
  { label: "Next.js", icon: Globe },
  { label: "React", icon: Code2 },
  { label: "TypeScript", icon: Code2 },
  { label: "Angular", icon: Globe },
  { label: "Spring Boot", icon: Server },
  { label: "Java", icon: Code2 },
  { label: "MySQL", icon: Database },
  { label: "MongoDB", icon: Database },
  { label: "Git", icon: GitBranch },
  { label: "Tailwind", icon: Wrench },
]

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
              About / Tech Stack
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">
              Cómo enfoco el desarrollo, las herramientas que uso a diario y una invitación directa
              si quieres construir algo juntos.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-5">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, ease: [0.21, 1.02, 0.73, 1.0] }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-background/65 p-7 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 md:col-span-2"
            >
              <div className="pointer-events-none absolute -top-12 -right-12 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />

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

                <ul className="grid gap-3 sm:grid-cols-3">
                  {priorities.map((item) => (
                    <li
                      key={item.title}
                      className="rounded-xl border border-white/8 bg-white/[0.03] p-3 transition-colors hover:border-white/15"
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
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: 0.08, ease: [0.21, 1.02, 0.73, 1.0] }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-background/65 p-7 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 md:row-span-2"
            >
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-sky-400/15 blur-3xl" />

              <div className="relative flex h-full flex-col">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-400/25 bg-sky-400/10 text-sky-300">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Tech Stack
                    </p>
                    <h3 className="text-lg font-semibold text-foreground md:text-xl">
                      Lo que uso hoy
                    </h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-center">
                  <TechMarquee items={techStack} rows={2} speed={34} />
                </div>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: 0.16, ease: [0.21, 1.02, 0.73, 1.0] }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-purple-600/20 via-indigo-600/15 to-blue-600/20 p-7 backdrop-blur-sm transition-colors duration-300 hover:border-white/25 md:col-span-2"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

              <div className="relative flex h-full flex-col items-start justify-between gap-5 md:flex-row md:items-center">
                <div className="max-w-xl">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
                    Let&apos;s collaborate
                  </p>
                  <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                    Do you want to start a project together?
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Si tienes una idea o necesitas un dev fullstack en el equipo, escríbeme y lo
                    hablamos.
                  </p>
                </div>

                <a href="#contact" className="shrink-0">
                  <Button className="soft-shine blue-glow h-12 gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 text-sm font-semibold text-white shadow-xl shadow-purple-900/20 transition-all hover:-translate-y-0.5 hover:opacity-95">
                    Start a project
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  )
}
