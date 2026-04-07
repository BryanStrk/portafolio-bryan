    "use client"

    import { motion } from "framer-motion"
    import { ReactNode, useEffect, useState } from "react"

    export function SectionReveal({ children }: { children: ReactNode }) {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
    }, [])

    if (isMobile) {
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