import { motion } from 'framer-motion';
import { ArrowUpRight, Users, Sparkles, Network, Globe, Compass, CheckCircle2 } from 'lucide-react';
import kinBg from '../assets/kin-network-bg.png';

const pillars = [
    {
        num: "01",
        title: "Priority Opportunity Dispatch",
        desc: "Receive project opportunities, casting calls, brand briefs, and creative hiring announcements directly before public release.",
        icon: Sparkles,
        tag: "Access"
    },
    {
        num: "02",
        title: "Cross-Disciplinary Collaborations",
        desc: "Connect with filmmakers, designers, art directors, copywriters, and operational specialists building across Africa and global markets.",
        icon: Network,
        tag: "Synergy"
    },
    {
        num: "03",
        title: "Cultural & Strategic Exchange",
        desc: "Gain unvarnished perspectives on consumer behavior, brand worldbuilding, market entry, and campaign intelligence.",
        icon: Globe,
        tag: "Intelligence"
    },
    {
        num: "04",
        title: "Curated Talent Placement",
        desc: "Get matched with founders and enterprises looking for high-caliber creative and operational capabilities that fit their vision.",
        icon: Users,
        tag: "Placement"
    }
];

export default function KinNetwork() {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-24 pb-32 md:py-36 bg-brand-dark">
            {/* Background Image Setup */}
            <div className="absolute top-0 left-0 w-full h-[120vh] z-0 overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.7 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${kinBg}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/30 via-brand-dark/70 to-brand-dark" />
            </div>

            {/* Subtle Grid Overlay */}
            <div
                className="fixed inset-0 z-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.08) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">

                {/* Hero Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center mt-6 md:mt-12"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-brand-accent-2/70" />
                        <span className="font-tech text-brand-accent-2 text-xs uppercase tracking-[0.3em] font-medium">
                            Community & Ecosystem
                        </span>
                        <div className="w-8 h-[1px] bg-brand-accent-2/70" />
                    </div>

                    <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white leading-tight">
                        Your next opportunity starts with the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-2 via-white to-brand-accent-3">right community.</span>
                    </h1>

                    <p className="font-heading text-xl md:text-2xl text-brand-accent-2/90 font-light italic mb-6">
                        We share opportunities directly with our community first.
                    </p>

                    <p className="font-body text-base md:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed mb-10">
                        Become part of the Kin Network to receive project opportunities, hiring announcements, casting calls, collaborations, and exclusive updates from brands building across Africa and beyond.
                    </p>

                    <motion.a
                        href="https://chat.whatsapp.com/JtoaHGNKMjRIP2T43R4RT4?s=cl&p=i&mlu=4&amv=2"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(212, 175, 55, 0.4)" }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 bg-brand-accent-2 text-brand-dark px-10 py-4 font-tech uppercase tracking-widest text-xs font-bold transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:bg-white cursor-pointer"
                    >
                        <span>Join the Kin Network Channel</span>
                        <ArrowUpRight size={14} />
                    </motion.a>
                </motion.div>

                {/* Pillars Grid */}
                <div>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="font-tech text-brand-accent-3 text-xs uppercase tracking-[0.3em] block mb-2 font-medium">
                            Network Architecture
                        </span>
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
                            Why Join The Kin Network?
                        </h2>
                        <p className="font-body text-gray-400 font-light text-base md:text-lg">
                            An intentional space curating talent, partnerships, and high-impact creative opportunities.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {pillars.map((item, idx) => {
                            const IconComp = item.icon;
                            return (
                                <motion.div
                                    key={item.num}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="border border-white/10 bg-gradient-to-br from-[#1C1835]/50 via-brand-dark/95 to-[#111111]/95 p-8 backdrop-blur-md relative overflow-hidden group hover:border-brand-accent-2/50 transition-all duration-300"
                                >
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="font-tech text-brand-accent-2 text-sm font-bold tracking-widest">
                                            {item.num}
                                        </span>
                                        <span className="px-2.5 py-0.5 bg-brand-accent-2/10 text-brand-accent-2 font-tech text-[10px] uppercase tracking-wider border border-brand-accent-2/30">
                                            {item.tag}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <IconComp className="w-5 h-5 text-brand-accent-3" />
                                        <h3 className="font-heading text-2xl font-bold text-white group-hover:text-brand-accent-2 transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="font-body text-gray-300 font-light text-base leading-relaxed">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Direct Action Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative border border-brand-accent-2/40 bg-gradient-to-r from-brand-base/80 via-brand-dark/95 to-brand-base/80 backdrop-blur-2xl p-8 md:p-14 text-center overflow-hidden"
                >
                    {/* Decorative Corner Accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-accent-2/60 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-brand-accent-2/60 pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-accent-2/60 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-brand-accent-2/60 pointer-events-none" />

                    <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                        <span className="font-tech text-brand-accent-2 text-xs uppercase tracking-[0.3em] font-medium">
                            Immediate Access
                        </span>

                        <h3 className="font-heading text-3xl md:text-5xl font-bold text-white">
                            Building something ambitious?
                        </h3>

                        <p className="font-body text-gray-300 font-light text-base md:text-lg leading-relaxed">
                            Whether you are a founder looking for trusted collaborators or a specialist seeking your next defining project, the Kin Network bridges vision and execution.
                        </p>

                        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                href="https://chat.whatsapp.com/JtoaHGNKMjRIP2T43R4RT4?s=cl&p=i&mlu=4&amv=2"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(212, 175, 55, 0.4)" }}
                                whileTap={{ scale: 0.97 }}
                                className="bg-brand-accent-2 text-brand-dark px-10 py-4 font-tech uppercase tracking-widest text-xs font-bold cursor-pointer transition-all flex items-center justify-center gap-2"
                            >
                                <span>Join the Network Channel</span>
                                <ArrowUpRight size={14} />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
