import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// Placements
import livingInSanaaImg from '../safe-assets/brands/living-sanaa.png';
import aySubzImg from '../safe-assets/brands/aysubz.png';
import seemiImg from '../safe-assets/brands/seemi.png';
import bmeImg from '../safe-assets/brands/bme.png';
import confidentialImg from '../safe-assets/brands/confidential.jpg';
import ajopawImg from '../safe-assets/brands/ajopaw-logo.png';

// Publications
import coffeeCreamCover from '../safe-assets/metrics/coffee.png';
import wickedTiesCover from '../safe-assets/metrics/wicked.png';

// Brand Experience (Visuals)
import venus1 from '../safe-assets/brands/venus1.jpg';
import venus2 from '../safe-assets/brands/venus2.jpg';
import venus3 from '../safe-assets/brands/venus3.jpg';
import venus4 from '../safe-assets/brands/venus4.jpg';
import ajopawC1 from '../safe-assets/brands/ajopaw1.jpeg';
import ajopawC2 from '../safe-assets/brands/ajopaw2.jpeg';
import ajopawC3 from '../safe-assets/brands/ajopaw3.jpeg';
import jameson1 from '../safe-assets/brands/jameson1.jpg';
import jameson2 from '../safe-assets/brands/jameson2.jpg';
import jameson3 from '../safe-assets/brands/jameson3.jpg';

// Avatar
import ademarisExcited from '../safe-assets/navigator/ademaris-excited.png';

// Dedicated Stateful Log Card for Field Notes with Smooth Read More / Read Less
function LogCard({ log }) {
    const [isExpanded, setIsExpanded] = useState(false);

    // Extract log code if formatted as "LOG 001 - Title"
    const logCode = log.title.includes(' - ') ? log.title.split(' - ')[0] : 'LOG';
    const logHeading = log.title.includes(' - ') ? log.title.split(' - ').slice(1).join(' - ') : log.title;

    return (
        <div className="bg-black/30 border border-white/10 p-5 sm:p-6 relative overflow-hidden group flex flex-col justify-between hover:border-brand-accent-1/40 transition-all duration-300">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-accent-1/50 group-hover:bg-brand-accent-1 transition-colors" />
            
            <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-tech text-[10px] uppercase tracking-widest text-brand-accent-1 bg-brand-accent-1/10 border border-brand-accent-1/25 px-2.5 py-0.5">
                        {logCode}
                    </span>
                    <span className="font-tech text-[10px] text-white/40 uppercase tracking-wider truncate max-w-[150px]">
                        {log.industry}
                    </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-brand-accent-1 transition-colors leading-snug">
                    {logHeading}
                </h3>
                
                {/* Client & Role Row */}
                <div className="flex flex-wrap gap-x-3 gap-y-1.5 mb-3 font-body font-light text-xs opacity-75 border-b border-white/5 pb-3">
                    <div><span className="text-brand-accent-1 uppercase font-tech text-[10px] tracking-wider mr-1">Client:</span>{log.client}</div>
                    <div><span className="text-brand-accent-1 uppercase font-tech text-[10px] tracking-wider mr-1">Role:</span>{log.role}</div>
                </div>

                {/* The Challenge (Concise in collapsed state, full in expanded state) */}
                <div className="text-xs sm:text-sm text-white/80 font-light leading-relaxed mb-1">
                    <p className="font-tech text-[10px] text-brand-accent-2 tracking-widest uppercase mb-1">The Challenge</p>
                    <p className={!isExpanded ? "line-clamp-2 opacity-90" : "opacity-100"}>
                        {log.challenge}
                    </p>
                </div>

                {/* Smooth Expandable Section */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                            className="overflow-hidden space-y-4 pt-3 mt-3 border-t border-white/5 text-xs sm:text-sm"
                        >
                            <div>
                                <h4 className="font-tech text-[10px] text-brand-accent-3 tracking-widest uppercase mb-1.5">What We Did</h4>
                                <ul className="flex flex-wrap gap-1.5">
                                    {log.whatWeDid.map((item, i) => (
                                        <li key={i} className="bg-white/5 border border-white/10 px-2.5 py-0.5 font-body text-[11px] text-white/90">
                                            ✦ {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="bg-brand-accent-1/5 border-l-2 border-brand-accent-1 p-3 mt-2">
                                <h4 className="font-tech text-[10px] text-brand-accent-1 tracking-widest uppercase mb-1">Impact</h4>
                                <p className="font-body text-xs sm:text-sm text-white/90 italic leading-relaxed">
                                    {log.impact}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Read More / Read Less Action Bar */}
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                <button
                    type="button"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="font-tech uppercase tracking-widest text-[11px] text-brand-accent-2 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer py-1 px-2 -ml-2 rounded hover:bg-white/5"
                    aria-expanded={isExpanded}
                >
                    <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                    <span className="text-xs">{isExpanded ? '↑' : '↓'}</span>
                </button>
                <span className="text-brand-accent-1 text-xs opacity-40 group-hover:opacity-100 transition-opacity">✦</span>
            </div>
        </div>
    );
}

const categories = [
    {
        id: "field-notes",
        title: "Field Notes",
        description: "A collection of strategic thinking, behind-the-scenes insights, frameworks, documentation, creative planning, operational systems, process breakdowns, and lessons from our work. This section showcases how we think, rather than who we've worked with.",
        type: "logs",
        content: [
            {
                title: "LOG 001 - Building a Luxury Adornment House from the Ground Up",
                client: "Confidential", industry: "Luxury Fashion & Adornment",
                challenge: "The founder had a strong creative vision but needed clarity on positioning, product direction, brand architecture, operations, and launch planning.",
                role: "Creative Development Partner",
                whatWeDid: ["Brand Strategy", "Creative Direction", "Website Strategy", "Product Development", "Operations Partnership", "Creative Systems", "Launch Planning"],
                impact: "Helped transform an idea into a structured luxury brand with a clear identity, product roadmap, operational systems, and launch direction. \"Building a business isn't just designing a logo. It's designing how the entire vision comes to life.\""
            },
            {
                title: "LOG 002 - Scaling Creative Operations Across Multiple Ventures",
                client: "Founder with multiple businesses", industry: "Multiple",
                challenge: "Managing creative teams, contractors, launches, and priorities across several ventures without losing momentum.",
                role: "Creative Operations & Founder Support",
                whatWeDid: ["Workflow Design", "Project Management", "Team Coordination", "Hiring Support", "Documentation", "Strategic Planning"],
                impact: "Created systems that improved visibility across projects, reduced operational bottlenecks, and allowed the founder to focus on higher-level decisions."
            },
            {
                title: "LOG 003 - Building the Foundation for a Multi-Platform Creative Brand",
                client: "ÀJỌPAW", industry: "Creative Media",
                challenge: "Building the foundation for multiple creative products while coordinating writers, illustrators, marketing, publishing, and production.",
                role: "Creative Development",
                whatWeDid: ["Product Strategy", "Publishing Roadmaps", "Talent Coordination", "Creative Planning", "Production Systems"],
                impact: "Established the operational and creative foundation for future publishing initiatives, campaigns, and product launches."
            },
            {
                title: "LOG 004 - Making Cybersecurity More Human",
                client: "CAMP", industry: "Cybersecurity",
                challenge: "Translate a highly technical cybersecurity company into a brand executives could understand and trust.",
                role: "Brand Strategy",
                whatWeDid: ["Brand Positioning", "Messaging", "Website Direction", "Visual Strategy", "Editorial Framework"],
                impact: "Developed a brand system that positioned the company as a trusted authority while making complex topics more approachable."
            },
            {
                title: "LOG 005 - Designing a Creative Development Studio",
                client: "Confidential", industry: "Creative",
                challenge: "Create a studio capable of developing ideas across film, fashion, publishing, AI, and experiences without becoming another traditional agency.",
                role: "Founder",
                whatWeDid: ["Brand Strategy", "Creative Philosophy", "Service Architecture", "Creative Frameworks", "World Building"],
                impact: "Created a distinct creative identity built around concept development, storytelling, and immersive creative experiences."
            },
            {
                title: "LOG 006 - Reimagining KinStrategi",
                client: "KinStrategi", industry: "Creative Strategy",
                challenge: "Most creative consultancies stop at strategy. Most agencies stop at execution. We wanted to build something that develops ideas from vision to reality.",
                role: "Founder",
                whatWeDid: ["Repositioning", "Brand Strategy", "Service Design", "Website UX", "Messaging Architecture", "Operating Philosophy"],
                impact: "Transformed KinStrategi from a creative operations consultancy into a Creative Development Company with a clear philosophy, ecosystem, and service architecture."
            }
        ]
    },
    {
        id: "brand-experience",
        title: "Brand Experience",
        description: "A visual archive of experiences we've brought to life. Featuring photography from campaigns, productions, launches, activations, events, behind-the-scenes moments, and creative direction.",
        type: "visuals",
        content: [
            { img: venus1, alt: "Venus Socials" },
            { img: ajopawC1, alt: "ÀJỌPÀW Pre-Launch" },
            { img: jameson1, alt: "Jameson Collaboration" },
            { img: venus2, alt: "Venus Socials" },
            { img: ajopawC2, alt: "ÀJỌPÀW Pre-Launch" },
            { img: jameson2, alt: "Jameson Collaboration" },
            { img: venus3, alt: "Venus Socials" },
            { img: ajopawC3, alt: "ÀJỌPÀW Pre-Launch" },
            { img: jameson3, alt: "Jameson Collaboration" },
            { img: venus4, alt: "Venus Socials" }
        ]
    },
    {
        id: "placements",
        title: "Placements",
        description: "A curated archive of brands we've partnered with and the strategic roles we've played.",
        type: "placements",
        closing: "No two engagements are the same. Sometimes we're brought in to build the right team. Other times we're asked to shape a brand, develop creative systems, improve operations, or guide execution from concept through delivery. Our role is to identify what a business truly needs, assemble the right people and processes, and build the operational foundation that enables sustainable creative growth.",
        content: [
            { brand: "Living in Sanaa", scope: "Recruited and placed a Social Media Manager to support both the brand and the founder's personal brand, ensuring alignment between creative execution, audience growth, and business objectives.", link: "https://www.instagram.com/reel/DVrc09Ejejq/?igsh=MW4zNzUzMnp1aHpqNg==", img: livingInSanaaImg },
            { brand: "AY Subs", scope: "Led the recruitment and placement of a Personal Assistant to streamline executive operations and strengthen the founder's day-to-day workflow.", link: "", img: aySubzImg },
            { brand: "SEEMI", scope: "Recruited and placed a Personal Assistant to improve internal operations and founder support, while also leading model sourcing and casting for campaign production.", link: "", img: seemiImg },
            { brand: "BME", scope: "Identified, recruited, and placed operational talent to support the business at its stage of growth and expansion.", link: "", img: bmeImg },
            { brand: "TOFO House / Caisson Lighthouse Publishing", scope: "Recruited a Social Media & AI Digital Content Creator to help establish a modern content ecosystem and strengthen the brand's digital presence.", link: "https://www.instagram.com/reel/DZh8VFpCJVy/?igsh=bXkxcDVmNWhiaWtx", img: confidentialImg },
            { brand: "CAMP", scope: "Recruited and assembled key creative partners, including a Brand Identity Designer and Website Developer, to establish the organization's visual identity and digital foundation.", link: "", img: confidentialImg },
            { brand: "ÀJỌPAW", scope: "Led initiatives across Talent Management, Creative Operations, Product Development, and Brand Experience Strategy, supporting both internal systems and the overall customer experience.", link: "https://www.instagram.com/p/DZInzkpjWwg/?igsh=MXMzMmRlZWZvNTJwZA==", img: ajopawImg }
        ]
    },
    {
        id: "publications",
        title: "Publications",
        description: "Our writing spans strategy, culture, storytelling, and world-building. While some pieces explore ideas that shape the way we think and work, others showcase the creative practice behind Leiré—our storytelling and creative development studio.",
        type: "publications",
        content: [
            { group: "Editorial & Essays", items: [
                { title: "In Between Worlds", platform: "Substack", summary: "A long-form editorial exploring the intersection of creativity, identity, systems, and storytelling. The piece introduces the philosophy that informs how we approach creative strategy, operations, and building meaningful work.", link: "https://open.substack.com/pub/adeshewaadeniran/p/in-between-worlds?r=7bgoxr&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true", img: "https://substack-post-media.s3.amazonaws.com/public/images/3b0757b9-b5ab-45b0-84fc-beb8eaff7184_2239x2239.jpeg" },
                { title: "I Think Modern Intimacy Is Broken", platform: "Blogspot", summary: "An editorial reflection examining how technology, culture, and changing social norms have reshaped modern relationships.", link: "https://ashleyadeniran.blogspot.com/2025/12/i-think-modern-intimacy-is-broken.html", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0jwcJjgT0byj3pAKEw9J3LJva_jLXSDWW6jrjGn6-Yz1ULdUM4qT1fVYWIycL0ECJId_0QMXKJqedEkd7FpBahH973lIYzGTQzoTfkomUsaD5nj_w-i2zAvw3UVVyphsCeakPYuTa_6Vxsa2wdT-nCRiUV0xt8cGnVd1zwZ6DaQYjEZvJ46K8Uj76GB4/s800/20251220_2251_Contemporary%20Neo-Expressionism%20Illustration_simple_compose_01kcyvww71f7ea08dfhxbghe3z.png" },
                { title: "AI, Desire and Loneliness in 2026", platform: "Blogspot", summary: "A cultural essay exploring the intersection of artificial intelligence, emotional connection, and the future of human relationships.", link: "https://ashleyadeniran.blogspot.com/2025/12/ai-desire-and-loneliness-in-2026-inner.html", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2uD3qPFO4fZs5xO7oQUuE0HfdBBsw1Oyk4wgAUvGIbIqsX7gvFS9s2lZ4XkC12oQRcFveJ_3TePtQciyzIA5hZWE-Q6scJS_3cDCn7AArhWnXSwWnxGZizC9_RFyvCblUy3eGZUPiEUjn1hBirjzu0Ya6hRp-H_YBpR0TM8mzstETCJnYygTiQPwsR24/s800/20251220_0302_Intimate%20Mindscape_simple_compose_01kcwqwq23f0faf3w4st5fmxpp.png" },
                { title: "We Were in the Clouds", platform: "Blogspot", summary: "A reflective narrative that blends personal storytelling with broader observations about memory, transition, and the moments that shape us.", link: "https://ashleyadeniran.blogspot.com/2026/04/we-were-in-clouds.html", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-7I0MwIf-Bdnjj5XOAZfo2ZblUXsD7vJPrKITM78GnS-m58ySooutj-a4YWqGmxUCpwQQ0O7St84i5O2iWqFECkBeVB1GfbkCGoNCrBk27kobK0P7Dc9bv2dEHkdAuhDlu_oW-ROofbs/s800/17DA92E6-4619-4FE6-870F-87097A67A22B.jpeg" }
            ]},
            { group: "Leiré — Fiction & World-Building", items: [
                { title: "Coffee and Cream", platform: "Wattpad", summary: "A character-driven contemporary romance exploring connection, vulnerability, and emotional growth.", link: "https://www.wattpad.com/story/377618502-coffee-and-cream", img: coffeeCreamCover },
                { title: "Wicked Ties", platform: "Wattpad", summary: "A darker, tension-filled story centred on complex relationships and layered character dynamics.", link: "https://www.wattpad.com/story/376120165-wicked-ties", img: wickedTiesCover },
                { title: "All Shades of Us", platform: "Wattpad", summary: "A contemporary fiction project exploring identity, relationships, and the complexities of human connection.", link: "https://www.wattpad.com/story/384957116-all-shades-of-us" }
            ]}
        ]
    },
    {
        id: "testimonials",
        title: "Testimonials",
        description: "A curated collection of client feedback, collaborator reflections, and partner testimonials.",
        type: "testimonials",
        featured: {
            quote: "These people don't just create beautiful work. They create the conditions for beautiful work to happen.",
            author: "Strategic Partner",
            role: "Creative Advisory & Brand Operations",
            tag: "Operating Philosophy"
        },
        content: [
            {
                quote: "Shewa is amazing 👏🏾 hired someone. Orientation is today. Feedback from my friend: 👌🏾",
                author: "Venture Founder",
                role: "Talent Placement & Operations",
                tag: "Talent Matching",
                date: "Partner Feedback"
            },
            {
                quote: "Hi Shewa, thank you so much for all your help. I sent a little something to show my appreciation. I also owe you a post, but I've also recommended your services to a few friends. Looking forward to working on other projects.",
                author: "Creative Founder",
                role: "Founder Support & Operations",
                tag: "Founder Support",
                date: "Client Reflection"
            },
            {
                quote: "The world is waiting. 🌍 Something is coming to this page — a new country, every single weekday, for every curious kid... Shewaaaa! We are moving! 🔥",
                author: "TOFO House",
                role: "Talent Placement and Onboarding",
                tag: "Launch Momentum",
                date: "Campaign Launch"
            }
        ]
    }
];

export default function OurWork() {
    const [activeTab, setActiveTab] = useState(categories[0].id);

    return (
        <div className="relative min-h-[90vh] py-12 sm:py-16 md:py-24 overflow-hidden flex flex-col justify-start">
            <div className="fixed inset-0 z-0 bg-brand-dark" />
            
            {/* Grid Overlay */}
            <div
                className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row items-center md:items-start justify-between mb-8 sm:mb-12 md:mb-16 relative"
                >
                    <div className="text-center md:text-left max-w-2xl relative z-10 pt-2 sm:pt-4 md:pt-6">
                        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-wider mb-3 sm:mb-4 text-white drop-shadow-xl">
                            The <span className="text-brand-accent-1">Work.</span>
                        </h1>
                        <p className="font-body text-base sm:text-lg md:text-xl opacity-70 font-light leading-relaxed">
                            Strategy in action. A curated index of our field notes, cases, and the talent we've placed.
                        </p>
                    </div>

                    <div className="hidden md:block w-1/4 max-w-[200px] relative mt-6 md:mt-0 z-0 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-brand-accent-2/20 rounded-full blur-[35px] mix-blend-screen" />
                        <img 
                            src={ademarisExcited} 
                            alt="Ademaris Excited" 
                            className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.4)] animate-[floating_6s_ease-in-out_infinite] mix-blend-screen"
                            style={{ animationName: 'floating' }}
                        />
                    </div>
                </motion.div>

                {/* Main Content Layout */}
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10">
                    {/* Responsive Navigation Tabs (Horizontal swipeable on mobile, vertical sidebar on desktop) */}
                    <div className="lg:w-1/4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 shrink-0 no-scrollbar border-b lg:border-b-0 border-white/10">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`text-left px-4 sm:px-5 py-3 sm:py-3.5 font-heading text-base sm:text-lg md:text-xl transition-all duration-300 border-b-2 lg:border-b-0 lg:border-l-2 whitespace-nowrap cursor-pointer ${activeTab === cat.id ? 'border-brand-accent-1 text-white bg-white/10 font-semibold' : 'border-transparent text-white/50 hover:text-white/80 hover:bg-white/5'}`}
                            >
                                {cat.title}
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="lg:w-3/4 min-h-[400px]">
                        <AnimatePresence mode="wait">
                            {categories.map((cat) => (
                                cat.id === activeTab && (
                                    <motion.div
                                        key={cat.id}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -15 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-brand-base/20 border border-white/10 p-5 sm:p-6 md:p-10 backdrop-blur-sm h-full"
                                    >
                                        <div className="mb-6 sm:mb-8 border-b border-white/10 pb-5 sm:pb-6">
                                            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">{cat.title}</h2>
                                            <p className="font-body text-sm sm:text-base opacity-70 font-light max-w-3xl leading-relaxed">{cat.description}</p>
                                        </div>

                                        {/* Field Notes Layout (2-Column Grid with interactive LogCard components) */}
                                        {cat.type === "logs" && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                                {cat.content.map((log, idx) => (
                                                    <LogCard key={idx} log={log} />
                                                ))}
                                            </div>
                                        )}

                                        {/* Placements Layout */}
                                        {cat.type === "placements" && (
                                            <div>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                                                    {cat.content.map((placement, idx) => (
                                                        <div key={idx} className="bg-black/20 border border-white/10 flex flex-col justify-between overflow-hidden group">
                                                            <a href={placement.link || '#'} target={placement.link ? "_blank" : "_self"} rel="noopener noreferrer" className="block relative h-40 sm:h-48 bg-black/50 border-b border-white/10 flex flex-col items-center justify-center text-center p-4 overflow-hidden">
                                                                {placement.img ? (
                                                                    <img src={placement.img} alt={placement.brand} className="absolute inset-0 w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 p-4" />
                                                                ) : (
                                                                    <>
                                                                        <span className="font-tech text-[10px] tracking-widest text-brand-accent-1 uppercase z-10 mb-1">Insert IG Thumbnail</span>
                                                                        <span className="font-body text-[10px] text-white/50 z-10">Website Assets</span>
                                                                    </>
                                                                )}
                                                                <div className="absolute inset-0 bg-brand-accent-1/0 group-hover:bg-brand-accent-1/10 transition-colors" />
                                                            </a>
                                                            <div className="p-4 sm:p-5">
                                                                <a href={placement.link || '#'} target={placement.link ? "_blank" : "_self"} rel="noopener noreferrer" className="block cursor-pointer">
                                                                    <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-brand-accent-1 transition-colors">{placement.brand}</h3>
                                                                </a>
                                                                <p className="font-tech text-[10px] text-brand-accent-2 tracking-widest uppercase mb-1">Scope</p>
                                                                <p className="font-body text-xs sm:text-sm opacity-80 font-light leading-relaxed">{placement.scope}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="bg-brand-accent-1/10 p-5 sm:p-6 border border-brand-accent-1/20 text-center">
                                                    <p className="font-body text-sm sm:text-base italic opacity-90 font-light leading-relaxed max-w-3xl mx-auto">
                                                        "{cat.closing}"
                                                    </p>
                                                </div>
                                            </div>
                                        )}

                                        {/* Publications Layout */}
                                        {cat.type === "publications" && (
                                            <div className="space-y-6 sm:space-y-8">
                                                {cat.content.map((group, idx) => (
                                                    <div key={idx}>
                                                        <h3 className="font-heading text-lg sm:text-xl font-bold text-brand-accent-2 mb-3 sm:mb-4 border-b border-brand-accent-2/20 pb-2">{group.group}</h3>
                                                        <div className="grid grid-cols-1 gap-4">
                                                            {group.items.map((pub, i) => (
                                                                <a key={i} href={pub.link} target="_blank" rel="noopener noreferrer" className="group flex flex-col sm:flex-row gap-4 sm:gap-5 bg-black/20 hover:bg-white/5 border border-white/5 transition-all p-4 sm:p-5 cursor-pointer items-start">
                                                                    <div className="w-full sm:w-32 md:w-36 h-32 sm:h-36 bg-brand-dark/50 border border-white/10 shrink-0 flex flex-col items-center justify-center relative overflow-hidden text-center p-3">
                                                                        {pub.img ? (
                                                                            <img src={pub.img} alt={pub.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                                                        ) : (
                                                                            <>
                                                                                <span className="font-tech text-[10px] tracking-widest text-brand-accent-2 uppercase z-10 mb-1">Cover Image</span>
                                                                                <span className="font-body text-[9px] text-white/50 z-10">Website Assets</span>
                                                                            </>
                                                                        )}
                                                                        <div className="absolute inset-0 bg-brand-dark/20 mix-blend-overlay group-hover:bg-brand-dark/0 transition-colors" />
                                                                    </div>
                                                                    <div className="flex-1 flex flex-col justify-between w-full">
                                                                        <div>
                                                                            <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                                                                                <h4 className="font-heading text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-brand-accent-1 transition-colors">{pub.title}</h4>
                                                                                <span className="inline-block px-2 py-0.5 bg-white/5 font-tech text-[9px] uppercase tracking-widest text-white/50">{pub.platform}</span>
                                                                            </div>
                                                                            <p className="font-body text-xs sm:text-sm opacity-70 font-light leading-relaxed mb-4">{pub.summary}</p>
                                                                        </div>
                                                                        <div className="font-tech text-xs tracking-widest uppercase text-brand-accent-1 mt-auto">
                                                                            Read Article →
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Testimonials Layout (Pure Text Format Cards) */}
                                        {cat.type === "testimonials" && (
                                            <div className="space-y-6">
                                                {/* Featured Quote */}
                                                {cat.featured && (
                                                    <div className="relative bg-gradient-to-br from-brand-base/40 to-black/60 border border-brand-accent-1/30 p-6 sm:p-8 md:p-10 overflow-hidden">
                                                        <div className="absolute top-0 right-0 p-4 sm:p-8 font-heading text-6xl sm:text-8xl text-brand-accent-1/10 select-none pointer-events-none leading-none">
                                                            “
                                                        </div>
                                                        <div className="relative z-10 max-w-2xl">
                                                            <span className="inline-block px-2.5 py-1 bg-brand-accent-1/15 border border-brand-accent-1/30 font-tech text-[10px] uppercase tracking-widest text-brand-accent-1 mb-3 sm:mb-4">
                                                                ✦ {cat.featured.tag}
                                                            </span>
                                                            <p className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-normal italic leading-relaxed mb-5 sm:mb-6">
                                                                "{cat.featured.quote}"
                                                            </p>
                                                            <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                                                                <div className="w-8 h-8 rounded-full bg-brand-accent-1/20 border border-brand-accent-1/40 flex items-center justify-center font-heading text-brand-accent-1 text-xs font-bold shrink-0">
                                                                    SP
                                                                </div>
                                                                <div>
                                                                    <p className="font-tech text-xs uppercase tracking-widest text-white font-medium">{cat.featured.author}</p>
                                                                    <p className="font-body text-xs opacity-60 font-light">{cat.featured.role}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Extracted Message Quote Cards Grid */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                                    {cat.content.map((test, idx) => (
                                                        <div key={idx} className="bg-black/30 border border-white/10 p-5 sm:p-6 flex flex-col justify-between relative hover:border-brand-accent-3/40 transition-all duration-300">
                                                            <div>
                                                                <div className="flex items-center justify-between mb-3 sm:mb-4">
                                                                    <span className="px-2 py-0.5 bg-white/5 border border-white/10 font-tech text-[9px] uppercase tracking-widest text-brand-accent-3">
                                                                        {test.tag}
                                                                    </span>
                                                                    <span className="font-tech text-[10px] text-white/40 uppercase">
                                                                        {test.date}
                                                                    </span>
                                                                </div>
                                                                <div className="relative mb-5 sm:mb-6">
                                                                    <p className="font-body text-xs sm:text-sm md:text-base text-white/90 font-light italic leading-relaxed">
                                                                        "{test.quote}"
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="pt-3 sm:pt-4 border-t border-white/5 flex items-center justify-between">
                                                                <div>
                                                                    <p className="font-tech text-xs uppercase tracking-widest text-brand-accent-2 font-medium">{test.author}</p>
                                                                    <p className="font-body text-[11px] opacity-60 font-light">{test.role}</p>
                                                                </div>
                                                                <span className="text-brand-accent-1 text-sm opacity-60">✦</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Visuals Layout */}
                                        {cat.type === "visuals" && (
                                            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
                                                {cat.content.map((item, idx) => (
                                                    <div key={idx} className="break-inside-avoid relative group overflow-hidden border border-white/10 shadow-lg">
                                                        <img src={item.img} alt={item.alt} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[40%] group-hover:grayscale-0" />
                                                        <div className="absolute inset-0 bg-brand-accent-1/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
