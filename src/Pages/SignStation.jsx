import { motion } from 'framer-motion';
import ademarisCurious from '../safe-assets/navigator/ademaris-curious.png';
import signStationBg from '../assets/sign-station-bg.png';

export default function SignStation() {
    return (
        <div className="relative min-h-screen py-32 overflow-hidden flex flex-col justify-start bg-brand-dark">
            {/* Background Image Setup */}
            <div className="absolute top-0 left-0 w-full h-[120vh] z-0 overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${signStationBg}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 via-brand-dark/60 to-brand-dark" />
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

                {/* Hero Section */}
                <div className="text-center pt-12 pb-12 relative flex flex-col md:flex-row items-center justify-center gap-12">

                    <div className="text-center md:text-left relative z-10">
                        <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-wider mb-6 text-white drop-shadow-xl">
                            Let's build <span className="text-brand-accent-2">something good.</span>
                        </h1>
                        <p className="font-body text-xl md:text-2xl opacity-70 font-light max-w-2xl">
                            Whether you have a brief ready or just want to talk it through… we're here.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-8 bg-brand-base/20 border border-white/5 backdrop-blur-md p-8 md:p-12 relative overflow-visible">
                    <div className="absolute top-0 right-0 w-1/2 h-[2px] bg-gradient-to-r from-transparent to-brand-accent-2 opacity-50" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-[2px] bg-gradient-to-r from-brand-accent-1 to-transparent opacity-50" />

                    {/* Contact Details Column */}
                    <div className="lg:col-span-2 space-y-12 pr-0 lg:pr-8 border-b lg:border-b-0 lg:border-r border-white/10 pb-12 lg:pb-0">
                        <div>
                            <span className="font-tech text-brand-accent-1/70 text-xs uppercase tracking-widest block mb-4">Contact Details</span>
                            <ul className="space-y-4 font-body opacity-70 font-light">
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

                    </div>

                    {/* Contact Form Column */}
                    <div className="lg:col-span-3 lg:pl-8 relative z-10">
                        <form
                            className="space-y-10 relative z-10"
                            onSubmit={(e) => {
                                e.preventDefault();
                                alert("Thanks for reaching out! A KinStrategi representative will respond within 24 hours.");
                            }}
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                                <div className="flex flex-col gap-3 relative group">
                                    <label className="font-tech text-[10px] uppercase tracking-[0.2em] text-white/50 group-focus-within:text-brand-accent-2 transition-colors">First Name *</label>
                                    <input type="text" className="bg-transparent border-0 border-b border-white/10 pb-2 text-white font-body focus:ring-0 focus:border-brand-accent-2 transition-colors" required />
                                </div>
                                <div className="flex flex-col gap-3 relative group">
                                    <label className="font-tech text-[10px] uppercase tracking-[0.2em] text-white/50 group-focus-within:text-brand-accent-2 transition-colors">Last Name *</label>
                                    <input type="text" className="bg-transparent border-0 border-b border-white/10 pb-2 text-white font-body focus:ring-0 focus:border-brand-accent-2 transition-colors" required />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                                <div className="flex flex-col gap-3 relative group">
                                    <label className="font-tech text-[10px] uppercase tracking-[0.2em] text-white/50 group-focus-within:text-brand-accent-2 transition-colors">Company *</label>
                                    <input type="text" className="bg-transparent border-0 border-b border-white/10 pb-2 text-white font-body focus:ring-0 focus:border-brand-accent-2 transition-colors" required />
                                </div>
                                <div className="flex flex-col gap-3 relative group">
                                    <label className="font-tech text-[10px] uppercase tracking-[0.2em] text-white/50 group-focus-within:text-brand-accent-2 transition-colors">Role / Title *</label>
                                    <input type="text" className="bg-transparent border-0 border-b border-white/10 pb-2 text-white font-body focus:ring-0 focus:border-brand-accent-2 transition-colors" required />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                                <div className="flex flex-col gap-3 relative group">
                                    <label className="font-tech text-[10px] uppercase tracking-[0.2em] text-white/50 group-focus-within:text-brand-accent-2 transition-colors">Email Address *</label>
                                    <input type="email" className="bg-transparent border-0 border-b border-white/10 pb-2 text-white font-body focus:ring-0 focus:border-brand-accent-2 transition-colors" required />
                                </div>
                                <div className="flex flex-col gap-3 relative group">
                                    <label className="font-tech text-[10px] uppercase tracking-[0.2em] text-white/50 group-focus-within:text-brand-accent-2 transition-colors">Phone Number</label>
                                    <input type="tel" className="bg-transparent border-0 border-b border-white/10 pb-2 text-white font-body focus:ring-0 focus:border-brand-accent-2 transition-colors" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 relative group">
                                <label className="font-tech text-[10px] uppercase tracking-[0.2em] text-white/50 group-focus-within:text-brand-accent-2 transition-colors">Your Message *</label>
                                <textarea rows="4" className="bg-transparent border-0 border-b border-white/10 pb-2 text-white font-body focus:ring-0 focus:border-brand-accent-2 transition-colors resize-none" required></textarea>
                            </div>

                            <label className="flex items-start gap-4 cursor-pointer pt-6">
                                <input type="checkbox" className="form-checkbox bg-transparent border-white/30 text-brand-accent-2 rounded-sm focus:ring-offset-brand-base focus:ring-brand-accent-2 mt-1" required />
                                <span className="font-body text-sm font-light opacity-50 leading-snug">
                                    By initiating this signal, you agree to our Terms & Conditions and consent to your data being stored in accordance with our Privacy Policy.
                                </span>
                            </label>

                            <div className="pt-10 flex flex-row items-center gap-8">
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="border border-brand-accent-2 text-brand-accent-2 hover:bg-brand-accent-2 hover:text-brand-dark hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] px-12 py-5 font-heading uppercase tracking-widest font-bold text-sm w-full sm:w-auto cursor-pointer transition-all duration-300 shrink-0"
                                >
                                    What's the Big Idea?
                                </motion.button>
                                
                                <div className="hidden sm:block w-40 h-40 relative shrink-0 -mt-8">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-brand-accent-2/10 rounded-full blur-[30px] mix-blend-screen pointer-events-none" />
                                    <img 
                                        src={ademarisCurious} 
                                        alt="Ademaris Curious" 
                                        className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.4)] mix-blend-screen"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}
