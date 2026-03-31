import Image from "next/image"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const skills = [
  "Angular",
  "TypeScript",
  "Java",
  "MySQL",
  "SQL",
  "Tailwind CSS",
  "Git",
  "JDBC",
]

export function About() {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* FOTO IZQUIERDA */}
          <div className="flex justify-center">
            <div className="relative group w-full max-w-[480px]">
              <div className="absolute -inset-3 rounded-3xl bg-primary/20 blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-background/60 backdrop-blur-sm shadow-2xl">
                <Image
                  src="/images/bryan-about.jpeg"
                  alt="Bryan Paico"
                  width={800}
                  height={1000}
                  className="h-[520px] w-full object-cover object-center"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* TEXTO DERECHA */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-5xl font-bold leading-tight">
              Who am <span className="text-primary">I</span>?
            </h3>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              He finalizado el ciclo de Desarrollo de Aplicaciones Web y me enfoco en crear
              aplicaciones web funcionales, limpias y bien estructuradas.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Trabajo principalmente con Angular, Java y MySQL, y sigo creciendo como
              desarrollador full stack a través de proyectos reales, buenas prácticas y
              aprendizaje continuo.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm rounded-xl border border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            <a href="/cv-bryan-paico.pdf" download className="inline-block pt-2">
              <Button className="gap-2 h-12 px-6 rounded-full shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all">
                <Download className="h-4 w-4" />
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}