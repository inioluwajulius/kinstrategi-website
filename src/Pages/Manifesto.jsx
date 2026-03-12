import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import manifestoBg from '../assets/Manifesto_ The KinStrategi Philosophy.png';

const beliefs = [
    {
        num: "01",
        title: "FIT MATTERS AS MUCH AS TALENT.",
        text: "The most skilled person in the room can still be the wrong hire. When the right people come together in the right way, the work shows it."
    },
    {
        num: "02",
        title: "STRUCTURE HELPS CREATIVITY.",
        text: "A clear system isn't a cage for ideas. It's what gives creative people the breathing room to actually do their best work"
    },
    {
        num: "03",
        title: "IDEAS NEED DEPTH.",
        text: "We don't take the obvious route. We dig into what a brand is really trying to say, and find the most honest way to say it."
    },
    {
        num: "04",
        title: "ENERGY MATTERS.",
        text: "A resume tells you what someone has done. It doesn't tell you how they think, how they show up, or how they work with others. We pay attention to all of it."
    },
    {
        num: "05",
        title: "CREATIVITY NEEDS SUPPORT.",
        text: "Great creative work doesn't sustain itself. It needs the right people around it, the right systems behind it, and someone paying attention to it long-term."
    }
];

export default function Manifesto() {
    const navigate = useNavigate();
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 2000], [0, 400]);

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-32 pb-48">
            {/* Dynamic scrolling background */}
            <motion.div
                style={{ y: y1, backgroundImage: `url('${manifestoBg}')` }}
                className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-screen scale-110"
            />
            <div className="fixed inset-0 z-0 bg-gradient-to-b from-brand-dark via-brand-dark/95 to-brand-dark" />

            <div className="relative z-10 w-full max-w-5xl mx-auto px-6">

                {/* 1. Purpose / Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-center mb-32"
                >
                    <motion.h1
                        animate={{ textShadow: ["0 0 0px #5B3E96", "0 0 40px rgba(91, 62, 150, 0.6)", "0 0 0px #5B3E96"] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="font-heading text-6xl md:text-8xl font-bold mb-12 tracking-tighter uppercase"
                    >
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-1 to-brand-accent-2">Manifesto</span>
                    </motion.h1>

                    <div className="max-w-3xl mx-auto space-y-12">
                        <p className="font-heading text-3xl md:text-5xl font-bold leading-tight">
                            Work doesn't fail because of lack of talent. <br />
                            <span className="text-brand-accent-2">It fails because of misalignment.</span>
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 font-tech text-brand-accent-3 uppercase tracking-widest text-sm opacity-80 py-8 border-y border-white/5">
                            <span>Creative team alignment</span>
                            <span>Structured creativity</span>
                            <span>Operational clarity</span>
                            <span>Strategic fit</span>
                            <span>Sustainable growth</span>
                        </div>

                        <div className="text-xl md:text-2xl text-gray-300 font-light font-body space-y-4">
                            <p>Creativity deserves infrastructure.</p>
                            <p>Vision deserves alignment.</p>
                            <p className="text-white font-medium">Teams should click, not collide.</p>
                        </div>
                    </div>
                </motion.div>

                {/* 2. Why We Exist */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-40 grid grid-cols-1 md:grid-cols-2 gap-16"
                >
                    <div>
                        <h2 className="font-tech text-brand-accent-1 text-sm tracking-[0.2em] uppercase mb-6 block">Why We Exist</h2>
                        <h3 className="font-heading text-4xl mb-8">We've seen:</h3>
                        <ul className="space-y-6 font-body text-lg text-gray-400 font-light">
                            <li className="flex gap-4"><span className="text-brand-accent-1">✦</span> Founders with vision and no operational backbone.</li>
                            <li className="flex gap-4"><span className="text-brand-accent-1">✦</span> Teams burning out from poor coordination.</li>
                            <li className="flex gap-4"><span className="text-brand-accent-1">✦</span> Agencies chasing output without depth.</li>
                            <li className="flex gap-4"><span className="text-brand-accent-1">✦</span> Talent placed into rooms where they never belonged.</li>
                        </ul>
                    </div>

                    <div className="border border-white/5 bg-brand-base/20 p-8 backdrop-blur-md relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent-3/10 rounded-full blur-[50px] pointer-events-none" />
                        <p className="font-heading text-2xl font-bold mb-8 text-brand-accent-3">
                            We exist because creative ecosystems need intention.
                        </p>

                        <div className="space-y-6 font-body text-gray-300 font-light text-lg">
                            <p><strong className="text-white font-medium">KinStrategi</strong> was created to become the operational partner for ambitious creative work.</p>
                            <p><strong className="text-white font-medium italic">Leiré</strong> was formed as the ideation studio that protects the purity of the original spark.</p>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10">
                            <p className="font-tech text-brand-accent-3 text-xs uppercase mb-4 opacity-70 tracking-widest">Together, we bridge:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-body text-sm text-gray-400">
                                <span>Idea and execution</span>
                                <span>Talent and alignment</span>
                                <span>Art and infrastructure</span>
                                <span>Imagination and scale</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-40 text-2xl md:text-3xl text-gray-200 font-light leading-relaxed"
                >
                    <p className="mb-4">We're not here to just put things out.</p>
                    <p className="text-brand-accent-2 font-medium">We're here to build creative systems that are strong, meaningful, and built to last.</p>
                </motion.div>

                {/* 3. What We Believe (Vertical Scroll Storytelling) */}
                <div className="mb-48 relative max-w-4xl mx-auto">
                    <div className="mb-16">
                        <h2 className="font-heading text-5xl font-bold">What We Believe</h2>
                        <div className="w-24 h-[2px] bg-gradient-to-r from-brand-accent-1 to-brand-accent-2 mt-6" />
                    </div>

                    <div className="space-y-24">
                        {beliefs.map((belief, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="flex flex-col md:flex-row gap-8 items-start group relative"
                            >
                                <div className="absolute left-10 md:left-14 top-16 bottom-[-6rem] w-px bg-white/5 z-0 group-last:hidden" />

                                <div className="font-tech text-5xl md:text-7xl text-brand-accent-1/20 font-bold z-10 shrink-0 select-none">
                                    {belief.num}
                                </div>
                                <div className="pt-2 md:pt-4 z-10 relative">
                                    <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-brand-accent-2 transition-colors">{belief.title}</h3>
                                    <p className="font-body text-lg text-gray-400 font-light leading-relaxed max-w-2xl">{belief.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 4. Closing CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="text-center max-w-4xl mx-auto space-y-12"
                >
                    <div className="pt-16 flex flex-col sm:flex-row gap-6 justify-center">
                        <motion.button
                            onClick={() => navigate('/sign-station')}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 167, 167, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-brand-accent-3/20 border border-brand-accent-3 text-white px-10 py-5 font-heading uppercase tracking-widest text-sm transition-all cursor-pointer"
                        >
                            Let's Talk Strategy
                        </motion.button>

                        <motion.button
                            onClick={() => navigate('/citadel')}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(91, 62, 150, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-brand-accent-1/20 border border-brand-accent-1 text-white px-10 py-5 font-heading uppercase tracking-widest text-sm transition-all cursor-pointer"
                        >
                            Join the Citadel
                        </motion.button>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}