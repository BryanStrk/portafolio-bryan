# 🚀 Portfolio — Bryan Paico

> Portfolio personal de desarrollador Full Stack, construido con Next.js 15, Tailwind CSS y Framer Motion. Diseño oscuro, animaciones fluidas y rendimiento optimizado para desktop, Android e iOS.

🌐 **Live demo:** [portafolio-bryan.vercel.app](https://portafolio-bryan.vercel.app)

---

## ✨ Características Principales

- **Animación letra a letra** en el título del Hero con efecto blur + gradiente animado en el nombre
- **Partículas flotantes** generadas con `useMemo` para evitar errores de hidratación en Next.js
- **Esquinas decorativas** que aparecen al terminar la animación del título
- **Aura central pulsante** con cambio de color continuo (índigo → púrpura → rosa)
- **Typewriter effect** en el bloque de código de stack tecnológico
- **Scroll reveal animations** — cada sección entra con fade al hacer scroll (desactivado en iOS y móvil)
- **Active section detection** en el header via `IntersectionObserver`
- **Project cards** con glow pulsante, status badge animado (`In Dev` / `In Prod`) y tech badges en hover
- **GitHub stars** en tiempo real via API de GitHub
- **Contact section** con glow por color de plataforma (Email, GitHub, LinkedIn, WhatsApp, Ubicación)
- **Footer horizontal** estilo minimal con hover colors por red social
- **Scroll to top button** con animación de entrada/salida
- **Favicon personalizado** con iniciales BP
- **CV descargable** en PDF optimizado para filtros ATS
- **Rendimiento optimizado** — CSS puro en cards, sin Framer Motion en móvil/iOS
- **Vercel Analytics + Speed Insights** integrados
- **100/100** en Vercel Speed Insights en desktop

---

## 🛠️ Tecnologías Utilizadas

| Categoría | Tecnología |
|-----------|-----------|
| Framework | Next.js 15 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 |
| Animaciones | Framer Motion (desktop) + CSS transitions (móvil/iOS) |
| Fuentes | Manrope + JetBrains Mono (Google Fonts) |
| Iconos | Lucide React |
| Analytics | Vercel Analytics + Speed Insights |
| Deploy | Vercel |

---

## 📦 Instalación y Configuración

### Prerrequisitos

- Node.js 18+
- npm o yarn

### Pasos

```bash
# 1. Clona el repositorio
git clone https://github.com/BryanStrk/portafolio-bryan.git

# 2. Entra en la carpeta
cd portafolio-bryan

# 3. Instala las dependencias
npm install

# 4. Arranca el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Variables de entorno

Este proyecto no requiere variables de entorno. Las llamadas a la API de GitHub son públicas.

---

## 🚀 Uso

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar en producción
npm start

# Linter
npm run lint
```

---

## 📁 Estructura del Proyecto

```
portafolio-bryan/
├── app/
│   ├── globals.css        # Estilos globales, variables CSS, animaciones custom
│   ├── layout.tsx         # Layout principal, fuentes, metadata, analytics
│   └── page.tsx           # Página principal — monta todas las secciones
│
├── components/
│   ├── hero.tsx           # Sección hero con animaciones de letras y partículas
│   ├── about.tsx          # Sección sobre mí con foto, stats y skills
│   ├── projects.tsx       # Grid de proyectos
│   ├── project-card.tsx   # Card individual con CSS transitions (sin Framer Motion)
│   ├── contact.tsx        # Sección de contacto con glow por plataforma
│   ├── footer.tsx         # Footer horizontal con hover colors via JS
│   ├── header.tsx         # Navegación fija con active section detection
│   ├── aura.tsx           # Orb central pulsante de colores
│   ├── particles.tsx      # Partículas de fondo globales
│   ├── section-reveal.tsx # Scroll animations (desactivado en iOS/móvil)
│   └── scroll-to-top.tsx  # Botón volver arriba
│
├── lib/
│   └── github.ts          # Helper para obtener stars de GitHub
│
└── public/
    ├── favicon.ico        # Favicon con iniciales BP
    ├── bryan-about.jpg    # Foto de perfil sección About
    └── cv-bryan-paico.pdf # CV descargable optimizado para ATS
```

---

## ⚡ Optimizaciones de Rendimiento

- **CSS puro en project cards** — eliminado Framer Motion para evitar bloqueos del hilo principal en iOS (INP de 8,488ms → <200ms)
- **Detección iOS/Android** — animaciones de scroll desactivadas en dispositivos móviles
- **Partículas reducidas en móvil** — 8 partículas en móvil vs 22 en desktop
- **useMemo para partículas** — evita recálculos en cada render y errores de hidratación Next.js
- **Sin cursor personalizado** — eliminado para mejorar fluidez general
- **100/100 RES en desktop** según Vercel Speed Insights

---

## 🎨 Decisiones de Diseño

- **Paleta de color:** Fondo `oklch(0.11 0.014 264)` — slate-índigo profundo. Primary `oklch(0.59 0.19 264)` — índigo profesional.
- **Tipografía:** Manrope para texto (legible, moderna) + JetBrains Mono para bloques de código (auténtica).
- **Filosofía:** Diseño oscuro, minimalista y con detalles técnicos que refuerzan el perfil de desarrollador.
- **Referencia visual:** Portfolio de Kevin Candia (SvelteKit) adaptado a Next.js.

---

## 🤝 Contribución

Las contribuciones son bienvenidas. Si encuentras un bug o tienes una mejora:

1. Haz un fork del repositorio
2. Crea una rama: `git checkout -b fix/nombre-del-fix`
3. Haz tus cambios y commitea: `git commit -m "fix: descripción"`
4. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Puedes usarlo como base para tu propio portfolio siempre que mantengas la atribución.

---

<div align="center">
  Hecho con ☕ y mucho <code>npm run dev</code> por <a href="https://github.com/BryanStrk">Bryan Paico</a>
</div>
