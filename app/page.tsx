import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Approach } from "@/components/approach"
import { Projects } from "@/components/projects"
import { SkillsBento } from "@/components/skills-bento"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Particles } from "@/components/particles"
import { GridBackground } from "@/components/grid-background"

import { SectionReveal } from "@/components/section-reveal"
import { ScrollToTop } from "@/components/scroll-to-top"


export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <GridBackground />
      <Particles />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Approach />
      <Projects />
      <SkillsBento />
      <Contact />
      <Footer />
      <ScrollToTop />
  
    </main>
  )
}
