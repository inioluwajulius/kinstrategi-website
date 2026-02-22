import { motion } from 'framer-motion';
import fitFinderBg from '../assets/Fit Finder_ Interactive Diagnostic Tool-2.png';

export default function FitFinder() {
    return (
        <div className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-24">
            {/* Background with slow zoom effect */}
            <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-screen"
                style={{ backgroundImage: `url('${fitFinderBg}')` }}
            />
            <div className="absolute inset-0 z-0 bg-brand-dark/80" />

            {/* Floating diagnostic lines */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute h-px bg-brand-accent-2/30 w-full z-0"
                    animate={{ y: ["-50vh", "150vh"] }}
                    transition={{ duration: 8, delay: i * 2.5, repeat: Infinity, ease: "linear" }}
                />
            ))}

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center"
            >
                <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="font-tech text-brand-accent-2 tracking-widest uppercase text-sm mb-4 block"
                >
                    Interactive Diagnostic
                </motion.span>
                <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8">
                    Fit <span className="text-brand-accent-2">Finder</span>
                </h1>
                <p className="font-body text-xl text-gray-300 font-light mb-12 max-w-2xl mx-auto">
                    Calibrate your operational matrix to discover optimal structural configurations.
                </p>

                <motion.div
                    whileHover={{ boxShadow: "0 0 50px rgba(212, 175, 55, 0.15)" }}
                    className="bg-brand-base/40 border border-brand-accent-2/30 p-8 md:p-12 relative overflow-hidden backdrop-blur-md text-left transition-all"
                >
                    {/* Scanning gradient across the box */}
                    <motion.div
                        className="absolute top-0 left-0 w-full h-[150%] bg-gradient-to-b from-transparent via-brand-accent-2/10 to-transparent -translate-y-full"
                        animate={{ translateY: ["-100%", "100%"] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    />

                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent-2 to-transparent opacity-50"></div>

                    <div className="mb-8 relative z-10">
                        <h3 className="font-tech text-brand-accent-2 text-sm uppercase mb-4">Phase 1: Operational Baseline</h3>
                        <div className="w-full bg-black/50 h-2 rounded-full overflow-hidden relative">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "25%" }}
                                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                                className="h-full bg-brand-accent-2"
                            />
                            <motion.div
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="absolute top-0 h-full w-4 bg-white/50 blur-[2px]"
                                style={{ left: "calc(25% - 8px)" }}
                            />
                        </div>
                    </div>

                    <h2 className="font-heading text-2xl font-semibold mb-6 relative z-10">What is the primary constraint vector in your current scaling phase?</h2>

                    <div className="space-y-4 relative z-10">
                        {['Talent Acquisition Velocity', 'Structural Fidelity', 'Creative Output Bandwidth', 'Cross-Functional Alignment'].map((option, idx) => (
                            <motion.label
                                key={idx}
                                whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
                                className="flex items-center space-x-4 p-4 border border-white/5 cursor-pointer transition-colors group relative overflow-hidden"
                            >
                                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-brand-accent-2/0 group-hover:bg-brand-accent-2/50 transition-colors" />
                                <input type="radio" name="constraint" className="form-radio text-brand-accent-2 bg-transparent border-white/20 focus:ring-brand-accent-2 focus:ring-offset-brand-base h-5 w-5" />
                                <span className="font-body text-gray-300 group-hover:text-white transition-colors">{option}</span>
                            </motion.label>
                        ))}
                    </div>

                    <div className="mt-10 flex justify-end relative z-10">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="uppercase font-tech text-sm tracking-widest border border-brand-accent-2 text-brand-accent-2 px-8 py-3 hover:bg-brand-accent-2 hover:text-brand-dark hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all"
                        >
                            Initialize Phase 2
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}