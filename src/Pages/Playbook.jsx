import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import playbookBg from '../assets/The Playbook_ Creative Ops Hierarchy.png';
import ademarisGuiding from '../safe-assets/navigator/ademaris-guiding.png';

const services = [
    {
        level: "01",
        title: "Creative Strategy & Direction",
        subtitle: "Give your vision a clear direction before you build. Every remarkable business starts with a strong idea, but ideas need structure before they become reality. Together, we'll define your positioning, clarify your story, and develop a strategic roadmap that helps you make confident creative and business decisions.",
        bestFor: "Founders at the beginning of a venture, preparing for a launch, repositioning an existing brand, or feeling stuck on what's next.",
        pointsHeading: "What's Included:",
        points: ["Brand & Creative Strategy", "Positioning & Messaging", "Audience & Experience Mapping", "Creative Direction", "Strategic Roadmap"],
        footer: "From $1,000",
        cta: "Kini Your Strategy? →",
        accent: "brand-accent-2"
    },
    {
        level: "02",
        title: "Creative Partnerships",
        subtitle: "For founders who need more than a service—they need a creative partner. Some ideas need ongoing collaboration. We work alongside founders to shape concepts, develop campaigns, solve creative challenges, and bring ambitious ideas to life from inception through execution. Whether you're building a collection, directing a campaign, developing a publication, or creating an entirely new venture, we're part of the thinking—not just the delivery.",
        bestFor: "Creative founders, brands, and teams looking for a trusted strategic and creative collaborator.",
        pointsHeading: "What's Included:",
        points: ["Creative Development", "Campaign & Concept Development", "Storytelling & Worldbuilding", "Creative Direction", "Cross-functional Collaboration"],
        footer: "From $2,000",
        cta: "Let's Yap. →",
        accent: "brand-accent-3"
    },
    {
        level: "03",
        title: "Creative Infrastructure (KinOps)",
        subtitle: "Build the systems that protect creativity. Great ideas lose momentum without the right infrastructure. KinOps combines creative operations, project coordination, and strategic oversight to keep people, projects, and priorities moving. We remove bottlenecks, improve workflows, coordinate collaborators, and create the structure that allows creative work to thrive.",
        bestFor: "Growing brands managing multiple projects, collaborators, or launches.",
        pointsHeading: "What's Included:",
        points: ["Creative Operations", "Workflow & Process Design", "Project Coordination", "Team Management", "Creative Production Support"],
        footer: "From $2,500/month",
        cta: "Kini Your Strategy? →",
        accent: "brand-accent-1"
    },
    {
        level: "04",
        title: "Intelligent Systems",
        subtitle: "Make your business work smarter—not harder. AI should enhance creativity, not replace it. We design intelligent systems that reduce repetitive work, improve collaboration, and create scalable workflows so you can spend more time building and less time managing.",
        bestFor: "Founders who are ready to streamline operations and integrate AI into their creative or business workflows.",
        pointsHeading: "What's Included:",
        points: ["AI Workflow Design", "Automation Strategy", "Documentation Systems", "Knowledge Management", "Operational Efficiency"],
        footer: "From $1,000",
        cta: "What's the Big Idea? →",
        accent: "brand-accent-2"
    },
    {
        level: "05",
        title: "Venture Launch & Growth",
        subtitle: "Turn ambitious ideas into launch-ready ventures. Launching isn't just about going live—it's about creating an experience people remember. We help founders prepare for launch with thoughtful planning, creative strategy, and the systems needed to sustain momentum long after day one.",
        bestFor: "New ventures, product launches, campaigns, and businesses entering a new stage of growth.",
        pointsHeading: "What's Included:",
        points: ["Launch Strategy", "Campaign Planning", "Creative Rollout", "Go-to-Market Support", "Growth Roadmapping"],
        footer: "Custom Quote",
        cta: "What's the Big Idea? →",
        accent: "brand-accent-3"
    },
    {
        level: "06",
        title: "Leiré Passage",
        subtitle: "Expand into new markets with confidence. Entering a new market takes more than logistics—it requires cultural understanding, trusted local partnerships, and strategic execution. Through Leiré Passage, we help founders navigate expansion with the support needed to build meaningful connections and lasting impact.",
        bestFor: "Global founders, brands, and businesses exploring opportunities across new markets.",
        pointsHeading: "What's Included:",
        points: ["Market Entry Strategy", "Local Partnership Support", "Cultural Insights", "Vendor & Creative Network Access", "Expansion Planning"],
        footer: "Custom Quote",
        cta: "Let's Yap. →",
        accent: "brand-accent-1"
    }
];

export default function Playbook() {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden py-32">
            {/* Background Image Setup */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 2 }}
                className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat mix-blend-color-dodge"
                style={{ backgroundImage: `url('${playbookBg}')` }}
            />
            <div className="fixed inset-0 z-0 bg-brand-dark/95" />

            {/* Grid Overlay */}
            <div
                className="fixed inset-0 z-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto mb-24"
                >
                    <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 tracking-tight uppercase">
                        The KinStrategi <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-3 to-brand-accent-2">Playbook</span>
                    </h1>
                    <h2 className="font-tech text-brand-accent-2 text-xl md:text-2xl tracking-[0.2em] uppercase mb-8 opacity-90">
                        Pick your level. Scale when ready.
                    </h2>
                    <p className="font-body opacity-70 text-lg md:text-xl font-light leading-relaxed">
                        We offer structured creative services across our core service categories. Identify your operational constraints, and deploy the precise architecture needed to override them.
                    </p>
                </motion.div>

                {/* Levels Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-24">
                    {services.map((item, idx) => (
                        <motion.div
                            key={item.level}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}
                            className="bg-brand-dark/90 border border-white/10 p-8 relative overflow-hidden group flex flex-col h-full"
                        >
                            {/* Accent Glow Top Right */}
                            <div className={`absolute top-0 right-0 w-48 h-48 bg-${item.accent}/10 rounded-full blur-[60px] group-hover:bg-${item.accent}/20 transition-colors duration-700 pointer-events-none translate-x-1/2 -translate-y-1/2`} />

                            {/* Decorative line mapping path */}
                            <motion.div
                                className={`absolute top-0 left-0 h-[2px] bg-${item.accent}`}
                                initial={{ width: 0 }}
                                whileHover={{ width: "100%" }}
                                transition={{ duration: 0.4 }}
                            />

                            <div className="flex items-baseline justify-between mb-8 relative z-10 border-b border-white/10 pb-6">
                                <div>
                                    <span className={`font-tech text-${item.accent} tracking-widest uppercase text-sm mb-2 block`}>
                                        {item.level}
                                    </span>
                                    <h3 className="font-heading text-3xl font-bold">{item.title}</h3>
                                </div>
                            </div>

                            <div className="flex-grow space-y-6 relative z-10">
                                <div>
                                    <p className="font-tech text-white/70 text-xs tracking-widest uppercase mb-1 drop-shadow-sm">Positioning</p>
                                    <p className="font-body text-white font-medium text-lg leading-snug">{item.subtitle}</p>
                                </div>

                                <div>
                                    <p className="font-tech text-white/70 text-xs tracking-widest uppercase mb-1 drop-shadow-sm">Best For</p>
                                    <p className="font-body opacity-80 font-medium text-base">{item.bestFor}</p>
                                </div>

                                <div>
                                    <p className={`font-tech text-xs tracking-widest uppercase mb-3 text-${item.accent}`}>{item.pointsHeading}</p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {item.points.map((point, pIdx) => (
                                            <li key={pIdx} className="flex items-start gap-2 font-body text-base opacity-90 font-medium">
                                                <span className={`text-${item.accent} mt-[2px]`}>✦</span>
                                                <span className="leading-tight">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {item.description && (
                                    <p className="font-body opacity-80 font-medium text-sm italic border-l-2 border-white/20 pl-4 py-1">
                                        {item.description}
                                    </p>
                                )}
                            </div>

                            {item.footer && (
                                <div className={`mt-8 pt-6 border-t border-white/10 font-tech text-sm text-${item.accent} uppercase tracking-widest font-bold drop-shadow-lg relative z-10 mb-6 flex flex-col gap-1`}>
                                    <span>Investment: {item.footer}</span>
                                </div>
                            )}
                            <div className="mt-auto">
                                <motion.button
                                    onClick={() => window.location.href = 'mailto:hello@kinstrategi.com'}
                                    whileHover={{ color: "#fff" }}
                                    className={`font-tech text-sm font-bold tracking-widest uppercase text-${item.accent} transition-colors cursor-pointer z-20 relative`}
                                >
                                    {item.cta}
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Design Your Partnership */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full border border-brand-accent-2/30 bg-gradient-to-r from-brand-base/60 to-brand-dark/80 backdrop-blur-xl p-8 md:p-16 overflow-hidden group mb-24"
                >
                    <div className="absolute inset-0 z-0 bg-brand-accent-2/5 mix-blend-screen pointer-events-none" />
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="absolute right-0 bottom-0 w-96 h-96 bg-brand-accent-2/10 blur-[100px] pointer-events-none z-0"
                    />

                    <motion.div
                        className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-brand-accent-2 to-transparent opacity-50 z-0"
                        animate={{ top: ["-100%", "100%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />

                    <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between gap-12">
                        <div className="lg:w-1/2">
                            <span className="inline-block px-3 py-1 bg-brand-accent-2/20 border border-brand-accent-2 text-brand-accent-2 font-tech text-xs tracking-[0.2em] uppercase mb-6 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                                Custom Support
                            </span>
                            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-4 drop-shadow-md">Design Your Partnership</h2>
                            <p className="font-tech text-brand-accent-2/80 text-lg uppercase tracking-widest mb-8">
                                Build the support your business actually needs.
                            </p>

                            <div className="bg-brand-dark/50 p-6 border-l-2 border-brand-accent-2 mb-8">
                                <p className="font-body opacity-80 text-lg md:text-xl font-light">
                                    Every founder's journey is different. Instead of fitting you into a rigid package, we'll design a partnership around your goals, your team, and your stage of growth.
                                </p>
                            </div>
                        </div>

                        <div className="lg:w-1/2 flex flex-col justify-between h-full w-full">
                            <p className="font-tech text-white/50 text-xs tracking-widest uppercase mb-2">The Approach</p>
                            <p className="font-body opacity-70 font-light text-lg mb-8">
                                Whether you need strategic guidance, creative leadership, operational support, or all of the above, we'll build a tailored engagement that grows with your business.
                            </p>
                            
                            <p className="font-tech text-white/50 text-xs tracking-widest uppercase mb-3">Partnerships may include</p>
                            <ul className="space-y-4 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                                {[
                                    "Creative Strategy",
                                    "Fractional Creative Development",
                                    "Creative Operations (KinOps)",
                                    "Team & Talent Coordination",
                                    "AI & Intelligent Systems",
                                    "Launch & Growth Support",
                                    "Founder Advisory"
                                ].map((point, idx) => (
                                    <li key={idx} className="flex items-center gap-4 bg-white/5 p-4 border border-white/5 hover:border-brand-accent-2/30 transition-colors">
                                        <div className="w-1.5 h-1.5 bg-brand-accent-2 rounded-full shadow-[0_0_5px_rgba(212,175,55,0.8)]" />
                                        <span className="font-body text-sm font-medium">{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex items-center justify-between border-t border-brand-accent-2/20 pt-6">
                                <div>
                                    <p className="font-body text-white font-medium">Investment: Custom Pricing</p>
                                    <p className="font-body text-sm opacity-60 mt-1 italic">Every partnership is tailored to your vision, scope, and level of support.</p>
                                </div>
                                <motion.button
                                    onClick={() => window.location.href = 'mailto:hello@kinstrategi.com'}
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-brand-accent-2 text-brand-dark px-8 py-3 font-tech uppercase text-xs tracking-widest font-bold cursor-pointer"
                                >
                                    Kini Your Strategy? →
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Closing Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto pb-24 relative"
                >
                    <div className="w-full md:w-1/3 relative z-10 flex justify-center order-2 md:order-1">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-accent-1/20 rounded-full blur-[40px] mix-blend-screen pointer-events-none" />
                        <img 
                            src={ademarisGuiding} 
                            alt="Ademaris Guiding" 
                            className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.4)] animate-[floating_6s_ease-in-out_infinite] mix-blend-screen"
                            style={{ animationName: 'floating' }}
                        />
                    </div>
                    
                    <div className="w-full md:w-2/3 text-center md:text-left order-1 md:order-2">
                        <h3 className="font-heading text-3xl md:text-5xl font-bold mb-6">Not sure what you need?</h3>
                        <p className="font-body opacity-80 text-xl font-light leading-relaxed mb-4 max-w-2xl">
                            Many founders come to us with an idea, not a fully defined scope, and that's perfectly okay.
                        </p>
                        <p className="font-body opacity-80 text-lg font-light leading-relaxed mb-8 max-w-2xl">
                            We'll help you clarify the vision, identify the right level of support, and recommend the partnership that makes the most sense before any work begins.
                        </p>
                        <motion.button
                            onClick={() => window.location.href = 'mailto:hello@kinstrategi.com'}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(91, 62, 150, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-brand-accent-1 text-white px-10 py-5 font-heading uppercase tracking-widest text-sm cursor-pointer shadow-[0_0_20px_rgba(91,62,150,0.3)] hover:shadow-[0_0_40px_rgba(91,62,150,0.5)] transition-shadow"
                        >
                            Let's Talk Strategy →
                        </motion.button>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}