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
                        Build What's Next
                    </h2>
                    <p className="font-body text-xl text-white font-medium mb-4 drop-shadow-md">
                        We occasionally open opportunities to collaborate on brands, campaigns, productions, ventures, and creative initiatives we're helping develop.
                    </p>
                    <p className="font-body text-xl text-white font-medium mb-4 drop-shadow-md">
                        Every opportunity is shared with intention. We value curiosity, thoughtful collaboration, and people who care deeply about meaningful work.
                    </p>
                    <p className="font-body text-xl text-white font-medium mb-4 drop-shadow-md">
                        If a role speaks to you, apply. We'll review every submission with care and reach out when there's a strong fit.
                    </p>
                    <p className="font-body text-lg opacity-70 italic">
                        Some opportunities are open to public applications. Others are filled through our trusted creative network.
                    </p>
                </div>

                <div className="mb-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="border border-white/10 bg-brand-base/30 p-8 backdrop-blur-sm">
                        <span className="font-tech text-brand-accent-1 text-xs uppercase tracking-widest block mb-4">Step 1 — Discover the Opportunity</span>
                        <p className="font-body opacity-70 font-light">Explore our current opportunities and choose the one that aligns with your experience, interests, and creative practice.</p>
                    </div>
                    <div className="border border-white/10 bg-brand-base/30 p-8 backdrop-blur-sm">
                        <span className="font-tech text-brand-accent-2 text-xs uppercase tracking-widest block mb-4">Step 2 — Share Your Work</span>
                        <p className="font-body opacity-70 font-light">Submit your application along with your portfolio, relevant work, and anything that helps us understand how you think, create, and collaborate.</p>
                    </div>
                    <div className="border border-white/10 bg-brand-base/30 p-8 backdrop-blur-sm">
                        <span className="font-tech text-brand-accent-3 text-xs uppercase tracking-widest block mb-4">Step 3 — Continue the Conversation</span>
                        <p className="font-body opacity-70 font-light">If your experience and perspective align with what we're building, we'll invite you to the next stage. Every collaboration begins with a conversation.</p>
                    </div>
                </div>

                <div className="border border-brand-accent-1/30 bg-black/40 backdrop-blur-md p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-accent-1 via-brand-accent-2 to-brand-accent-3" />

                    <span className="font-tech text-brand-accent-1 text-sm tracking-widest uppercase mb-2 block">Live Role — CAMP by Protect Forward</span>
                    <h3 className="font-heading text-4xl font-bold text-white mb-6">Business Growth Lead</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 mb-8 border-b border-white/10 pb-8">
                        <div>
                            <span className="font-tech text-xs opacity-50 uppercase tracking-widest block mb-1">The Commitment</span>
                            <span className="font-body text-white">Full-time · Remote · Global</span>
                        </div>
                        <div>
                            <span className="font-tech text-xs opacity-50 uppercase tracking-widest block mb-1">The Industry</span>
                            <span className="font-body text-white">Cybersecurity / GRC (Governance, Risk & Compliance)</span>
                        </div>
                        <div>
                            <span className="font-tech text-xs opacity-50 uppercase tracking-widest block mb-1">Compensation</span>
                            <span className="font-body text-white font-medium">₦205,000 – ₦300,000</span>
                        </div>
                        <div>
                            <span className="font-tech text-xs opacity-50 uppercase tracking-widest block mb-1">Learn More</span>
                            <a href="#" className="font-body text-brand-accent-2 underline">protectforward.org</a>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h4 className="font-tech text-brand-accent-2 text-sm uppercase tracking-widest mb-3">The Mission</h4>
                        <p className="font-body opacity-70 font-light leading-relaxed">
                            CAMP — Cyber Assets Management & Protection by Protect Forward, is looking for a commercially driven leader to identify leads, own conversations with potential clients, and close deals from first contact to signed contract.
                        </p>
                    </div>

                    <div className="mb-10">
                        <h4 className="font-tech text-brand-accent-3 text-sm uppercase tracking-widest mb-3">Must Have</h4>
                        <ul className="font-body opacity-70 font-light leading-relaxed space-y-2">
                            <li className="flex gap-3"><span className="text-brand-accent-3">✦</span> 2–3 years B2B sales experience</li>
                            <li className="flex gap-3"><span className="text-brand-accent-3">✦</span> Cyber/GRC knowledge: NIST, ISO, NDPR, HIPAA</li>
                            <li className="flex gap-3"><span className="text-brand-accent-3">✦</span> Proven track record of self-sourced revenue</li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-start gap-4">
                        <motion.button
                            onClick={() => navigate('/sign-station')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-brand-accent-1 text-white px-8 py-4 font-heading uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(91,62,150,0.3)] cursor-pointer"
                        >
                            Apply Now
                        </motion.button>
                        <p className="font-tech text-[10px] text-brand-accent-2/70 uppercase tracking-widest max-w-lg mt-4">
                            Ready to join the mission? <Link to="/sign-station" className="underline hover:text-white transition-colors">Submit your profile</Link> at our reception to get vetted.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}