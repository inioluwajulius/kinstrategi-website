import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import homeBg from '../assets/new-hero-bg.png';
import founderImg from '../safe-assets/about/founder.jpg';
import ademarisGreeting from '../safe-assets/navigator/ademaris-greeting.png';
import iconImage from '../assets/Icon.png';

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
    const [isFounderExpanded, setIsFounderExpanded] = useState(false);

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
        <div className="relative w-full flex flex-col items-center justify-start overflow-hidden pt-20 pb-64">
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
                animate={{ scale: 1, opacity: 0.8 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${homeBg}')` }}
            />
            <div className="fixed inset-0 z-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/50 to-brand-dark/90" />

            {/* Hero Content */}
            <motion.div
                variants={textContainer}
                initial="hidden"
                animate="show"
                className="relative z-10 text-center px-4 max-w-5xl mx-auto min-h-[80vh] flex flex-col items-center justify-center pt-24 md:pt-0 md:-mt-32"
            >
                {/* Top Icon */}
                <motion.div
                    variants={textItem}
                    className="mb-8 w-24 h-24 sm:w-32 sm:h-32 relative flex items-center justify-center mx-auto"
                >
                    <img src={iconImage} alt="KINISTRATEGI Icon" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(196,164,92,0.4)]" />
                </motion.div>

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

                {/* Why We Started - Redesigned */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full relative group mb-24"
                >
                    {/* Animated Traveling Borders */}
                    <div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden z-20 pointer-events-none">
                        <motion.div 
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="w-1/2 h-full bg-gradient-to-r from-transparent via-brand-accent-2 to-transparent" 
                        />
                    </div>
                    <div className="absolute top-0 right-0 w-[1px] h-full overflow-hidden z-20 pointer-events-none">
                        <motion.div 
                            animate={{ y: ["-100%", "200%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.75 }}
                            className="w-full h-1/2 bg-gradient-to-b from-transparent via-brand-accent-2 to-transparent" 
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden z-20 pointer-events-none">
                        <motion.div 
                            animate={{ x: ["200%", "-100%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
                            className="w-1/2 h-full bg-gradient-to-l from-transparent via-brand-accent-2 to-transparent" 
                        />
                    </div>
                    <div className="absolute top-0 left-0 w-[1px] h-full overflow-hidden z-20 pointer-events-none">
                        <motion.div 
                            animate={{ y: ["200%", "-100%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 2.25 }}
                            className="w-full h-1/2 bg-gradient-to-t from-transparent via-brand-accent-2 to-transparent" 
                        />
                    </div>
                    
                    {/* Decorative Corner Borders for Cyber-Luxury Feel */}
                    <motion.div 
                        animate={{ width: ["2rem", "3rem", "2rem"], height: ["2rem", "3rem", "2rem"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 left-0 border-t border-l border-brand-accent-2/60 z-20 pointer-events-none"
                    />
                    <motion.div 
                        animate={{ width: ["2rem", "3rem", "2rem"], height: ["2rem", "3rem", "2rem"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute top-0 right-0 border-t border-r border-brand-accent-2/60 z-20 pointer-events-none"
                    />
                    <motion.div 
                        animate={{ width: ["2rem", "3rem", "2rem"], height: ["2rem", "3rem", "2rem"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute bottom-0 right-0 border-b border-r border-brand-accent-2/60 z-20 pointer-events-none"
                    />
                    <motion.div 
                        animate={{ width: ["2rem", "3rem", "2rem"], height: ["2rem", "3rem", "2rem"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                        className="absolute bottom-0 left-0 border-b border-l border-brand-accent-2/60 z-20 pointer-events-none"
                    />
                    
                    <div className="w-full bg-gradient-to-br from-brand-dark/95 to-[#111111]/95 backdrop-blur-xl border border-white/5 p-10 md:p-16 lg:p-24 relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)]">
                        {/* Glow Effects */}
                        <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-accent-2/5 blur-[120px] rounded-full pointer-events-none group-hover:bg-brand-accent-2/15 transition-colors duration-700" />
                        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-accent-3/5 blur-[120px] rounded-full pointer-events-none group-hover:bg-brand-accent-3/15 transition-colors duration-700" />
                        
                        <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-24">
                            {/* Left Column: Heading */}
                            <div className="w-full lg:w-5/12 flex flex-col justify-start">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-8 h-[1px] bg-brand-accent-2/70" />
                                    <span className="font-tech text-brand-accent-2 text-xs uppercase tracking-[0.2em] opacity-90">Our Genesis</span>
                                </div>
                                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                                    We started KinStrategi because we lived this <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-2 to-brand-accent-2/60">problem.</span>
                                </h2>
                            </div>

                            {/* Right Column: Body Text */}
                            <div className="w-full lg:w-7/12 flex flex-col justify-center">
                                <div className="font-body text-lg md:text-xl font-light leading-relaxed space-y-8 opacity-80">
                                    <p className="text-xl md:text-2xl font-medium text-white opacity-100 border-l-2 border-brand-accent-2/40 pl-6">
                                        We've been in the rooms where brilliant briefs get handed to the wrong teams. Where talented creatives get placed into projects that were never built for them. Where creative ops looked like chaos dressed up as process.
                                    </p>
                                    <p className="pl-6 md:pl-8">
                                        KinStrategi was built to fix that. Not by posting jobs and praying, but by building a smarter system, one that matches talent to strategy, vision to execution, and teams to the vibe they actually need.
                                    </p>
                                    <p className="pl-6 md:pl-8">
                                        We work at the intersection of creative culture and operational intelligence. And we're building the infrastructure that makes creative work make sense.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* About the Founder */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col lg:flex-row border border-white/10 bg-gradient-to-br from-[#25224A]/90 to-brand-dark/95 backdrop-blur-2xl overflow-hidden shadow-[0_0_50px_rgba(0,167,167,0.1)] relative group"
                >
                    {/* Cyber Grid Overlay */}
                    <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
                    
                    <div className="w-full lg:w-2/5 min-h-[380px] lg:min-h-full relative group/img shrink-0 z-10 border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden">
                        <img 
                            src={founderImg} 
                            alt="Adeshewa Adeniran" 
                            className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-700 ease-out" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute inset-0 bg-brand-accent-1/10 mix-blend-overlay group-hover/img:opacity-0 transition-opacity duration-500 pointer-events-none" />
                    </div>
                    
                    <div className="w-full lg:w-3/5 p-8 md:p-12 lg:p-14 flex flex-col justify-between text-left relative z-10">
                        <div>
                            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-2 text-white">Adeshewa Adeniran</h3>
                            <p className="font-tech text-brand-accent-3 text-xs md:text-sm uppercase tracking-widest mb-6 border-b border-brand-accent-3/30 pb-3 inline-block">
                                Creative Development Producer
                            </p>
                            
                            {/* Balanced Visible Excerpt */}
                            <div className="font-body opacity-80 text-base md:text-lg font-light leading-relaxed space-y-4">
                                <h4 className="font-heading text-xl md:text-2xl text-brand-accent-2 italic font-semibold mb-2">
                                    Do You Believe in Aliens?
                                </h4>
                                <p className="text-white font-medium">
                                    I do.
                                </p>
                                <p>
                                    Actually... I think you do, too. Not the sci-fi kind, but the ones who never quite fit the mold. The minds that look at disarray, and instantly spot the foreboding bottlenecks.
                                </p>
                                <p className="italic text-brand-accent-2/90">
                                    Allow me to introduce you to one.
                                </p>
                                <p className="font-medium text-white">
                                    Hello, I’m Adeshewa Adeniran.
                                </p>
                                <p>
                                    People have called me creative, strategic, operational, analytical, or simply "too many things at once." I’ve always suspected they were all trying to say the same thing: I don't believe in choosing between imagination and structure.
                                </p>
                                <p>
                                    My mind is an ecosystem where storytelling, process engineering, and brand building live under one roof. One moment I’m worldbuilding a campaign; the next, I’m engineering operational workflows or aligning talent that was meant to cross paths. To me, these aren't separate disciplines, they are facets of a single creative act.
                                </p>
                            </div>

                            {/* Smooth Expandable Content */}
                            <AnimatePresence>
                                {isFounderExpanded && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        className="overflow-hidden font-body opacity-80 text-base md:text-lg font-light leading-relaxed space-y-4 pt-4"
                                    >
                                        <h5 className="font-heading text-xl text-white font-bold pt-2 text-brand-accent-1">
                                            Why KinStrategi Exists
                                        </h5>
                                        <p>
                                            I watched the same tragedy repeat across the creative industries: brilliant founders exhausted by friction, and profound ideas fracturing not for lack of imagination, but for lack of structural alignment. The industry was hunting for talent; no one was hunting for a fit.
                                        </p>
                                        <p>
                                            That obsession became <strong className="text-white font-medium">KinStrategi</strong>.
                                        </p>
                                        <p>
                                            <strong className="text-white font-medium">KinStrategi</strong> exists to bring rare harmony to creative execution—curating teams that don't merely function, but fundamentally click. Because enduring creative outcomes happen when the right people, systems, and vision converge.
                                        </p>
                                        <p>
                                            Anchoring all of this motion are my two dogs, <strong className="text-brand-accent-2 font-medium">Neo-Wolf</strong> and <strong className="text-brand-accent-2 font-medium">Jojo</strong>.
                                        </p>
                                        <p>
                                            They interrupt for unprompted cuddles and force me into a world where I'd happily vanish down creative rabbit holes. They’ve taught me a principle I carry into every boardroom and brand partnership: the most resilient relationships are built on trust, patience, insatiable curiosity, and showing up consistently.
                                        </p>
                                        <p>
                                            So, yes... perhaps I am an alien. Not because I belong to another planet, but because I’ve never viewed creativity, operations, strategy, and human connection as separate worlds.
                                        </p>
                                        <p className="text-brand-accent-2 font-medium">
                                            To me, they have always been the same universe.
                                        </p>
                                        <p className="font-heading text-xl italic text-white pt-2">
                                            Welcome to mine.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="flex flex-wrap gap-4 items-center justify-between mt-8 pt-6 border-t border-white/10 w-full relative z-10">
                            <button 
                                onClick={() => setIsFounderExpanded(!isFounderExpanded)}
                                className="text-brand-accent-3 font-tech uppercase tracking-widest text-xs md:text-sm border border-brand-accent-3/50 px-5 py-2.5 hover:bg-brand-accent-3 hover:text-brand-dark transition-all duration-300 cursor-pointer flex items-center gap-2"
                            >
                                <span>{isFounderExpanded ? 'Read Less' : 'Read More'}</span>
                                <span>{isFounderExpanded ? '↑' : '↓'}</span>
                            </button>
                            <motion.button
                                onClick={() => window.location.href = "mailto:shewa@kinstrategi.com"}
                                whileHover={{ x: 4, color: "#fff" }}
                                className="text-brand-accent-2 font-tech uppercase tracking-widest text-xs md:text-sm transition-all cursor-pointer flex items-center gap-1.5"
                            >
                                <span>Connect with Adeshewa</span>
                                <span>→</span>
                            </motion.button>
                        </div>
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
                    <span className="font-tech text-brand-accent-1 text-xl font-bold uppercase tracking-[0.4em] block opacity-100 drop-shadow-md">Services</span>
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

                {/* Newsletter Sign-Up & Avatar Container */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-5xl mx-auto mb-24 pt-24 md:pt-0"
                >
                    {/* Cyber Console Background */}
                    <div className="w-full border border-white/10 bg-gradient-to-br from-brand-base/60 via-[#1E1B3C]/70 to-brand-dark/80 backdrop-blur-2xl shadow-[0_0_60px_rgba(91,62,150,0.2)] flex flex-col md:flex-row relative z-0 overflow-visible rounded-sm">
                        
                        {/* Abstract Tech Decorations */}
                        <div className="absolute top-0 right-0 w-32 h-[1px] bg-brand-accent-2/50" />
                        <div className="absolute bottom-0 left-0 w-32 h-[1px] bg-brand-accent-1/50" />
                        
                        {/* Avatar Section - Absolutely positioned to break the box */}
                        <div className="md:w-1/3 flex justify-center relative md:-ml-8 md:mt-[-80px] -mt-32 z-20 pointer-events-none">
                            {/* Glowing Aura behind Avatar */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-accent-3/30 rounded-full blur-[60px] mix-blend-screen" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-accent-1/20 rounded-full blur-[40px] mix-blend-plus-lighter" />
                            
                            <img 
                                src={ademarisGreeting} 
                                alt="Ademaris" 
                                className="w-full h-auto max-w-[320px] drop-shadow-[0_0_20px_rgba(212,175,55,0.3)] relative z-10 animate-[floating_6s_ease-in-out_infinite] mix-blend-screen"
                                style={{ animationName: 'floating' }}
                            />
                            <style dangerouslySetInnerHTML={{
                                __html: `
                                @keyframes floating {
                                    0%, 100% { transform: translateY(0); }
                                    50% { transform: translateY(-15px); }
                                }
                            `}} />
                        </div>
                        
                        {/* Newsletter Form Section */}
                        <div className="w-full md:w-2/3 p-10 md:p-16 text-left relative z-10 flex flex-col justify-center">
                            <span className="font-tech text-brand-accent-3 text-[10px] uppercase tracking-[0.3em] mb-4 block opacity-70">Broadcast Channel</span>
                            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6 text-white drop-shadow-md">Stay in the Know.</h2>
                            <p className="font-body opacity-80 font-light text-lg leading-relaxed mb-8 max-w-lg">
                                Industry trends. Benchmark campaigns. African brand strategy. Cultural storytelling. Brand evolution. And the occasional hot take from Team KinStrategi. Straight to your inbox.
                            </p>
                            <form
                                className="flex flex-col sm:flex-row gap-3 w-full max-w-md relative z-20"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    alert("You're officially tuned in. Keep an eye on your inbox.");
                                }}
                            >
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="bg-brand-dark/60 border border-white/20 px-5 py-4 text-white placeholder-white/40 font-body outline-none focus:border-brand-accent-3 focus:bg-brand-dark/80 transition-all flex-1 backdrop-blur-sm"
                                    required
                                />
                                <button type="submit" className="bg-brand-accent-3 text-brand-dark font-bold px-8 py-4 font-tech uppercase tracking-widest text-sm hover:bg-brand-accent-3/90 transition-colors cursor-pointer shadow-[0_0_20px_rgba(0,167,167,0.3)] hover:shadow-[0_0_30px_rgba(0,167,167,0.5)]">
                                    Tune In
                                </button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}