"use client"

import { Github, Linkedin, Mail, Phone } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:correo@ejemplo.com", label: "Email" },
  { icon: Phone, href: "https://wa.me/", label: "WhatsApp" },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Corner decorations */}
      <div className="absolute top-32 left-12 w-16 h-16 border-l-2 border-t-2 border-primary/60 hidden md:block" />
      <div className="absolute bottom-32 right-12 w-16 h-16 border-r-2 border-b-2 border-primary/60 hidden md:block" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            <span className="text-foreground">Hello, I&apos;m </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-blue-400">
              Kevin Candia
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 text-pretty leading-relaxed">
            A passionate full-stack developer creating beautiful and functional web experiences
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/30"
            >
              View My Work
            </a>
            <a
              href="#about"
              className="px-8 py-3 bg-transparent border border-muted-foreground/30 text-foreground font-medium rounded-full hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              About Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-14 h-14 rounded-full bg-secondary/80 border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
