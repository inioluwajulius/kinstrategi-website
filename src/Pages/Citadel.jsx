import { motion } from 'framer-motion';

const laws = [
    {
        num: "LAW I",
        title: "NO SELLING IN THE CITADEL",
        text: "Share your work. Talk about what you're building. Hype yourself up. Just don't turn the room into a marketplace. No selling, no soliciting, no \"DM me for rates.\""
    },
    {
        num: "LAW II",
        title: "HONOUR THE KIN",
        text: "Welcome every member. Respect the room. Protect the energy."
    },
    {
        num: "LAW III",
        title: "CREATE ON RECORD",
        text: "By entering, you agree that photo and video content may be used for community storytelling, unless you notify us in writing before an event."
    },
    {
        num: "LAW IV",
        title: "THE CITADEL DECIDES",
        text: "KinStrategi holds sole discretion to admit, decline, or remove any member from the community."
    }
];

export default function Citadel() {
    return (
        <div className="relative min-h-screen py-32 overflow-hidden flex flex-col justify-start">
            <div className="fixed inset-0 z-0 bg-brand-dark" />
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                className="fixed -top-[20vw] -right-[20vw] w-[60vw] h-[60vw] bg-brand-accent-2/5 rounded-full blur-[120px] z-0 pointer-events-none"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                className="fixed -bottom-[20vw] -left-[20vw] w-[50vw] h-[50vw] bg-brand-accent-3/5 rounded-full blur-[100px] z-0 pointer-events-none"
            />

            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-40">

                {/* Section 1 — Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto pt-12"
                >
                    <span className="font-tech text-brand-accent-2 text-sm tracking-[0.3em] uppercase mb-6 block">
                        Vetted Creative Community
                    </span>
                    <h1 className="font-heading text-6xl md:text-8xl font-bold uppercase tracking-wide mb-6 text-white drop-shadow-xl">
                        The <span className="text-brand-accent-2">Citadel.</span>
                    </h1>
                    <h2 className="font-heading text-3xl md:text-4xl text-gray-200 mb-8 italic">
                        By invite only. For a reason.
                    </h2>
                    <p className="font-body text-xl text-gray-300 font-light leading-relaxed mb-16">
                        The Citadel is KinStrategi's invite-only community of vetted creative professionals, brand builders, and storytellers from across the world, connected by craft, standards, and a shared understanding of what good work actually looks like.
                    </p>

                    <div className="border border-white/10 bg-black/40 backdrop-blur-md p-6 font-tech text-xs text-white/50 tracking-widest uppercase overflow-hidden whitespace-nowrap relative">
                        <motion.div
                            animate={{ x: ["100%", "-100%"] }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="inline-block"
                        >
                            <span className="mr-8">Members have worked with:</span>
                            <span className="text-white mx-4">Nike</span> |
                            <span className="text-white mx-4">Spotify</span> |
                            <span className="text-white mx-4">Netflix</span> |
                            <span className="text-white mx-4">Google</span> |
                            <span className="text-white mx-4">LVMH</span> |
                            <span className="text-white mx-4">Apple</span>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Section 2 — What's in the Citadel */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    <div className="border-t border-brand-accent-2/30 pt-8">
                        <span className="font-tech text-brand-accent-2 text-xs uppercase tracking-widest mb-4 block">Events</span>
                        <p className="font-body text-gray-300 font-light leading-relaxed">
                            Attend in-person and virtual events, workshops, and panels designed to sharpen your creative edge and expand your world.
                        </p>
                    </div>
                    <div className="border-t border-brand-accent-1/30 pt-8">
                        <span className="font-tech text-brand-accent-1 text-xs uppercase tracking-widest mb-4 block">Co-Created Content</span>
                        <p className="font-body text-gray-300 font-light leading-relaxed">
                            Collaborate on vodcasts, cultural frameworks, and creative insights that shape the industry conversation. Get involved, and get the credit.
                        </p>
                    </div>
                    <div className="border-t border-brand-accent-3/30 pt-8">
                        <span className="font-tech text-brand-accent-3 text-xs uppercase tracking-widest mb-4 block">The Kin Network</span>
                        <p className="font-body text-gray-300 font-light leading-relaxed">
                            Connect with creative leaders across brand strategy, content, production, and culture. Think bigger with people who get it.
                        </p>
                    </div>
                </motion.div>

                {/* Section 4 — Enter the Citadel */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full aspect-video md:aspect-[21/9] border border-white/5 flex items-center justify-center overflow-hidden bg-black group"
                >
                    <div className="absolute inset-0 bg-brand-base/20 mix-blend-screen z-0 group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-black/60 z-10" />

                    <div className="relative z-20 text-center px-4 max-w-3xl bg-black/40 p-8 backdrop-blur-sm border border-white/10 rounded-sm">
                        <h2 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-wider drop-shadow-2xl">This is not a job board.</h2>
                        <div className="font-body text-xl text-white font-medium leading-relaxed space-y-4 drop-shadow-md">
                            <p>This is not a job board. This is not a talent database.</p>
                            <p>The Citadel is a room we built for the creatives we know, trust, and reach out to first when something important lands.</p>
                            <p className="text-brand-accent-2 font-bold text-2xl mt-4">Getting in means you belong here. And belonging here means the right opportunities find you.</p>
                        </div>
                    </div>
                </motion.div>

                {/* Section 3 — Meet Team KinStrategi / Section 5 — Why Enter */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="font-heading text-4xl font-bold mb-6">Meet Team KinStrategi</h3>
                        <p className="font-tech text-brand-accent-2 text-xs uppercase tracking-widest mb-8">The people behind the operation.</p>
                        <div className="bg-white/5 border border-white/10 p-8">
                            <h4 className="font-heading text-2xl font-bold mb-2">Adeshewa Adeniran</h4>
                            <p className="font-tech text-white/50 text-[10px] uppercase tracking-widest mb-4">Founding Director & Operations Specialist</p>
                            <p className="font-body text-gray-300 font-light text-sm leading-relaxed">
                                Adeshewa Adeniran didn't start KinStrategi on a whim, she built it out of conviction. Having spent years deeply embedded in the creative industry, she watched the same story play out repeatedly: talented creatives landing in the wrong rooms, and brilliant brands struggling to find the right people to bring their vision to life.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="font-heading text-4xl font-bold mb-6">Why Enter</h3>
                        <div className="font-body text-lg text-gray-300 font-light leading-relaxed space-y-4">
                            <p>
                                Creative work is often the most undervalued layer of any brand. And creatives often lack the space, the connections, or the right context to do their boldest work.
                            </p>
                            <p>
                                We built The Citadel to change that.
                            </p>
                            <p className="text-white font-medium text-xl mt-4">
                                Focus starts here. Join a community of excellence and leave the outside world at the door.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Section 6 — Laws of the Citadel */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="border border-brand-accent-1/20 bg-brand-base/30 backdrop-blur-md p-8 md:p-16"
                >
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Laws of the Citadel</h2>
                        <p className="font-tech text-brand-accent-1 text-sm uppercase tracking-widest">Once you're in, these are non-negotiable.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {laws.map((law, idx) => (
                            <div key={idx} className="relative">
                                <span className="font-tech text-4xl text-white/5 absolute -top-6 -left-4 font-bold select-none">{law.num}</span>
                                <div className="relative z-10">
                                    <h4 className="font-heading text-xl font-bold mb-3 uppercase tracking-wide text-brand-accent-2">{law.title}</h4>
                                    <p className="font-body text-gray-400 font-light leading-relaxed">{law.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Section 7 — How to Get In (Form) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-4xl font-bold mb-6">How to Get In</h2>
                        <p className="font-body text-lg text-gray-300 font-light mb-4">
                            Fill in the form below. If you're the right fit, an invitation will find its way to your inbox.
                        </p>
                        <p className="font-body text-lg text-gray-300 font-light">
                            The Citadel is invite-only. We don't rush these decisions. Great creatives know great creatives, and if someone already inside vouches for you, even better.
                        </p>
                    </div>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert("Your application has been received. We review all signals carefully and will reach out if there's a match.");
                        }}
                        className="space-y-6 bg-black/30 border border-white/10 p-8 md:p-12"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="font-tech text-xs uppercase tracking-widest text-brand-accent-2">First Name</label>
                                <input type="text" className="bg-transparent border-b border-white/20 pb-2 text-white font-body focus:outline-none focus:border-brand-accent-2 transition-colors" required />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-tech text-xs uppercase tracking-widest text-brand-accent-2">Last Name</label>
                                <input type="text" className="bg-transparent border-b border-white/20 pb-2 text-white font-body focus:outline-none focus:border-brand-accent-2 transition-colors" required />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-tech text-xs uppercase tracking-widest text-brand-accent-2">Discipline / Role</label>
                            <input type="text" className="bg-transparent border-b border-white/20 pb-2 text-white font-body focus:outline-none focus:border-brand-accent-2 transition-colors" required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-tech text-xs uppercase tracking-widest text-brand-accent-2">Portfolio or LinkedIn URL</label>
                            <input type="url" className="bg-transparent border-b border-white/20 pb-2 text-white font-body focus:outline-none focus:border-brand-accent-2 transition-colors" required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-tech text-xs uppercase tracking-widest text-brand-accent-2">How did you hear about The Citadel?</label>
                            <input type="text" className="bg-transparent border-b border-white/20 pb-2 text-white font-body focus:outline-none focus:border-brand-accent-2 transition-colors" required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-tech text-xs uppercase tracking-widest text-brand-accent-2">Why do you want in? (Short answer)</label>
                            <textarea rows="3" className="bg-transparent border-b border-white/20 pb-2 text-white font-body focus:outline-none focus:border-brand-accent-2 transition-colors resize-none" required></textarea>
                        </div>
                        <div className="pt-8 text-center flex flex-col items-center">
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-brand-accent-2 text-brand-dark px-12 py-5 font-heading uppercase tracking-widest font-bold text-sm w-full sm:w-auto cursor-pointer"
                            >
                                Signal Sent
                            </motion.button>
                        </div>
                    </form>
                </motion.div>

                {/* Section 8 — What Our Kin Say */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto py-16 border-y border-white/10"
                >
                    <h2 className="font-heading text-3xl md:text-5xl font-light italic text-white mb-8 leading-relaxed">
                        "KinStrategi completely transformed our approach to creative operations. We finally have a structure that matches our ambition."
                    </h2>
                    <p className="font-tech text-brand-accent-1 text-sm uppercase tracking-widest mb-1">Sarah Jenkins</p>
                    <p className="font-body text-gray-400 font-light">Chief Marketing Officer — Velle Industries</p>
                </motion.div>

                {/* Section 9 — Partnerships & Collaborations */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="font-heading text-3xl font-bold mb-8">Want to co-create, partner, or build something with KinStrategi?</h2>
                    <motion.a
                        href="mailto:shewa@kinstrategi.com"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(91, 62, 150, 0.4)" }}
                        className="inline-block bg-brand-accent-1/20 border border-brand-accent-1 text-white px-10 py-5 font-heading tracking-widest uppercase text-sm transition-all"
                    >
                        Reach Out: shewa@kinstrategi.com
                    </motion.a>
                </motion.div>

            </div>
        </div>
    );
}
