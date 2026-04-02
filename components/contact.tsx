"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Github, Linkedin } from "lucide-react"

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "bryanpaicoalbines97@gmail.com",
    href: "mailto:bryanpaicoalbines97@gmail.com",
    color: "#DC143C",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/BryanStrk",
    href: "https://github.com/BryanStrk",
    color: "#24292e",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/bryan-paico",
    href: "https://www.linkedin.com/in/bryan-alejandro-paico-albines-5560142b0/",
    color: "#0077B5",
  },
  {
    icon: null,
    label: "WhatsApp",
    value: "+34 623 505 527",
    href: "https://api.whatsapp.com/send?phone=34623505527&text=Hola%20Bryan!%20Me%20contacto%20contigo%20desde%20tu%20portfolio",
    color: "#25D366",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Barcelona, España",
    href: "https://www.google.com/maps/place/Barcelona",
    color: "#4E6DD8",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="section-shell mx-auto max-w-5xl rounded-[2rem] px-6 py-10 md:px-10 md:py-14">
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">
              Contacto
            </p>
            <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
              Canales directos para oportunidades, colaboraciones y proyectos
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">
              Si quieres contactar conmigo para una oportunidad, colaboración o proyecto, puedes
              encontrarme aquí.
            </p>
          </div>

          <div className="grid max-w-4xl gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-3">
            {contactLinks.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.21, 1.02, 0.73, 1.0] }}
                whileHover={{ y: -4 }}
                className="group relative rounded-[1.5rem] border border-white/10 bg-background/65 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-white/20"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 24px 0 ${item.color}30`
                  e.currentTarget.style.borderColor = `${item.color}40`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = ""
                  e.currentTarget.style.borderColor = ""
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border bg-white/[0.04] transition-colors duration-300"
                    style={{ borderColor: `${item.color}30`, color: item.color }}
                  >
                    {item.label === "WhatsApp"
                      ? <WhatsAppIcon />
                      : item.icon && <item.icon className="h-5 w-5" />
                    }
                  </div>

                  <div className="min-w-0">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="truncate text-sm font-medium text-foreground/80 transition-colors group-hover:text-foreground">
                      {item.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}