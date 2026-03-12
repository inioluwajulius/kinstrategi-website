import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import playbookBg from '../assets/The Playbook_ Creative Ops Hierarchy.png';

const services = [
    {
        level: "01",
        title: "Brand Strategy & Development",
        subtitle: "Build a brand that knows exactly what it stands for.",
        bestFor: "Startups and growing teams needing clarity before they scale.",
        pointsHeading: "Services:",
        points: ["Brand Positioning", "Target Audience Clarity", "Messaging Frameworks", "90-Day Execution Plans"],
        footer: "Deliverable: A clear brand roadmap and messaging system.",
        cta: "Kini your strategy →",
        accent: "brand-accent-2"
    },
    {
        level: "02",
        title: "Creative Production",
        subtitle: "The people your project actually needs. Vetted, matched, and ready to move.",
        bestFor: "Campaigns, short-term projects, and high-impact creative needs.",
        pointsHeading: "Services:",
        points: ["Talent Matching & Specialist Sourcing", "Onboarding & Contract Management", "Quality Milestone Oversight", "Creative Team Coordination"],
        description: "Note: We shortlist 2–3 pre-vetted specialists with 80%+ Harmony Match™ alignment.",
        footer: "",
        cta: "Let’s Yap →",
        accent: "brand-accent-3"
    },
    {
        level: "03",
        title: "Campaign Strategy",
        subtitle: "Campaigns that make people feel something, then do something.",
        bestFor: "Brands launching something new or scaling awareness with purpose.",
        pointsHeading: "Services:",
        points: ["Campaign Concept & Direction", "Multi-Channel Strategy", "Performance Tracking", "Launch Planning"],
        footer: "",
        cta: "Kini your strategy →",
        accent: "brand-accent-1"
    },
    {
        level: "04",
        title: "Content Creation",
        subtitle: "The right content, on the right platform, at the right time.",
        bestFor: "Brands needing consistent, high-quality content creation.",
        pointsHeading: "Services:",
        points: ["Content Calendars & Strategy", "Social Media Content (Instagram, TikTok, LinkedIn)", "Video Production & Photography", "Platform Optimisation"],
        footer: "",
        cta: "Let’s Yap →",
        accent: "brand-accent-2"
    },
    {
        level: "05",
        title: "Cultural Storytelling",
        subtitle: "Storytelling that actually sounds like the people it's made for.",
        bestFor: "Brands building with African audiences or navigating cultural nuance in their messaging.",
        pointsHeading: "Services:",
        points: ["Culturally-Rooted Campaign Concepts", "African Market Narrative Strategy", "Heritage & Identity Brand Storytelling", "Editorial & Thought Leadership Writing"],
        footer: "",
        cta: "Connect with Us About This →",
        accent: "brand-accent-3"
    },
    {
        level: "06",
        title: "Creative Operations (Ops-as-a-Service)",
        subtitle: "The operational layer your creative team has been missing.",
        bestFor: "Founders scaling without expanding payroll. Teams who want to scale output without hiring more staff.",
        pointsHeading: "Services:",
        points: ["Fractional Creative Operations Management", "Workflow Design & Systems", "AI Workflow Automation & Content Systems", "Technical Infrastructure & DevOps Support"],
        footer: "",
        cta: "Connect with Us About This →",
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
                    <p className="font-body text-gray-300 text-lg md:text-xl font-light leading-relaxed">
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
                            className="bg-brand-base/30 border border-white/5 backdrop-blur-md p-8 relative overflow-hidden group flex flex-col h-full"
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
                                    <p className="font-tech text-white/50 text-xs tracking-widest uppercase mb-1 drop-shadow-sm">Positioning</p>
                                    <p className="font-body text-white font-medium text-lg leading-snug">{item.subtitle}</p>
                                </div>

                                <div>
                                    <p className="font-tech text-white/50 text-xs tracking-widest uppercase mb-1 drop-shadow-sm">Best For</p>
                                    <p className="font-body text-gray-400 font-light">{item.bestFor}</p>
                                </div>

                                <div>
                                    <p className={`font-tech text-xs tracking-widest uppercase mb-3 text-${item.accent}`}>{item.pointsHeading}</p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {item.points.map((point, pIdx) => (
                                            <li key={pIdx} className="flex items-start gap-2 font-body text-sm text-gray-300 font-light">
                                                <span className={`text-${item.accent} mt-[2px]`}>✦</span>
                                                <span className="leading-tight">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {item.description && (
                                    <p className="font-body text-gray-400 font-light text-sm italic border-l-2 border-white/20 pl-4 py-1">
                                        {item.description}
                                    </p>
                                )}
                            </div>

                            {item.footer && (
                                <div className={`mt-8 pt-6 border-t border-white/10 font-tech text-xs text-${item.accent} uppercase tracking-widest opacity-80 relative z-10`}>
                                    // {item.footer}
                                </div>
                            )}
                            <div className="mt-6">
                                <motion.button
                                    onClick={() => navigate('/sign-station')}
                                    whileHover={{ color: "#fff" }}
                                    className={`font-tech text-xs tracking-widest uppercase opacity-90 text-${item.accent} transition-colors cursor-pointer z-20 relative`}
                                >
                                    [ {item.cta} ]
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
                                Fractional Creative Operations<br />& Talent Management
                            </p>

                            <div className="bg-brand-dark/50 p-6 border-l-2 border-brand-accent-2 mb-8">
                                <p className="font-tech text-white/50 text-xs tracking-widest uppercase mb-2">Best For</p>
                                <p className="font-body text-gray-200 text-lg md:text-xl font-light">
                                    Founders scaling without expanding payroll.
                                </p>
                            </div>
                        </div>

                        <div className="lg:w-1/2 flex flex-col justify-between h-full w-full">
                            <p className="font-body text-gray-300 font-light text-lg mb-8">
                                KinOps is our retainer model. You get a dedicated creative ops partner handling talent, workflows, and project oversight.
                            </p>
                            <ul className="space-y-4 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                                {[
                                    "Talent sourcing and vetting",
                                    "Workflow management",
                                    "Strategy check-ins",
                                    "Performance tracking",
                                    "Operational playbooks",
                                    "Team oversight"
                                ].map((point, idx) => (
                                    <li key={idx} className="flex items-center gap-4 bg-white/5 p-4 border border-white/5 hover:border-brand-accent-2/30 transition-colors">
                                        <div className="w-1.5 h-1.5 bg-brand-accent-2 rounded-full shadow-[0_0_5px_rgba(212,175,55,0.8)]" />
                                        <span className="font-body text-sm font-medium">{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex items-center justify-between border-t border-brand-accent-2/20 pt-6">
                                <motion.button
                                    onClick={() => navigate('/sign-station')}
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-brand-accent-2 text-brand-dark px-8 py-3 font-tech uppercase text-xs tracking-widest font-bold cursor-pointer"
                                >
                                    Let's Talk KinOps →
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
                    <p className="font-body text-gray-300 text-xl font-light leading-relaxed mb-6">
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