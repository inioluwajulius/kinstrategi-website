import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ArrowRight, Palette, Megaphone, Monitor, Film, Users2, Sparkles, CheckCircle2 } from 'lucide-react';
import servicesBg from '../assets/Services.webp';

const serviceCategories = [
    {
        id: "01",
        title: "Brand Strategy & Identity",
        tagline: "Build a brand with a clear identity and direction.",
        description: "We help businesses define their positioning, develop their identity and create a consistent foundation for how they show up.",
        icon: Palette,
        accent: "#D4AF37", // Gold
        accentClass: "text-brand-accent-2",
        borderClass: "hover:border-brand-accent-2/60",
        items: [
            "Brand strategy and positioning",
            "Brand identity development",
            "Visual identity systems",
            "Brand development",
            "Creative direction"
        ]
    },
    {
        id: "02",
        title: "Marketing & Brand Experiences",
        tagline: "Create meaningful connections between your brand and its audience.",
        description: "We develop marketing campaigns, brand activations and experiences that help businesses reach people and build lasting connections.",
        icon: Megaphone,
        accent: "#00A7A7", // Teal
        accentClass: "text-brand-accent-3",
        borderClass: "hover:border-brand-accent-3/60",
        subsections: [
            {
                title: "Experiential & Event Marketing",
                deliverables: [
                    "Marketing campaigns",
                    "Brand activations",
                    "Event conceptualisation and planning",
                    "Brand launches and experiences"
                ]
            },
            {
                title: "Fashion & Lifestyle Marketing",
                deliverables: [
                    "Fashion brand marketing",
                    "Fashion campaigns and launches",
                    "Lifestyle marketing",
                    "Brand experiences"
                ]
            },
            {
                title: "Influencer Marketing",
                deliverables: [
                    "Influencer strategy",
                    "Creator partnerships",
                    "Influencer campaign coordination"
                ]
            }
        ]
    },
    {
        id: "03",
        title: "Digital Experience & Product Design",
        tagline: "Design digital experiences that work for people and businesses.",
        description: "We create intuitive, functional and visually engaging digital products and platforms.",
        icon: Monitor,
        accent: "#5B3E96", // Violet
        accentClass: "text-brand-accent-1",
        borderClass: "hover:border-brand-accent-1/60",
        items: [
            "UI/UX design",
            "Website design and development",
            "Digital product design",
            "Digital experience development"
        ]
    },
    {
        id: "04",
        title: "Creative Strategy & Content Production",
        tagline: "Give your ideas direction and bring them to life.",
        description: "We develop creative concepts, campaign strategies and content that communicate your brand's vision.",
        icon: Film,
        accent: "#D4AF37", // Gold
        accentClass: "text-brand-accent-2",
        borderClass: "hover:border-brand-accent-2/60",
        subsections: [
            {
                title: "Creative Strategy",
                deliverables: [
                    "Creative strategy",
                    "Campaign development",
                    "Campaign conceptualisation",
                    "Creative direction",
                    "Marketing strategy"
                ]
            },
            {
                title: "Content Production",
                deliverables: [
                    "Creative content development",
                    "Video production and editing",
                    "Short-form video content",
                    "Campaign content production"
                ]
            }
        ]
    },
    {
        id: "05",
        title: "Creative Operations & Talent",
        tagline: "Get the right people and structure behind your creative work.",
        description: "We help businesses source talent, build creative teams and manage the processes that keep projects moving.",
        icon: Users2,
        accent: "#00A7A7", // Teal
        accentClass: "text-brand-accent-3",
        borderClass: "hover:border-brand-accent-3/60",
        items: [
            "Creative talent sourcing",
            "Recruitment and talent placement",
            "Talent coordination and management",
            "Creative team management",
            "Project coordination",
            "Creative workflow and operations management",
            "Ongoing creative operations support"
        ]
    }
];

export default function Services() {
    const navigate = useNavigate();
    const [openCategories, setOpenCategories] = useState({ "01": true, "02": true, "03": true, "04": true, "05": true });

    const toggleCategory = (id) => {
        setOpenCategories(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const toggleAll = (expand) => {
        const next = {};
        serviceCategories.forEach(c => {
            next[c.id] = expand;
        });
        setOpenCategories(next);
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-start pt-20 pb-32 md:py-32 bg-brand-dark overflow-hidden">
            {/* Top Background Image - Scrolls naturally with the page (not sticky) */}
            <div className="absolute top-0 left-0 w-full h-[115vh] z-0 overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ scale: 1.08, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.92 }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${servicesBg}')` }}
                />
                {/* Light smooth transition: keeps image clear & vibrant at the top, softly fades into dark at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/25 via-transparent to-brand-dark" />
            </div>

            {/* Subtle Cyber Grid */}
            <div
                className="fixed inset-0 z-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.08) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto mb-16 flex flex-col items-center mt-6 md:mt-12"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-brand-accent-2/70" />
                        <span className="font-tech text-brand-accent-2 text-xs uppercase tracking-[0.3em] font-medium">
                            Capabilities & Practice
                        </span>
                        <div className="w-8 h-[1px] bg-brand-accent-2/70" />
                    </div>

                    <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 tracking-tight uppercase text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-2 via-white to-brand-accent-3">Services</span>
                    </h1>

                    <h2 className="font-heading text-2xl md:text-3xl text-brand-accent-2 font-light italic mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                        Everything your brand needs to move forward.
                    </h2>

                    <p className="font-body text-gray-200 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                        From the first stages of brand development to marketing, digital experiences and creative operations, we bring together the expertise and execution needed to build and grow businesses.
                    </p>

                    {/* Quick Expand / Collapse All control */}
                    <div className="mt-8 flex gap-4 text-xs font-tech tracking-wider uppercase text-gray-400">
                        <button
                            onClick={() => toggleAll(true)}
                            className="hover:text-brand-accent-2 underline transition-colors cursor-pointer"
                        >
                            Expand All
                        </button>
                        <span>•</span>
                        <button
                            onClick={() => toggleAll(false)}
                            className="hover:text-brand-accent-2 underline transition-colors cursor-pointer"
                        >
                            Collapse All
                        </button>
                    </div>
                </motion.div>

                {/* Categories Stack */}
                <div className="space-y-6 mb-24">
                    {serviceCategories.map((category, index) => {
                        const isOpen = openCategories[category.id];
                        const IconComponent = category.icon;

                        return (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className={`border border-white/15 bg-gradient-to-br from-[#181428]/60 via-brand-dark/75 to-[#0E0C16]/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative overflow-hidden transition-all duration-300 ${category.borderClass}`}
                            >
                                {/* Category Header Button */}
                                <button
                                    onClick={() => toggleCategory(category.id)}
                                    className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-6 cursor-pointer group"
                                    aria-expanded={isOpen}
                                >
                                    <div className="flex items-start gap-4 md:gap-7">
                                        <span className={`font-tech text-lg md:text-xl font-bold tracking-widest ${category.accentClass} shrink-0 pt-0.5`}>
                                            {category.id}
                                        </span>
                                        <div>
                                            <div className="flex items-center gap-3 mb-1.5">
                                                <IconComponent className={`w-5 h-5 ${category.accentClass} shrink-0`} />
                                                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white group-hover:text-brand-accent-2 transition-colors">
                                                    {category.title}
                                                </h3>
                                            </div>
                                            <p className="font-tech text-xs text-brand-accent-3 uppercase tracking-wider mb-2 font-medium">
                                                {category.tagline}
                                            </p>
                                            <p className="font-body text-gray-400 font-light text-sm md:text-base max-w-3xl leading-relaxed">
                                                {category.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 group-hover:border-brand-accent-2 text-white/70 group-hover:text-brand-accent-2 transition-all shrink-0 mt-1">
                                        <motion.div
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown size={18} />
                                        </motion.div>
                                    </div>
                                </button>

                                {/* Expandable Sub-services / Deliverables */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            className="overflow-hidden border-t border-white/10"
                                        >
                                            <div className="p-6 md:p-8 bg-black/40 backdrop-blur-xl">
                                                <span className="font-tech text-[11px] uppercase tracking-[0.25em] text-brand-accent-2 mb-5 block font-medium">
                                                    Deliverables & Scope
                                                </span>

                                                {/* Direct Deliverables List */}
                                                {category.items && (
                                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                                                        {category.items.map((item, i) => (
                                                            <div
                                                                key={i}
                                                                className="flex items-start gap-3 p-3.5 bg-white/[0.03] border border-white/5 hover:border-brand-accent-2/40 transition-colors"
                                                            >
                                                                <span className={`${category.accentClass} text-xs mt-0.5`}>✦</span>
                                                                <span className="font-body text-sm text-gray-200 font-light">
                                                                    {item}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* Nested Subsections */}
                                                {category.subsections && (
                                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                                        {category.subsections.map((sub, sIdx) => (
                                                            <div
                                                                key={sIdx}
                                                                className="border border-white/10 bg-white/[0.02] p-5 flex flex-col justify-between"
                                                            >
                                                                <div>
                                                                    <h4 className="font-heading text-lg font-bold text-white mb-3.5 pb-2 border-b border-white/10 flex items-center gap-2">
                                                                        <span className="w-1.5 h-1.5 bg-brand-accent-2 rounded-full" />
                                                                        {sub.title}
                                                                    </h4>
                                                                    <ul className="space-y-2">
                                                                        {sub.deliverables.map((deliv, dIdx) => (
                                                                            <li key={dIdx} className="flex items-start gap-2.5 font-body text-sm text-gray-300 font-light">
                                                                                <span className="text-brand-accent-2 text-xs mt-1">―</span>
                                                                                <span>{deliv}</span>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* Quick Action */}
                                                <div className="mt-8 pt-5 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                                                    <span className="font-body text-xs text-gray-400 italic">
                                                        Looking to engage KinStrategi for {category.title.toLowerCase()}?
                                                    </span>
                                                    <button
                                                        onClick={() => navigate('/contact')}
                                                        className={`font-tech text-xs uppercase tracking-widest ${category.accentClass} hover:text-white flex items-center gap-2 transition-colors cursor-pointer`}
                                                    >
                                                        <span>Enquire About This Service</span>
                                                        <ArrowRight size={13} />
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Custom Scope Box */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative border border-brand-accent-2/40 bg-gradient-to-r from-[#1E1B3C]/60 via-brand-dark/75 to-[#1A1733]/60 backdrop-blur-2xl p-8 md:p-14 text-center overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                >
                    {/* Decorative Corner Accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-accent-2/60 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-brand-accent-2/60 pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-accent-2/60 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-brand-accent-2/60 pointer-events-none" />

                    <div className="absolute top-0 right-0 w-80 h-80 bg-brand-accent-2/10 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-accent-3/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                        <span className="font-tech text-brand-accent-2 text-xs uppercase tracking-[0.3em] font-medium">
                            Tailored Engagements
                        </span>

                        <h3 className="font-heading text-3xl md:text-5xl font-bold text-white">
                            Need something specific?
                        </h3>

                        <p className="font-body text-gray-300 font-light text-base md:text-lg leading-relaxed">
                            Not every project fits neatly into one category. We can combine services based on your business needs, project scope and goals.
                        </p>

                        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                onClick={() => navigate('/contact')}
                                whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(212, 175, 55, 0.4)" }}
                                whileTap={{ scale: 0.97 }}
                                className="bg-brand-accent-2 text-brand-dark px-10 py-4 font-tech uppercase tracking-widest text-xs font-bold cursor-pointer transition-all flex items-center justify-center gap-2"
                            >
                                <span>Discuss Your Project</span>
                                <ArrowRight size={14} />
                            </motion.button>

                            <motion.button
                                onClick={() => navigate('/playbook')}
                                whileHover={{ scale: 1.03, borderColor: "rgba(255,255,255,0.4)" }}
                                whileTap={{ scale: 0.97 }}
                                className="border border-white/20 text-white hover:bg-white/5 px-8 py-4 font-tech uppercase tracking-widest text-xs cursor-pointer transition-all"
                            >
                                View The Playbook
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
