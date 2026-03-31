import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const skills = [
  "Angular",
  "TypeScript",
  "Java",
  "MySQL",
  "SQL",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Git",
  "JDBC",
]

export function About() {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Sobre <span className="text-primary">mí</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Info Card */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl bg-gradient-to-br from-card via-card to-primary/5 border border-border group-hover:border-primary/30 transition-colors flex flex-col items-center justify-center shadow-xl text-center px-6">
                <span className="text-3xl md:text-4xl font-bold text-primary">DAW</span>
                <span className="text-lg md:text-xl text-foreground mt-3 font-medium">
                  Desarrollo de Aplicaciones Web
                </span>
                <span className="text-base text-muted-foreground mt-2">
                  Full Stack Developer
                </span>
              </div>

              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Mi perfil <span className="text-primary">profesional</span>
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              He finalizado el ciclo de Desarrollo de Aplicaciones Web y me enfoco en la creación
              de aplicaciones web funcionales, limpias y bien estructuradas.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Trabajo principalmente con Angular, Java y MySQL, y me interesa seguir creciendo
              como desarrollador full stack construyendo proyectos reales, escalables y orientados
              a buenas prácticas de desarrollo.
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            <a
              href="/cv-bryan-paico.pdf"
              download
              className="inline-block"
            >
              <Button className="gap-2 mt-4 shadow-lg shadow-primary/20">
                <Download className="h-4 w-4" />
                Descargar CV
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}