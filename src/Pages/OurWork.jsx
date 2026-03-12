import { motion } from 'framer-motion';

const cases = [
    {
        brand: "Brand / Client Name",
        services: "Brand Strategy, Creative Production",
        outcome: "One-line outcome",
        img: null, // Replace with background image or video 
        accent: "brand-accent-2"
    },
    {
        brand: "Brand / Client Name",
        services: "Brand Strategy, Creative Production",
        outcome: "One-line outcome",
        img: null,
        accent: "brand-accent-3"
    },
    {
        brand: "Brand / Client Name",
        services: "Brand Strategy, Creative Production",
        outcome: "One-line outcome",
        img: null,
        accent: "brand-accent-1"
    }
];

export default function OurWork() {
    return (
        <div className="relative min-h-[90vh] py-32 overflow-hidden flex flex-col justify-start">
            <div className="fixed inset-0 z-0 bg-brand-dark" />

            {/* Grid Overlay */}
            <div
                className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left max-w-3xl mb-24"
                >
                    <h1 className="font-heading text-6xl md:text-8xl font-bold uppercase tracking-wider mb-6 text-white drop-shadow-xl">
                        The <span className="text-brand-accent-1">Work.</span>
                    </h1>
                    <p className="font-body text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                        Strategy in action. Brands we've helped build, campaigns we've helped launch, and creative systems we've helped fix.
                    </p>
                </motion.div>

                {/* Case Studies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cases.map((cs, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-brand-base/30 border border-white/5 backdrop-blur-md relative overflow-hidden group cursor-pointer h-[500px] flex flex-col"
                        >
                            {/* Video / Image container */}
                            <div className="h-2/3 bg-black/50 relative overflow-hidden w-full">
                                {cs.img ? (
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${cs.img})` }} />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center font-tech text-white/20 text-xs tracking-widest uppercase">
                                        Video / Image Preview
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            {/* Info container */}
                            <div className={`h-1/3 p-6 flex flex-col justify-between border-t border-${cs.accent}/30 relative z-10`}>
                                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b from-${cs.accent}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                                <div>
                                    <h3 className="font-heading text-2xl font-bold mb-1 text-white group-hover:text-brand-accent-1 transition-colors">{cs.brand}</h3>
                                    <p className="font-body text-xs text-gray-400 mb-2 truncate">{cs.services}</p>
                                    <p className="font-body text-sm font-light text-gray-300 italic">"{cs.outcome}"</p>
                                </div>

                                <motion.button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        alert("Case study details coming soon.");
                                    }}
                                    className={`font-tech text-[10px] tracking-[0.2em] uppercase text-${cs.accent} self-start hover:text-white transition-colors cursor-pointer z-20 relative`}
                                >
                                    [ View Case Study ]
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
