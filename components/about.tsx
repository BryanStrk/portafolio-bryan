import Image from "next/image"
import { Download, Code2, Database, Globe, GitBranch } from "lucide-react"
import { Button } from "@/components/ui/button"
 
const skills = [
  { label: "Angular", icon: Globe },
  { label: "TypeScript", icon: Code2 },
  { label: "Java", icon: Code2 },
  { label: "MySQL", icon: Database },
  { label: "Git", icon: GitBranch },
    { label: "Spring Boot", icon: Code2 },

]
 
const stats = [
  { value: "6+", label: "Proyectos completados" },
  { value: "3", label: "Tecnologías principales" },
  { value: "2", label: "Años de formación" },
]
 
export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="section-shell mx-auto max-w-6xl rounded-[2rem] px-6 py-10 md:px-10 md:py-14">
 
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">
              Sobre mí
            </p>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Desarrollo soluciones web con enfoque en claridad, estructura y rendimiento
            </h2>
          </div>
 
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
 
            <div className="flex justify-center">
              <div className="relative group w-full max-w-[420px]">
                <div className="animate-glow-pulse absolute -inset-4 rounded-[2rem] bg-primary/18 blur-3xl opacity-55" />
 
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background/70 backdrop-blur-sm shadow-2xl">
                  <Image
                    src="/bryan-about.jpg"
                    alt="Bryan Paico"
                    width={800}
                    height={1000}
                    className="h-[460px] w-full object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent" />
 
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_theme(colors.emerald.400)]" />
                      <span className="text-xs font-medium text-foreground/80">Disponible para proyectos</span>
                    </div>
                    <p className="font-semibold text-foreground">Bryan Paico</p>
                    <p className="text-xs text-muted-foreground">Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
 
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold leading-tight md:text-3xl">
                Perfil técnico con una base sólida en backend y visión de producto
              </h3>
 
              <p className="text-base text-muted-foreground leading-relaxed">
                He finalizado el ciclo de Desarrollo de Aplicaciones Web y me enfoco en crear
                aplicaciones web funcionales, limpias y bien estructuradas.
              </p>
 
              <p className="text-base text-muted-foreground leading-relaxed">
                Trabajo principalmente con Angular, Java y MySQL, y sigo creciendo como
                desarrollador full stack a través de proyectos reales, buenas prácticas y
                aprendizaje continuo.
              </p>
 
              <div className="grid grid-cols-3 gap-3 py-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/8 bg-white/[0.03] p-3 text-center"
                  >
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-[11px] text-muted-foreground leading-tight mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
 
              <div className="flex flex-wrap gap-2 pt-1">
                {skills.map((skill) => (
                  <span
                    key={skill.label}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-primary/18 bg-primary/8 px-3 py-1.5 text-xs font-medium text-primary transition-all hover:bg-primary/14 hover:border-primary/30"
                  >
                    <skill.icon className="h-3 w-3 opacity-70" />
                    {skill.label}
                  </span>
                ))}
              </div>
 
              <a href="/cv-bryan-paico.pdf" download className="inline-block pt-1">
                <Button className="soft-shine blue-glow h-11 gap-2 rounded-full px-6 shadow-xl shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-primary/35">
                  <Download className="h-4 w-4" />
                  Descargar CV
                </Button>
              </a>
            </div>
 
          </div>
        </div>
      </div>
    </section>
  )
}