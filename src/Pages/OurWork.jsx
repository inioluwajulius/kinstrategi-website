import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// Placements
import aySubzImg from '../safe-assets/brands/aysubz.png';
import bmeImg from '../safe-assets/brands/bme.png';
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

// Testimonials
import test1 from '../safe-assets/testimonials/test1.jpg';
import test2 from '../safe-assets/testimonials/test2.jpg';
import test3 from '../safe-assets/testimonials/test3.jpg';

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
            { brand: "Living in Sanaa", scope: "Recruited and placed a Social Media Manager to support both the brand and the founder's personal brand, ensuring alignment between creative execution, audience growth, and business objectives.", link: "https://www.instagram.com/reel/DVrc09Ejejq/?igsh=MW4zNzUzMnp1aHpqNg==" },
            { brand: "AY Subs", scope: "Led the recruitment and placement of a Personal Assistant to streamline executive operations and strengthen the founder's day-to-day workflow.", link: "", img: aySubzImg },
            { brand: "SEEMI", scope: "Recruited and placed a Personal Assistant to improve internal operations and founder support, while also leading model sourcing and casting for campaign production.", link: "" },
            { brand: "BME", scope: "Identified, recruited, and placed operational talent to support the business at its stage of growth and expansion.", link: "", img: bmeImg },
            { brand: "TOFO House / Caisson Lighthouse Publishing", scope: "Recruited a Social Media & AI Digital Content Creator to help establish a modern content ecosystem and strengthen the brand's digital presence.", link: "https://www.instagram.com/reel/DZh8VFpCJVy/?igsh=bXkxcDVmNWhiaWtx" },
            { brand: "CAMP", scope: "Recruited and assembled key creative partners, including a Brand Identity Designer and Website Developer, to establish the organization's visual identity and digital foundation.", link: "" },
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
                { title: "In Between Worlds", platform: "Substack", summary: "A long-form editorial exploring the intersection of creativity, identity, systems, and storytelling. The piece introduces the philosophy that informs how we approach creative strategy, operations, and building meaningful work.", link: "https://open.substack.com/pub/adeshewaadeniran/p/in-between-worlds?r=7bgoxr&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true" },
                { title: "I Think Modern Intimacy Is Broken", platform: "Blogspot", summary: "An editorial reflection examining how technology, culture, and changing social norms have reshaped modern relationships.", link: "https://ashleyadeniran.blogspot.com/2025/12/i-think-modern-intimacy-is-broken.html" },
                { title: "AI, Desire and Loneliness in 2026", platform: "Blogspot", summary: "A cultural essay exploring the intersection of artificial intelligence, emotional connection, and the future of human relationships.", link: "https://ashleyadeniran.blogspot.com/2025/12/ai-desire-and-loneliness-in-2026-inner.html" },
                { title: "We Were in the Clouds", platform: "Blogspot", summary: "A reflective narrative that blends personal storytelling with broader observations about memory, transition, and the moments that shape us.", link: "https://ashleyadeniran.blogspot.com/2026/04/we-were-in-clouds.html" }
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
        content: [
            { quote: "These people don't just create beautiful work. They create the conditions for beautiful work to happen.", source: "Client / Partner" },
            { img: test1 },
            { img: test2 },
            { img: test3 }
        ]
    }
];

export default function OurWork() {
    const [activeTab, setActiveTab] = useState(categories[0].id);

    return (
        <div className="relative min-h-[90vh] py-32 overflow-hidden flex flex-col justify-start">
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
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left max-w-3xl mb-16"
                >
                    <h1 className="font-heading text-6xl md:text-8xl font-bold uppercase tracking-wider mb-6 text-white drop-shadow-xl">
                        The <span className="text-brand-accent-1">Work.</span>
                    </h1>
                    <p className="font-body text-xl md:text-2xl opacity-70 font-light leading-relaxed">
                        Strategy in action. A curated index of our field notes, cases, and the talent we've placed.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar / Tabs */}
                    <div className="lg:w-1/4 flex flex-col gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`text-left px-6 py-4 font-heading text-xl md:text-2xl transition-all duration-300 border-l-2 ${activeTab === cat.id ? 'border-brand-accent-1 text-white bg-white/5' : 'border-transparent text-white/50 hover:text-white/80 hover:bg-white/5'}`}
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
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.4 }}
                                        className="bg-brand-base/20 border border-white/10 p-8 md:p-12 backdrop-blur-sm h-full"
                                    >
                                        <div className="mb-12 border-b border-white/10 pb-8">
                                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">{cat.title}</h2>
                                            <p className="font-body text-lg opacity-70 font-light max-w-3xl">{cat.description}</p>
                                        </div>

                                        {/* Field Notes Layout */}
                                        {cat.type === "logs" && (
                                            <div className="space-y-12">
                                                {cat.content.map((log, idx) => (
                                                    <div key={idx} className="bg-black/30 border border-white/5 p-8 relative overflow-hidden group">
                                                        <div className="absolute top-0 left-0 w-1 h-full bg-brand-accent-1/50 group-hover:bg-brand-accent-1 transition-colors" />
                                                        <h3 className="font-heading text-2xl font-bold text-white mb-6">{log.title}</h3>
                                                        
                                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 font-body font-light text-sm opacity-80">
                                                            <div><strong className="text-brand-accent-1 opacity-100 block mb-1">Client</strong>{log.client}</div>
                                                            <div><strong className="text-brand-accent-1 opacity-100 block mb-1">Industry</strong>{log.industry}</div>
                                                            <div><strong className="text-brand-accent-1 opacity-100 block mb-1">Our Role</strong>{log.role}</div>
                                                        </div>

                                                        <div className="space-y-6">
                                                            <div>
                                                                <h4 className="font-tech text-[10px] text-brand-accent-2 tracking-widest uppercase mb-2">The Challenge</h4>
                                                                <p className="font-body opacity-80 font-light leading-relaxed">{log.challenge}</p>
                                                            </div>
                                                            <div>
                                                                <h4 className="font-tech text-[10px] text-brand-accent-3 tracking-widest uppercase mb-2">What We Did</h4>
                                                                <ul className="flex flex-wrap gap-2">
                                                                    {log.whatWeDid.map((item, i) => (
                                                                        <li key={i} className="bg-white/5 border border-white/10 px-3 py-1 font-body text-xs opacity-80">✦ {item}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                            <div>
                                                                <h4 className="font-tech text-[10px] text-brand-accent-1 tracking-widest uppercase mb-2">Impact</h4>
                                                                <p className="font-body opacity-90 font-light leading-relaxed italic border-l border-white/20 pl-4 py-1">{log.impact}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Placements Layout */}
                                        {cat.type === "placements" && (
                                            <div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                                    {cat.content.map((placement, idx) => (
                                                        <div key={idx} className="bg-black/20 border border-white/10 flex flex-col justify-between overflow-hidden group">
                                                            <a href={placement.link || '#'} target={placement.link ? "_blank" : "_self"} rel="noopener noreferrer" className="block relative h-64 bg-black/50 border-b border-white/10 flex flex-col items-center justify-center text-center p-6 overflow-hidden">
                                                                {placement.img ? (
                                                                    <img src={placement.img} alt={placement.brand} className="absolute inset-0 w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 p-4" />
                                                                ) : (
                                                                    <>
                                                                        <span className="font-tech text-[10px] tracking-widest text-brand-accent-1 uppercase z-10 mb-2">Insert IG Thumbnail</span>
                                                                        <span className="font-body text-[10px] text-white/50 z-10">From: Google Drive {'>'} Website Assets</span>
                                                                    </>
                                                                )}
                                                                <div className="absolute inset-0 bg-brand-accent-1/0 group-hover:bg-brand-accent-1/10 transition-colors" />
                                                            </a>
                                                            <div className="p-6">
                                                                <a href={placement.link || '#'} target={placement.link ? "_blank" : "_self"} rel="noopener noreferrer" className="block cursor-pointer">
                                                                    <h3 className="font-heading text-2xl font-bold text-white mb-4 group-hover:text-brand-accent-1 transition-colors">{placement.brand}</h3>
                                                                </a>
                                                                <p className="font-tech text-[10px] text-brand-accent-2 tracking-widest uppercase mb-2">Scope</p>
                                                                <p className="font-body text-sm opacity-80 font-light leading-relaxed mb-6">{placement.scope}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="bg-brand-accent-1/10 p-8 border border-brand-accent-1/20 text-center">
                                                    <p className="font-body text-lg italic opacity-90 font-light leading-relaxed max-w-3xl mx-auto">
                                                        "{cat.closing}"
                                                    </p>
                                                </div>
                                            </div>
                                        )}

                                        {/* Publications Layout */}
                                        {cat.type === "publications" && (
                                            <div className="space-y-12">
                                                {cat.content.map((group, idx) => (
                                                    <div key={idx}>
                                                        <h3 className="font-heading text-2xl font-bold text-brand-accent-2 mb-6 border-b border-brand-accent-2/20 pb-2">{group.group}</h3>
                                                        <div className="grid grid-cols-1 gap-6">
                                                            {group.items.map((pub, i) => (
                                                                <a key={i} href={pub.link} target="_blank" rel="noopener noreferrer" className="group flex flex-col md:flex-row gap-6 bg-black/20 hover:bg-white/5 border border-white/5 transition-all p-6 cursor-pointer items-start">
                                                                    <div className="w-full md:w-48 h-48 md:h-full min-h-[120px] bg-brand-dark/50 border border-white/10 shrink-0 flex flex-col items-center justify-center relative overflow-hidden text-center p-4">
                                                                        {pub.img ? (
                                                                            <img src={pub.img} alt={pub.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                                                        ) : (
                                                                            <>
                                                                                <span className="font-tech text-[10px] tracking-widest text-brand-accent-2 uppercase z-10 mb-2">Cover Image</span>
                                                                                <span className="font-body text-[9px] text-white/50 z-10">From: Google Drive {'>'} Website Assets</span>
                                                                            </>
                                                                        )}
                                                                        <div className="absolute inset-0 bg-brand-dark/20 mix-blend-overlay group-hover:bg-brand-dark/0 transition-colors" />
                                                                    </div>
                                                                    <div className="flex-1 flex flex-col justify-between">
                                                                        <div>
                                                                            <h4 className="font-heading text-xl md:text-2xl font-bold text-white group-hover:text-brand-accent-1 transition-colors mb-2">{pub.title}</h4>
                                                                            <span className="inline-block px-2 py-1 bg-white/5 font-tech text-[9px] uppercase tracking-widest text-white/50 mb-4">{pub.platform}</span>
                                                                            <p className="font-body text-base opacity-70 font-light leading-relaxed mb-6">{pub.summary}</p>
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

                                        {/* Testimonials Layout */}
                                        {cat.type === "testimonials" && (
                                            <div className="space-y-12">
                                                <div className="space-y-8">
                                                    {cat.content.filter(t => t.quote).map((test, idx) => (
                                                        <div key={idx} className="border-l-2 border-brand-accent-3 pl-6 py-2">
                                                            <p className="font-body text-xl md:text-2xl font-light italic opacity-90 leading-relaxed mb-4">"{test.quote}"</p>
                                                            <p className="font-tech text-xs tracking-widest uppercase text-brand-accent-3">{test.source}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                                
                                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                                                    {cat.content.filter(t => t.img).map((test, idx) => (
                                                        <div key={idx} className="bg-white/5 border border-white/10 p-2 border-brand-accent-1/20 transition-transform hover:scale-[1.02] duration-300">
                                                            <img src={test.img} alt="Testimonial Screenshot" className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity" />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Visuals Layout */}
                                        {cat.type === "visuals" && (
                                            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
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
