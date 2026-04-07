"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import { useEffect, useState, useMemo } from "react"

const socialLinks = [
  { icon: Github, href: "https://github.com/BryanStrk", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/bryan-alejandro-paico-albines-5560142b0/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:bryanpaicoalbines97@gmail.com", label: "Email" },
]

const easing = [0.21, 1.02, 0.73, 1.0] as [number, number, number, number]

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: delay * 0.09, duration: 0.55, ease: easing },
  }
}

const codeLines = [
  { label: "frontend", value: "'Angular'" },
  { label: "backend", value: "'Java + Spring'" },
  { label: "database", value: "'MySQL'" },
  { label: "meta", value: "'Next.js'" },
]

const GREETING = "Hola, Soy"
const NAME = "Bryan Paico"
const CORNER_DELAY = 0.1 + (GREETING.length + NAME.length) * 0.06 + 0.3

export function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [mounted, setMounted] = useState(false)

  const particles = useMemo(() =>
    Array.from({ length: 22 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    })), []
  )

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 200)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= codeLines.length + 2) {
          clearInterval(timer)
          return prev
        }
        return prev + 1
      })
    }, 220)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-28 pb-16"
    >
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-primary/40"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="animate-glow-pulse pointer-events-none absolute top-20 left-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />
      <div className="pointer-events-none absolute bottom-24 right-8 h-64 w-64 rounded-full bg-primary/8 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 right-1/3 h-48 w-48 rounded-full bg-accent/[0.07] blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_360px]">

          <div>
            <motion.div
              {...fadeUp(0)}
              className="mb-8 inline-flex items-center gap-2 rounded-md border border-primary/20 bg-primary/8 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_theme(colors.emerald.400)] animate-pulse" />
              Disponible para proyectos
            </motion.div>

            {/* Título con esquinas decorativas */}
            <div className="relative inline-block mb-6">
              {/* Esquina superior izquierda */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={mounted ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: CORNER_DELAY, duration: 0.4, ease: easing }}
                className="absolute -top-4 -left-4 w-6 h-6 border-t-2 border-l-2 border-primary/60 rounded-tl-sm"
              />
              {/* Esquina inferior derecha */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={mounted ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: CORNER_DELAY, duration: 0.4, ease: easing }}
                className="absolute -bottom-4 -right-4 w-6 h-6 border-b-2 border-r-2 border-primary/60 rounded-br-sm"
              />

              <h1 className="max-w-2xl text-6xl leading-[1.1] tracking-tight md:text-7xl lg:text-[5.5rem]">
                <span className="inline-flex flex-wrap">
                  {GREETING.split("").map((letter, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                      animate={mounted ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                      transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: easing }}
                      className="font-bold text-foreground inline-block"
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </span>

                <br />

                <span className="inline-flex flex-wrap">
                  {NAME.split("").map((letter, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                      animate={mounted ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                      transition={{ delay: 0.1 + (GREETING.length * 0.06) + i * 0.06, duration: 0.5, ease: easing }}
                      className="font-bold inline-block animated-gradient-text"
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </span>
              </h1>
            </div>

            <motion.p {...fadeUp(2)} className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-foreground/45">
              Full Stack Developer
            </motion.p>

            <motion.p {...fadeUp(3)} className="mb-10 max-w-lg text-base leading-relaxed text-muted-foreground">
              Desarrollador web enfocado en crear aplicaciones funcionales, limpias y escalables.
              Trabajo principalmente con Angular, Java, MySQL y tecnologías modernas para construir
              soluciones reales.
            </motion.p>

            <motion.div {...fadeUp(4)} className="mb-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.35)] transition-all duration-200 hover:bg-primary/88 hover:gap-3 hover:shadow-[0_0_32px_hsl(var(--primary)/0.5)]"
              >
                Ver proyectos
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-foreground/75 transition-all duration-200 hover:border-primary/30 hover:text-foreground"
              >
                Sobre mí
              </a>
            </motion.div>

            <motion.div {...fadeUp(5)} className="flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-md border border-white/8 bg-white/[0.03] transition-all duration-200 hover:border-primary/35 hover:bg-primary/8 hover:shadow-[0_0_12px_hsl(var(--primary)/0.2)]"
                  >
                    <social.icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                ))}
              </div>

              <div className="h-4 w-px bg-white/10" />

              <div className="flex flex-wrap gap-2">
                {["Angular", "Java", "MySQL", "Next.js"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/8 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/20 hover:text-foreground/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div {...fadeUp(2)} className="relative hidden lg:block">
            <div className="pointer-events-none absolute -inset-6 rounded-2xl bg-primary/12 blur-2xl" />
            <div className="pointer-events-none absolute -inset-2 rounded-2xl bg-primary/6 blur-xl" />

            <div className="relative rounded-xl border border-white/10 bg-card/80 p-5 backdrop-blur-sm shadow-[0_0_40px_hsl(var(--primary)/0.1)]">
              <div className="mb-4 flex items-center gap-2 border-b border-white/6 pb-4">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/40" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/40" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/40" />
                </div>
                <span className="ml-auto font-mono text-[11px] text-muted-foreground/50">stack.config.ts</span>
              </div>

              <div className="space-y-1.5 font-mono text-[13px] leading-relaxed min-h-[140px]">
                {visibleLines > 0 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <span className="text-primary/70">const</span>{" "}
                    <span className="text-foreground/90">stack</span>{" "}
                    <span className="text-muted-foreground/60">=</span>{" "}
                    <span className="text-muted-foreground/60">{"{"}</span>
                  </motion.div>
                )}

                {codeLines.map((line, i) =>
                  visibleLines > i + 1 ? (
                    <motion.div
                      key={line.label}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-5"
                    >
                      <span className="text-sky-300/80">{line.label}</span>
                      <span className="text-muted-foreground/60">: </span>
                      <span className="text-emerald-300/80">{line.value}</span>
                      <span className="text-muted-foreground/60">,</span>
                    </motion.div>
                  ) : null
                )}

                {visibleLines > codeLines.length + 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <span className="text-muted-foreground/60">{"}"}</span>
                  </motion.div>
                )}

                {visibleLines < codeLines.length + 2 && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block h-3.5 w-0.5 bg-primary align-middle"
                  />
                )}
              </div>

              <div className="mt-4 flex items-center gap-2 border-t border-white/6 pt-4">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_theme(colors.emerald.400)] animate-pulse" />
                <span className="font-mono text-[11px] text-muted-foreground/50">ready · full stack</span>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-8 rounded-lg border border-white/10 bg-card/90 p-3 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            >
              <p className="font-mono text-[11px] text-muted-foreground/60">
                <span className="text-emerald-400">✓</span> build successful
              </p>
              <p className="font-mono text-[11px] text-muted-foreground/40">0 errors · 0 warnings</p>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/10 bg-white/[0.02] p-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-primary/60"
          />
        </div>
      </div>
    </section>
  )
}