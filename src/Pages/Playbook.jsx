import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import playbookBg from '../assets/The Playbook_ Creative Ops Hierarchy.png';

const services = [
    {
        level: "01",
        title: "Creative Strategy & Direction",
        subtitle: "Every great build starts with clarity. We define your vision, positioning, and roadmap before execution begins.",
        bestFor: "Founders shaping a new venture, repositioning a brand, or preparing to grow.",
        pointsHeading: "Includes:",
        points: ["Brand Positioning", "Audience & Market Insights", "Messaging Strategy", "Growth Roadmap", "Go-to-Market Strategy", "Expansion Planning"],
        footer: "From ₦650,000",
        cta: "Kini Your Strategy? →",
        accent: "brand-accent-2"
    },
    {
        level: "02",
        title: "Creative Partnerships",
        subtitle: "The right collaborators change everything. We help you find trusted creative partners who strengthen the work.",
        bestFor: "Founders building project teams, campaigns, or long-term creative partnerships.",
        pointsHeading: "Includes:",
        points: ["Role Scoping", "Creative Talent Search", "Vendor & Partner Sourcing", "Vetting & Recommendations", "Hiring Support"],
        footer: "From ₦500,000",
        cta: "Let's Yap.",
        accent: "brand-accent-3"
    },
    {
        level: "03",
        title: "Creative Infrastructure (KinOps)",
        subtitle: "Build the systems that help creativity move with clarity, consistency, and momentum.",
        bestFor: "Growing businesses ready to scale without operational chaos.",
        pointsHeading: "Includes:",
        points: ["Workflow Design", "Creative Project Management", "Production Coordination", "SOP Development", "Founder Support", "Team Communication", "Quality Oversight"],
        footer: "From ₦750,000/month",
        cta: "Kini Your Strategy? →",
        accent: "brand-accent-1"
    },
    {
        level: "04",
        title: "Intelligent Systems",
        subtitle: "Integrate AI and automation into your business with intention—not just trends.",
        bestFor: "Teams looking to work smarter, automate repetitive work, and scale efficiently.",
        pointsHeading: "Includes:",
        points: ["AI Workflow Design", "Business Automation", "Knowledge Systems", "Workspace Design", "Dashboards & Reporting", "Technology Advisory"],
        footer: "From ₦750,000",
        cta: "What's the Big Idea? →",
        accent: "brand-accent-2"
    },
    {
        level: "05",
        title: "Launch & Expansion",
        subtitle: "We coordinate the people, timelines, and moving parts behind your launch or expansion.",
        bestFor: "Brands launching something new or scaling.",
        pointsHeading: "Includes:",
        points: ["Launch Strategy", "Rollout Planning", "Production Coordination", "Vendor Management", "Timeline Management", "Cross-Team Collaboration", "Market Entry Planning", "Post-Launch Review"],
        footer: "From ₦700,000",
        cta: "What's the Big Idea? →",
        accent: "brand-accent-3"
    },
    {
        level: "06",
        title: "Leiré Passage",
        subtitle: "Helping founders build confidently beyond the markets they know.",
        bestFor: "Businesses expanding internationally or entering unfamiliar markets.",
        pointsHeading: "Includes:",
        points: ["Founder Travel Coordination", "Local Market Support", "Arrival & Settling Services", "Curated Founder Experiences"],
        footer: "Custom Quote or From ₦450,000",
        cta: "Let's Yap.",
        accent: "brand-accent-1"
    }
];

export default function Playbook() {
    const navigate = useNavigate();
    const [exchangeRate, setExchangeRate] = useState(1 / 1500); // Default fallback NGN to USD

    useEffect(() => {
        // Fetch live NGN to USD exchange rate
        fetch('https://open.er-api.com/v6/latest/NGN')
            .then(res => res.json())
            .then(data => {
                if (data && data.rates && data.rates.USD) {
                    setExchangeRate(data.rates.USD);
                }
            })
            .catch(err => console.error("Failed to fetch exchange rate", err));
    }, []);

    // Helper to extract numbers from the string and calculate USD equivalent
    const formatUSD = (nairaString) => {
        const matches = nairaString.match(/₦([\d,]+)/);
        if (matches && matches[1]) {
            const num = parseInt(matches[1].replace(/,/g, ''), 10);
            return " / $" + Math.round(num * exchangeRate).toLocaleString();
        }
        return "";
    };

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
                                    <span>{item.footer.replace('// ', '')}{formatUSD(item.footer)}</span>
                                </div>
                            )}
                            <div className="mt-auto">
                                <motion.button
                                    onClick={() => navigate('/sign-station')}
                                    whileHover={{ color: "#fff" }}
                                    className={`font-tech text-sm font-bold tracking-widest uppercase text-${item.accent} transition-colors cursor-pointer z-20 relative`}
                                >
                                    {item.cta}
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Flagship Retainer: KinOps */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full border border-brand-accent-2/30 bg-gradient-to-r from-brand-base/60 to-brand-dark/80 backdrop-blur-xl p-8 md:p-16 overflow-hidden group mb-24"
                >
                    {/* KinOps Animated Background Elements */}
                    <div className="absolute inset-0 z-0 bg-brand-accent-2/5 mix-blend-screen pointer-events-none" />
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="absolute right-0 bottom-0 w-96 h-96 bg-brand-accent-2/10 blur-[100px] pointer-events-none z-0"
                    />

                    {/* Scanning Line */}
                    <motion.div
                        className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-brand-accent-2 to-transparent opacity-50 z-0"
                        animate={{ top: ["-100%", "100%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />

                    <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between gap-12">
                        <div className="lg:w-1/2">
                            <span className="inline-block px-3 py-1 bg-brand-accent-2/20 border border-brand-accent-2 text-brand-accent-2 font-tech text-xs tracking-[0.2em] uppercase mb-6 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                                Flagship Retainer
                            </span>
                            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-4 drop-shadow-md">KinOps</h2>
                            <p className="font-tech text-brand-accent-2/80 text-lg uppercase tracking-widest mb-8">
                                Your Creative Development Partner
                            </p>

                            <div className="bg-brand-dark/50 p-6 border-l-2 border-brand-accent-2 mb-8">
                                <p className="font-tech text-white/50 text-xs tracking-widest uppercase mb-2">Best For</p>
                                <p className="font-body opacity-80 text-lg md:text-xl font-light">
                                    Founders who need ongoing strategic and operational support without building a full in-house team.
                                </p>
                            </div>
                        </div>

                        <div className="lg:w-1/2 flex flex-col justify-between h-full w-full">
                            <p className="font-tech text-white/50 text-xs tracking-widest uppercase mb-2">What It Is</p>
                            <p className="font-body opacity-70 font-light text-lg mb-8">
                                KinOps is our flagship retainer. We partner with founders to bring structure to ideas, coordinate execution, and build the systems that keep creative work moving forward.
                            </p>
                            
                            <p className="font-tech text-white/50 text-xs tracking-widest uppercase mb-3">Includes</p>
                            <ul className="space-y-4 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                                {[
                                    "Strategic Direction",
                                    "Creative Operations",
                                    "Workflow & Systems Design",
                                    "Team Coordination",
                                    "AI Implementation",
                                    "Launch & Growth Support"
                                ].map((point, idx) => (
                                    <li key={idx} className="flex items-center gap-4 bg-white/5 p-4 border border-white/5 hover:border-brand-accent-2/30 transition-colors">
                                        <div className="w-1.5 h-1.5 bg-brand-accent-2 rounded-full shadow-[0_0_5px_rgba(212,175,55,0.8)]" />
                                        <span className="font-body text-sm font-medium">{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex items-center justify-between border-t border-brand-accent-2/20 pt-6">
                                <div>
                                    <p className="font-body text-white font-medium">Investment: From ₦1,200,000/month</p>
                                    <p className="font-body text-sm opacity-60 mt-1 italic">Every partnership is tailored to your goals, team, and stage of growth.</p>
                                </div>
                                <motion.button
                                    onClick={() => navigate('/sign-station')}
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
                    className="text-center pb-24"
                >
                    <p className="font-body opacity-70 text-xl font-light leading-relaxed mb-6">
                        Not sure where to start? We'll figure it out together.
                    </p>
                    <motion.button
                        onClick={() => navigate('/sign-station')}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(91, 62, 150, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-brand-accent-1 text-white px-10 py-5 font-heading uppercase tracking-widest text-sm cursor-pointer"
                    >
                        Let's Talk Strategy
                    </motion.button>
                </motion.div>

            </div>
        </div>
    );
}