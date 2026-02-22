import { motion } from 'framer-motion';
import fitHubBg from '../assets/Fit Hub_ Client Strategy Portal-2.png';
import { Lock } from 'lucide-react';

export default function FitHub() {
    return (
        <div className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-24">
            {/* Subtle background breathing effect */}
            <motion.div
                animate={{ opacity: [0.15, 0.25, 0.15], scale: [1, 1.05, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${fitHubBg}')` }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-brand-dark via-brand-base/70 to-brand-dark" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full max-w-lg mx-auto px-4"
            >
                <div className="bg-brand-dark/80 border border-brand-accent-3/20 p-10 backdrop-blur-xl shadow-2xl rounded-sm relative overflow-hidden group">

                    {/* subtle scanning border light */}
                    <motion.div
                        className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-accent-3 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />

                    <div className="text-center mb-10 relative z-10">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 180 }}
                            transition={{ duration: 0.5 }}
                            className="w-16 h-16 bg-brand-accent-3/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_15px_rgba(0,167,167,0.3)]"
                        >
                            <Lock className="text-brand-accent-3 w-8 h-8" />
                        </motion.div>
                        <h1 className="font-heading text-3xl font-bold mb-2">Client Strategy Portal</h1>
                        <p className="font-tech text-gray-400 text-sm uppercase tracking-widest">
                            Restricted Access Level
                        </p>
                    </div>

                    <div className="space-y-8 relative z-10">
                        <div>
                            <label className="font-tech text-xs text-brand-accent-3 uppercase mb-2 block">Clearance Code</label>
                            <input
                                type="text"
                                className="w-full bg-brand-base/50 border border-brand-accent-3/20 px-4 py-4 text-white focus:outline-none focus:border-brand-accent-3 focus:shadow-[0_0_15px_rgba(0,167,167,0.4)] font-tech tracking-[0.3em] text-center placeholder-gray-600 transition-all rounded-sm"
                                placeholder="XXXX-XXXX-XXXX"
                            />
                        </div>

                        <motion.button
                            whileHover={{
                                scale: 1.02,
                                backgroundColor: "#fff",
                                boxShadow: "0 0 30px rgba(0,167,167,0.8)"
                            }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-brand-accent-3 text-brand-dark py-4 font-heading font-bold uppercase tracking-wider text-sm transition-all rounded-sm flex items-center justify-center gap-2"
                        >
                            <span>Authenticate</span>
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                &rarr;
                            </motion.div>
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}