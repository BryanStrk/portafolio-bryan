import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Particles } from "@/components/particles"

import { SectionReveal } from "@/components/section-reveal"
import { ScrollToTop } from "@/components/scroll-to-top"


export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute left-[8%] top-[28rem] h-72 w-72 rounded-full bg-sky-400/8 blur-3xl" />
        <div className="absolute right-[6%] top-[52rem] h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <Particles />
      <Header />
      <Hero />
      <SectionReveal><About /></SectionReveal>
      <SectionReveal><Projects /></SectionReveal>
      <SectionReveal><Contact /></SectionReveal>
      <SectionReveal><Footer /></SectionReveal>
      <ScrollToTop />
  
    </main>
  )
}