import { motion } from 'framer-motion';
import signalBg from '../assets/Signal Station_ Thought Leadership Feed.png';

const categories = [
    {
        title: "Behind the Scenes",
        desc: "A look at how we actually work — how we hire, how we manage projects, and what we've learned along the way.",
        accent: "brand-accent-2"
    },
    {
        title: "Client Results",
        desc: "Real projects, broken down honestly. What wasn't working, what we did about it, and what changed.",
        accent: "brand-accent-3"
    },
    {
        title: "Kin Praise",
        desc: "Testimonials with context. Not just what clients said, but why it mattered and what got them there.",
        accent: "brand-accent-1"
    },
    {
        title: "Culture & Strategy Insights",
        desc: "The human side of creative work. Team dynamics, hiring mistakes, what good fit actually looks like, and why structure isn't the enemy of creativity.",
        accent: "brand-accent-2"
    }
];

const pings = [
    {
        id: "042",
        category: "Behind the Scenes",
        title: "Why 'Good Talent' Isn't Enough if the Fit is Wrong",
        date: "MAR 04",
        readTime: "3 MIN READ",
        accent: "brand-accent-2"
    },
    {
        id: "041",
        category: "Client Results",
        title: "Scaling a 30-Person Agency Without Expanding Payroll",
        date: "FEB 28",
        readTime: "5 MIN READ",
        accent: "brand-accent-3"
    },
    {
        id: "040",
        category: "Culture & Strategy",
        title: "How Systems Actually Give You More Freedom to Create",
        date: "FEB 21",
        readTime: "4 MIN READ",
        accent: "brand-accent-2"
    },
    {
        id: "039",
        category: "Kin Praise",
        title: "From Chaos to Clarity: The 'Arc' Campaign Overhaul",
        date: "FEB 15",
        readTime: "4 MIN READ",
        accent: "brand-accent-1"
    },
    {
        id: "038",
        category: "Behind the Scenes",
        title: "The Architecture of a Proper Creative Brief",
        date: "FEB 02",
        readTime: "6 MIN READ",
        accent: "brand-accent-2"
    },
    {
        id: "037",
        category: "Culture & Strategy",
        title: "Stop Chasing Output. Build the Infrastructure.",
        date: "JAN 25",
        readTime: "3 MIN READ",
        accent: "brand-accent-2"
    }
];

export default function SignalStation() {
    return (
        <div className="relative min-h-screen py-32 overflow-hidden flex flex-col justify-start">
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}} />

            {/* Background Image */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 2 }}
                className="fixed inset-0 z-0 bg-cover bg-top bg-no-repeat"
                style={{ backgroundImage: `url('${signalBg}')`, backgroundPosition: 'center 20%' }}
            />
            <div className="fixed inset-0 z-0 bg-gradient-to-b from-brand-dark/95 via-brand-dark/95 to-brand-dark" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 flex flex-col md:flex-row items-start md:items-end justify-between border-b border-brand-accent-2/20 pb-12 gap-12"
                >
                    <div className="md:w-2/3">
                        <span className="font-tech text-brand-accent-2 text-sm uppercase tracking-[0.3em] mb-4 block opacity-80">
                            Strategy & Insights Blog
                        </span>
                        <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-wider mb-2">
                            Signal <span className="text-brand-accent-2">Station.</span>
                        </h1>
                        <h2 className="font-heading text-2xl md:text-3xl font-light text-brand-accent-2 mb-6">
                            No fluff. Just the stuff that actually matters.
                        </h2>
                        <p className="font-body text-xl text-gray-300 font-light leading-relaxed max-w-2xl">
                            We write about what we know. Creative operations, team dynamics, brand strategy, and the thinking behind work that holds up over time.
                        </p>
                    </div>

                    <div className="w-full md:w-1/3 flex flex-col items-center md:items-end mt-8 md:mt-0">
                        <div className="w-48 h-48 rounded-full border border-dashed border-brand-accent-2/30 flex items-center justify-center relative bg-brand-accent-2/5">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-2 border border-dotted border-brand-accent-2/50 rounded-full"
                            />
                            <div className="text-center">
                                <span className="font-heading text-4xl block text-white">4</span>
                                <span className="font-tech text-[10px] uppercase tracking-widest text-brand-accent-2">Active Channels</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Categories Overview */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-32"
                >
                    <h2 className="font-tech text-white/50 text-xs uppercase tracking-[0.2em] mb-8">Channel Frequencies</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {categories.map((cat, idx) => (
                            <div key={idx} className="bg-brand-base/20 border border-white/5 p-6 hover:border-brand-accent-2/30 transition-colors">
                                <div className={`w-8 h-1 bg-${cat.accent} mb-6`} />
                                <h3 className="font-heading text-xl font-bold mb-3">{cat.title}</h3>
                                <p className="font-body text-sm text-gray-400 font-light leading-relaxed">
                                    {cat.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Pings Feed */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="font-heading text-3xl font-bold text-white">Latest Pings</h2>
                        <span className="font-tech text-brand-accent-2 text-xs uppercase tracking-[0.2em] border border-brand-accent-2/30 px-3 py-1">
                            Live Feed
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pings.map((ping, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.5)" }}
                                onClick={() => alert("Full reading page for this ping coming soon.")}
                                className="bg-brand-base/40 border border-white/5 backdrop-blur-md relative overflow-hidden group cursor-pointer flex flex-col h-full"
                            >
                                {/* Hover sweep effect */}
                                <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent z-0 -translate-x-full group-hover:animate-[sweep_1.5s_ease-in-out_infinite]" />

                                {/* Accent top bar */}
                                <div className={`h-1 w-0 group-hover:w-full bg-${ping.accent} transition-all duration-500 absolute top-0 left-0 z-10`} />

                                <div className="p-8 flex flex-col flex-grow relative z-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <span className={`font-tech text-xs tracking-widest uppercase text-${ping.accent} bg-${ping.accent}/10 px-2 py-1`}>
                                            {ping.category}
                                        </span>
                                        <span className="font-tech text-xs text-white/40 tracking-widest">
                                            PING_{ping.id}
                                        </span>
                                    </div>

                                    <h3 className="font-heading text-2xl font-bold mb-6 group-hover:text-white text-gray-100 transition-colors leading-snug flex-grow">
                                        {ping.title}
                                    </h3>

                                    <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-4">
                                        <div className="flex flex-col">
                                            <span className="font-tech text-[10px] text-white/50 tracking-widest mb-1">DATE INCIDENT</span>
                                            <span className="font-tech text-xs text-white tracking-widest">{ping.date}</span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <span className="font-body text-xs text-gray-400">{ping.readTime}</span>
                                            <div className={`w-8 h-8 rounded-full border border-${ping.accent}/30 flex items-center justify-center group-hover:bg-${ping.accent}/10 transition-colors`}>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-${ping.accent}`}>
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    <polyline points="12 5 19 12 12 19"></polyline>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </div>
    );
}