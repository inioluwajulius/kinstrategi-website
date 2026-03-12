import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MouseGlow from './MouseGlow';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

export default function Layout({ children }) {
    const location = useLocation();
    const isLeire = location.pathname.includes('/leire');

    const { scrollY } = useScroll();

    // The Luminous Descent - Color Maps
    const leireDarkMap = ["#151214", "#FAFAF8", "#FAFAF8"]; // Charcoal Noir -> Friendly White -> Matte Ivory
    const kinDarkMap = ["#111111", "#FAFAF8", "#FAFAF8"];   // Charcoal Black -> Friendly White -> Matte Ivory

    const leireBaseMap = ["#292528", "#FFFFFF", "#FAFAF8"]; // Charcoal Noir -> True White -> Matte Ivory
    const kinBaseMap = ["#1E1B3C", "#FFFFFF", "#E4DCD3"];   // Deep Indigo -> True White -> Warm Beige

    const leireTextMap = ["#F8F5F5", "#222222", "#111111"];
    const kinTextMap = ["#F8F8FD", "#222222", "#111111"];

    // Pre-calculate transforms for both themes to ensure smooth transition caching
    const kinDark = useTransform(scrollY, [0, 1000, 2500], kinDarkMap);
    const kinBase = useTransform(scrollY, [0, 1000, 2500], kinBaseMap);
    const kinText = useTransform(scrollY, [0, 1000, 2500], kinTextMap);

    const leireDark = useTransform(scrollY, [0, 1000, 2500], leireDarkMap);
    const leireBase = useTransform(scrollY, [0, 1000, 2500], leireBaseMap);
    const leireText = useTransform(scrollY, [0, 1000, 2500], leireTextMap);

    // Global intercept loop to map the scroll directly into the DOM root so all Tailwind classes (text-white, etc) dynamically shift
    useMotionValueEvent(scrollY, "change", () => {
        const cd = isLeire ? leireDark.get() : kinDark.get();
        const cb = isLeire ? leireBase.get() : kinBase.get();
        const ct = isLeire ? leireText.get() : kinText.get();

        document.documentElement.style.setProperty("--color-dark", cd);
        document.documentElement.style.setProperty("--color-base", cb);
        document.documentElement.style.setProperty("--text-color", ct);
    });

    useEffect(() => {
        window.scrollTo(0, 0);

        // Force reset colors to absolute top on mount/route change
        document.documentElement.style.setProperty("--color-dark", isLeire ? leireDarkMap[0] : kinDarkMap[0]);
        document.documentElement.style.setProperty("--color-base", isLeire ? leireBaseMap[0] : kinBaseMap[0]);
        document.documentElement.style.setProperty("--text-color", isLeire ? leireTextMap[0] : kinTextMap[0]);

        // Dynamically assign Accents to root, resolving nested scopes
        document.documentElement.style.setProperty("--color-accent-1", isLeire ? "#AD3A3C" : "#5B3E96");
        document.documentElement.style.setProperty("--color-accent-2", isLeire ? "#D1AEA6" : "#D4AF37");
        document.documentElement.style.setProperty("--color-accent-3", isLeire ? "#AD3A3C" : "#00A7A7");

        // Swap Fonts globally
        document.documentElement.style.setProperty("--font-heading", isLeire ? "'Playfair Display', serif" : "'Space Grotesk', sans-serif");
    }, [location.pathname, isLeire]);

    // Ambient tech light overlay at the top, which fades out as we transition into the bright 'Descent' zone
    const lightOpacity = useTransform(scrollY, [0, 400, 1200], [0, 0.4, 0]);
    const bgY = useTransform(scrollY, [0, 1200], ["-20%", "0%"]);

    return (
        <div className="min-h-screen flex flex-col">
            <MouseGlow />
            <Navbar />

            <main className="flex-grow pt-20 z-10 relative flex flex-col">
                {/* Global Reactive Scroll Lighting Overlay (Only visible near the dark top) */}
                <motion.div
                    style={{
                        opacity: lightOpacity,
                        y: bgY,
                        background: isLeire
                            ? `radial-gradient(circle at 50% 0%, rgba(209, 174, 166, 0.25) 0%, transparent 60%), linear-gradient(to bottom, transparent 30%, rgba(173, 58, 60, 0.2) 100%)`
                            : `radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.15) 0%, transparent 50%), linear-gradient(to bottom, transparent 20%, rgba(91, 62, 150, 0.15) 60%, rgba(209, 174, 166, 0.12) 100%)`
                    }}
                    className="fixed inset-0 z-[5] pointer-events-none mix-blend-screen scale-110"
                />

                {children}
            </main>

            <Footer />
        </div>
    );
}
