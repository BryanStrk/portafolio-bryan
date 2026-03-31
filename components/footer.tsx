import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/BryanStrk", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/bryan-alejandro-paico-albines-5560142b0/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:bryanpaicoalbines97@gmail.com", label: "Email" },
  { icon: MessageCircle, href: "https://wa.me/34TU_NUMERO", label: "WhatsApp" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-16 border-t border-white/10 bg-background/80 overflow-hidden">
      {/* Glow de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-10 -translate-x-1/2 h-40 w-[500px] bg-primary/20 blur-3xl opacity-60" />
        <div className="absolute right-20 bottom-10 h-32 w-32 bg-blue-500/10 blur-3xl opacity-40" />
        <div className="absolute left-20 bottom-10 h-32 w-32 bg-primary/10 blur-3xl opacity-40" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center gap-8">
          <a href="#home" className="text-4xl font-bold text-primary tracking-tight">
            Bryan<span className="text-foreground">.</span>
          </a>

          <div className="space-y-2">
            <p className="text-2xl font-medium text-foreground">Full Stack Developer</p>
            <p className="text-lg text-muted-foreground">
              Angular, Java, MySQL y desarrollo web moderno
            </p>
          </div>

          <div className="flex items-center gap-5 flex-wrap justify-center">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className="group relative flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-card/80 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-primary/50 hover:text-white"
              >
                <span className="absolute inset-0 rounded-full bg-primary/30 blur-2xl opacity-0 transition-all duration-300 group-hover:opacity-100" />
                <span className="absolute inset-0 rounded-full bg-primary/10 blur-md opacity-60" />
                <social.icon className="relative h-8 w-8" />
              </a>
            ))}
          </div>

          <div className="w-full max-w-5xl border-t border-white/10 pt-8">
            <p className="text-base text-muted-foreground text-center">
              © {currentYear} Bryan Paico. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}