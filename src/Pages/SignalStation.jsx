import { motion } from 'framer-motion';
import signalBg from '../assets/Signal Station_ Thought Leadership Feed.png';

const categories = [
    {
        title: "Behind the Build",
        desc: "A closer look at how ideas evolve—from early concepts and creative direction to systems, collaboration, and execution.",
        accent: "brand-accent-2"
    },
    {
        title: "Field Notes",
        desc: "An honest look at the work. The challenge, the process, the thinking, and the outcomes that shaped each project.",
        accent: "brand-accent-3"
    },
    {
        title: "Client Stories",
        desc: "Experiences shared by the people we've partnered with, highlighting not just the results, but the journey that made them possible.",
        accent: "brand-accent-1"
    },
    {
        title: "Perspectives",
        desc: "Essays and insights on creative development, strategy, storytelling, AI, leadership, collaboration, and the future of building meaningful work.",
        accent: "brand-accent-2"
    }
];

const pings = [
    {
        id: "001",
        category: "Field Notes",
        title: "Building a Luxury Adornment House from the Ground Up",
        date: "MAR 04",
        readTime: "3 MIN READ",
        accent: "brand-accent-2"
    },
    {
        id: "002",
        category: "Field Notes",
        title: "Scaling Creative Operations Across Multiple Ventures",
        date: "FEB 28",
        readTime: "5 MIN READ",
        accent: "brand-accent-3"
    },
    {
        id: "003",
        category: "Field Notes",
        title: "Building the Foundation for a Multi-Platform Creative Brand",
        date: "FEB 21",
        readTime: "4 MIN READ",
        accent: "brand-accent-2"
    },
    {
        id: "004",
        category: "Field Notes",
        title: "Making Cybersecurity More Human",
        date: "FEB 15",
        readTime: "4 MIN READ",
        accent: "brand-accent-1"
    },
    {
        id: "005",
        category: "Field Notes",
        title: "Designing a Creative Development Studio",
        date: "FEB 02",
        readTime: "6 MIN READ",
        accent: "brand-accent-2"
    },
    {
        id: "006",
        category: "Field Notes",
        title: "Reimagining KinStrategi",
        date: "JAN 25",
        readTime: "3 MIN READ",
        accent: "brand-accent-2"
    }
];

import { useState } from 'react';
export default function SignalStation() {
    const [selectedPing, setSelectedPing] = useState(null);

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
                            Strategy & Insights
                        </span>
                        <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-wider mb-2">
                            Signal <span className="text-brand-accent-2">Station.</span>
                        </h1>
                        <h2 className="font-heading text-2xl md:text-3xl font-light text-brand-accent-2 mb-6">
                            Where ideas become clearer.
                        </h2>
                        <p className="font-body text-xl text-gray-300 font-light leading-relaxed max-w-2xl">
                            This isn't another content hub. It's a collection of perspectives on creative development, strategic thinking, AI, operations, storytelling, and the systems that help ambitious ideas thrive.
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
                                onClick={() => setSelectedPing(ping)}
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

            {/* Coming Soon Modal */}
            {selectedPing && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedPing(null)} />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="relative z-10 w-full max-w-lg bg-brand-dark border border-white/10 p-8 shadow-2xl"
                    >
                        <div className={`w-8 h-1 bg-${selectedPing.accent} mb-6`} />
                        <h3 className="font-heading text-3xl font-bold mb-4">{selectedPing.title}</h3>
                        <p className="font-body text-gray-300 font-light mb-8">
                            This full article is being finalized and will be pushed to the Signal Station shortly.
                        </p>
                        <div className="flex justify-end">
                            <button
                                onClick={() => setSelectedPing(null)}
                                className="font-tech text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
}