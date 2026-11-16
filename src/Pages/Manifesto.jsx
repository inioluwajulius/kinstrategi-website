import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import manifestoBg from '../assets/manifesto-bg.png';
import { ArrowRight, Quote } from 'lucide-react';

const coreBeliefs = [
    {
        num: "01",
        title: "Structure protects creativity.",
        text: "The right direction and support allow good ideas to grow rather than fracturing under chaos."
    },
    {
        num: "02",
        title: "Fit matters.",
        text: "The right people make the work better. True collaboration requires resonance in vision, standards, and values."
    },
    {
        num: "03",
        title: "Everything is connected.",
        text: "Strategy, branding, marketing, content and operations should work together as a single unified ecosystem."
    },
    {
        num: "04",
        title: "Good ideas deserve good execution.",
        text: "Vision means little without the people, rigor, and persistent work required to bring it to life."
    }
];

export default function Manifesto() {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-20 md:pt-32 pb-48 bg-brand-dark">
            {/* Top Background Image */}
            <div className="absolute top-0 left-0 w-full h-[120vh] z-0 overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.8 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${manifestoBg}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 via-brand-dark/60 to-brand-dark" />
            </div>

            <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

                {/* 1. Purpose / Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center mt-6 md:mt-12"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-brand-accent-2/70" />
                        <span className="font-tech text-brand-accent-2 text-xs uppercase tracking-[0.3em] font-medium">
                            About Us & Philosophy
                        </span>
                        <div className="w-8 h-[1px] bg-brand-accent-2/70" />
                    </div>

                    <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight uppercase text-white">
                        The KinStrategi <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-2 via-white to-brand-accent-3">Manifesto</span>
                    </h1>

                    <p className="font-tech text-brand-accent-3 text-xs md:text-sm uppercase tracking-[0.3em] mb-8 font-medium">
                        For founders building beyond borders.
                    </p>

                    <div className="max-w-3xl mx-auto space-y-8">
                        <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight text-white">
                            We believe businesses are <br />
                            <span className="text-brand-accent-2 italic">built, not assembled.</span>
                        </h2>

                        <div className="text-lg md:text-xl opacity-90 font-light font-body space-y-6 text-gray-300 leading-relaxed">
                            <p>
                                A brand is more than a logo. A campaign is more than content. And a business is more than what it sells.
                            </p>
                            <p className="text-xl md:text-2xl font-medium text-white border-l-2 border-brand-accent-2/60 pl-6 text-left my-8">
                                Everything is connected: the ideas, people, identity and experiences that bring a business to life.
                            </p>
                            <p>
                                KinStrategi is a <strong className="text-white font-medium">Creative Strategy & Operations Company</strong> working with founders and businesses to develop brands, shape experiences and bring creative ideas to execution.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* 2. What We Believe (Four Pillars) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <div className="text-center max-w-2xl mx-auto">
                        <span className="font-tech text-brand-accent-2 text-xs uppercase tracking-[0.3em] block mb-2 font-medium">
                            Operating Principles
                        </span>
                        <h3 className="font-heading text-3xl md:text-4xl font-bold text-white">
                            We Believe:
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {coreBeliefs.map((belief) => (
                            <div
                                key={belief.num}
                                className="border border-white/10 bg-gradient-to-br from-[#1C1835]/50 via-brand-dark/95 to-[#111111]/95 p-8 backdrop-blur-md relative flex flex-col justify-between hover:border-brand-accent-2/50 transition-all duration-300 group hover:-translate-y-1"
                            >
                                <div>
                                    <span className="font-tech text-brand-accent-2 text-sm font-bold tracking-widest block mb-4">
                                        {belief.num}
                                    </span>
                                    <h4 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-brand-accent-2 transition-colors">
                                        {belief.title}
                                    </h4>
                                    <p className="font-body text-gray-300 font-light text-base leading-relaxed">
                                        {belief.text}
                                    </p>
                                </div>
                                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                                    <span className="text-[10px] font-tech text-gray-500 uppercase tracking-widest">Principle</span>
                                    <span className="text-brand-accent-2 text-xs">✦</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* 3. Why KinStrategi Exists (Callout) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="border border-brand-accent-2/40 bg-gradient-to-r from-[#1C1835]/70 via-brand-dark/95 to-[#1C1835]/70 p-8 md:p-14 backdrop-blur-xl relative overflow-hidden"
                >
                    {/* Decorative Corner Accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-accent-2/60 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-brand-accent-2/60 pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-accent-2/60 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-brand-accent-2/60 pointer-events-none" />

                    <div className="absolute top-0 right-0 w-72 h-72 bg-brand-accent-2/10 rounded-full blur-[80px] pointer-events-none" />

                    <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
                        <span className="font-tech text-brand-accent-3 text-xs uppercase tracking-[0.3em] font-medium block">
                            Our Reason For Being
                        </span>

                        <h3 className="font-heading text-3xl md:text-5xl font-bold text-white">
                            Why KinStrategi Exists
                        </h3>

                        <p className="font-body text-gray-300 font-light text-lg md:text-xl leading-relaxed">
                            We don't believe every business needs the same solution. We bring together the right strategy, creative capabilities and people based on what each business needs.
                        </p>

                        <div className="pt-4 border-t border-white/10">
                            <p className="font-heading text-2xl md:text-3xl font-bold text-brand-accent-2 italic">
                                “We don't just build brands. We build what makes them matter.”
                            </p>
                            <p className="font-tech text-xs uppercase tracking-widest text-gray-400 mt-3">
                                For founders building beyond borders.
                            </p>
                        </div>

                        <div className="pt-6">
                            <button
                                onClick={() => navigate('/contact')}
                                className="bg-brand-accent-2 text-brand-dark px-10 py-4 font-tech uppercase tracking-widest text-xs font-bold cursor-pointer transition-all hover:bg-white flex items-center justify-center gap-2 mx-auto"
                            >
                                <span>Work With Us</span>
                                <ArrowRight size={14} />
                            </button>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
