import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import manifestoBg from '../assets/manifesto-bg.png';
import ademarisSmile from '../safe-assets/navigator/ademaris-smile.png';

const beliefs = [
    {
        num: "01",
        title: "IDEAS DESERVE DEVELOPMENT.",
        text: "Every meaningful piece of work begins as potential. Our role is to nurture that potential with the clarity, strategy, and creative direction it needs to become something real."
    },
    {
        num: "02",
        title: "CREATIVITY THRIVES IN STRUCTURE.",
        text: "Structure doesn't limit creativity—it enables it. Thoughtful systems create the clarity, freedom, and momentum that allow great ideas to flourish."
    },
    {
        num: "03",
        title: "VISION NEEDS ALIGNMENT.",
        text: "Ideas move further when people, purpose, and execution move together. Alignment transforms individual talent into collective impact."
    },
    {
        num: "04",
        title: "DEPTH CREATES DISTINCTION.",
        text: "We don't chase trends or settle for the obvious. We uncover the deeper story, ask better questions, and create work with meaning that lasts beyond the moment."
    },
    {
        num: "05",
        title: "PEOPLE SHAPE POSSIBILITY.",
        text: "Talent matters, but character, curiosity, collaboration, and shared purpose matter just as much. The right people don't just execute the work, they elevate it."
    },
    {
        num: "06",
        title: "CREATIVITY DESERVES INFRASTRUCTURE.",
        text: "Great ideas need more than inspiration. They need thoughtful leadership, supportive systems, and an environment where they can grow, evolve, and endure."
    }
];

export default function Manifesto() {
    const navigate = useNavigate();
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 2000], [0, 400]);

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-32 pb-48 bg-brand-dark">
            {/* Background Image Setup (Only at the top so it doesn't enter the content below) */}
            <div className="absolute top-0 left-0 w-full h-[120vh] z-0 overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${manifestoBg}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 via-brand-dark/50 to-brand-dark" />
            </div>

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
                        className="font-heading text-6xl md:text-8xl font-bold mb-6 tracking-tighter uppercase"
                    >
                        What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-1 to-brand-accent-2">Believe In</span>
                    </motion.h1>
                    
                    <div className="max-w-3xl mx-auto space-y-12">
                        <p className="font-heading text-3xl md:text-5xl font-bold leading-tight">
                            The future will not be built by ideas alone. <br />
                            <span className="text-brand-accent-2">It will be built by those who know how to sustain them.</span>
                        </p>

                        <div className="text-xl md:text-2xl opacity-70 font-light font-body space-y-6 text-center">
                            <p>We believe creativity is never just a department. It is a way of seeing. A way of solving. A way of building.</p>
                            <p>Our work is to take ideas that matter and give them everything they need to exist—clarity, systems, stories, teams, technology, and uncompromising execution.</p>
                            <p>Because the world's most vital ideas deserve far more than potential.</p>
                            <p className="text-white font-medium">They deserve the foundation to become reality.</p>
                        </div>

                        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 font-tech text-brand-accent-3 uppercase tracking-widest text-sm opacity-80 py-8 border-y border-white/5 text-left">
                            <span className="flex items-center gap-2"><span className="text-white">➔</span> Creativity Thrives in Clarity</span>
                            <span className="flex items-center gap-2"><span className="text-white">➔</span> Structure Creates Freedom</span>
                            <span className="flex items-center gap-2"><span className="text-white">➔</span> Alignment Fuels Momentum</span>
                            <span className="flex items-center gap-2"><span className="text-white">➔</span> Strategy Gives Direction</span>
                            <span className="flex items-center gap-2"><span className="text-white">➔</span> Growth Is Intentional</span>
                        </div>

                        <div className="text-xl md:text-2xl opacity-70 font-light font-body space-y-4">
                            <p>Creativity deserves the right environment.</p>
                            <p>Vision deserves the right direction.</p>
                            <p className="text-white font-medium">Teams should move in harmony, not in conflict.</p>
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
                        <h3 className="font-heading text-4xl mb-8">We've seen—</h3>
                        <ul className="space-y-6 font-body text-lg opacity-80 font-normal">
                            <li className="flex gap-4"><span className="text-brand-accent-1">✦</span> Great ideas dismissed before they had the chance to evolve.</li>
                            <li className="flex gap-4"><span className="text-brand-accent-1">✦</span> Creativity constrained by fragmented systems and unclear direction.</li>
                            <li className="flex gap-4"><span className="text-brand-accent-1">✦</span> Founders expected to carry vision, strategy, execution, and leadership all at once.</li>
                            <li className="flex gap-4"><span className="text-brand-accent-1">✦</span> Brilliant minds playing entirely different instruments.</li>
                            <li className="flex gap-4"><span className="text-brand-accent-1">✦</span> Potential left unrealized because no one was developing it with intention.</li>
                        </ul>
                    </div>

                    <div className="border border-white/5 bg-brand-base/20 p-8 backdrop-blur-md relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent-3/10 rounded-full blur-[50px] pointer-events-none" />
                        <p className="font-heading text-2xl font-bold mb-8 text-brand-accent-3">
                            We exist because we believe creativity flourishes when imagination and execution are treated as partners, not opposites.
                        </p>

                        <div className="space-y-6 font-body opacity-90 font-normal text-lg">
                            <p>That's why <strong className="text-white font-medium">KinStrategi</strong> exists—to develop the systems, strategy, and creative infrastructure that ambitious work needs to succeed.</p>
                            <p>That's why <strong className="text-white font-medium italic">Leiré</strong> exists—to protect the original spark, expand it into compelling ideas, and shape the stories that move people.</p>
                            <p className="text-white font-medium pt-4">One develops the foundation.<br/>One develops the vision.<br/>Together, they develop what's possible.</p>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10">
                            <p className="font-tech text-brand-accent-3 text-xs uppercase mb-4 opacity-70 tracking-widest">Together, we bridge:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-body text-sm opacity-80">
                                <span><span className="text-brand-accent-1 mr-2">✦</span>Vision and execution</span>
                                <span><span className="text-brand-accent-1 mr-2">✦</span>Creativity and strategy</span>
                                <span><span className="text-brand-accent-1 mr-2">✦</span>Story and structure</span>
                                <span><span className="text-brand-accent-1 mr-2">✦</span>Imagination and impact</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-40 text-2xl md:text-3xl opacity-80 font-light leading-relaxed"
                >
                    <p className="mb-4">We're not here to simply create what's next.</p>
                    <p className="text-brand-accent-2 font-medium">We're here to build the creative systems, partnerships, and ideas that stand the test of time.</p>
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

                                <div className="font-tech text-5xl md:text-7xl text-brand-accent-1 opacity-70 font-bold z-10 shrink-0 select-none">
                                    {belief.num}
                                </div>
                                <div className="pt-2 md:pt-4 z-10 relative">
                                    <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-brand-accent-2 transition-colors">{belief.title}</h3>
                                    <p className="font-body text-lg opacity-60 font-light leading-relaxed max-w-2xl">{belief.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>


                {/* 4. The Navigator */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 py-24 border-t border-white/10 mt-24 mb-24 bg-brand-base/20 backdrop-blur-sm px-8 md:px-16 relative"
                >
                    <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-brand-accent-3/10 rounded-full blur-[60px] mix-blend-screen pointer-events-none" />
                    
                    <div className="w-64 h-64 md:w-80 md:h-80 relative shrink-0">
                        <div className="absolute inset-0 bg-brand-accent-3/20 rounded-full blur-[40px] mix-blend-screen animate-pulse" />
                        <img 
                            src={ademarisSmile} 
                            alt="Ademaris Smile" 
                            className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] animate-[floating_6s_ease-in-out_infinite] mix-blend-screen"
                            style={{ animationName: 'floating' }}
                        />
                    </div>
                    <div className="text-center md:text-left max-w-xl relative z-10">
                        <h3 className="font-heading text-4xl font-bold mb-4 text-brand-accent-2 drop-shadow-md">Meet Ademaris.</h3>
                        <p className="font-body text-lg opacity-90 font-light leading-relaxed mb-6">
                            She is our Navigator—the voice and guiding spirit of KinStrategi. Always curious, meticulously structured, and deeply attuned to the creative pulse, she ensures you never lose your way within our ecosystem.
                        </p>
                        <p className="font-tech text-xs tracking-widest uppercase text-white/70 border-l-2 border-brand-accent-2 pl-4 shadow-sm">
                            Allow her to guide you into the next phase of your vision.
                        </p>
                    </div>
                </motion.div>

                {/* 5. Closing CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="text-center max-w-4xl mx-auto space-y-12"
                >
                    <div className="pt-16 flex flex-col sm:flex-row gap-6 justify-center">
                        <motion.button
                            onClick={() => window.location.href = 'mailto:hello@kinstrategi.com'}
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