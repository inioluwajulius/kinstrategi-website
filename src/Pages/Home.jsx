import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import homeBg from '../assets/KinStrategi Home_ Cyber-Luxury Hub.png';

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

    const headlineText = "Your partner in creative operations";

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
                    Creative teams that just click.
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
                    className="font-body text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto mb-16 leading-relaxed"
                >
                    We match vibe to vision for businesses who need real firepower, and creatives who deserve the right fit.
                </motion.p>

                <motion.div variants={textItem} className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-3xl mx-auto">
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 30px rgba(0, 167, 167, 0.4)",
                            backgroundColor: "rgba(0, 167, 167, 0.15)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-brand-accent-2/10 border border-brand-accent-3 text-white px-8 py-5 font-heading uppercase tracking-widest text-sm backdrop-blur-md transition-all relative overflow-hidden group/btn flex flex-col items-center justify-center gap-1"
                    >
                        <span className="relative z-10 font-bold tracking-[0.2em] text-lg">Start Matching</span>
                        <span className="relative z-10 text-[11px] opacity-70 normal-case tracking-widest font-tech text-brand-accent-3">— for clients</span>
                        <motion.div
                            className="absolute inset-0 bg-brand-accent-3/20 z-0 origin-left"
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        />
                    </motion.button>

                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 30px rgba(91, 62, 150, 0.4)",
                            backgroundColor: "rgba(91, 62, 150, 0.15)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-brand-accent-1/5 border border-brand-accent-1 text-white px-8 py-5 font-heading uppercase tracking-widest text-sm backdrop-blur-md transition-all relative overflow-hidden group/btn flex flex-col items-center justify-center gap-1"
                    >
                        <span className="relative z-10 font-bold tracking-[0.2em] text-lg">Join the Citadel</span>
                        <span className="relative z-10 text-[11px] opacity-70 normal-case tracking-widest font-tech text-brand-accent-1">— for talent</span>
                        <motion.div
                            className="absolute inset-0 bg-brand-accent-1/20 z-0 origin-left"
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        />
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Extended context to allow scrolling and showcase the global layout lighting */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 mt-32 space-y-48">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row items-center gap-16"
                >
                    <div className="w-full md:w-1/2 text-left">
                        <span className="font-tech text-brand-accent-2 text-xs uppercase tracking-widest mb-4 block opacity-70">Architecture</span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">The Protocol</h2>
                        <p className="font-body text-gray-300 text-lg font-light leading-relaxed mb-6">
                            Beyond standard matchmaking, we orchestrate precision alignments between abstract visions and structural executions. Our process ensures that when the signal hits, the connection is absolute.
                        </p>
                        <div className="w-16 h-[2px] bg-gradient-to-r from-brand-accent-1 to-brand-accent-3" />
                    </div>
                    <div className="w-full md:w-1/2 h-80 border border-white/5 bg-brand-base/10 backdrop-blur-sm relative overflow-hidden rounded-sm group flex justify-center items-center">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="w-56 h-56 border border-dashed border-brand-accent-1/30 rounded-full"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute w-40 h-40 border border-dotted border-brand-accent-3/50 rounded-full"
                        />
                        <div className="absolute font-tech text-brand-accent-2 opacity-50 text-xs">AWAITING_SYNC</div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row-reverse items-center gap-16"
                >
                    <div className="w-full md:w-1/2 text-left">
                        <span className="font-tech text-brand-accent-3 text-xs uppercase tracking-widest mb-4 block opacity-70">Transmissions</span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Signal Range</h2>
                        <p className="font-body text-gray-300 text-lg font-light leading-relaxed mb-6">
                            Tap into the frequency of modern operational theory. We decode the architectures of high-velocity teams and translate them into actionable, scalable frameworks built for endurance.
                        </p>
                        <div className="w-16 h-[2px] bg-gradient-to-r from-brand-accent-2 to-transparent" />
                    </div>
                    <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="h-40 border border-white/5 bg-brand-base/20 backdrop-blur-md group-hover:bg-brand-base/40 transition-colors p-6 flex flex-col justify-end relative overflow-hidden">
                                <span className="font-tech text-brand-accent-2/60 text-xs relative z-10">NODE_0{i}</span>
                                <div className="absolute top-0 right-0 w-16 h-16 bg-brand-accent-1/5 rounded-full blur-xl translate-x-1/2 -translate-y-1/2" />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}