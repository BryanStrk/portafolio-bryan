    "use client"

    import { useEffect, useState } from "react"
    import { motion } from "framer-motion"

    export function Cursor() {
    const [pos, setPos] = useState({ x: 0, y: 0 })
    const [visible, setVisible] = useState(false)
    const [clicking, setClicking] = useState(false)

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
        setPos({ x: e.clientX, y: e.clientY })
        setVisible(true)
        }
        const onLeave = () => setVisible(false)
        const onDown = () => setClicking(true)
        const onUp = () => setClicking(false)

        window.addEventListener("mousemove", onMove)
        window.addEventListener("mouseleave", onLeave)
        window.addEventListener("mousedown", onDown)
        window.addEventListener("mouseup", onUp)

        return () => {
        window.removeEventListener("mousemove", onMove)
        window.removeEventListener("mouseleave", onLeave)
        window.removeEventListener("mousedown", onDown)
        window.removeEventListener("mouseup", onUp)
        }
    }, [])

    if (!visible) return null

    return (
        <>
        {/* Punto central */}
        <motion.div
            className="pointer-events-none fixed z-[9999] h-2 w-2 rounded-full bg-primary"
            animate={{
            x: pos.x - 4,
            y: pos.y - 4,
            scale: clicking ? 0.5 : 1,
            }}
            transition={{ type: "spring", stiffness: 800, damping: 40, mass: 0.3 }}
        />
        {/* Anillo exterior con glow */}
        <motion.div
            className="pointer-events-none fixed z-[9998] h-8 w-8 rounded-full border border-primary/40 shadow-[0_0_8px_hsl(var(--primary)/0.3)]"
            animate={{
            x: pos.x - 16,
            y: pos.y - 16,
            scale: clicking ? 1.5 : 1,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.5 }}
        />
        </>
    )
    }