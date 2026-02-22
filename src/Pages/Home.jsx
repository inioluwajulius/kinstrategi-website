import { motion } from 'framer-motion';
import homeBg from '../assets/KinStrategi Home_ Cyber-Luxury Hub.png';

export default function Home() {
    const textContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const textItem = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Background Image Setup */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.4 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat mix-blend-luminosity"
                style={{ backgroundImage: `url('${homeBg}')` }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark" />

            {/* Hero Content */}
            <motion.div
                variants={textContainer}
                initial="hidden"
                animate="show"
                className="relative z-10 text-center px-4 max-w-4xl"
            >
                <motion.span
                    variants={textItem}
                    className="font-tech text-brand-accent-3 tracking-[0.3em] uppercase text-sm mb-6 block drop-shadow-lg"
                >
                    Cyber-Luxury Hub
                </motion.span>
                <motion.h1
                    variants={textItem}
                    className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
                >
                    Architecting <motion.span
                        animate={{ textShadow: ["0px 0px 5px #5B3E96", "0px 0px 20px #00A7A7", "0px 0px 5px #5B3E96"] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-1 to-brand-accent-3 inline-block"
                    >
                        Elite
                    </motion.span> Strategies
                </motion.h1>
                <motion.p
                    variants={textItem}
                    className="font-body text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto mb-12"
                >
                    Merging advanced operational theory with bleeding-edge digital execution for visionary entities.
                </motion.p>

                <motion.button
                    variants={textItem}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 35px rgba(0, 167, 167, 0.7)",
                        backgroundColor: "rgba(0, 167, 167, 0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-brand-accent-1/20 border-2 border-brand-accent-1 text-white px-10 py-5 rounded-full font-heading uppercase tracking-widest text-sm backdrop-blur-md transition-all relative overflow-hidden group"
                >
                    <span className="relative z-10">Initialize Protocol</span>
                    <motion.div
                        className="absolute inset-0 bg-brand-accent-3 z-0 origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        style={{ opacity: 0.2 }}
                    />
                </motion.button>
            </motion.div>
        </div>
    );
}