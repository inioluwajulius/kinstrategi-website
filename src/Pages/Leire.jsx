import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import leireBg from '../assets/Leiré_ Alte Gothic Surrealism Studio.png';

const services = [
    "Creative Direction & World-Building",
    "Brand Storytelling & Narrative Development",
    "Ghostwriting & Editorial",
    "Film Development & Creative Direction",
    "Experience & Campaign Design"
];

const specialties = [
    {
        title: "Travel Writing",
        desc: "Some journeys become itineraries. Others become stories. We write from lived experience, capturing the people, emotions, unexpected moments, and observations that stay with us long after we've returned home. Whether through personal essays, creative nonfiction, or reflections that later find their way into novels and screenplays, We believe every journey has the potential to become something far greater than a memory."
    },
    {
        title: "Writing & Narrative Development",
        desc: "Every story deserves to be told well. Whether you're preserving a lived experience, developing an unforgettable novel, or bringing a screenplay to life, We help transform ideas into compelling narratives that move people. From books, memoirs, and thought leadership for founders and industry experts to original fiction, dark romance, psychological thrillers, and cinematic screenplays, We craft stories with emotional depth, memorable characters, and worlds that stay with audiences long after the final page or closing scene. Whether you have a story to tell, or need one imagined from the ground up, we're here to help bring it to life."
    },
    {
        title: "Culturally Intelligent Campaigns",
        desc: "Campaigns that do more than reach an audience–they recognize them. Rooted in deep cultural fluency, emotional nuance, and strategic intent, we craft work that feels unmistakably authentic because it speaks from the inside out."
    }
];

const steps = [
    {
        step: "01",
        title: "Tell Us What You're Thinking",
        desc: "Every great project begins with a conversation. Book a discovery call or send us your brief, we'll ask thoughtful questions, uncover what matters most, and explore the best way forward together."
    },
    {
        step: "02",
        title: "We Shape the Vision",
        desc: "Together, we refine the idea into a clear creative direction. Every decision is intentional, every element has a purpose, and every step moves us closer to the outcome we're building."
    },
    {
        step: "03",
        title: "We Bring It to Life",
        desc: "This is where ideas become reality. Whether we're writing, producing, directing, designing, or building systems behind the scenes, we stay hands-on to ensure every detail serves the vision."
    },
    {
        step: "04",
        title: "You Leave with More Than Deliverables",
        desc: "The result is work that commands presence—meticulously crafted, strategically sound, and built to linger with its audience long after the campaign concludes."
    }
];

const scenarios = [
    {
        title: "Brand Campaigns",
        desc: "KinStrategi assembles the right creative team, manages production, and oversees delivery. Leiré develops the campaign concept, crafts the narrative, writes scripts, and leads the creative direction. Outcome: A campaign where strategy, storytelling, and execution move as one."
    },
    {
        title: "Events & Experiences",
        desc: "KinStrategi coordinates vendors, talent, logistics, and production timelines. Leiré creates the event concept, thematic direction, spatial storytelling, and guest experience. Outcome: An immersive experience where every detail serves the story."
    },
    {
        title: "Content & Editorial Production",
        desc: "KinStrategi builds the production workflow, manages collaborators, and keeps execution on track. Leiré develops creative concepts, editorial direction, scripts, and narrative systems that connect every piece of content. Outcome: A cohesive body of work that builds a recognizable, enduring brand."
    }
];

export default function Leire() {
    const navigate = useNavigate();
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-24 pb-32">
            {/* Background with slow push-in animation */}
            <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30 grayscale sepia-[0.2]"
                style={{ backgroundImage: `url('${leireBg}')` }}
            />
            <div className="fixed inset-0 z-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/95 to-brand-dark" />

            {/* Floating dust particles */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="fixed w-1 h-1 bg-brand-accent-2/30 rounded-full blur-[1px] z-0 pointer-events-none"
                    animate={{
                        y: ["100vh", "-20vh"],
                        x: Math.random() * 100 - 50,
                        opacity: [0, Math.random() * 0.8, 0]
                    }}
                    transition={{
                        duration: Math.random() * 15 + 10,
                        repeat: Infinity,
                        delay: Math.random() * 10,
                        ease: "linear"
                    }}
                    style={{ left: `${Math.random() * 100}%` }}
                />
            ))}

            {/* Hero Section */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-16 min-h-[85vh]">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="md:w-1/2 text-left"
                >
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: "0.1em" }}
                        animate={{ opacity: 1, letterSpacing: "0.4em" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-tech text-brand-accent-1 uppercase text-sm mb-6 block drop-shadow-sm"
                    >
                        Leiré is our creative ideation and storytelling studio.
                    </motion.span>
                    <motion.h1
                        animate={{ textShadow: ["0 0 0px #AD3A3C", "0 0 20px #AD3A3C", "0 0 0px #AD3A3C"] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="font-heading text-7xl md:text-8xl lg:text-9xl font-bold mb-8 text-white drop-shadow-2xl italic leading-tight"
                    >
                        Where ideas <br />
                        <span className="text-brand-accent-2">burst into form.</span>
                    </motion.h1>
                    <div className="font-body text-2xl text-gray-300 font-light leading-relaxed mb-10 max-w-lg border-l-2 border-brand-accent-1 pl-6">
                        <p className="mb-2"><span className="font-medium text-white shadow-sm">KinStrategi</span> builds the system.</p>
                        <p><span className="font-medium text-brand-accent-2 shadow-sm italic">Leiré</span> builds the idea.</p>
                    </div>

                    <motion.button
                        onClick={() => navigate('/sign-station')}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(173, 58, 60, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-brand-accent-1/10 border border-brand-accent-1 text-white px-10 py-5 font-heading tracking-widest uppercase text-sm shadow-[0_0_15px_rgba(173,58,60,0.2)] transition-all overflow-hidden relative group backdrop-blur-sm cursor-pointer z-20"
                    >
                        <span className="relative z-10">What's the Big Idea?</span>
                        <motion.div
                            className="absolute inset-0 bg-brand-accent-1/20 z-0 origin-left"
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        />
                    </motion.button>
                </motion.div>

                {/* Floating Abstract Element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, y: [-10, 10, -10] }}
                    transition={{
                        opacity: { duration: 1.0, delay: 0.2 },
                        scale: { duration: 1.0, delay: 0.2 },
                        y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="md:w-1/2 flex justify-center"
                >
                    <div className="w-80 h-[28rem] border border-brand-accent-2/20 rounded-t-full bg-brand-accent-2/5 backdrop-blur-sm relative overflow-hidden flex items-center justify-center group shadow-2xl">
                        <motion.div
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-t from-brand-accent-1/30 to-transparent mix-blend-overlay"
                        />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="w-56 h-56 border border-brand-accent-2/40 rounded-full border-dashed flex items-center justify-center relative z-10"
                        >
                            <motion.div
                                animate={{ rotate: -720 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="w-40 h-40 border border-brand-accent-1/40 rounded-full border-dotted"
                            />
                        </motion.div>
                        <div className="absolute inset-0 bg-white/0 group-hover:bg-brand-accent-2/10 transition-colors duration-700 pointer-events-none" />
                    </div>
                </motion.div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8 mt-32 space-y-40">
                {/* What We Do */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col lg:flex-row gap-16"
                >
                    <div className="lg:w-1/3 text-left">
                        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 italic text-brand-accent-2">What We Do</h2>
                        <p className="font-body text-gray-300 font-light text-lg mb-8 leading-relaxed">
                            Leiré focuses entirely on creative direction, writing, storytelling, and immersive concepts.
                            We are the creative studio behind the concepts, stories, and experiences that make brands unforgettable.
                        </p>
                    </div>
                    <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5, backgroundColor: "rgba(209, 174, 166, 0.1)" }}
                                className="border border-white/10 bg-brand-base/30 p-6 flex items-center backdrop-blur-sm transition-colors group"
                            >
                                <div className="w-2 h-2 bg-brand-accent-1 rounded-full mr-4 group-hover:scale-150 transition-transform" />
                                <span className="font-heading text-lg font-medium tracking-wide">{service}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Specialties */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <span className="font-tech text-brand-accent-1 text-xs uppercase tracking-[0.2em] mb-4 block">Specialties</span>
                    <h2 className="font-heading text-4xl font-bold mb-6">We specialize in a few things most studios don't.</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
                        {specialties.map((spec, idx) => (
                            <div key={idx} className="border-t border-brand-accent-2/30 pt-6 relative group">
                                <h3 className="font-heading text-2xl font-bold mb-4 italic text-brand-accent-2 group-hover:text-white transition-colors">{spec.title}</h3>
                                <p className="font-body text-gray-400 font-light leading-relaxed">{spec.desc}</p>
                                <motion.div
                                    className="absolute top-0 left-0 h-[1px] bg-brand-accent-1"
                                    initial={{ width: 0 }}
                                    whileHover={{ width: "100%" }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* How To Work With Us */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="border border-white/5 bg-brand-base/40 backdrop-blur-xl p-8 lg:p-16"
                >
                    <div className="flex flex-col lg:flex-row gap-16 justify-between items-start">
                        <div className="lg:w-1/3">
                            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 italic text-brand-accent-2">How to Work with Us</h2>
                            <p className="font-body text-gray-300 font-light text-lg mb-4 leading-relaxed font-bold">
                                Simple by design. Thoughtful by nature.
                            </p>
                            <p className="font-body text-gray-300 font-light text-lg mb-8 leading-relaxed">
                                Our process removes the friction without removing the creativity. Four clear steps that take your idea from possibility to execution.
                            </p>
                            <motion.button
                                onClick={() => navigate('/sign-station')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-brand-accent-2 text-brand-dark px-8 py-4 font-heading tracking-widest uppercase text-sm font-bold shadow-lg cursor-pointer"
                            >
                                Start a Project
                            </motion.button>
                        </div>

                        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-12">
                            {steps.map((item, idx) => (
                                <div key={idx} className="relative pt-6">
                                    <span className="font-tech text-3xl text-brand-accent-1/40 absolute top-0 left-0 z-0 font-bold select-none">{item.step}</span>
                                    <div className="relative z-10 mt-6">
                                        <h3 className="font-heading text-xl font-bold mb-3">{item.title}</h3>
                                        <p className="font-body text-gray-400 font-light text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* How KinStrategi & Leiré Work Together + Close */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row gap-16 items-center"
                >
                    <div className="w-full md:w-1/2 p-12 bg-black/30 border border-brand-accent-1/20 backdrop-blur-sm">
                        <h2 className="font-tech text-brand-accent-1 text-xs uppercase tracking-[0.2em] mb-4 block">How KinStrategi & Leiré Work Together</h2>
                        <h3 className="font-heading text-2xl font-bold mb-4 italic text-white drop-shadow-md">Two disciplines. One seamless creative ecosystem.</h3>
                        <div className="font-body text-gray-300 font-light text-sm leading-relaxed space-y-4 mb-8">
                            <p>Every great idea needs both vision and execution.</p>
                            <p><strong className="text-white">KinStrategi</strong> designs the infrastructure—building the right teams, systems, workflows, and partnerships to bring ambitious ideas to life.</p>
                            <p><strong className="text-white italic">Leiré</strong> shapes the creative vision—developing concepts, narratives, worlds, campaigns, and experiences that give those ideas meaning.</p>
                            <p>Together, they transform possibilities into work that's both strategically sound and creatively unforgettable.</p>
                        </div>
                        <ul className="space-y-6">
                            {scenarios.map((item, idx) => (
                                <li key={idx} className="flex flex-col gap-1 border-b border-white/5 pb-4 last:border-b-0 last:pb-0">
                                    <span className="font-tech text-brand-accent-2 text-[10px] tracking-widest uppercase">Scenario {idx + 1} — {item.title}</span>
                                    <span className="font-body font-light text-gray-300 text-sm leading-relaxed">{item.desc}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full md:w-1/2 text-center md:text-left px-4">
                        <h2 className="font-heading text-5xl md:text-6xl font-bold mb-4 italic text-white drop-shadow-md">
                            Good ideas need direction.
                        </h2>
                        <p className="font-heading text-3xl text-brand-accent-2 mb-10">
                            We give them that.
                        </p>

                        <motion.button
                            onClick={() => navigate('/sign-station')}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(209, 174, 166, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-brand-accent-2/10 border border-brand-accent-2 text-brand-accent-2 px-10 py-5 font-heading tracking-widest uppercase text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-accent-2/50 cursor-pointer"
                        >
                            Let's Yap
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}