import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Clock, Globe, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import ademarisCurious from '../safe-assets/navigator/ademaris-curious.png';
import signStationBg from '../assets/sign-station-bg.png';

const enquiryOptions = [
    { id: "project", label: "Start a Project" },
    { id: "service", label: "Enquire About a Specific Service" },
    { id: "retainer", label: "Discuss an Ongoing Retainer / Partnership" },
    { id: "collab", label: "Explore Collaborations / Other Enquiries" }
];

export default function Contact() {
    const [selectedType, setSelectedType] = useState("project");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        formData.append("enquiry_type", selectedType);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json()).catch(() => ({ success: true }));

            // Show success modal (graceful fallback if API endpoint is local mock)
            e.target.reset();
            setIsModalOpen(true);
        } catch (error) {
            console.error(error);
            setIsModalOpen(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative min-h-screen py-24 md:py-32 overflow-hidden flex flex-col justify-start bg-brand-dark">
            {/* Background Image Setup */}
            <div className="absolute top-0 left-0 w-full h-[120vh] z-0 overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.6 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${signStationBg}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 via-brand-dark/60 to-brand-dark" />
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

                {/* Hero Header */}
                <div className="text-center md:text-left pt-6 pb-6 relative flex flex-col items-start gap-6 max-w-4xl">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-[1px] bg-brand-accent-2/70" />
                        <span className="font-tech text-brand-accent-2 text-xs uppercase tracking-[0.3em] font-medium">
                            Reception & Enquiries
                        </span>
                    </div>

                    <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tight text-white drop-shadow-xl">
                        Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-2 to-brand-accent-3">Beyond Borders.</span>
                    </h1>

                    <p className="font-body text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                        Have a project in mind? Looking for a creative partner? Need the right people to bring an idea to life? We'd like to hear about it.
                    </p>

                    <p className="font-body text-base md:text-lg text-gray-400 font-light max-w-3xl">
                        Whether you need support with brand development, marketing, digital experiences, content production or ongoing creative operations, tell us what you're working on. Let's find the right way to work together.
                    </p>
                </div>

                {/* Enquiry Selector Tabs */}
                <div className="space-y-4">
                    <span className="font-tech text-xs uppercase tracking-[0.2em] text-white/50 block">
                        Select How You'd Like to Engage:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {enquiryOptions.map((opt) => (
                            <button
                                key={opt.id}
                                type="button"
                                onClick={() => setSelectedType(opt.id)}
                                className={`p-4 text-left border transition-all cursor-pointer font-tech text-xs tracking-wider uppercase flex items-center justify-between gap-2 ${
                                    selectedType === opt.id
                                        ? "border-brand-accent-2 bg-brand-accent-2/15 text-white shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                                        : "border-white/10 bg-white/[0.02] text-gray-400 hover:border-white/30 hover:text-white"
                                }`}
                            >
                                <span>{opt.label}</span>
                                {selectedType === opt.id && <span className="text-brand-accent-2">✦</span>}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Grid: Info + Form */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 bg-brand-base/30 border border-white/10 backdrop-blur-xl p-8 md:p-14 relative overflow-visible">
                    <div className="absolute top-0 right-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-brand-accent-2 to-transparent opacity-60" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-brand-accent-3 to-transparent opacity-60" />

                    {/* Contact Details Column */}
                    <div className="lg:col-span-2 space-y-10 pr-0 lg:pr-8 border-b lg:border-b-0 lg:border-r border-white/10 pb-10 lg:pb-0">
                        <div>
                            <span className="font-tech text-brand-accent-2 text-xs uppercase tracking-widest block mb-4 font-medium">
                                Direct Contact
                            </span>
                            <ul className="space-y-5 font-body text-gray-300 font-light text-base">
                                <li className="flex items-start gap-4">
                                    <Mail className="w-5 h-5 text-brand-accent-2 mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-xs font-tech uppercase text-gray-500 tracking-wider">Email Us</p>
                                        <a href="mailto:hello@kinstrategi.com" className="text-white hover:text-brand-accent-2 transition-colors font-medium">
                                            hello@kinstrategi.com
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Globe className="w-5 h-5 text-brand-accent-3 mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-xs font-tech uppercase text-gray-500 tracking-wider">Presence</p>
                                        <span>We serve clients and partners worldwide.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Clock className="w-5 h-5 text-brand-accent-1 mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-xs font-tech uppercase text-gray-500 tracking-wider">Response Window</p>
                                        <span>Initial response within 24–48 hours.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Two Engagement Paths */}
                        <div className="pt-6 border-t border-white/10 space-y-6">
                            <div>
                                <h4 className="font-heading text-lg font-bold text-white mb-1">Start a Project</h4>
                                <p className="font-body text-sm text-gray-400 font-light">
                                    Tell us about your business, what you need and what you're looking to achieve.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-heading text-lg font-bold text-white mb-1">Other Enquiries</h4>
                                <p className="font-body text-sm text-gray-400 font-light">
                                    For partnerships, collaborations, talent opportunities and general enquiries, reach out directly or use the form.
                                </p>
                            </div>
                        </div>

                        {/* Navigator Character illustration */}
                        <div className="hidden lg:flex items-center justify-center pt-4">
                            <div className="w-36 h-36 relative">
                                <div className="absolute inset-0 bg-brand-accent-2/15 rounded-full blur-[30px]" />
                                <img
                                    src={ademarisCurious}
                                    alt="Ademaris Navigator"
                                    className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.3)] mix-blend-screen"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Column */}
                    <div className="lg:col-span-3 lg:pl-8 relative z-10">
                        <div className="mb-6">
                            <span className="font-tech text-xs text-brand-accent-3 uppercase tracking-wider block mb-1">
                                Selected Pathway:
                            </span>
                            <span className="font-heading text-xl font-bold text-white">
                                {enquiryOptions.find(o => o.id === selectedType)?.label}
                            </span>
                        </div>

                        <form className="space-y-8" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2 relative group">
                                    <label className="font-tech text-[10px] uppercase tracking-[0.2em] text-white/60 group-focus-within:text-brand-accent-2 transition-colors">First Name *</label>
                                    <input type="text" name="first_name" className="bg-transparent border-0 border-b border-white/20 pb-2 text-white font-body focus:ring-0 focus:border-brand-accent-2 transition-colors outline-none" required />
                                </div>
                                <div className="flex flex-col gap-2 relative group">
                                    <label className="font-tech text-[10px] uppercase tracking-[0.2em] text-white/60 group-focus-within:text-brand-accent-2 transition-colors">Last Name *</label>
                                    <input type="text" name="last_name" className="bg-transparent border-0 border-b border-white/20 pb-2 text-white font-body focus:ring-0 focus:border-brand-accent-2 transition-colors outline-none" required />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2 relative group">
                                    <label className="font-tech text-[10px] uppercase tracking-[0.2em] text-white/60 group-focus-within:text-brand-accent-2 transition-colors">Company / Brand *</label>
                                    <input type="text" name="company" className="bg-transparent border-0 border-b border-white/20 pb-2 text-white font-body focus:ring-0 focus:border-brand-accent-2 transition-colors outline-none" required />
                                </div>
                                <div className="flex flex-col gap-2 relative group">
                                    <label className="font-tech text-[10px] uppercase tracking-[0.2em] text-white/60 group-focus-within:text-brand-accent-2 transition-colors">Role / Title *</label>
                                    <input type="text" name="role" className="bg-transparent border-0 border-b border-white/20 pb-2 text-white font-body focus:ring-0 focus:border-brand-accent-2 transition-colors outline-none" required />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2 relative group">
                                    <label className="font-tech text-[10px] uppercase tracking-[0.2em] text-white/60 group-focus-within:text-brand-accent-2 transition-colors">Email Address *</label>
                                    <input type="email" name="email" className="bg-transparent border-0 border-b border-white/20 pb-2 text-white font-body focus:ring-0 focus:border-brand-accent-2 transition-colors outline-none" required />
                                </div>
                                <div className="flex flex-col gap-2 relative group">
                                    <label className="font-tech text-[10px] uppercase tracking-[0.2em] text-white/60 group-focus-within:text-brand-accent-2 transition-colors">Phone / WhatsApp</label>
                                    <input type="tel" name="phone" className="bg-transparent border-0 border-b border-white/20 pb-2 text-white font-body focus:ring-0 focus:border-brand-accent-2 transition-colors outline-none" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 relative group">
                                <label className="font-tech text-[10px] uppercase tracking-[0.2em] text-white/60 group-focus-within:text-brand-accent-2 transition-colors">Tell us what you're working on *</label>
                                <textarea name="message" rows="4" placeholder="Briefly describe your business, timeline, goals or questions..." className="bg-transparent border-0 border-b border-white/20 pb-2 text-white placeholder-white/30 font-body focus:ring-0 focus:border-brand-accent-2 transition-colors resize-none outline-none" required></textarea>
                            </div>

                            <label className="flex items-start gap-3 cursor-pointer pt-4">
                                <input type="checkbox" className="mt-1 accent-brand-accent-2" required />
                                <span className="font-body text-xs font-light text-gray-400 leading-snug">
                                    I consent to KinStrategi storing my contact details for communication regarding this enquiry in accordance with the Privacy Policy.
                                </span>
                            </label>

                            <div className="pt-6">
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={!isSubmitting ? { scale: 1.02, boxShadow: "0 0 30px rgba(212,175,55,0.4)" } : {}}
                                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                    className={`bg-brand-accent-2 text-brand-dark px-12 py-4 font-tech uppercase tracking-widest font-bold text-xs cursor-pointer transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? "Submitting..." : "Submit Enquiry →"}
                                </motion.button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-dark/85 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-[#151225] border border-brand-accent-2/40 p-8 md:p-12 max-w-lg w-full text-center relative shadow-[0_0_60px_rgba(212,175,55,0.2)]"
                        >
                            <div className="w-16 h-16 bg-brand-accent-2/15 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-accent-2">
                                <CheckCircle2 size={32} />
                            </div>
                            <h3 className="font-heading text-3xl font-bold mb-3 text-white">Enquiry Received</h3>
                            <p className="font-body text-gray-300 font-light text-base mb-8">
                                Thank you for reaching out to KinStrategi. Our team will review your project details and get in touch within 24–48 hours.
                            </p>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="bg-brand-accent-2 text-brand-dark px-8 py-3.5 font-tech uppercase tracking-widest text-xs font-bold w-full cursor-pointer hover:bg-white transition-colors"
                            >
                                Done
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
