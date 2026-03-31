"use client"

import { ExternalLink, Github, Folder } from "lucide-react"
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
    <div className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
      {/* Project thumbnail placeholder */}
      <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-card relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <Folder className="w-16 h-16 text-primary/30 group-hover:text-primary/50 transition-colors" />
        </div>
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-2">
          {liveUrl && (
            <Button size="sm" className="shadow-md shadow-primary/20" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button size="sm" variant="outline" className="hover:border-primary/50 hover:bg-primary/10" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
