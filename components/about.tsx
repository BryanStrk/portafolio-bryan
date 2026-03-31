import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const skills = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Docker", "AWS"]

export function About() {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Experience Card */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl bg-gradient-to-br from-card via-card to-primary/5 border border-border group-hover:border-primary/30 transition-colors flex flex-col items-center justify-center shadow-xl">
                <span className="text-6xl md:text-7xl font-bold text-primary">6+</span>
                <span className="text-xl md:text-2xl text-foreground mt-2 font-medium">Years</span>
                <span className="text-lg text-muted-foreground">Experience</span>
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Who am <span className="text-primary">I</span>?
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m a passionate full-stack developer with expertise in modern web technologies. 
              I specialize in creating responsive, accessible, and performant web applications 
              that deliver exceptional user experiences.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              With a background in both front-end and back-end development, I bring a holistic 
              approach to solving complex problems and building scalable solutions.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 pt-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            <Button className="gap-2 mt-4 shadow-lg shadow-primary/20">
              <Download className="h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
