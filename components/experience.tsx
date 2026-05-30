"use client"

import { motion } from "framer-motion"
import { GraduationCap, Users, Code2, Briefcase } from "lucide-react"

const experiences = [
  {
    role: "Desarrollo de Aplicaciones Web (DAW)",
    organization: "Formación Profesional Superior",
    description:
      "Ciclo formativo de grado superior en Desarrollo de Aplicaciones Web. Base sólida en Java, MySQL y Angular a través de proyectos académicos reales.",
    icon: GraduationCap,
    color: "#A855F7",
    tags: ["Java", "MySQL", "Angular"],
  },
  {
    role: "Desarrollador Backend · Proyecto en equipo",
    organization: "Smart Menu",
    description:
      "Colaboré en equipo para desarrollar una plataforma de gestión de menús digitales. Responsable de endpoints REST y persistencia con Spring Boot.",
    icon: Users,
    color: "#3B82F6",
    tags: ["Spring Boot", "REST", "Trabajo en equipo"],
  },
  {
    role: "Desarrollador Fullstack · Proyectos personales",
    organization: "Por mi cuenta",
    description:
      "Proyectos personales fullstack: library management, transport API, video club system y este portfolio. Foco en estructura limpia y producto que funciona.",
    icon: Code2,
    color: "#22D3EE",
    tags: ["Next.js", "React", "Spring Boot"],
  },
  {
    role: "Mentoría y apoyo técnico",
    organization: "Prácticas · Factoría F5",
    description:
      "Apoyo técnico y mentoría a +7 desarrolladores de un bootcamp full stack: resolución de incidencias, problemas reales de Git/GitHub y decisiones de arquitectura backend (DTOs, capas). En paralelo, desarrollo proyectos propios con Java 25 + Spring Boot 4.",
    icon: Briefcase,
    color: "#10B981",
    tags: ["Spring Boot", "Git/GitHub", "Mentoría"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <div className="section-shell mx-auto max-w-6xl rounded-[2rem] px-6 py-10 md:px-10 md:py-14">
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">
              Trayectoria
            </p>
            <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
              Mi experiencia
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">
              Una línea de tiempo honesta: formación, colaboración en equipo y proyectos personales
              que me llevaron al stack que uso hoy.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2">
            {experiences.map((item, i) => (
              <motion.article
                key={item.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.21, 1.02, 0.73, 1.0] }}
                whileHover={{ y: -4 }}
                className="group relative flex flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-background/65 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-white/20"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 24px 0 ${item.color}30`
                  e.currentTarget.style.borderColor = `${item.color}40`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = ""
                  e.currentTarget.style.borderColor = ""
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border bg-white/[0.04] transition-colors duration-300"
                    style={{ borderColor: `${item.color}30`, color: item.color }}
                  >
                    <item.icon className="h-6 w-6" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {item.organization}
                    </p>
                    <h3 className="text-base font-semibold text-foreground/90 transition-colors group-hover:text-foreground md:text-lg">
                      {item.role}
                    </h3>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-lg border px-2.5 py-1 text-[11px] font-medium"
                      style={{
                        borderColor: `${item.color}30`,
                        backgroundColor: `${item.color}12`,
                        color: item.color,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
