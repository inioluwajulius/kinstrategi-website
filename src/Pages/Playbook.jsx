import { motion } from 'framer-motion';
import playbookBg from '../assets/The Playbook_ Creative Ops Hierarchy.png';

export default function Playbook() {
    return (
        <div className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-24">
            {/* Slow pan effect on background */}
            <motion.div
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-color-dodge"
                style={{ backgroundImage: `url('${playbookBg}')`, backgroundSize: "120% auto" }}
            />
            <div className="absolute inset-0 z-0 bg-brand-dark/90" />

            {/* Animated grid overlay */}
            <motion.div
                className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.2) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
                animate={{ y: [0, 50] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full max-w-6xl mx-auto px-4"
            >
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="font-heading text-4xl md:text-6xl font-bold mb-4 tracking-tight"
                    >
                        The <span className="text-brand-accent-2">Playbook</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="font-tech text-gray-400 uppercase tracking-widest text-sm"
                    >
                        Creative Ops Hierarchy
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {[1, 2, 3].map((step) => (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: step * 0.2, duration: 0.6 }}
                            whileHover={{
                                y: -10,
                                borderColor: 'rgba(91, 62, 150, 0.5)',
                                boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
                            }}
                            className="bg-brand-base/40 border border-white/5 p-8 backdrop-blur-md relative overflow-hidden group cursor-pointer"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent-1/10 rounded-full blur-[50px] group-hover:bg-brand-accent-1/30 transition-colors duration-500" />

                            <motion.div
                                className="font-tech text-brand-accent-1 text-4xl mb-6 relative z-10 opacity-50 font-bold"
                                groupHover={{ scale: 1.1, opacity: 1 }}
                            >
                                0{step}
                            </motion.div>
                            <h3 className="font-heading text-xl font-bold mb-3 relative z-10">Protocol Phase {step}</h3>
                            <p className="font-body text-gray-400 text-sm font-light leading-relaxed relative z-10">
                                Execute structured methodologies to orchestrate complex creative architectures and streamline operational fidelity.
                            </p>

                            {/* Decorative line mapping path */}
                            <motion.div
                                className="absolute bottom-0 left-0 h-[2px] bg-brand-accent-1"
                                initial={{ width: 0 }}
                                whileHover={{ width: "100%" }}
                                transition={{ duration: 0.4 }}
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}