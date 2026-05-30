"use client"

import { Github, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

type Status = "In Dev" | "In Prod" | "Beta"

type TerminalLine =
  | { kind: "prompt"; text: string }
  | { kind: "output"; text: string }
  | { kind: "comment"; text: string }

export type ProjectMockup =
  | {
      kind: "browser"
      image: string | null
      urlLabel: string
      alt: string
    }
  | {
      kind: "terminal"
      title: string
      lines: TerminalLine[]
    }
  | {
      kind: "code"
      filename: string
      lines: string[]
    }

export interface ProjectCardData {
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  status?: Status
  mockup: ProjectMockup
}

interface ProjectCardProps extends ProjectCardData {
  index: number
}

const statusConfig = {
  "In Dev":  { bg: "bg-yellow-500", text: "text-yellow-400" },
  "In Prod": { bg: "bg-emerald-500", text: "text-emerald-400" },
  "Beta":    { bg: "bg-sky-500", text: "text-sky-400" },
}

async function getRepoStars(repoUrl: string): Promise<number | null> {
  try {
    const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+?)(?:\.git)?$/)
    if (!match) return null
    const [, owner, repo] = match
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`)
    if (!res.ok) return null
    const data = await res.json()
    return data.stargazers_count
  } catch {
    return null
  }
}

export function ProjectCard({
  index,
  title,
  description,
  tags,
  liveUrl,
  githubUrl,
  status = "In Prod",
  mockup,
}: ProjectCardProps) {
  const s = statusConfig[status]
  const [stars, setStars] = useState<number | null>(null)

  useEffect(() => {
    if (!githubUrl) return
    getRepoStars(githubUrl).then(setStars)
  }, [githubUrl])

  return (
    <article className="card-aura group relative flex flex-col overflow-hidden rounded-xl border border-white/8 bg-card/70 transition-all duration-300 hover:border-primary/30 motion-safe:hover:-translate-y-1">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute -inset-1 rounded-xl bg-primary/8 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />

      <div className="relative p-3 pb-0">
        <span className="pointer-events-none absolute left-5 top-5 z-10 rounded-md border border-white/10 bg-background/70 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/80 backdrop-blur-sm">
          {String(index).padStart(2, "0")}
        </span>
        <ProjectMockupView mockup={mockup} title={title} liveUrl={liveUrl} />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-base font-semibold leading-snug text-foreground/90 group-hover:text-foreground transition-colors">
              {title}
            </h3>
            <div className="flex items-center gap-2">
              <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${s.bg}`}>
                <span className={`absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full opacity-60 ${s.bg}`} />
              </span>
              <span className={`text-[11px] font-medium ${s.text}`}>{status}</span>
              {stars !== null && (
                <span className="inline-flex items-center gap-1 rounded-md border border-yellow-400/20 bg-yellow-400/8 px-2 py-0.5 text-[11px] font-medium text-yellow-400/80">
                  ★ {stars}
                </span>
              )}
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

        <p className="flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {description}
        </p>

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

        {(githubUrl || liveUrl) && (
          <div className="flex flex-wrap gap-2 pt-2">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <ArrowUpRight size={14} />
                Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-white/12 bg-card/80 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
              >
                <Github size={14} />
                Código
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

function ProjectMockupView({
  mockup,
  title,
  liveUrl,
}: {
  mockup: ProjectMockup
  title: string
  liveUrl?: string
}) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-background/60 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)] transition-transform duration-500 motion-safe:group-hover:scale-[1.02]">
      <MockupChrome mockup={mockup} liveUrl={liveUrl} />
      <div className="relative aspect-video overflow-hidden">
        {mockup.kind === "browser" && <BrowserBody mockup={mockup} title={title} />}
        {mockup.kind === "terminal" && <TerminalBody mockup={mockup} />}
        {mockup.kind === "code" && <CodeBody mockup={mockup} />}
      </div>
    </div>
  )
}

function MockupChrome({
  mockup,
  liveUrl,
}: {
  mockup: ProjectMockup
  liveUrl?: string
}) {
  const label =
    mockup.kind === "browser"
      ? hostnameFromUrl(liveUrl) ?? mockup.urlLabel
      : mockup.kind === "terminal"
        ? mockup.title
        : mockup.filename

  return (
    <div className="flex items-center gap-2 border-b border-white/8 bg-card/60 px-3 py-2">
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
      </div>
      <div
        className={
          mockup.kind === "browser"
            ? "ml-1 flex-1 truncate rounded-md border border-white/8 bg-background/60 px-2.5 py-1 text-center font-mono text-[10px] text-muted-foreground/80"
            : "ml-1 flex-1 truncate text-center font-mono text-[10px] text-muted-foreground/70"
        }
      >
        {mockup.kind === "browser" && (
          <span className="mr-1 text-emerald-400/70" aria-hidden="true">
            ●
          </span>
        )}
        {label}
      </div>
    </div>
  )
}

function BrowserBody({
  mockup,
  title,
}: {
  mockup: Extract<ProjectMockup, { kind: "browser" }>
  title: string
}) {
  if (mockup.image) {
    return (
      <Image
        src={mockup.image}
        alt={mockup.alt || `Captura de ${title}`}
        fill
        loading="lazy"
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
    )
  }
  return <MockupSkeleton label="// TODO: src" />
}

function TerminalBody({
  mockup,
}: {
  mockup: Extract<ProjectMockup, { kind: "terminal" }>
}) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0a0a12]/95 p-3 font-mono text-[10.5px] leading-relaxed">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgb(99_120_210/0.08),transparent_55%)]" />
      <pre className="relative whitespace-pre">
        {mockup.lines.map((line, i) => (
          <div
            key={i}
            className={
              line.kind === "prompt"
                ? "text-emerald-300/90"
                : line.kind === "comment"
                  ? "text-muted-foreground/60"
                  : "text-foreground/80"
            }
          >
            {line.kind === "prompt" && <span className="text-primary/70">$ </span>}
            {line.text}
          </div>
        ))}
      </pre>
    </div>
  )
}

function CodeBody({
  mockup,
}: {
  mockup: Extract<ProjectMockup, { kind: "code" }>
}) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0a0a12]/95 font-mono text-[10.5px] leading-relaxed">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgb(140_100_230/0.10),transparent_55%)]" />
      <pre className="relative grid grid-cols-[2.25rem_1fr]">
        {mockup.lines.map((line, i) => (
          <div key={i} className="contents">
            <span className="border-r border-white/5 pr-2 text-right text-muted-foreground/40 select-none">
              {i + 1}
            </span>
            <span className="pl-3 text-foreground/85">{line || " "}</span>
          </div>
        ))}
      </pre>
    </div>
  )
}

function MockupSkeleton({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-purple-600/15 via-indigo-600/10 to-blue-600/15">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.03)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgb(99_120_210/0.18),transparent_55%)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="rounded-md border border-white/10 bg-background/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70 backdrop-blur-sm">
          {label}
        </span>
      </div>
    </div>
  )
}

function hostnameFromUrl(url?: string): string | null {
  if (!url) return null
  try {
    return new URL(url).hostname.replace(/^www\./, "")
  } catch {
    return null
  }
}
