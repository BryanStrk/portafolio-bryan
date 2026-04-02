import { Mail, MapPin, Github, Linkedin } from "lucide-react"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "bryanpaicoalbines97@gmail.com",
    href: "mailto:bryanpaicoalbines97@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/BryanStrk",
    href: "https://github.com/BryanStrk",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/bryan-alejandro-paico-albines-5560142b0/",
    href: "https://www.linkedin.com/in/bryan-alejandro-paico-albines-5560142b0/",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Barcelona, España",
    href: "https://www.google.com/maps/place/Barcelona/@41.3928081,1.9753829,11z/data=!3m1!4b1!4m6!3m5!1s0x12a49816718e30e5:0x44b0fb3d4f47660a!8m2!3d41.3874374!4d2.1686496!16zL20vMDFmNjI?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D",
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
            <h2 className="mb-4 text-3xl font-semibold md:text-5xl">
              Canales directos para oportunidades, colaboraciones y proyectos
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">
              Si quieres contactar conmigo para una oportunidad, colaboración o proyecto, puedes
              encontrarme aquí.
            </p>
          </div>

          <div className="grid max-w-4xl gap-6 mx-auto sm:grid-cols-2">
            {contactLinks.map((item) => (
              <div
                key={item.label}
                className="blue-glow group rounded-[1.5rem] border border-white/10 bg-background/65 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/14 bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <p className="mb-1 text-sm uppercase tracking-[0.16em] text-muted-foreground">
                      {item.label}
                    </p>

                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-medium transition-colors hover:text-primary break-words"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
