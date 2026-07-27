import { motion } from 'framer-motion';

export default function SignStation() {
    return (
        <div className="relative min-h-screen py-32 overflow-hidden flex flex-col justify-start">
            <div className="fixed inset-0 z-0 bg-brand-dark" />

            <motion.div
                animate={{ rotate: 180 }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                className="fixed top-[-30vh] right-[-30vw] w-[80vw] h-[80vw] border border-dashed border-brand-accent-2/10 rounded-full z-0 pointer-events-none"
            />
            <motion.div
                animate={{ rotate: -180 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                className="fixed bottom-[-30vh] left-[-30vw] w-[80vw] h-[80vw] border border-dotted border-brand-accent-1/10 rounded-full z-0 pointer-events-none"
            />

            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

                {/* Hero Section */}
                <div className="text-center pt-12">
                    <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-wider mb-6 text-white drop-shadow-xl">
                        Let's build <span className="text-brand-accent-2">something good.</span>
                    </h1>
                    <p className="font-body text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
                        Whether you have a brief ready or just want to talk it through… we're here.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-8 bg-brand-base/20 border border-white/5 backdrop-blur-md p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-[2px] bg-gradient-to-r from-transparent to-brand-accent-2 opacity-50" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-[2px] bg-gradient-to-r from-brand-accent-1 to-transparent opacity-50" />

                    {/* Contact Details Column */}
                    <div className="lg:col-span-2 space-y-12 pr-0 lg:pr-8 border-b lg:border-b-0 lg:border-r border-white/10 pb-12 lg:pb-0">
                        <div>
                            <span className="font-tech text-brand-accent-1/70 text-xs uppercase tracking-widest block mb-4">Contact Details</span>
                            <ul className="space-y-4 font-body text-gray-300 font-light">
                                <li className="flex items-start gap-4">
                                    <span className="text-brand-accent-1 text-lg">✦</span>
                                    <span>shewa@kinstrategi.com</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-brand-accent-1 text-lg">✦</span>
                                    <span>We serve clients worldwide.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-brand-accent-1 text-lg">✦</span>
                                    <span>We respond within 24hrs.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Note on Case Studies */}
                        <div className="pt-8 border-t border-white/5">
                            <span className="font-tech text-white/40 text-[10px] uppercase tracking-widest block mb-6">Recent Deployments</span>
                            <div className="flex flex-col gap-4">
                                {/* Placeholders for case study previews */}
                                {[1, 2].map((i) => (
                                    <div key={i} className="group cursor-pointer">
                                        <p className="font-heading text-lg font-bold text-white group-hover:text-brand-accent-2 transition-colors mb-1">Brand Name {i}</p>
                                        <p className="font-body text-xs text-gray-400">Brief outcome summary mapping to project success.</p>
                                    </div>
                                ))}
                                <a href="/our-work" className="font-tech text-xs tracking-widest uppercase text-brand-accent-1 hover:text-white transition-colors mt-4">
                                    View full case studies →
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Column */}
                    <div className="lg:col-span-3 lg:pl-8">
                        <form
                            className="space-y-8"
                            onSubmit={(e) => {
                                e.preventDefault();
                                alert("Thanks for reaching out! A KinStrategi representative will respond within 24 hours.");
                            }}
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2 relative">
                                    <label className="font-tech text-xs uppercase tracking-widest text-brand-accent-2">First Name *</label>
                                    <input type="text" className="bg-transparent border-0 border-b border-white/20 pb-2 text-white font-body focus:ring-0 focus:border-brand-accent-2 transition-colors" required />
                                </div>
                                <div className="flex flex-col gap-2 relative">
                                    <label className="font-tech text-xs uppercase tracking-widest text-brand-accent-2">Last Name *</label>
                                    <input type="text" className="bg-transparent border-0 border-b border-white/20 pb-2 text-white font-body focus:ring-0 focus:border-brand-accent-2 transition-colors" required />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2 relative">
                                    <label className="font-tech text-xs uppercase tracking-widest text-brand-accent-2">Company *</label>
                                    <input type="text" className="bg-transparent border-0 border-b border-white/20 pb-2 text-white font-body focus:ring-0 focus:border-brand-accent-2 transition-colors" required />
                                </div>
                                <div className="flex flex-col gap-2 relative">
                                    <label className="font-tech text-xs uppercase tracking-widest text-brand-accent-2">Role / Title *</label>
                                    <input type="text" className="bg-transparent border-0 border-b border-white/20 pb-2 text-white font-body focus:ring-0 focus:border-brand-accent-2 transition-colors" required />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2 relative">
                                    <label className="font-tech text-xs uppercase tracking-widest text-brand-accent-2">Email Address *</label>
                                    <input type="email" className="bg-transparent border-0 border-b border-white/20 pb-2 text-white font-body focus:ring-0 focus:border-brand-accent-2 transition-colors" required />
                                </div>
                                <div className="flex flex-col gap-2 relative">
                                    <label className="font-tech text-xs uppercase tracking-widest text-brand-accent-2">Phone Number</label>
                                    <input type="tel" className="bg-transparent border-0 border-b border-white/20 pb-2 text-white font-body focus:ring-0 focus:border-brand-accent-2 transition-colors" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 relative">
                                <label className="font-tech text-xs uppercase tracking-widest text-brand-accent-2">Your Message *</label>
                                <textarea rows="4" className="bg-transparent border-0 border-b border-white/20 pb-2 text-white font-body focus:ring-0 focus:border-brand-accent-2 transition-colors resize-none" required></textarea>
                            </div>

                            <label className="flex items-start gap-4 cursor-pointer pt-4">
                                <input type="checkbox" className="form-checkbox bg-transparent border-white/30 text-brand-accent-2 rounded-sm focus:ring-offset-brand-base focus:ring-brand-accent-2 mt-1" required />
                                <span className="font-body text-sm font-light text-gray-400 leading-snug">
                                    By initiating this signal, you agree to our Terms & Conditions and consent to your data being stored in accordance with our Privacy Policy. I've read the Privacy Policy and agree to receive updates from KinStrategi.
                                </span>
                            </label>

                            <div className="pt-6">
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 175, 55, 0.4)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-brand-accent-2 text-brand-dark px-12 py-5 font-heading uppercase tracking-widest font-bold text-sm w-full sm:w-auto cursor-pointer"
                                >
                                    What's the Big Idea?
                                </motion.button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}
