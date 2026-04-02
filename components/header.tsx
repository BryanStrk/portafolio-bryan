"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Inicio", href: "#home" },
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )

    navItems.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 md:px-6 pt-4">
        <div className="blue-glow flex items-center justify-between rounded-full border border-white/10 bg-background/70 px-3 py-3 backdrop-blur-xl md:px-4">
          <a
            href="#home"
            className="rounded-full px-3 py-2 text-xl font-semibold tracking-[0.18em] text-primary uppercase"
          >
            Bryan<span className="text-foreground">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] p-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "")
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-primary/15 text-primary font-medium"
                      : "text-muted-foreground hover:bg-primary/12 hover:text-primary"
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          <button
            className="md:hidden rounded-full border border-white/10 bg-white/[0.03] p-2 text-foreground transition-colors hover:border-primary/30 hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="blue-glow md:hidden mt-3 rounded-[1.75rem] border border-white/10 bg-background/95 px-6 py-4 backdrop-blur-xl">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "")
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`rounded-2xl px-3 py-2 transition-all ${
                      isActive
                        ? "bg-primary/15 text-primary font-medium"
                        : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}