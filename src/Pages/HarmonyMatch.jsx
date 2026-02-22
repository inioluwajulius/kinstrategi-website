import { motion } from 'framer-motion';
import harmonyBg from '../assets/Harmony Match_ Intelligent Fit System.png';

export default function HarmonyMatch() {
    return (
        <div className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-24">
            <motion.div
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 3, ease: "easeOut" }}
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-screen"
                style={{ backgroundImage: `url('${harmonyBg}')` }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-brand-dark via-brand-base/80 to-brand-dark" />

            {/* Floating background particles representing intelligence nodes */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-brand-accent-3/40 rounded-full blur-[2px] z-0"
                    animate={{
                        y: ["0vh", "-100vh"],
                        x: Math.random() * 200 - 100,
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "linear"
                    }}
                    style={{ left: `${Math.random() * 100}%`, bottom: "0" }}
                />
            ))}

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10 w-full max-w-5xl mx-auto px-4 text-center"
            >
                <span className="font-tech text-brand-accent-3 tracking-widest uppercase text-sm mb-4 block">
                    Intelligent Fit System
                </span>
                <h1 className="font-heading text-5xl md:text-7xl font-bold mb-12">
                    Harmony <motion.span
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="font-light italic text-brand-accent-3"
                    >
                        Match
                    </motion.span>™
                </h1>

                <motion.div
                    whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(0,167,167,0.2)" }}
                    className="max-w-2xl mx-auto bg-black/40 border border-brand-accent-3/30 p-10 backdrop-blur-lg relative glow-effect group overflow-hidden"
                >
                    {/* Scanning line animation inside the box */}
                    <motion.div
                        className="absolute top-0 left-0 w-full h-[2px] bg-brand-accent-3/50 z-0 shadow-[0_0_10px_#00A7A7]"
                        animate={{ y: ["0%", "100%", "0%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />

                    <div className="absolute inset-0 bg-brand-accent-3/5 group-hover:bg-brand-accent-3/10 transition-colors" />
                    <p className="font-body text-gray-300 font-light text-lg mb-8 relative z-10 leading-relaxed">
                        A proprietary diagnostic protocol analyzing structural, cultural, and operational vectors to ensure 100% synergistic alignment.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative z-10 bg-brand-accent-3 text-brand-dark px-10 py-4 font-heading font-bold uppercase tracking-wider text-sm hover:shadow-[0_0_25px_rgba(0,167,167,0.8)] transition-all"
                    >
                        Initiate Diagnostic
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>
    );
}