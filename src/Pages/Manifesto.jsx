import { motion, useScroll, useTransform } from 'framer-motion';
import manifestoBg from '../assets/Manifesto_ The KinStrategi Philosophy.png';

export default function Manifesto() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
            {/* Dynamic scrolling background */}
            <motion.div
                style={{ y: y1, backgroundImage: `url('${manifestoBg}')` }}
                className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-screen scale-110"
            />
            <div className="fixed inset-0 z-0 bg-brand-dark/80 backdrop-blur-[2px]" />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center"
            >
                <motion.h1
                    animate={{ textShadow: "0 0 40px rgba(91, 62, 150, 0.5)" }}
                    transition={{ duration: 4, repeat: Infinity, alternate: true }}
                    className="font-heading text-5xl md:text-7xl font-bold mb-12 tracking-tighter uppercase"
                >
                    The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-1 to-brand-accent-2">Philosophy</span>
                </motion.h1>

                <div className="space-y-12 font-body text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        We believe in the synthesis of structural rigour and boundless creativity.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="relative"
                    >
                        <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-accent-1 via-brand-accent-3 to-transparent"></div>
                        <p className="text-2xl md:text-3xl text-white font-medium pl-6 text-left my-8 italic">
                            "To build an empire, you must first design the framework that sustains it."
                        </p>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        Every artifact, every protocol, every signal we emit is engineered for absolute impact.
                    </motion.p>
                </div>
            </motion.div>
        </div>
    );
}