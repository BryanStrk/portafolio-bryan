"use client"

import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
}

export function ProjectCard({
  title,
  description,
  tags,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">

      {/* IMAGE / HEADER */}
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-background" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              className="bg-primary text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:opacity-90"
            >
              <ExternalLink size={16} />
              Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              className="bg-white text-black px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:opacity-90"
            >
              <Github size={16} />
              Code
            </a>
          )}
        </div>

        {/* Title floating */}
        <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">
          {title}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              className="text-xs bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* BUTTONS (fallback si no hover) */}
        <div className="flex items-center gap-3 pt-2">
          {githubUrl && (
            <Button size="sm" variant="outline" asChild>
              <a href={githubUrl} target="_blank">
                <Github className="h-4 w-4 mr-2" />
                Código
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}