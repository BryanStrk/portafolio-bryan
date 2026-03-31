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
    <section id="contact" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contacto <span className="text-primary">Profesional</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Si quieres contactar conmigo para una oportunidad, colaboración o proyecto,
            puedes encontrarme en estos enlaces.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contactLinks.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-border bg-background/60 backdrop-blur-sm p-6 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">{item.label}</p>

                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="font-medium hover:text-primary transition-colors break-all"
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}