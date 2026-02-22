import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MouseGlow() {
    // useMotionValue avoids expensive React state re-renders on every pixel moved
    const mouseX = useMotionValue(-1000);
    const mouseY = useMotionValue(-1000);

    // Apply a massive increase to the stiffness and lower mass for ultra-fast response
    const smoothX = useSpring(mouseX, { damping: 25, stiffness: 600, mass: 0.1 });
    const smoothY = useSpring(mouseY, { damping: 25, stiffness: 600, mass: 0.1 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="pointer-events-none fixed top-0 left-0 z-[40]"
            style={{ x: smoothX, y: smoothY }}
        >
            {/* Outer Teal Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-accent-3/20 blur-[120px] pointer-events-none mix-blend-screen" />

            {/* Inner Gold Highlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-brand-accent-2/20 blur-[80px] pointer-events-none mix-blend-screen" />
        </motion.div>
    );
}
