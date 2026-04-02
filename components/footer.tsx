import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/BryanStrk", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/bryan-alejandro-paico-albines-5560142b0/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:bryanpaicoalbines97@gmail.com", label: "Email" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-8 h-48 w-[34rem] -translate-x-1/2 rounded-full bg-primary/16 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-40 w-40 rounded-full bg-sky-400/8 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="section-shell blue-glow mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 rounded-[3rem] px-8 py-18 text-center md:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/80">
            Gracias por visitar
          </p>

          

          

          <div className="flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className="blue-glow group relative flex h-14 min-w-14 items-center justify-center gap-2 rounded-full border border-white/10 bg-background/70 px-5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:text-primary"
              >
                <social.icon className="relative h-4 w-4" />
                <span>{social.label}</span>
              </a>
            ))}
          </div>

          <div className="w-full max-w-4xl border-t border-white/10 pt-8">
            <p className="text-center text-sm text-muted-foreground md:text-base">
              © {currentYear} Bryan Paico. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
