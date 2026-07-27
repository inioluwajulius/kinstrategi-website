import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import manifestoBg from '../assets/Manifesto_ The KinStrategi Philosophy.png';

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
                        className="font-heading text-6xl md:text-8xl font-bold mb-6 tracking-tighter uppercase"
                    >
                        What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-1 to-brand-accent-2">Believe In</span>
                    </motion.h1>
                    
                    <div className="max-w-3xl mx-auto space-y-12">
                        <p className="font-heading text-3xl md:text-5xl font-bold leading-tight">
                            The future will not be built by ideas alone. <br />
                            <span className="text-brand-accent-2">It will be built by those who know how to sustain them.</span>
                        </p>

                        <div className="text-xl md:text-2xl text-gray-300 font-light font-body space-y-6 text-center">
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

                        <div className="text-xl md:text-2xl text-gray-300 font-light font-body space-y-4">
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
                        <ul className="space-y-6 font-body text-lg text-gray-200 font-normal">
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

                        <div className="space-y-6 font-body text-gray-100 font-normal text-lg">
                            <p>That's why <strong className="text-white font-medium">KinStrategi</strong> exists—to develop the systems, strategy, and creative infrastructure that ambitious work needs to succeed.</p>
                            <p>That's why <strong className="text-white font-medium italic">Leiré</strong> exists—to protect the original spark, expand it into compelling ideas, and shape the stories that move people.</p>
                            <p className="text-white font-medium pt-4">One develops the foundation.<br/>One develops the vision.<br/>Together, they develop what's possible.</p>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10">
                            <p className="font-tech text-brand-accent-3 text-xs uppercase mb-4 opacity-70 tracking-widest">Together, we bridge:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-body text-sm text-gray-200">
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
                    className="text-center max-w-3xl mx-auto mb-40 text-2xl md:text-3xl text-gray-200 font-light leading-relaxed"
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

                {/* 4. About the Founder */}
                <div className="mb-48 max-w-4xl mx-auto border-t border-white/10 pt-24">
                    <h2 className="font-heading text-5xl font-bold mb-8">About The Founder</h2>
                    
                    <div className="bg-brand-base/20 border border-white/5 backdrop-blur-md p-8 md:p-12">
                        <h3 className="font-heading text-3xl font-bold text-white mb-2">Adeshewa Adeniran</h3>
                        <p className="font-tech text-brand-accent-2 text-sm uppercase tracking-[0.2em] mb-12">Creative Development Producer</p>
                        
                        <div className="space-y-6 font-body text-gray-300 font-light text-lg leading-relaxed">
                            <h4 className="font-heading text-2xl font-bold text-white mb-4">Do You Believe in Aliens?</h4>
                            <p>I do.</p>
                            <p>Actually... I think you do, too.</p>
                            <p>Perhaps not the little green ones from a sci-fi paperback, though I'm keeping an open mind, but the kind who never quite fit the mold. The minds that refuse to color inside the lines. The ones who look at disarray, and instantly map the unseen order underlying it.</p>
                            <p>Allow me to introduce you to one.</p>
                            <p>Hello, I'm Adeshewa Adeniran.</p>
                            <p>Over the years, people have called me creative, strategic, operational, artistic, analytical, visionary, organized, or simply <span className="italic">"too many things at once."</span></p>
                            <p>I've always suspected they were all trying to say the exact same thing.</p>
                            <p>I have never subscribed to the notion that we must choose between imagination and structure. My mind operates as an unconventional ecosystem, a fusion of storyteller, process engineer, producer, researcher, and problem solver. One moment, I am worldbuilding for a campaign; the next, I am engineering an operational workflow, designing hiring infrastructure, mapping a launch timeline, or connecting two kindred professionals who don't yet know they are precisely what the other needs.</p>
                            <p>To me, these are not distinct disciplines.</p>
                            <p>They are facets of a single creative act.</p>
                            <p>Because true creativity is not merely the production of beauty. It is the art of solving problems with elegance. It is the foresight to see possibilities before they materialize, the pattern recognition to name the invisible before it becomes obvious, and the discipline to build environments where people can safely execute the best work of their lives.</p>
                            <p>That realization is the genesis of KinStrategi.</p>
                            <p>After spending years immersed in the creative industries, I watched the recurring tragedy repeat itself: brilliant minds misplaced in the wrong rooms, visionary founders exhausted by the friction of unreliable teams, and profound ideas fracturing, not for a lack of imagination, but for a lack of structural alignment.</p>
                            <p>The industry was hunting relentlessly for talent.</p>
                            <p>Almost no one was hunting for a fit.</p>
                            <p>That distinction became my obsession.</p>
                            <p>Today, KinStrategi exists to bring rare harmony to creative execution, to curate and orchestrate teams that do not merely function, but fundamentally <span className="italic">click</span>. Because the most enduring creative outcomes happen precisely when the right people, the right systems, and the right vision converge at the exact right moment.</p>
                            <p>And anchoring all of this motion...</p>
                            <p>...are my two little anchors: Neo-Wolf (terrier-mix) and Jojo (lhasa apso).</p>
                            <p>They are my daily reminder that life is not a separate ledger to be balanced against work, rather it is the very reason the work matters. They interrupt strategic reviews for unprompted cuddles, force me out into the world when I would happily vanish down creative rabbit holes, and possess the remarkable gift of making every deadline feel appropriately weightless.</p>
                            <p>They have taught me a principle I carry into every boardroom, brief, and brand partnership: the most resilient relationships, whether with people, enterprises, or abstract ideas, are built on trust, patience, insatiable curiosity, and the simple act of showing up consistently.</p>
                            <p>That is true in life.</p>
                            <p>It is true in business.</p>
                            <p>And it is the absolute truth in creativity.</p>
                            <p>So, yes...</p>
                            <p>Perhaps I am an alien.</p>
                            <p>Not because I belong to another planet. But because I have never viewed creativity, operations, strategy, commerce, storytelling, and human connection as separate worlds.</p>
                            <p>To me, they have always been the same universe.</p>
                            <p>Welcome to mine.</p>
                        </div>
                    </div>
                </div>

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