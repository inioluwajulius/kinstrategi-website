import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

export default function Layout({ children }) {
    const location = useLocation();

    // Standard KinStrategi Palette
    const currentDark = "#111111"; // Charcoal Black
    const currentBase = "#1E1B3C"; // Deep Indigo
    const currentText = "#F8F8FD"; // Off-White

    useEffect(() => {
        window.scrollTo(0, 0);

        // Core Brand Accents
        document.documentElement.style.setProperty("--color-accent-1", "#5B3E96"); // Violet
        document.documentElement.style.setProperty("--color-accent-2", "#D4AF37"); // Gold
        document.documentElement.style.setProperty("--color-accent-3", "#00A7A7"); // Teal

        // Brand Typography
        document.documentElement.style.setProperty("--font-heading", "'Space Grotesk', sans-serif");
    }, [location.pathname]);

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
