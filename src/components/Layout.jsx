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

    useEffect(() => {
        window.scrollTo(0, 0);

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
        <motion.div 
            className="min-h-screen flex flex-col transition-colors duration-0"
            style={{ 
                backgroundColor: isLeire ? leireDark : kinDark,
                "--color-dark": isLeire ? leireDark : kinDark, 
                "--color-base": isLeire ? leireBase : kinBase, 
                "--text-color": isLeire ? leireText : kinText 
            }}
        >
            <Navbar />

            <main className="flex-grow pt-20 z-10 relative flex flex-col">
                {children}
            </main>

            <Footer />
        </motion.div>
    );
}
