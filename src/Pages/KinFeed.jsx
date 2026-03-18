import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import kinBg from '../assets/Kin Feed_ Elite Talent Network-2.png';

export default function KinFeed() {
    const navigate = useNavigate();
    return (
        <div className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-24">
            <motion.div
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    opacity: [0.15, 0.25, 0.15]
                }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 z-0 bg-cover bg-no-repeat"
                style={{ backgroundImage: `url('${kinBg}')`, backgroundSize: "150% auto" }}
            />
            <div className="absolute inset-0 z-0 bg-black/85 backdrop-blur-[2px]" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 w-full max-w-6xl mx-auto px-4 mt-16"
            >
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <h1 className="font-heading text-5xl md:text-7xl font-bold mb-4 tracking-tighter">
                        Open <span className="text-brand-accent-1">Opportunities.</span>
                    </h1>
                    <h2 className="font-heading text-2xl md:text-3xl text-brand-accent-2 mb-6">
                        These are the missions we are matching for right now.
                    </h2>
                    <p className="font-body text-xl text-white font-medium mb-4 drop-shadow-md">
                        We don't do blind job boards. Every role we share is matched directly from our private talent pool, built on alignment, vetting, and trust.
                    </p>
                    <p className="font-body text-xl text-white font-medium drop-shadow-md">
                        To take on a mission, you must be a member of the KinStrategi Citadel. We only match roles with talent we already know and trust.
                    </p>
                </div>

                <div className="mb-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="border border-white/10 bg-brand-base/30 p-8 backdrop-blur-sm">
                        <span className="font-tech text-brand-accent-1 text-xs uppercase tracking-widest block mb-4">Step 1 — Enter the Pool</span>
                        <p className="font-body text-gray-300 font-light">Create your profile. Tell us about you, not just what you do.</p>
                    </div>
                    <div className="border border-white/10 bg-brand-base/30 p-8 backdrop-blur-sm">
                        <span className="font-tech text-brand-accent-2 text-xs uppercase tracking-widest block mb-4">Step 2 — The Vibe-Check</span>
                        <p className="font-body text-gray-300 font-light">Our team looks at your skills, your experience, and your actual working rhythm.</p>
                    </div>
                    <div className="border border-white/10 bg-brand-base/30 p-8 backdrop-blur-sm">
                        <span className="font-tech text-brand-accent-3 text-xs uppercase tracking-widest block mb-4">Step 3 — The Perfect Match</span>
                        <p className="font-body text-gray-300 font-light">When a role fits your DNA, we reach out to you.</p>
                    </div>
                </div>

                <div className="border border-brand-accent-1/30 bg-black/40 backdrop-blur-md p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-accent-1 via-brand-accent-2 to-brand-accent-3" />

                    <span className="font-tech text-brand-accent-1 text-sm tracking-widest uppercase mb-2 block">Live Role — CAMP by Protect Forward</span>
                    <h3 className="font-heading text-4xl font-bold text-white mb-6">Business Growth Lead</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 mb-8 border-b border-white/10 pb-8">
                        <div>
                            <span className="font-tech text-xs text-gray-500 uppercase tracking-widest block mb-1">The Commitment</span>
                            <span className="font-body text-white">Full-time · Remote · Global</span>
                        </div>
                        <div>
                            <span className="font-tech text-xs text-gray-500 uppercase tracking-widest block mb-1">The Industry</span>
                            <span className="font-body text-white">Cybersecurity / GRC (Governance, Risk & Compliance)</span>
                        </div>
                        <div>
                            <span className="font-tech text-xs text-gray-500 uppercase tracking-widest block mb-1">Compensation</span>
                            <span className="font-body text-white font-medium">₦205,000 – ₦300,000</span>
                        </div>
                        <div>
                            <span className="font-tech text-xs text-gray-500 uppercase tracking-widest block mb-1">Learn More</span>
                            <a href="#" className="font-body text-brand-accent-2 underline">protectforward.org</a>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h4 className="font-tech text-brand-accent-2 text-sm uppercase tracking-widest mb-3">The Mission</h4>
                        <p className="font-body text-gray-300 font-light leading-relaxed">
                            CAMP — Cyber Assets Management & Protection by Protect Forward, is looking for a commercially driven leader to identify leads, own conversations with potential clients, and close deals from first contact to signed contract.
                        </p>
                    </div>

                    <div className="mb-10">
                        <h4 className="font-tech text-brand-accent-3 text-sm uppercase tracking-widest mb-3">Must Have</h4>
                        <ul className="font-body text-gray-300 font-light leading-relaxed space-y-2">
                            <li className="flex gap-3"><span className="text-brand-accent-3">✦</span> 2–3 years B2B sales experience</li>
                            <li className="flex gap-3"><span className="text-brand-accent-3">✦</span> Cyber/GRC knowledge: NIST, ISO, NDPR, HIPAA</li>
                            <li className="flex gap-3"><span className="text-brand-accent-3">✦</span> Proven track record of self-sourced revenue</li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-start gap-4">
                        <motion.button
                            onClick={() => navigate('/citadel')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-brand-accent-1 text-white px-8 py-4 font-heading uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(91,62,150,0.3)] cursor-pointer"
                        >
                            Find My Match
                        </motion.button>
                        <p className="font-tech text-[10px] text-brand-accent-2/70 uppercase tracking-widest max-w-lg mt-4">
                            To take on this mission, you must be a member of the KinStrategi Citadel. New here? <Link to="/citadel" className="underline hover:text-white transition-colors">Join the Citadel</Link>. Already in? <span className="underline cursor-pointer hover:text-white transition-colors" onClick={() => alert("Login portal coming soon.")}>Log in to Apply</span>.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}