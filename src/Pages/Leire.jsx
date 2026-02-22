import { motion } from 'framer-motion';
import leireBg from '../assets/Leiré_ Alte Gothic Surrealism Studio.png';

export default function Leire() {
    return (
        <div className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-24">
            {/* Background with slow push-in animation */}
            <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30 grayscale sepia-[0.2]"
                style={{ backgroundImage: `url('${leireBg}')` }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-dark/80 via-transparent to-brand-dark/90" />

            {/* Floating dust particles */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-brand-accent-2/30 rounded-full blur-[1px] z-0"
                    animate={{
                        y: ["100vh", "-20vh"],
                        x: Math.random() * 100 - 50,
                        opacity: [0, Math.random() * 0.8, 0]
                    }}
                    transition={{
                        duration: Math.random() * 15 + 10,
                        repeat: Infinity,
                        delay: Math.random() * 10,
                        ease: "linear"
                    }}
                    style={{ left: `${Math.random() * 100}%` }}
                />
            ))}

            {/* Main Content Area */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-16">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="md:w-1/2 text-left"
                >
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: "0.1em" }}
                        animate={{ opacity: 1, letterSpacing: "0.4em" }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="font-tech text-brand-accent-1 uppercase text-xs mb-4 block"
                    >
                        Alte Gothic Surrealism
                    </motion.span>
                    <motion.h1
                        animate={{ textShadow: ["0 0 0px #AD3A3C", "0 0 30px #AD3A3C", "0 0 0px #AD3A3C"] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="font-heading text-6xl md:text-8xl font-bold mb-8 text-white drop-shadow-2xl italic"
                    >
                        Leiré Studio
                    </motion.h1>
                    <p className="font-body text-xl text-gray-400 font-light leading-relaxed mb-10 max-w-lg">
                        Where esoteric artistry meets disciplined execution. We craft experiences that defy traditional architectural narratives.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(173, 58, 60, 0.6)" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-brand-accent-1 border border-brand-accent-1 text-white px-10 py-4 font-heading tracking-widest uppercase text-sm shadow-[0_0_15px_rgba(173,58,60,0.5)] transition-all overflow-hidden relative group"
                    >
                        <span className="relative z-10">Enter The Void</span>
                        <motion.div
                            className="absolute inset-0 bg-brand-dark/20 mix-blend-multiply z-0"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                    </motion.button>
                </motion.div>

                {/* Floating Abstract Element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, y: [-10, 10, -10], rotate: 0 }}
                    transition={{
                        opacity: { duration: 1.5, delay: 0.3 },
                        scale: { duration: 1.5, delay: 0.3 },
                        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 1.5, delay: 0.3 }
                    }}
                    className="md:w-1/2 flex justify-center"
                >
                    <div className="w-72 h-96 border border-brand-accent-2/30 rounded-t-full bg-brand-accent-2/5 backdrop-blur-sm relative overflow-hidden flex items-center justify-center glow-effect group">
                        {/* Inner pulsing liquid gradient */}
                        <motion.div
                            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-t from-brand-accent-1/40 to-transparent mix-blend-overlay"
                        />

                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="w-48 h-48 border border-brand-accent-2/60 rounded-full border-dashed flex items-center justify-center relative z-10"
                        >
                            <motion.div
                                animate={{ rotate: -720 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="w-32 h-32 border border-brand-accent-1/40 rounded-full border-dotted"
                            />
                        </motion.div>

                        {/* Hover reveal flash */}
                        <div className="absolute inset-0 bg-white/0 group-hover:bg-brand-accent-2/10 transition-colors duration-700 pointer-events-none" />
                    </div>
                </motion.div>

            </div>
        </div>
    );
}