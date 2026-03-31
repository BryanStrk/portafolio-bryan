import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Plataforma de comercio electronico completa con carrito de compras, pagos integrados y panel de administracion.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    liveUrl: "https://ejemplo.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Task Management App",
    description: "Aplicacion de gestion de tareas con drag and drop, colaboracion en tiempo real y notificaciones.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://ejemplo.com",
    githubUrl: "https://github.com",
  },
  {
    title: "AI Content Generator",
    description: "Herramienta de generacion de contenido impulsada por IA para marketing y redes sociales.",
    tags: ["Next.js", "OpenAI", "Vercel AI", "Prisma"],
    liveUrl: "https://ejemplo.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Real Estate Platform",
    description: "Plataforma inmobiliaria con busqueda avanzada, mapas interactivos y sistema de citas.",
    tags: ["React", "Mapbox", "Express", "PostgreSQL"],
    liveUrl: "https://ejemplo.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Fitness Tracker",
    description: "App de seguimiento de ejercicios con estadisticas, planes personalizados y comunidad.",
    tags: ["React Native", "Firebase", "Charts", "Auth"],
    liveUrl: "https://ejemplo.com",
    githubUrl: "https://github.com",
  },
  {
    title: "SaaS Dashboard",
    description: "Dashboard empresarial con analiticas en tiempo real, reportes automatizados y gestion de equipos.",
    tags: ["Next.js", "Recharts", "Supabase", "Stripe"],
    liveUrl: "https://ejemplo.com",
    githubUrl: "https://github.com",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Projects</span> ({projects.length})
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Browse through my recent projects and discover the solutions I&apos;ve built.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
