import { ProjectCard } from "@/components/project-card"
 
const projects = [
  {
    title: "Library Management System",
    description:
      "Sistema full stack de gestión de biblioteca con frontend y backend separados. Incluye gestión de usuarios, préstamos y lógica de negocio conectada a base de datos.",
    tags: ["Java", "MySQL", "Angular", "Full Stack"],
    liveUrl: "",
    githubUrl: "https://github.com/BryanStrk/biblioteca-backend.git",
    status: "In Prod" as const,
  },
  {
    title: "Smart Menu (Team Project)",
    description:
      "Aplicación full stack desarrollada en equipo para la gestión de menús digitales. Participé en el desarrollo del backend, creación de endpoints REST y conexión con la base de datos.",
    tags: ["Java", "Spring Boot", "Full Stack", "Team Project"],
    liveUrl: "",
    githubUrl: "https://github.com/BryanStrk/smart-menu-back.git",
    status: "In Prod" as const,
  },
  {
    title: "Transport API",
    description:
      "API REST desarrollada con Spring Boot y MongoDB para la gestión de transporte de mercancías, enfocada en estructura backend y diseño de endpoints.",
    tags: ["Spring Boot", "MongoDB", "API REST", "Java"],
    liveUrl: "",
    githubUrl: "https://github.com/BryanStrk/api-transporte-mercancias-springboot-mongodb.git",
    status: "In Prod" as const,
  },
  {
    title: "Video Club System",
    description:
      "Sistema de gestión de videoclub desarrollado en Java con arquitectura MVC y persistencia en MySQL, orientado a la organización del código y lógica de negocio.",
    tags: ["Java", "MVC", "MySQL", "Backend"],
    liveUrl: "",
    githubUrl: "https://github.com/BryanStrk/video_club_app_backend.git",
    status: "In Prod" as const,
  },
  {
    title: "Java VideoClub App",
    description:
      "Aplicación desarrollada en Java puro centrada en la lógica de negocio, estructuras de datos y organización modular del proyecto.",
    tags: ["Java", "Backend", "Logic", "OOP"],
    liveUrl: "",
    githubUrl: "https://github.com/BryanStrk/videoClub_app_Java_puro.git",
    status: "In Prod" as const,
  },
  {
    title: "Portfolio Web",
    description:
      "Portfolio personal desarrollado con Next.js y Tailwind CSS, con diseño moderno, secciones dinámicas y despliegue en Vercel.",
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    liveUrl: "",
    githubUrl: "https://github.com/BryanStrk/portafolio-bryan.git",
    status: "In Dev" as const,
  },
]
 
export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">
            Trabajo seleccionado
          </p>
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Proyectos con una base técnica clara y una presentación más cuidada
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">
            Una selección de proyectos enfocados en desarrollo full stack, backend y bases de
            datos. Cada tarjeta destaca stack, contexto y acceso al código de forma visual.
          </p>
        </div>
 
        <div className="grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} index={index + 1} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}