    "use client"

    import { useEffect, useState } from "react"
    import { motion, AnimatePresence } from "framer-motion"
    import { ArrowUp } from "lucide-react"

    export function ScrollToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <AnimatePresence>
        {visible && (
            <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-background/80 text-primary shadow-[0_0_12px_hsl(var(--primary)/0.3)] backdrop-blur-sm transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
            aria-label="Volver arriba"
            >
            <ArrowUp className="h-4 w-4" />
            </motion.button>
        )}
        </AnimatePresence>
    )
    }