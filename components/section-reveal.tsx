"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ReactNode, useEffect, useState } from "react"

export function SectionReveal({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    const isMobileWidth = window.innerWidth < 768
    setIsMobile(isIOS || isMobileWidth)
  }, [])

  if (isMobile || reducedMotion) {
    return <>{children}</>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.21, 1.02, 0.73, 1.0] }}
    >
      {children}
    </motion.div>
  )
}