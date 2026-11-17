import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Check, Sparkles } from 'lucide-react';
import playbookBg from '../assets/playbook-bg.webp';
import ademarisGuiding from '../safe-assets/navigator/ademaris-guiding.png';

const connectedAreas = [
    {
        num: "01",
        title: "Brand Strategy & Identity",
        desc: "Building brand positioning, identity and direction.",
        accent: "brand-accent-2",
        accentHex: "#D4AF37"
    },
    {
        num: "02",
        title: "Marketing & Brand Experiences",
        desc: "Developing campaigns, launches, activations and experiences.",
        accent: "brand-accent-3",
        accentHex: "#00A7A7"
    },
    {
        num: "03",
        title: "Digital Experience & Product Design",
        desc: "Creating websites, digital products and user experiences.",
        accent: "brand-accent-1",
        accentHex: "#5B3E96"
    },
    {
        num: "04",
        title: "Creative Strategy & Content Production",
        desc: "Developing creative concepts, narratives, campaigns and content.",
        accent: "brand-accent-2",
        accentHex: "#D4AF37"
    },
    {
        num: "05",
        title: "Creative Operations & Talent",
        desc: "Sourcing talent, coordinating creative teams and managing projects.",
        accent: "brand-accent-3",
        accentHex: "#00A7A7"
    }
];

const supportOptions = [
    {
        num: "01",
        title: "Individual Services",
        subtitle: "Targeted Sprints",
        desc: "Engage us for a specific service or deliverable—whether that's identity development, a digital product design, content production or talent placement.",
        bestFor: "Businesses with a singular priority or clear-cut deliverable.",
        tag: "Standalone"
    },
    {
        num: "02",
        title: "Combined Services",
        subtitle: "Integrated Campaigns",
        desc: "Combine multiple services across branding, marketing, digital experience and creative ops for a larger initiative, launch or cross-functional campaign.",
        bestFor: "Businesses launching, rebranding or running multi-channel campaigns.",
        tag: "Most Popular"
    },
    {
        num: "03",
        title: "Ongoing Support",
        subtitle: "Dedicated Retainer",
        desc: "Retain KinStrategi for ongoing creative strategy, marketing, creative direction and operational support. We adapt our involvement to your business, goals and roadmap.",
        bestFor: "Growing businesses needing a high-level creative team in their corner.",
        tag: "Partnership"
    }
];

const processSteps = [
    {
        step: "01",
        title: "Tell us what you need.",
        desc: "Share your business, goals and the support you're looking for."
    },
    {
        step: "02",
        title: "We define the scope.",
        desc: "We identify the relevant services, capabilities and resources required."
    },
    {
        step: "03",
        title: "We put a plan together.",
        desc: "You'll receive a proposed scope, deliverables, timeline and fees."
    },
    {
        step: "04",
        title: "We get to work.",
        desc: "Once agreed, we bring the right people together and get started."
    }
];

export default function Playbook() {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-start pt-20 pb-32 md:py-32 bg-brand-dark overflow-hidden">
            {/* Top Background Image */}
            <div className="absolute top-0 left-0 w-full h-[120vh] z-0 overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.7 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${playbookBg}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark/70 to-brand-dark" />
            </div>

            {/* Grid Overlay */}
            <div
                className="fixed inset-0 z-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
                {/* 1. Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto flex flex-col items-center mt-6 md:mt-12"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-brand-accent-2/70" />
                        <span className="font-tech text-brand-accent-2 text-xs uppercase tracking-[0.3em] font-medium">
                            Operational Philosophy
                        </span>
                        <div className="w-8 h-[1px] bg-brand-accent-2/70" />
                    </div>

                    <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 tracking-tight uppercase text-white">
                        The KinStrategi <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-2 via-white to-brand-accent-3">Playbook</span>
                    </h1>

                    <h2 className="font-tech text-brand-accent-3 text-lg md:text-xl tracking-[0.25em] uppercase mb-8 opacity-90 font-medium">
                        How we think. How we work. What we build.
                    </h2>

                    <p className="font-body opacity-80 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto text-gray-300 mb-8">
                        Turning a business vision into something people can see, experience and connect with takes more than a good idea. It takes strategy, creativity, the right people and thoughtful execution. The KinStrategi Playbook brings together our services, approach and ways of working.
                    </p>

                    <div className="p-6 border border-white/10 bg-white/[0.02] backdrop-blur-md max-w-2xl text-center shadow-[0_4px_25px_rgba(0,0,0,0.3)]">
                        <p className="font-heading text-lg md:text-xl text-brand-accent-2 italic">
                            “Our approach is simple: understand what a business needs, bring the right capabilities together and move the work from idea to execution.”
                        </p>
                    </div>
                </motion.div>

                {/* 2. Five Connected Areas Section */}
                <div>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="font-tech text-brand-accent-2 text-xs uppercase tracking-[0.4em] block mb-2 font-medium">
                            Integrated System
                        </span>
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
                            We Work Across Five Connected Areas
                        </h2>
                        <p className="font-body text-gray-400 font-light text-base md:text-lg">
                            Rather than isolated siloes, our capabilities reinforce one another to build enduring brand worlds.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {connectedAreas.map((area, idx) => (
                            <motion.div
                                key={area.num}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.08 }}
                                className={`border border-white/10 bg-gradient-to-br from-[#1C1835]/50 via-brand-dark/95 to-[#111111]/95 p-8 backdrop-blur-md flex flex-col justify-between hover:border-brand-accent-2/50 transition-all duration-300 group hover:-translate-y-1 ${
                                    idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                                }`}
                            >
                                <div>
                                    <span className="font-tech text-brand-accent-2 text-sm font-bold tracking-widest block mb-4">
                                        {area.num}
                                    </span>
                                    <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-brand-accent-2 transition-colors">
                                        {area.title}
                                    </h3>
                                    <p className="font-body text-gray-300 font-light text-base leading-relaxed">
                                        {area.desc}
                                    </p>
                                </div>
                                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                                    <span className="text-xs font-tech uppercase text-gray-500 tracking-wider">KinStrategi Core</span>
                                    <span className="text-brand-accent-2 text-xs">✦</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 3. Build Your Support Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative border border-brand-accent-2/40 bg-gradient-to-br from-[#1C1835]/70 via-brand-dark/95 to-[#111111]/95 backdrop-blur-2xl p-8 md:p-14 overflow-hidden"
                >
                    {/* Decorative Corner Accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-accent-2/60 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-brand-accent-2/60 pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-accent-2/60 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-brand-accent-2/60 pointer-events-none" />

                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent-2/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10 max-w-3xl mb-12">
                        <span className="inline-block px-3 py-1 bg-brand-accent-2/15 border border-brand-accent-2/40 text-brand-accent-2 font-tech text-[10px] tracking-widest uppercase mb-4">
                            Engagement Framework
                        </span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-3">
                            Build Your Support
                        </h2>
                        <p className="font-tech text-brand-accent-3 text-sm md:text-base uppercase tracking-widest mb-4">
                            Different needs. One creative partner.
                        </p>
                        <p className="font-body text-gray-300 font-light text-base md:text-lg leading-relaxed">
                            You can engage KinStrategi for a specific service or deliverable, combine multiple capabilities for a full campaign, or retain us for continuous creative direction and operations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10 mb-10">
                        {supportOptions.map((opt) => (
                            <div
                                key={opt.num}
                                className="border border-white/10 bg-white/[0.02] p-8 flex flex-col justify-between hover:border-brand-accent-2/50 transition-colors"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="font-tech text-brand-accent-2 text-xs font-bold tracking-widest uppercase">
                                            Option {opt.num}
                                        </span>
                                        <span className="px-2 py-0.5 bg-brand-accent-2/15 text-brand-accent-2 font-tech text-[10px] uppercase tracking-wider border border-brand-accent-2/30">
                                            {opt.tag}
                                        </span>
                                    </div>
                                    <h3 className="font-heading text-2xl font-bold text-white mb-1">
                                        {opt.title}
                                    </h3>
                                    <p className="font-tech text-[11px] text-brand-accent-3 uppercase tracking-wider mb-4 font-medium">
                                        {opt.subtitle}
                                    </p>
                                    <p className="font-body text-gray-300 font-light text-sm leading-relaxed mb-6">
                                        {opt.desc}
                                    </p>
                                </div>
                                <div className="border-t border-white/10 pt-4">
                                    <p className="text-xs font-tech text-gray-400">
                                        <strong className="text-white">Best for:</strong> {opt.bestFor}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                        <p className="font-body text-sm text-gray-400 italic">
                            No rigid packages. We scope each partnership around the work, the people, and the level of support your business actually needs.
                        </p>
                        <button
                            onClick={() => navigate('/contact')}
                            className="bg-brand-accent-2 text-brand-dark px-8 py-3.5 font-tech uppercase text-xs tracking-widest font-bold cursor-pointer shrink-0 hover:bg-white transition-colors"
                        >
                            Build Your Support →
                        </button>
                    </div>
                </motion.div>

                {/* 4. How It Works (4-Step Workflow with Visual Track) */}
                <div>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="font-tech text-brand-accent-3 text-xs uppercase tracking-[0.3em] block mb-2 font-medium">
                            Clear Cadence
                        </span>
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
                            How It Works
                        </h2>
                        <p className="font-body text-gray-400 font-light text-base md:text-lg">
                            From initial conversation to execution, our process is transparent, structured and collaborative.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                        {processSteps.map((step, idx) => (
                            <div
                                key={step.step}
                                className="border border-white/10 bg-gradient-to-br from-[#1C1835]/40 to-brand-dark/95 p-7 relative flex flex-col justify-between hover:border-brand-accent-2/40 transition-colors"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <span className="font-tech text-3xl font-bold text-brand-accent-2/70">
                                        {step.step}
                                    </span>
                                    <span className="text-xs font-tech text-gray-500 uppercase">Phase 0{idx + 1}</span>
                                </div>
                                <div>
                                    <h3 className="font-heading text-xl font-bold text-white mb-2.5">
                                        {step.title}
                                    </h3>
                                    <p className="font-body text-gray-300 font-light text-sm leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 5. Closing Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto pb-16 relative"
                >
                    <div className="w-full md:w-1/3 relative z-10 flex justify-center order-2 md:order-1">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-accent-2/20 rounded-full blur-[40px] pointer-events-none" />
                        <img 
                            src={ademarisGuiding} 
                            alt="Ademaris Guiding" 
                            className="relative z-10 w-full h-full max-w-[240px] object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.4)] mix-blend-screen"
                        />
                    </div>
                    
                    <div className="w-full md:w-2/3 text-center md:text-left order-1 md:order-2 space-y-6">
                        <span className="font-tech text-xs uppercase tracking-[0.25em] text-brand-accent-2 font-medium">
                            Let's Connect
                        </span>
                        <h3 className="font-heading text-3xl md:text-5xl font-bold text-white">
                            Have something in mind?
                        </h3>
                        <p className="font-body opacity-80 text-lg md:text-xl font-light leading-relaxed text-gray-300 max-w-2xl">
                            Whether it's a single project or ongoing support, let's talk about what you're building.
                        </p>
                        <div className="pt-2">
                            <motion.button
                                onClick={() => navigate('/contact')}
                                whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(212, 175, 55, 0.4)" }}
                                whileTap={{ scale: 0.97 }}
                                className="bg-brand-accent-2 text-brand-dark px-10 py-4 font-tech uppercase tracking-widest text-xs font-bold cursor-pointer transition-all flex items-center justify-center gap-2"
                            >
                                <span>Start a Conversation</span>
                                <ArrowRight size={14} />
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
