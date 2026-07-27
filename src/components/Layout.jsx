import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MouseGlow from './MouseGlow';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

export default function Layout({ children }) {
    const location = useLocation();
    const isLeire = location.pathname.includes('/leire');

    // Static Colors (Dark Mode)
    const currentDark = isLeire ? "#151214" : "#111111"; // Charcoal Noir / Charcoal Black
    const currentBase = isLeire ? "#292528" : "#1E1B3C"; // Charcoal Noir / Deep Indigo
    const currentText = isLeire ? "#F8F5F5" : "#F8F8FD"; // Off-White

    useEffect(() => {
        window.scrollTo(0, 0);

        // Dynamically assign Accents to root, resolving nested scopes
        document.documentElement.style.setProperty("--color-accent-1", isLeire ? "#AD3A3C" : "#5B3E96");
        document.documentElement.style.setProperty("--color-accent-2", isLeire ? "#D1AEA6" : "#D4AF37");
        document.documentElement.style.setProperty("--color-accent-3", isLeire ? "#AD3A3C" : "#00A7A7");

        // Swap Fonts globally
        document.documentElement.style.setProperty("--font-heading", isLeire ? "'Playfair Display', serif" : "'Space Grotesk', sans-serif");
    }, [location.pathname, isLeire]);

    return (
        <motion.div 
            className="min-h-screen flex flex-col transition-colors duration-0"
            style={{ 
                backgroundColor: currentDark,
                "--color-dark": currentDark, 
                "--color-base": currentBase, 
                "--text-color": currentText 
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
