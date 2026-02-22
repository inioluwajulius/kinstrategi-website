import { motion } from 'framer-motion';
import signalBg from '../assets/Signal Station_ Thought Leadership Feed.png';

export default function SignalStation() {
    return (
        <div className="relative min-h-screen py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 2 }}
                className="fixed inset-0 z-0 bg-cover bg-top bg-no-repeat"
                style={{ backgroundImage: `url('${signalBg}')` }}
            />
            <div className="fixed inset-0 z-0 bg-brand-dark/80" />

            {/* Ambient background glow for Signal Station */}
            <motion.div
                animate={{
                    opacity: [0.1, 0.3, 0.1],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="fixed top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-accent-2/10 rounded-full blur-[100px] pointer-events-none z-0"
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 border-l-4 border-brand-accent-2 pl-6"
                >
                    <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider">
                        Signal Station
                    </h1>
                    <motion.p
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="font-tech text-gray-400 mt-2"
                    >
                        Thought Leadership Feed // Broadcast Active
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, y: 50, rotateX: -10 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.8,
                                delay: item * 0.1,
                                type: "spring",
                                bounce: 0.4
                            }}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(212, 175, 55, 0.2)"
                            }}
                            className="bg-brand-base/60 border border-white/5 p-8 relative overflow-hidden group cursor-pointer backdrop-blur-md"
                            style={{ transformPerspective: 1000 }}
                        >
                            {/* Hover sweep effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-accent-2/10 to-transparent z-0 -translate-x-full group-hover:animate-[sweep_1.5s_ease-in-out_infinite]"
                            />

                            <div className="relative z-10">
                                <div className="font-tech text-xs text-brand-accent-2 mb-4 opacity-70 flex justify-between">
                                    <span>Transmission 0{item}</span>
                                    <span>{new Date().toLocaleDateString()}</span>
                                </div>
                                <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-brand-accent-2 transition-colors">
                                    Structural Integrity in Modern Scale
                                </h3>
                                <p className="font-body text-sm text-gray-400 font-light mb-8 leading-relaxed">
                                    Decoding the architecture of successful operational frameworks in high-velocity environments...
                                </p>

                                <div className="flex items-center gap-2 group-hover:gap-4 transition-all">
                                    <span className="font-tech text-xs text-white uppercase tracking-widest border-b border-brand-accent-2 pb-1 inline-block text-brand-accent-2">
                                        Decrypt
                                    </span>
                                    <motion.svg
                                        width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="text-brand-accent-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </motion.svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Global CSS for the sweep animation */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}} />
        </div>
    );
}