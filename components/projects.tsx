import { ProjectCard, type ProjectCardData } from "@/components/project-card"

const projects: ProjectCardData[] = [
  {
    title: "Library Management System",
    description:
      "Sistema full stack de gestión de biblioteca con frontend y backend separados. Incluye gestión de usuarios, préstamos y lógica de negocio conectada a base de datos.",
    tags: ["Java", "MySQL", "Angular", "Full Stack"],
    liveUrl: "",
    githubUrl: "https://github.com/BryanStrk/biblioteca-backend.git",
    status: "In Prod",
    mockup: {
      kind: "browser",
      // TODO: src — añadir public/projects/library-management.png
      image: null,
      urlLabel: "library-management.local",
      alt: "Captura del sistema de gestión de biblioteca",
    },
  },
  {
    title: "Smart Menu (Team Project)",
    description:
      "Aplicación full stack desarrollada en equipo para la gestión de menús digitales. Participé en el desarrollo del backend, creación de endpoints REST y conexión con la base de datos.",
    tags: ["Java", "Spring Boot", "Full Stack", "Team Project"],
    liveUrl: "",
    githubUrl: "https://github.com/BryanStrk/smart-menu-back.git",
    status: "In Prod",
    mockup: {
      kind: "browser",
      // TODO: src — añadir public/projects/smart-menu.png
      image: null,
      urlLabel: "smart-menu.app",
      alt: "Captura de Smart Menu",
    },
  },
  {
    title: "Transport API",
    description:
      "API REST desarrollada con Spring Boot y MongoDB para la gestión de transporte de mercancías, enfocada en estructura backend y diseño de endpoints.",
    tags: ["Spring Boot", "MongoDB", "API REST", "Java"],
    liveUrl: "",
    githubUrl: "https://github.com/BryanStrk/api-transporte-mercancias-springboot-mongodb.git",
    status: "In Prod",
    mockup: {
      kind: "terminal",
      title: "~/transport-api ▸ zsh",
      lines: [
        { kind: "prompt", text: 'curl -s http://localhost:8080/api/envios/SEV-203' },
        { kind: "output", text: '{' },
        { kind: "output", text: '  "id": "SEV-203",' },
        { kind: "output", text: '  "origen": "Sevilla",' },
        { kind: "output", text: '  "destino": "Madrid",' },
        { kind: "output", text: '  "estado": "EN_RUTA",' },
        { kind: "output", text: '  "peso_kg": 1240' },
        { kind: "output", text: '}' },
      ],
    },
  },
  {
    title: "Video Club System",
    description:
      "Sistema de gestión de videoclub desarrollado en Java con arquitectura MVC y persistencia en MySQL, orientado a la organización del código y lógica de negocio.",
    tags: ["Java", "MVC", "MySQL", "Backend"],
    liveUrl: "",
    githubUrl: "https://github.com/BryanStrk/video_club_app_backend.git",
    status: "In Prod",
    mockup: {
      kind: "browser",
      // TODO: src — añadir public/projects/video-club.png
      image: null,
      urlLabel: "video-club.local",
      alt: "Captura del sistema de Video Club",
    },
  },
  {
    title: "Java VideoClub App",
    description:
      "Aplicación desarrollada en Java puro centrada en la lógica de negocio, estructuras de datos y organización modular del proyecto.",
    tags: ["Java", "Backend", "Logic", "OOP"],
    liveUrl: "",
    githubUrl: "https://github.com/BryanStrk/videoClub_app_Java_puro.git",
    status: "In Prod",
    mockup: {
      kind: "code",
      filename: "AlquilerService.java",
      lines: [
        "public class AlquilerService {",
        "    private final ClienteRepo clientes;",
        "    private final PeliculaRepo peliculas;",
        "",
        "    public Alquiler alquilar(Long clienteId,",
        "                             Long peliculaId) {",
        "        var cliente = clientes.find(clienteId);",
        "        var peli = peliculas.find(peliculaId);",
        "        return new Alquiler(cliente, peli);",
        "    }",
        "}",
      ],
    },
  },
  {
    title: "Portfolio Web",
    description:
      "Portfolio personal desarrollado con Next.js y Tailwind CSS, con diseño moderno, secciones dinámicas y despliegue en Vercel.",
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    liveUrl: "",
    githubUrl: "https://github.com/BryanStrk/portafolio-bryan.git",
    status: "In Dev",
    mockup: {
      kind: "browser",
      // TODO: src — añadir public/projects/portfolio.png
      image: null,
      urlLabel: "bryanpaico.dev",
      alt: "Captura del portfolio personal",
    },
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
