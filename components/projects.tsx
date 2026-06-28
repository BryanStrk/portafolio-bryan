import { ProjectCard, type ProjectCardData } from "@/components/project-card"
import { IMAGES } from "@/lib/images"

const projects: ProjectCardData[] = [
  {
    title: "Drive Arena",
    description:
      "Plataforma de gestión para un resort experiencial de motorsport. Frontend en React + Vite (Vercel) y backend en Spring Boot 4 / Java 25 con MySQL, desplegado en VPS propio con Nginx + HTTPS. CRUDs, control de acceso por roles (ADMIN/TAQUILLA/TÉCNICO), gamificación y reservas.",
    tags: ["React", "Vite", "Spring Boot", "MySQL", "Java 25"],
    liveUrl: "https://drive-arena-frontend.vercel.app",
    githubLinks: [
      { label: "Frontend", url: "https://github.com/BryanStrk/drive-arena-frontend" },
      { label: "Backend", url: "https://github.com/BryanStrk/drive-arena-backend" },
    ],
    status: "En producción",
    mockup: {
      kind: "carousel",
      images: IMAGES.driveArena,
      urlLabel: "drive-arena-frontend.vercel.app",
    },
  },
  {
    title: "Bib Detector",
    description:
      "App de visión por computador que detecta números de dorsal en fotos de carreras mediante OCR. Frontend en React 19 + Tailwind y backend en FastAPI con EasyOCR, PostgreSQL y Cloudinary. Sistema de privacidad por magic link: cada corredor reclama sus fotos con galería privada, watermarks y descargas firmadas.",
    tags: ["React", "FastAPI", "EasyOCR", "PostgreSQL"],
    liveUrl: "https://bib-detector-frontend.vercel.app",
    githubLinks: [
      { label: "Frontend", url: "https://github.com/BryanStrk/bib-detector-frontend" },
      { label: "Backend", url: "https://github.com/BryanStrk/bib-detector-backend" },
    ],
    status: "En producción",
    mockup: {
      kind: "carousel",
      images: IMAGES.bibDetector,
      urlLabel: "bib-detector-frontend.vercel.app",
    },
  },
  {
    title: "EventoPass",
    description:
      "Plataforma de reserva de eventos (conciertos, festivales, deportes). Frontend en Angular y backend en Spring Boot, desplegada en producción.",
    tags: ["Angular", "Spring Boot", "Full Stack"],
    liveUrl: "https://www.appdeploytest.com/",
    githubLinks: [
      { label: "Frontend", url: "https://github.com/BryanStrk/frontend-angular-reto" },
      { label: "Backend", url: "https://github.com/nelson2411/backend-java-springboot-reto" },
    ],
    status: "En producción",
    mockup: {
      kind: "carousel",
      images: IMAGES.eventoPass,
      urlLabel: "appdeploytest.com",
    },
  },
  {
    title: "Smart Menu",
    description:
      "Sistema de menú digital para restaurantes con motor de recomendación nutricional (fórmula Mifflin-St Jeor). Angular + Spring Boot + MongoDB, con autenticación JWT por roles y CRUDs completos. Proyecto en equipo (DAW).",
    tags: ["Angular", "Spring Boot", "MongoDB", "JWT"],
    liveUrl: "",
    githubLinks: [
      { label: "Frontend", url: "https://github.com/BryanStrk/smart-menu-front" },
      { label: "Backend", url: "https://github.com/BryanStrk/smart-menu-back" },
    ],
    status: "En desarrollo",
    mockup: {
      kind: "carousel",
      images: IMAGES.smartMenu,
      urlLabel: "smart-menu.app",
    },
  },
  {
    title: "API Playground",
    description:
      "Dashboard que agrega 20 APIs públicas y monitoriza su estado en vivo. Backend en Spring Boot 4 sobre Java 25 (virtual threads para pings concurrentes) y frontend en Angular 21 (zoneless + signals). Enfocado en accesibilidad.",
    tags: ["Angular", "Spring Boot", "Java 25", "Virtual Threads"],
    liveUrl: "https://api-playground-dashboard.vercel.app/",
    githubLinks: [
      { label: "Frontend", url: "https://github.com/BryanStrk/api-playground-dashboard" },
      { label: "Backend", url: "https://github.com/BryanStrk/api-playground-backned" },
    ],
    status: "En producción",
    mockup: {
      kind: "carousel",
      images: IMAGES.apiPlayground,
      urlLabel: "api-playground-dashboard.vercel.app",
    },
  },
  {
    title: "Apex Fitness",
    description:
      "Sistema de gestión para gimnasios: actividades, instructores y miembros, con reglas de negocio reales (control de cupos, inscripciones, límite de actividades futuras). Backend en Spring Boot 4 sobre Java 25 + MySQL, con imágenes en Cloudinary.",
    tags: ["Spring Boot", "Java 25", "MySQL", "JPA"],
    liveUrl: "",
    githubLinks: [
      { label: "Frontend", url: "https://github.com/BryanStrk/apex-fitness-app" },
      { label: "Backend", url: "https://github.com/BryanStrk/apex-fitness-backend" },
    ],
    status: "En desarrollo",
    mockup: {
      kind: "carousel",
      images: IMAGES.apexFitness,
      urlLabel: "apex-fitness.app",
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
