import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronRight, Palette, Megaphone, Monitor, Film, Users2, Sparkles, Check } from 'lucide-react';
import homeBg from '../assets/new-hero-bg.webp';
import founderImg from '../safe-assets/about/founder.jpg';
import landaImg from '../assets/about/landa.jpg';
import ademarisGreeting from '../safe-assets/navigator/ademaris-greeting.png';
import iconImage from '../assets/Icon.png';
import TypewriterHeadline from '../components/TypewriterHeadline';

const FounderCard = ({ founder, isReversed }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} border border-white/10 bg-gradient-to-br from-[#1E1B3C]/80 via-brand-dark/95 to-[#111111]/95 backdrop-blur-2xl overflow-hidden shadow-[0_0_50px_rgba(0,167,167,0.08)] relative group`}
        >
            {/* Cyber Grid Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
            
            <div className={`w-full lg:w-2/5 min-h-[380px] lg:min-h-full relative group/img shrink-0 z-10 border-b lg:border-b-0 ${isReversed ? 'lg:border-l' : 'lg:border-r'} border-white/10 overflow-hidden`}>
                <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-brand-accent-2/10 mix-blend-overlay group-hover/img:opacity-0 transition-opacity duration-500 pointer-events-none" />
            </div>
            
            <div className="w-full lg:w-3/5 p-8 md:p-12 lg:p-14 flex flex-col justify-between text-left relative z-10">
                <div>
                    <span className="font-tech text-brand-accent-2 text-xs uppercase tracking-widest block mb-2 font-medium">
                        Founding Leadership
                    </span>
                    <h3 className="font-heading text-3xl md:text-4xl font-bold mb-2 text-white">{founder.name}</h3>
                    <p className="font-tech text-brand-accent-3 text-xs md:text-sm uppercase tracking-widest mb-6 border-b border-white/10 pb-3 inline-block">
                        {founder.role}
                    </p>
                    
                    {/* Balanced Visible Excerpt */}
                    <div className="font-body opacity-85 text-base md:text-lg font-light leading-relaxed space-y-4 text-gray-200">
                        {founder.bio1}
                    </div>

                    {/* Smooth Expandable Content */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                                className="overflow-hidden font-body opacity-85 text-base md:text-lg font-light leading-relaxed space-y-4 pt-4 text-gray-200 border-t border-white/5 mt-4"
                            >
                                {founder.bio2}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="flex flex-wrap gap-4 items-center justify-between mt-8 pt-6 border-t border-white/10 w-full relative z-10">
                    <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-brand-accent-2 font-tech uppercase tracking-widest text-xs border border-brand-accent-2/50 px-5 py-2.5 hover:bg-brand-accent-2 hover:text-brand-dark transition-all duration-300 cursor-pointer flex items-center gap-2"
                    >
                        <span>{isExpanded ? 'Read Less' : 'Read Full Bio'}</span>
                        <span>{isExpanded ? '↑' : '↓'}</span>
                    </button>
                    {founder.linkedin && (
                        <motion.button
                            onClick={() => window.open(founder.linkedin, "_blank")}
                            whileHover={{ x: 4, color: "#fff" }}
                            className="text-brand-accent-3 font-tech uppercase tracking-widest text-xs transition-all cursor-pointer flex items-center gap-1.5"
                        >
                            <span>Connect on LinkedIn</span>
                            <span>→</span>
                        </motion.button>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default function Home() {
    const navigate = useNavigate();

    const foundersData = [
        {
            name: "Adeshewa Adeniran",
            firstName: "Adeshewa",
            role: "Visionary & Creative Strategist",
            image: founderImg,
            linkedin: "https://www.linkedin.com/in/adeshewa-adeniran-76a6a0166",
            bio1: (
                <>
                    <h4 className="font-heading text-xl md:text-2xl text-brand-accent-2 italic font-semibold mb-2">
                        Do You Believe in Aliens?
                    </h4>
                    <p className="text-white font-medium">I do.</p>
                    <p>Actually... I think you do, too. Not the sci-fi kind, but the ones who never quite fit the mold. The minds that look at disarray, and instantly spot the foreboding bottlenecks.</p>
                    <p className="italic text-brand-accent-2/90">Allow me to introduce you to one.</p>
                    <p className="font-medium text-white">Hello, I’m Adeshewa Adeniran.</p>
                    <p>People have called me creative, strategic, operational, analytical, or simply "too many things at once." I’ve always suspected they were all trying to say the same thing: I don't believe in choosing between imagination and structure.</p>
                    <p>My mind is an ecosystem where storytelling, process engineering, and brand building live under one roof. One moment I’m worldbuilding a campaign; the next, I’m engineering operational workflows or aligning talent that was meant to cross paths. To me, these aren't separate disciplines, they are facets of a single creative act.</p>
                </>
            ),
            bio2: (
                <>
                    <h5 className="font-heading text-xl text-white font-bold pt-2 text-brand-accent-2">Why KinStrategi Exists</h5>
                    <p>I watched the same tragedy repeat across the creative industries: brilliant founders exhausted by friction, and profound ideas fracturing not for lack of imagination, but for lack of structural alignment. The industry was hunting for talent; no one was hunting for a fit.</p>
                    <p>That obsession became <strong className="text-white font-medium">KinStrategi</strong>.</p>
                    <p><strong className="text-white font-medium">KinStrategi</strong> exists to bring rare harmony to creative execution—curating teams that don't merely function, but fundamentally click. Because enduring creative outcomes happen when the right people, systems, and vision converge.</p>
                    <p>Anchoring all of this motion are my two dogs, <strong className="text-brand-accent-2 font-medium">Neo-Wolf</strong> and <strong className="text-brand-accent-2 font-medium">Jojo</strong>.</p>
                    <p>They interrupt for unprompted cuddles and force me into a world where I'd happily vanish down creative rabbit holes. They’ve taught me a principle I carry into every boardroom and brand partnership: the most resilient relationships are built on trust, patience, insatiable curiosity, and showing up consistently.</p>
                    <p>So, yes... perhaps I am an alien. Not because I belong to another planet, but because I’ve never viewed creativity, operations, strategy, and human connection as separate worlds.</p>
                    <p className="text-brand-accent-2 font-medium">To me, they have always been the same universe.</p>
                    <p className="font-heading text-xl italic text-white pt-2">Welcome to mine.</p>
                </>
            )
        },
        {
            name: "Iolanda Apulu",
            firstName: "Landa",
            role: "Co-Founder & Marketing & Partnerships Strategist",
            image: landaImg,
            linkedin: null,
            bio1: (
                <>
                    <p>Landa is a lawyer, community builder, brand and experience strategist, talent manager and PR professional working at the intersection of people, culture, relationships and opportunity.</p>
                    <p>As Co-Founder & Marketing & Partnerships Strategist at KinStrategi, she builds the relationship ecosystem around the company—connecting ideas, brands and people with the communities, talent, partners and cultural spaces that can help them move further.</p>
                    <p>Her multidisciplinary background across law, strategy, events, talent and communications gives her a unique ability to move between the human and the structural. She understands how to build genuine relationships while also thinking about the commercial, strategic and practical frameworks that allow those relationships to create value.</p>
                </>
            ),
            bio2: (
                <>
                    <p>Landa is naturally curious about people: what connects them, what motivates them and what becomes possible when the right people are brought together. She has an instinct for spotting meaningful connections and creating the conditions for them to grow.</p>
                    <p>At KinStrategi, Landa works at the point where strategy becomes relationship—asking not only what are we building?, but who should we build it with?</p>
                    <p>She leads work across partnerships, PR, community, talent, events, experiences and market access, while building the wider Kin Network of creatives, founders, specialists, collaborators and cultural connectors.</p>
                    <p>For Landa, community is more than an audience and a partnership is more than a contact. The strongest ecosystems are built through trust, mutual value and relationships that exist beyond the moment of transaction.</p>
                    <h4 className="font-heading text-xl md:text-2xl text-brand-accent-2 italic font-semibold mt-6">
                        “I believe the right people, brought together with intention, can make almost anything more possible.”
                    </h4>
                </>
            )
        }
    ];

    return (
        <div className="relative w-full flex flex-col items-center justify-start overflow-hidden pt-10 md:pt-16 pb-24 md:pb-48">
            {/* Background Image Setup */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.7 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
                style={{ backgroundImage: `url('${homeBg}')` }}
            />
            <div className="fixed inset-0 z-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/90 pointer-events-none" />

            {/* Ambient Hero Glows */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-accent-2/10 rounded-full blur-[150px] pointer-events-none z-0" />
            <div className="absolute top-40 left-1/3 w-[450px] h-[350px] bg-brand-accent-3/10 rounded-full blur-[130px] pointer-events-none z-0" />

            {/* HERO SECTION */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto min-h-[75vh] flex flex-col items-center justify-center mt-2 md:mt-6">
                {/* Top Icon */}
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="mb-6 w-20 h-20 sm:w-28 sm:h-28 relative flex items-center justify-center mx-auto"
                >
                    <div className="absolute inset-0 bg-brand-accent-2/20 rounded-full blur-[20px] pointer-events-none animate-pulse-slow" />
                    <img src={iconImage} alt="KINSTRATEGI Icon" className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_20px_rgba(196,164,92,0.4)]" />
                </motion.div>

                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="font-tech text-brand-accent-3 tracking-[0.3em] uppercase text-xs md:text-sm mb-6 block drop-shadow-sm font-medium"
                >
                    For founders building beyond borders.
                </motion.span>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="relative w-full flex justify-center mb-8"
                >
                    <TypewriterHeadline />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="font-body text-base md:text-xl text-gray-300 font-light max-w-3xl mx-auto mb-8 leading-relaxed"
                >
                    KinStrategi is a creative strategy and operations company helping founders and businesses develop their brands, create meaningful experiences and bring ideas to life. From brand development and marketing to digital experiences, content production and creative team management, we bring the right strategy, people and execution together.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="font-heading text-lg md:text-xl text-brand-accent-2 italic mb-12"
                >
                    Our work is about building more than a brand. It's about building the world around it.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-5 justify-center w-full max-w-md mx-auto"
                >
                    <button
                        onClick={() => navigate('/services')}
                        className="bg-brand-accent-2 text-brand-dark px-8 py-4 font-tech uppercase tracking-widest text-xs font-bold cursor-pointer transition-all hover:bg-white hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2"
                    >
                        <span>Explore Our Services</span>
                        <ArrowRight size={14} />
                    </button>

                    <button
                        onClick={() => navigate('/contact')}
                        className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 font-tech uppercase tracking-widest text-xs cursor-pointer transition-all flex items-center justify-center gap-2"
                    >
                        <span>Work With Us</span>
                        <ChevronRight size={14} />
                    </button>
                </motion.div>
            </div>

            {/* MAIN SECTIONS CONTAINER */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-28 space-y-36">

                {/* 1. WHAT WE DO SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center"
                >
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-[1px] bg-brand-accent-3/70" />
                        <span className="font-tech text-brand-accent-3 text-xs uppercase tracking-[0.3em] font-medium">What We Do</span>
                        <div className="w-8 h-[1px] bg-brand-accent-3/70" />
                    </div>

                    <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-white">
                        Five Connected Areas of Work
                    </h2>
                    <p className="font-body text-gray-300 text-lg md:text-xl font-light max-w-2xl mb-14 leading-relaxed">
                        We help businesses build, position and grow through five connected areas of work.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 w-full text-left">
                        {/* 01: Brand Strategy & Identity (Span 3) */}
                        <div 
                            onClick={() => navigate('/services')}
                            className="lg:col-span-3 p-8 border border-white/10 bg-gradient-to-br from-[#1C1835]/50 to-brand-dark/95 backdrop-blur-md flex flex-col justify-between hover:border-brand-accent-2/60 transition-all duration-300 group hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.3)] cursor-pointer"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="font-tech text-brand-accent-2 text-sm font-bold tracking-widest">01.</span>
                                    <Palette className="w-5 h-5 text-brand-accent-2/80 group-hover:text-brand-accent-2 transition-colors" />
                                </div>
                                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-brand-accent-2 transition-colors">
                                    Brand Strategy & Identity
                                </h3>
                                <p className="font-body text-gray-300 font-light text-sm mb-6 leading-relaxed">
                                    We help businesses define who they are, how they are positioned and how they show up with distinction.
                                </p>
                            </div>
                            <ul className="space-y-2 border-t border-white/10 pt-4 text-xs font-tech tracking-wider text-gray-400 uppercase">
                                <li>• Brand strategy & positioning</li>
                                <li>• Visual identity development</li>
                                <li>• Brand development & creative direction</li>
                            </ul>
                        </div>

                        {/* 02: Marketing & Brand Experiences (Span 3) */}
                        <div 
                            onClick={() => navigate('/services')}
                            className="lg:col-span-3 p-8 border border-white/10 bg-gradient-to-br from-[#1C1835]/50 to-brand-dark/95 backdrop-blur-md flex flex-col justify-between hover:border-brand-accent-3/60 transition-all duration-300 group hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.3)] cursor-pointer"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="font-tech text-brand-accent-3 text-sm font-bold tracking-widest">02.</span>
                                    <Megaphone className="w-5 h-5 text-brand-accent-3/80 group-hover:text-brand-accent-3 transition-colors" />
                                </div>
                                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-brand-accent-3 transition-colors">
                                    Marketing & Brand Experiences
                                </h3>
                                <p className="font-body text-gray-300 font-light text-sm mb-6 leading-relaxed">
                                    We develop marketing campaigns and experiences that connect brands deeply with their audiences.
                                </p>
                            </div>
                            <ul className="space-y-2 border-t border-white/10 pt-4 text-xs font-tech tracking-wider text-gray-400 uppercase">
                                <li>• Experiential & Event Marketing</li>
                                <li>• Fashion & Lifestyle Marketing</li>
                                <li>• Influencer Strategy & Creator Collabs</li>
                            </ul>
                        </div>

                        {/* 03: Digital Experience & Product Design (Featured Span 6) */}
                        <div 
                            onClick={() => navigate('/services')}
                            className="lg:col-span-6 p-8 md:p-10 border border-white/10 bg-gradient-to-br from-[#201C3E]/60 via-brand-dark/95 to-[#151226]/95 backdrop-blur-md flex flex-col md:flex-row justify-between gap-6 hover:border-brand-accent-1/60 transition-all duration-300 group hover:-translate-y-1 shadow-[0_4px_25px_rgba(0,0,0,0.3)] cursor-pointer"
                        >
                            <div className="md:w-1/2">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="font-tech text-brand-accent-1 text-sm font-bold tracking-widest">03.</span>
                                    <span className="px-2.5 py-0.5 bg-brand-accent-1/20 text-brand-accent-1 font-tech text-[10px] uppercase tracking-widest border border-brand-accent-1/40">Interactive</span>
                                </div>
                                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-brand-accent-1 transition-colors">
                                    Digital Experience & Product Design
                                </h3>
                                <p className="font-body text-gray-300 font-light text-base leading-relaxed">
                                    We design and develop digital experiences that make businesses easier to discover, navigate, and engage with worldwide.
                                </p>
                            </div>
                            <div className="md:w-1/2 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8">
                                <ul className="space-y-2.5 text-xs font-tech tracking-wider text-gray-300 uppercase">
                                    <li className="flex items-center gap-2"><span className="text-brand-accent-1">✦</span> UI/UX design & design systems</li>
                                    <li className="flex items-center gap-2"><span className="text-brand-accent-1">✦</span> Custom website design & engineering</li>
                                    <li className="flex items-center gap-2"><span className="text-brand-accent-1">✦</span> Digital product design & interactive experiences</li>
                                </ul>
                            </div>
                        </div>

                        {/* 04: Creative Strategy & Content Production (Span 3) */}
                        <div 
                            onClick={() => navigate('/services')}
                            className="lg:col-span-3 p-8 border border-white/10 bg-gradient-to-br from-[#1C1835]/50 to-brand-dark/95 backdrop-blur-md flex flex-col justify-between hover:border-brand-accent-2/60 transition-all duration-300 group hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.3)] cursor-pointer"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="font-tech text-brand-accent-2 text-sm font-bold tracking-widest">04.</span>
                                    <Film className="w-5 h-5 text-brand-accent-2/80 group-hover:text-brand-accent-2 transition-colors" />
                                </div>
                                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-brand-accent-2 transition-colors">
                                    Creative Strategy & Content Production
                                </h3>
                                <p className="font-body text-gray-300 font-light text-sm mb-6 leading-relaxed">
                                    We turn ideas into creative concepts, narratives, campaigns and video content that communicate a brand's vision.
                                </p>
                            </div>
                            <ul className="space-y-2 border-t border-white/10 pt-4 text-xs font-tech tracking-wider text-gray-400 uppercase">
                                <li>• Creative strategy & campaign conceptualisation</li>
                                <li>• Creative content development</li>
                                <li>• Video production, editing & campaign media</li>
                            </ul>
                        </div>

                        {/* 05: Creative Operations & Talent (Span 3) */}
                        <div 
                            onClick={() => navigate('/services')}
                            className="lg:col-span-3 p-8 border border-white/10 bg-gradient-to-br from-[#1C1835]/50 to-brand-dark/95 backdrop-blur-md flex flex-col justify-between hover:border-brand-accent-3/60 transition-all duration-300 group hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.3)] cursor-pointer"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="font-tech text-brand-accent-3 text-sm font-bold tracking-widest">05.</span>
                                    <Users2 className="w-5 h-5 text-brand-accent-3/80 group-hover:text-brand-accent-3 transition-colors" />
                                </div>
                                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-brand-accent-3 transition-colors">
                                    Creative Operations & Talent
                                </h3>
                                <p className="font-body text-gray-300 font-light text-sm mb-6 leading-relaxed">
                                    We help businesses source talent, build creative teams and manage the processes that keep work moving.
                                </p>
                            </div>
                            <ul className="space-y-2 border-t border-white/10 pt-4 text-xs font-tech tracking-wider text-gray-400 uppercase">
                                <li>• Creative talent sourcing & recruitment</li>
                                <li>• Talent coordination & management</li>
                                <li>• Ongoing creative operations & workflow support</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12">
                        <button
                            onClick={() => navigate('/services')}
                            className="inline-flex items-center gap-2 border border-brand-accent-2/40 bg-brand-accent-2/10 text-brand-accent-2 hover:bg-brand-accent-2 hover:text-brand-dark px-6 py-3 font-tech text-xs uppercase tracking-widest font-bold transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                        >
                            <span>Explore Detailed Deliverables in Services</span>
                            <ArrowRight size={14} />
                        </button>
                    </div>
                </motion.div>

                {/* 2. HOW WE WORK */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative border border-white/10 bg-gradient-to-br from-[#1C1835]/60 via-brand-dark/95 to-[#111111]/95 backdrop-blur-2xl p-8 md:p-14 overflow-hidden"
                >
                    {/* Decorative Corner Borders */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-accent-2/60 z-20 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-brand-accent-2/60 z-20 pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-accent-2/60 z-20 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-brand-accent-2/60 z-20 pointer-events-none" />

                    <div className="absolute top-0 right-0 w-72 h-72 bg-brand-accent-2/10 rounded-full blur-[80px] pointer-events-none" />

                    <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
                        <div className="flex items-center justify-center gap-3 mb-3">
                            <div className="w-8 h-[1px] bg-brand-accent-2/70" />
                            <span className="font-tech text-brand-accent-2 text-xs uppercase tracking-[0.3em] font-medium">Engagement Models</span>
                            <div className="w-8 h-[1px] bg-brand-accent-2/70" />
                        </div>
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
                            How We Work
                        </h2>
                        <p className="font-body text-gray-300 font-light text-lg md:text-xl leading-relaxed">
                            Every business has different needs. Some need us for a specific project. Others need an ongoing creative partner. We work through two engagement models:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                        {/* Model 1 */}
                        <div className="p-8 border border-white/10 bg-white/[0.02] flex flex-col justify-between hover:border-brand-accent-3/50 transition-colors">
                            <div>
                                <span className="inline-block px-3 py-1 bg-brand-accent-3/15 border border-brand-accent-3/40 text-brand-accent-3 font-tech text-[10px] tracking-widest uppercase mb-4">
                                    Model 01
                                </span>
                                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
                                    Project-Based Engagements
                                </h3>
                                <p className="font-body text-gray-300 font-light text-base leading-relaxed mb-6">
                                    Have a launch, campaign, rebrand, website or creative project in mind? We work with you from planning to execution, with a clearly defined scope, deliverables and timeline.
                                </p>
                            </div>
                            <ul className="space-y-2.5 border-t border-white/10 pt-4 text-xs font-tech text-gray-300 tracking-wider">
                                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-accent-3 shrink-0" /> Defined deliverables & clear timelines</li>
                                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-accent-3 shrink-0" /> Full lifecycle project oversight</li>
                                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-accent-3 shrink-0" /> Transparent scoping & milestone execution</li>
                            </ul>
                        </div>

                        {/* Model 2 */}
                        <div className="p-8 border border-white/10 bg-white/[0.02] flex flex-col justify-between hover:border-brand-accent-2/50 transition-colors">
                            <div>
                                <span className="inline-block px-3 py-1 bg-brand-accent-2/15 border border-brand-accent-2/40 text-brand-accent-2 font-tech text-[10px] tracking-widest uppercase mb-4">
                                    Model 02
                                </span>
                                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
                                    Ongoing Creative Partnerships
                                </h3>
                                <p className="font-body text-gray-300 font-light text-base leading-relaxed mb-6">
                                    Need a creative team in your corner? Retain KinStrategi for ongoing creative strategy, direction, coordination and operational support. We adapt our involvement to your business, your goals and the work ahead.
                                </p>
                            </div>
                            <ul className="space-y-2.5 border-t border-white/10 pt-4 text-xs font-tech text-gray-300 tracking-wider">
                                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-accent-2 shrink-0" /> Embedded strategy & creative direction</li>
                                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-accent-2 shrink-0" /> Continuous operational coordination</li>
                                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-accent-2 shrink-0" /> Flexible scale that grows with your business</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* 3. BUILDING BEYOND THE BRIEF (WITH TRAVELING BEAM ANIMATION) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full relative group"
                >
                    {/* Animated Traveling Borders */}
                    <div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden z-20 pointer-events-none">
                        <motion.div 
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                            className="w-1/2 h-full bg-gradient-to-r from-transparent via-brand-accent-2 to-transparent" 
                        />
                    </div>
                    <div className="absolute top-0 right-0 w-[1px] h-full overflow-hidden z-20 pointer-events-none">
                        <motion.div 
                            animate={{ y: ["-100%", "200%"] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 0.8 }}
                            className="w-full h-1/2 bg-gradient-to-b from-transparent via-brand-accent-2 to-transparent" 
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden z-20 pointer-events-none">
                        <motion.div 
                            animate={{ x: ["200%", "-100%"] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 1.6 }}
                            className="w-1/2 h-full bg-gradient-to-l from-transparent via-brand-accent-2 to-transparent" 
                        />
                    </div>
                    <div className="absolute top-0 left-0 w-[1px] h-full overflow-hidden z-20 pointer-events-none">
                        <motion.div 
                            animate={{ y: ["200%", "-100%"] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 2.4 }}
                            className="w-full h-1/2 bg-gradient-to-t from-transparent via-brand-accent-2 to-transparent" 
                        />
                    </div>

                    <div className="w-full bg-gradient-to-br from-brand-dark/95 to-[#111111]/95 backdrop-blur-xl border border-white/10 p-10 md:p-16 lg:p-20 relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)]">
                        <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-accent-2/10 blur-[120px] rounded-full pointer-events-none" />
                        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-accent-3/10 blur-[120px] rounded-full pointer-events-none" />
                        
                        <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                            {/* Left Column */}
                            <div className="w-full lg:w-5/12 flex flex-col justify-start">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-8 h-[1px] bg-brand-accent-2/70" />
                                    <span className="font-tech text-brand-accent-2 text-xs uppercase tracking-[0.2em] font-medium">The KinStrategi Approach</span>
                                </div>
                                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
                                    Building Beyond the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-2 to-brand-accent-3">Brief.</span>
                                </h2>
                            </div>

                            {/* Right Column */}
                            <div className="w-full lg:w-7/12 flex flex-col justify-center">
                                <div className="font-body text-lg md:text-xl font-light leading-relaxed space-y-6 text-gray-300">
                                    <p className="text-xl md:text-2xl font-medium text-white border-l-2 border-brand-accent-2/60 pl-6">
                                        A brand is more than its logo. A campaign is more than its content. And a business is more than the products or services it sells.
                                    </p>
                                    <p className="pl-6 md:pl-8">
                                        Everything connects: the identity, the people, the experiences, the marketing, the digital touchpoints and the systems behind the work.
                                    </p>
                                    <p className="pl-6 md:pl-8 text-brand-accent-2 font-medium">
                                        We bring these elements together to help businesses build with intention and grow with structure. That's the KinStrategi approach.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 4. THE FOUNDERS SECTION */}
                <div className="space-y-16 lg:space-y-24 mb-16 relative w-full">
                    <div className="flex items-center gap-4 justify-center relative z-10 w-full pt-6">
                        <div className="w-12 md:w-24 h-[1px] bg-brand-accent-2/70" />
                        <span className="font-tech text-brand-accent-2 text-sm md:text-base uppercase tracking-[0.4em] font-medium">The Founding Team</span>
                        <div className="w-12 md:w-24 h-[1px] bg-brand-accent-2/70" />
                    </div>
                    {foundersData.map((founder, index) => (
                        <FounderCard key={founder.name} founder={founder} isReversed={index % 2 !== 0} />
                    ))}
                </div>

                {/* 5. LET'S BUILD SOMETHING (FINAL CTA SECTION) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative border border-brand-accent-2/40 bg-gradient-to-r from-[#1E1B3C]/90 via-brand-dark/95 to-[#1E1B3C]/90 backdrop-blur-2xl p-10 md:p-16 text-center overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-80 h-80 bg-brand-accent-2/15 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-accent-3/15 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                        <span className="font-tech text-brand-accent-3 text-xs uppercase tracking-[0.3em] font-medium">
                            Take The Next Step
                        </span>
                        <h2 className="font-heading text-4xl md:text-6xl font-bold text-white">
                            Let's Build Something
                        </h2>
                        <p className="font-body text-gray-300 font-light text-lg md:text-xl leading-relaxed">
                            Have a project in mind? Need a creative team? Looking for a long-term strategic partner? Let's figure out what your business needs and how we can help.
                        </p>
                        <div className="pt-4 flex flex-col sm:flex-row gap-5 justify-center">
                            <button
                                onClick={() => navigate('/contact')}
                                className="bg-brand-accent-2 text-brand-dark px-10 py-4 font-tech uppercase tracking-widest text-xs font-bold cursor-pointer transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2"
                            >
                                <span>Start a Project</span>
                                <ArrowRight size={14} />
                            </button>
                            <button
                                onClick={() => navigate('/contact')}
                                className="border border-white/20 text-white hover:bg-white/10 px-10 py-4 font-tech uppercase tracking-widest text-xs cursor-pointer transition-all flex items-center justify-center gap-2"
                            >
                                <span>Partner With KinStrategi</span>
                                <ChevronRight size={14} />
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* 6. BROADCAST CHANNEL (NEWSLETTER) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-5xl mx-auto pt-16 md:pt-0"
                >
                    <div className="w-full border border-white/10 bg-gradient-to-br from-brand-base/60 via-[#1E1B3C]/70 to-brand-dark/80 backdrop-blur-2xl shadow-[0_0_60px_rgba(91,62,150,0.2)] flex flex-col md:flex-row relative z-0 overflow-visible rounded-sm">
                        <div className="absolute top-0 right-0 w-32 h-[1px] bg-brand-accent-2/50" />
                        <div className="absolute bottom-0 left-0 w-32 h-[1px] bg-brand-accent-1/50" />
                        
                        {/* Avatar */}
                        <div className="md:w-1/3 flex justify-center relative md:-ml-8 md:mt-[-60px] -mt-24 z-20 pointer-events-none">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-accent-3/20 rounded-full blur-[60px] mix-blend-screen" />
                            <img 
                                src={ademarisGreeting} 
                                alt="Ademaris" 
                                className="w-full h-auto max-w-[280px] drop-shadow-[0_0_20px_rgba(212,175,55,0.3)] relative z-10 mix-blend-screen"
                            />
                        </div>
                        
                        {/* Form Section */}
                        <div className="w-full md:w-2/3 p-10 md:p-14 text-left relative z-10 flex flex-col justify-center">
                            <span className="font-tech text-brand-accent-3 text-[10px] uppercase tracking-[0.3em] mb-3 block opacity-80">
                                Broadcast Channel
                            </span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-md">
                                Good Ideas. Fresh Perspectives. Straight to Your Inbox.
                            </h2>
                            <p className="font-body opacity-80 font-light text-base md:text-lg leading-relaxed mb-6 text-gray-300">
                                Creative insights, industry trends, standout campaigns, brand storytelling and fresh perspectives on strategy, marketing and culture. Plus, the occasional hot take from Team KinStrategi.
                            </p>
                            <p className="font-tech text-xs text-brand-accent-2 uppercase tracking-widest mb-6">
                                Stay informed. Stay inspired. Stay in the know.
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
                                <button type="submit" className="bg-brand-accent-3 text-brand-dark font-bold px-8 py-4 font-tech uppercase tracking-widest text-xs hover:bg-brand-accent-3/90 transition-colors cursor-pointer shadow-[0_0_20px_rgba(0,167,167,0.3)]">
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
