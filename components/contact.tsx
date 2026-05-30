"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form data submitted:", formData)
    // Aquí podrás meter más adelante tu integración de correos (Resend, Formspree, etc.)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        {/* Aquí mantenemos tu contenedor original con la clase section-shell */}
        <div className="section-shell mx-auto max-w-3xl rounded-[2rem] bg-[#04071d]/60 border border-white/5 backdrop-blur-md px-8 py-12 md:px-16 md:py-16">
          
          {/* Encabezado con los textos y gradientes del vídeo */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-white">
              Ready to take your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] to-[#6366f1]">
                digital presence
              </span>{" "}
              to the next level?
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-sm md:text-base mt-4">
              Don't settle for "good enough" - let's make it great!
            </p>
          </div>

          {/* Formulario envuelto en la animación original de Framer Motion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.21, 1.02, 0.73, 1.0] }}
            className="max-w-2xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2 text-left">
                <Label htmlFor="name" className="text-sm font-medium text-gray-300">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-transparent border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-purple-500/50 rounded-xl h-12"
                  required
                />
              </div>

              <div className="space-y-2 text-left">
                <Label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="johndoe@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-purple-500/50 rounded-xl h-12"
                  required
                />
              </div>

              <div className="space-y-2 text-left">
                <Label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Your subject matter..."
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-transparent border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-purple-500/50 rounded-xl h-12"
                  required
                />
              </div>

              <div className="space-y-2 text-left">
                <Label htmlFor="message" className="text-sm font-medium text-gray-300">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-transparent border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-purple-500/50 rounded-xl min-h-[140px]"
                  required
                />
              </div>

              <Button
                type="submit"
                variant="gradient"
                className="w-full py-7 rounded-2xl font-semibold tracking-wide active:scale-[0.99]"
              >
                Send Feedback
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}