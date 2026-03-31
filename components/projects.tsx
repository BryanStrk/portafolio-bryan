import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    title: "Library Management System",
    description:
      "Sistema full stack de gestión de biblioteca con frontend y backend separados. Incluye gestión de usuarios, préstamos y lógica de negocio conectada a base de datos.",
    tags: ["Java", "MySQL", "Angular", "Full Stack"],
    liveUrl: "",
    githubUrl: "https://github.com/BryanStrk/biblioteca-backend.git",
  },
  {
    title: "Smart Menu (Team Project)",
    description:
      "Aplicación full stack desarrollada en equipo para la gestión de menús digitales. Participé en el desarrollo del backend, creación de endpoints REST y conexión con la base de datos, además de colaborar en la integración con el frontend.",
    tags: ["Java", "Spring Boot", "Full Stack", "Team Project"],
    liveUrl: "",
    githubUrl: "https://github.com/BryanStrk/smart-menu-back.git",
  },
  {
    title: "Transport API",
    description:
      "API REST desarrollada con Spring Boot y MongoDB para la gestión de transporte de mercancías, enfocada en estructura backend y diseño de endpoints.",
    tags: ["Spring Boot", "MongoDB", "API REST", "Java"],
    liveUrl: "",
    githubUrl: "https://github.com/BryanStrk/api-transporte-mercancias-springboot-mongodb.git",
  },
  {
    title: "Video Club System",
    description:
      "Sistema de gestión de videoclub desarrollado en Java con arquitectura MVC y persistencia en MySQL, orientado a la organización del código y lógica de negocio.",
    tags: ["Java", "MVC", "MySQL", "Backend"],
    liveUrl: "",
    githubUrl: "https://github.com/BryanStrk/video_club_app_backend.git",
  },
  {
    title: "Java VideoClub App",
    description:
      "Aplicación desarrollada en Java puro centrada en la lógica de negocio, estructuras de datos y organización modular del proyecto.",
    tags: ["Java", "Backend", "Logic", "OOP"],
    liveUrl: "",
    githubUrl: "https://github.com/BryanStrk/videoClub_app_Java_puro.git",
  },
  {
    title: "Portfolio Web",
    description:
      "Portfolio personal desarrollado con Next.js y Tailwind CSS, con diseño moderno, secciones dinámicas y despliegue en Vercel.",
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    liveUrl: "",
    githubUrl: "https://github.com/BryanStrk/portafolio-bryan.git",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mis <span className="text-primary">Proyectos</span> ({projects.length})
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Una selección de proyectos en los que he trabajado, enfocados en desarrollo full stack,
            backend y bases de datos.
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