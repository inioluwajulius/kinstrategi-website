import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import homeBg from '../assets/KinStrategi Home_ Cyber-Luxury Hub.png';
import founderImg from '../safe-assets/about/founder.jpg';

function TerminalText({ text }) {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayedText(text.slice(0, i + 1));
            i++;
            if (i >= text.length) clearInterval(interval);
        }, 50); // fast typing
        return () => clearInterval(interval);
    }, [text]);

    return <>{displayedText}</>;
}

export default function Home() {
    const navigate = useNavigate();

    const textContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const textItem = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    const headlineText = "We help founders build businesses that work.";

    return (
        <div className="relative w-full flex flex-col items-center justify-start overflow-hidden pt-32 pb-64">
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes glitch-1 {
                    0%, 100% { transform: translate(0); }
                    20% { transform: translate(-4px, 3px); }
                    40% { transform: translate(-4px, -3px); }
                    60% { transform: translate(4px, 3px); }
                    80% { transform: translate(4px, -3px); }
                }
                @keyframes glitch-2 {
                    0%, 100% { transform: translate(0); }
                    20% { transform: translate(4px, -3px); }
                    40% { transform: translate(4px, 3px); }
                    60% { transform: translate(-4px, -3px); }
                    80% { transform: translate(-4px, 3px); }
                }
                .group:hover .animate-glitch-1 { animation: glitch-1 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite; }
                .group:hover .animate-glitch-2 { animation: glitch-2 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite reverse; }
            `}} />

            {/* Background Image Setup */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.3 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat mix-blend-luminosity"
                style={{ backgroundImage: `url('${homeBg}')` }}
            />
            <div className="fixed inset-0 z-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark" />

            {/* Hero Content */}
            <motion.div
                variants={textContainer}
                initial="hidden"
                animate="show"
                className="relative z-10 text-center px-4 max-w-5xl mx-auto min-h-[80vh] flex flex-col items-center justify-center -mt-10"
            >
                <motion.span
                    variants={textItem}
                    className="font-tech text-brand-accent-3 tracking-[0.3em] uppercase text-sm mb-8 block drop-shadow-sm font-medium"
                >
                    For founders building beyond borders.
                </motion.span>

                <motion.div variants={textItem} className="relative group cursor-crosshair w-full flex justify-center mb-10">
                    <h1 className="font-tech text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight uppercase relative inline-block mx-auto max-w-[95%] md:max-w-full">
                        <span className="relative z-10 text-white group-hover:opacity-0 transition-opacity duration-75 block">
                            <TerminalText text={headlineText} />
                            <span className="inline-block w-[0.4em] h-[0.9em] bg-brand-accent-2 ml-2 animate-pulse align-middle translate-y-[-4px]" />
                        </span>

                        {/* Glitch layers on hover */}
                        <span className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-75 animate-glitch-1 text-brand-accent-3 z-0 pointer-events-none mix-blend-screen w-full text-center">
                            {headlineText}
                            <span className="inline-block w-[0.4em] h-[0.9em] bg-brand-accent-3 ml-2 opacity-50 align-middle translate-y-[-4px]" />
                        </span>
                        <span className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-75 animate-glitch-2 text-brand-accent-1 z-0 pointer-events-none mix-blend-screen w-full text-center">
                            {headlineText}
                            <span className="inline-block w-[0.4em] h-[0.9em] bg-brand-accent-1 ml-2 opacity-50 align-middle translate-y-[-4px]" />
                        </span>
                        <span className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 text-white z-10 pointer-events-none w-full text-center">
                            {headlineText}
                            <span className="inline-block w-[0.4em] h-[0.9em] bg-white ml-2 align-middle translate-y-[-4px]" />
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    variants={textItem}
                    className="font-body text-lg md:text-xl opacity-70 font-light max-w-2xl mx-auto mb-16 leading-relaxed"
                >
                    We match vibe to vision for businesses who need real firepower, and creatives who deserve the right fit.
                </motion.p>

                <motion.div variants={textItem} className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-3xl mx-auto">
                    <motion.button
                        onClick={() => navigate('/playbook')}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 30px rgba(0, 167, 167, 0.4)",
                            backgroundColor: "rgba(0, 167, 167, 0.15)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-brand-accent-2/10 border border-brand-accent-3 text-white px-8 py-5 font-heading uppercase tracking-widest text-sm backdrop-blur-md transition-all relative overflow-hidden group/btn flex flex-col items-center justify-center gap-1 cursor-pointer z-20"
                    >
                        <span className="relative z-10 font-bold tracking-[0.2em] text-lg">Explore the Playbook</span>
                        <span className="relative z-10 text-[11px] opacity-70 normal-case tracking-widest font-tech text-brand-accent-3">— discover our services</span>
                        <motion.div
                            className="absolute inset-0 bg-brand-accent-3/20 z-0 origin-left"
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        />
                    </motion.button>

                    <motion.button
                        onClick={() => window.location.href = 'mailto:hello@kinstrategi.com'}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 30px rgba(91, 62, 150, 0.4)",
                            backgroundColor: "rgba(91, 62, 150, 0.15)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-brand-accent-1/5 border border-brand-accent-1 text-white px-8 py-5 font-heading uppercase tracking-widest text-sm backdrop-blur-md transition-all relative overflow-hidden group/btn flex flex-col items-center justify-center gap-1 cursor-pointer z-20"
                    >
                        <span className="relative z-10 font-bold tracking-[0.2em] text-lg">Let's Talk Strategy</span>
                        <span className="relative z-10 text-[11px] opacity-70 normal-case tracking-widest font-tech text-brand-accent-1">— get started</span>
                        <motion.div
                            className="absolute inset-0 bg-brand-accent-1/20 z-0 origin-left"
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        />
                    </motion.button>
                </motion.div>
            </motion.div>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 mt-32 space-y-48">
                {/* Pain Point Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center gap-8 text-center"
                >
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Does any of this sound familiar?</h2>
                    <div className="font-body opacity-70 text-lg md:text-xl font-light leading-relaxed max-w-3xl space-y-4">
                        <p>You're briefing agencies who don't understand your market.</p>
                        <p>You post consistently. But nothing is actually connecting.</p>
                        <p>You've hired creatives who looked great on paper. It still didn't work out.</p>
                        <p>You know your brand has more to say, but the right people to say it haven't shown up yet.</p>
                        <p>Your audience is specific. Your content keeps looking too generic.</p>
                        <p className="pt-4 font-medium opacity-100">If any of that hit, then you already know the cost of the wrong creative partner.</p>
                    </div>
                </motion.div>

                {/* About / Why We Started */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row items-start gap-16"
                >
                    <div className="w-full md:w-1/2 text-left">
                        <span className="font-tech text-brand-accent-2 text-xs uppercase tracking-widest mb-4 block opacity-70">About / Why We Started</span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">We started KinStrategi because we lived this problem.</h2>
                        <div className="w-16 h-[2px] bg-gradient-to-r from-brand-accent-1 to-brand-accent-3 mb-8" />
                        <div className="font-body opacity-70 text-lg font-light leading-relaxed space-y-6">
                            <p>
                                We've been in the rooms where brilliant briefs get handed to the wrong teams. Where talented creatives get placed into projects that were never built for them. Where creative ops looked like chaos dressed up as process.
                            </p>
                            <p>
                                KinStrategi was built to fix that. Not by posting jobs and praying, but by building a smarter system, one that matches talent to strategy, vision to execution, and teams to the vibe they actually need.
                            </p>
                            <p>
                                We work at the intersection of creative culture and operational intelligence. And we're building the infrastructure that makes creative work make sense.
                            </p>
                        </div>
                    </div>
                    {/* About the Founder */}
                    <div className="w-full md:w-1/2 border border-white/10 bg-brand-base/20 backdrop-blur-sm p-8 flex flex-col items-start text-left">
                        <div className="w-full h-72 md:h-96 bg-brand-dark border border-white/10 mb-8 relative overflow-hidden group">
                            <img src={founderImg} alt="Adeshewa Adeniran" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                            <div className="absolute inset-0 bg-brand-accent-1/10 mix-blend-overlay group-hover:bg-brand-accent-1/0 transition-colors duration-500" />
                        </div>
                        <h3 className="font-heading text-3xl font-bold mb-2">Adeshewa Adeniran</h3>
                        <p className="font-tech text-brand-accent-3 text-sm uppercase tracking-widest mb-6 border-b border-brand-accent-3/30 pb-4 inline-block">Creative Development Producer</p>
                        <div className="font-body opacity-70 text-base font-light leading-relaxed space-y-4 mb-8">
                            <h4 className="font-heading text-xl font-bold text-white mb-2">Do You Believe in Aliens?</h4>
                            <p>I do.</p>
                            <p>Actually... I think you do, too. Not the sci-fi kind, but the ones who never quite fit the mold. The minds that look at disarray, and instantly spot the foreboding bottlenecks.</p>
                            <p>Allow me to introduce you to one.</p>
                            <p>Hello, I'm Adeshewa Adeniran.</p>
                            <p>People have called me creative, strategic, operational, analytical, or simply "too many things at once." I've always suspected they were all trying to say the same thing: I don't believe in choosing between imagination and structure.</p>
                            <p>My mind is an ecosystem where storytelling, process engineering, and brand building live under one roof. One moment I'm worldbuilding a campaign; the next, I'm engineering operational workflows or aligning talent that was meant to cross paths. To me, these aren't separate disciplines, they are facets of a single creative act.</p>
                            <h4 className="font-heading text-lg font-bold text-white mt-6 mb-2">Why KinStrategi Exists</h4>
                            <p>I watched the same tragedy repeat across the creative industries: brilliant founders exhausted by friction, and profound ideas fracturing not for lack of imagination, but for lack of structural alignment. The industry was hunting for talent; no one was hunting for a fit.</p>
                            <p>That obsession became KinStrategi.</p>
                            <p>KinStrategi exists to bring rare harmony to creative execution—curating teams that don't merely function, but fundamentally click. Because enduring creative outcomes happen when the right people, systems, and vision converge.</p>
                            <p>Anchoring all of this motion are my two dogs, Neo-Wolf and Jojo.</p>
                            <p>They interrupt for unprompted cuddles and force me into a world where I'd happily vanish down creative rabbit holes. They've taught me a principle I carry into every boardroom and brand partnership: the most resilient relationships are built on trust, patience, insatiable curiosity, and showing up consistently.</p>
                            <p>So, yes... perhaps I am an alien. Not because I belong to another planet, but because I've never viewed creativity, operations, strategy, and human connection as separate worlds.</p>
                            <p>To me, they have always been the same universe.</p>
                            <p>Welcome to mine.</p>
                        </div>
                        <motion.button
                            onClick={() => window.location.href = "mailto:shewa@kinstrategi.com"}
                            whileHover={{ backgroundColor: "rgba(212, 175, 55, 0.15)" }}
                            className="text-brand-accent-2 border-b-2 border-brand-accent-2 pb-1 font-tech uppercase tracking-widest text-sm transition-colors cursor-pointer"
                        >
                            Connect with Adeshewa
                        </motion.button>
                    </div>
                </motion.div>

                {/* Services Snapshot (on Homepage) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center gap-8 text-center"
                >
                    <span className="font-tech text-brand-accent-1 text-xs uppercase tracking-widest block opacity-70">Services</span>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-2">Six ways we show up for your brand.</h2>
                    <ul className="text-left md:text-center grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mt-8 mb-12 max-w-4xl mx-auto w-full">
                        <li className="font-body text-xl font-light opacity-70 border-b border-white/5 pb-4">Creative Strategy & Direction</li>
                        <li className="font-body text-xl font-light opacity-70 border-b border-white/5 pb-4">Creative Partnerships</li>
                        <li className="font-body text-xl font-light opacity-70 border-b border-white/5 pb-4">Creative Infrastructure (KinOps)</li>
                        <li className="font-body text-xl font-light opacity-70 border-b border-white/5 pb-4">Intelligent Systems</li>
                        <li className="font-body text-xl font-light opacity-70 border-b border-white/5 pb-4">Venture Launch & Growth</li>
                        <li className="font-body text-xl font-light opacity-70 border-b border-white/5 pb-4">Leiré Passage</li>
                    </ul>
                    <motion.button
                        onClick={() => navigate('/playbook')}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(91, 62, 150, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-brand-accent-1 text-white px-8 py-5 font-heading uppercase tracking-widest text-sm cursor-pointer"
                    >
                        Explore the Playbook
                    </motion.button>
                </motion.div>

                {/* Testimonial Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-4xl mx-auto text-center py-16"
                >
                    <h2 className="font-heading text-3xl md:text-4xl font-light italic text-white mb-8 leading-relaxed">
                        "Hi Shewa, thank you so much for all your help. I’ve recommended your services to a few friends. Looking forward to working on other projects."
                    </h2>
                    <p className="font-tech text-brand-accent-2 text-sm uppercase tracking-widest">Bisola A. — Founder & Aesthetician, Bacardi B/Living in Sanaa</p>
                </motion.div>

                {/* Newsletter Sign-Up */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="border border-white/10 bg-brand-base/30 backdrop-blur-md p-12 text-center max-w-3xl mx-auto mb-24"
                >
                    <h2 className="font-heading text-4xl font-bold mb-4">Stay in the Know.</h2>
                    <p className="font-body opacity-70 font-light text-xl leading-relaxed mb-8">
                        With what’s moving in brand and culture. What's working in creative work. And every now and then, exactly what we think about it. Straight to your inbox.
                    </p>
                    <form
                        className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert("You're officially tuned in. Keep an eye on your inbox.");
                        }}
                    >
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="bg-brand-dark/50 border border-white/20 px-4 py-3 text-white placeholder-gray-500 font-body outline-none focus:border-brand-accent-3 transition-colors flex-1"
                            required
                        />
                        <button type="submit" className="bg-brand-accent-3 text-white px-6 py-3 font-tech uppercase tracking-widest text-sm hover:bg-brand-accent-3/80 transition-colors cursor-pointer">
                            Tune In
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}