import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/BryanStrk", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/bryan-alejandro-paico-albines-5560142b0/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:bryanpaicoalbines97@gmail.com", label: "Email" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center gap-6">
          <a href="#home" className="text-3xl font-bold text-primary tracking-tight">
            Bryan<span className="text-foreground">.</span>
          </a>

          <div>
            <p className="text-lg font-medium text-foreground">Full Stack Developer</p>
            <p className="text-muted-foreground mt-1">
              Angular, Java, MySQL y desarrollo web moderno
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="w-full max-w-4xl border-t border-border pt-6">
            <p className="text-sm text-muted-foreground text-center">
              © {currentYear} Bryan Paico. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}