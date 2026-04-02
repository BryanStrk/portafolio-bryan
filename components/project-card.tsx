"use client"

import { motion } from "framer-motion"
import { Github, ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  index: number
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  status?: "In Dev" | "In Prod" | "Beta"
}

const statusConfig = {
  "In Dev":  { bg: "bg-yellow-500", text: "text-yellow-400", glow: "shadow-yellow-500/30" },
  "In Prod": { bg: "bg-emerald-500", text: "text-emerald-400", glow: "shadow-emerald-500/30" },
  "Beta":    { bg: "bg-sky-500", text: "text-sky-400", glow: "shadow-sky-500/30" },
}

export function ProjectCard({
  index,
  title,
  description,
  tags,
  liveUrl,
  githubUrl,
  status = "In Prod",
}: ProjectCardProps) {
  const s = statusConfig[status]

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.21, 1.02, 0.73, 1.0] }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="card-aura group relative flex flex-col overflow-hidden rounded-xl border border-white/8 bg-card/70 transition-all duration-500 hover:border-primary/30"
    >
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Permanent aura glow */}
      <div className="pointer-events-none absolute -inset-1 rounded-xl bg-primary/8 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10" />

      {/* Preview area */}
      <div className="relative aspect-video overflow-hidden border-b border-white/6 bg-muted/30">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.03)_1px,transparent_1px)] bg-[size:28px_28px]" />
        {/* Radial tint */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgb(99_120_210/0.12),transparent_55%)]" />

        {/* Number watermark */}
        <span className="absolute right-4 bottom-2 font-mono text-[5rem] font-bold leading-none text-white/4 select-none">
          {String(index).padStart(2, "0")}
        </span>

        {/* Index badge */}
        <div className="absolute left-4 top-4">
          <span className="rounded-md border border-white/10 bg-background/60 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/80 backdrop-blur-sm">
            {String(index).padStart(2, "0")}
          </span>
        </div>

        {/* Tech badges — aparecen en hover */}
        <div className="absolute inset-x-0 top-0 p-3 flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-400 -translate-y-2 group-hover:translate-y-0 pt-12">
          {tags.slice(0, 3).map((tag, i) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-background/80 backdrop-blur-sm text-[10px] font-medium rounded-full border border-primary/25 text-primary/80"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hover overlay con link */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-background/65 opacity-0 backdrop-blur-[2px] transition-opacity duration-250 group-hover:opacity-100">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-white/12 bg-card/90 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
            >
              <Github size={14} />
              Código
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <ArrowUpRight size={14} />
              Demo
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {/* Title + status + arrow */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-base font-semibold leading-snug text-foreground/90 group-hover:text-foreground transition-colors">
              {title}
            </h3>
            <div className="flex items-center gap-1.5">
              <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${s.bg}`}>
                <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${s.bg}`} />
              </span>
              <span className={`text-[11px] font-medium ${s.text}`}>{status}</span>
            </div>
          </div>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-0.5 shrink-0 text-muted-foreground/40 transition-colors hover:text-primary"
              aria-label="Ver código"
            >
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>

        {/* Description */}
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-primary/12 bg-primary/8 px-2.5 py-0.5 text-[11px] font-medium text-primary/80 transition-colors hover:bg-primary/14"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}