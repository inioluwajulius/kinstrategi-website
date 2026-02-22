import { motion } from 'framer-motion';
import kinBg from '../assets/Kin Feed_ Elite Talent Network-2.png';

export default function KinFeed() {
    return (
        <div className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-24">
            <motion.div
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    opacity: [0.15, 0.25, 0.15]
                }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 z-0 bg-cover bg-no-repeat"
                style={{ backgroundImage: `url('${kinBg}')`, backgroundSize: "150% auto" }}
            />
            <div className="absolute inset-0 z-0 bg-black/70 backdrop-blur-[1px]" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 w-full max-w-6xl mx-auto px-4 text-center"
            >
                <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="font-tech text-brand-accent-1 tracking-[0.3em] uppercase text-sm mb-4 block"
                >
                    Elite Talent Network
                </motion.span>
                <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
                    Kin <motion.span
                        animate={{ color: ["#5B3E96", "#00A7A7", "#5B3E96"] }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="text-brand-accent-1 inline-block"
                    >
                        Feed
                    </motion.span>
                </h1>
                <p className="font-body text-xl text-gray-300 font-light max-w-2xl mx-auto mb-16">
                    A highly curated nexus connecting visionary entities with pre-vetted, elite operational talent.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    <motion.div
                        whileHover={{ scale: 1.05, y: -5, boxShadow: "0 0 30px rgba(91, 62, 150, 0.6)" }}
                        className="w-full md:w-auto bg-brand-base border border-brand-accent-1/50 px-10 py-5 rounded-sm cursor-pointer relative overflow-hidden group"
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-accent-1/20 to-transparent -translate-x-full group-hover:animate-[sweep_1s_ease-in-out_infinite]"
                        />
                        <h3 className="font-heading font-medium text-white mb-1 uppercase tracking-wider text-sm relative z-10">Submit Credentials</h3>
                        <p className="font-tech text-brand-accent-1 text-xs relative z-10">For Talent</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05, y: -5, boxShadow: "0 0 30px rgba(212, 175, 55, 0.6)" }}
                        className="w-full md:w-auto bg-transparent border border-brand-accent-2/50 px-10 py-5 rounded-sm cursor-pointer relative overflow-hidden group"
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-accent-2/10 to-transparent -translate-x-full group-hover:animate-[sweep_1s_ease-in-out_infinite]"
                        />
                        <h3 className="font-heading font-medium text-white mb-1 uppercase tracking-wider text-sm relative z-10">Request Matrix</h3>
                        <p className="font-tech text-brand-accent-2 text-xs relative z-10">For Clients</p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}