import { Link } from 'react-router-dom';

import kinLogoWhite from '../assets/kinstrategi-logo-white.png';
import kinLogoColor from '../assets/kinstrategi-logo-color.png';

export default function Footer() {
    return (
        <footer className="bg-brand-dark border-t border-white/5 py-12 px-4 sm:px-6 lg:px-8 mt-auto z-10 relative text-gray-400 font-body">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                {/* Column 1 — Brand */}
                <div className="space-y-6">
                    <Link to="/" className="flex flex-col gap-2">
                        <div className="h-8 md:h-10 w-48 relative group flex items-start">
                            <div
                                className="absolute inset-0 bg-white transition-opacity duration-500 group-hover:opacity-0 pointer-events-none"
                                style={{
                                    WebkitMaskImage: `url(${kinLogoWhite})`,
                                    WebkitMaskSize: 'contain',
                                    WebkitMaskRepeat: 'no-repeat',
                                    WebkitMaskPosition: 'left center',
                                    maskImage: `url(${kinLogoWhite})`,
                                    maskSize: 'contain',
                                    maskRepeat: 'no-repeat',
                                    maskPosition: 'left center'
                                }}
                            />
                            <img
                                src={kinLogoColor}
                                alt="KinStrategi Logo"
                                className="h-full w-auto object-contain object-left opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            />
                        </div>
                    </Link>
                    <p className="font-body text-sm font-light text-brand-accent-2 italic relative z-10 left-1 pt-2">Creative teams that just click.</p>
                    <div className="flex gap-4">
                        {/* Social Icons Placeholder */}
                        <a href="#" className="hover:text-brand-accent-2 transition-colors">Insta</a>
                        <a href="#" className="hover:text-brand-accent-2 transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-brand-accent-2 transition-colors">X</a>
                        <a href="#" className="hover:text-brand-accent-2 transition-colors">TikTok</a>
                    </div>
                </div>

                {/* Column 2 — Services */}
                <div>
                    <h3 className="text-white font-heading font-medium mb-4">Services</h3>
                    <ul className="space-y-3 text-sm font-light text-gray-400">
                        <li>Brand Strategy & Development</li>
                        <li>Creative Production</li>
                        <li>Campaign Strategy</li>
                        <li>Content Creation</li>
                        <li>Cultural Storytelling</li>
                        <li>Creative Ops (Ops-as-a-Service)</li>
                    </ul>
                </div>

                {/* Column 3 — Navigate */}
                <div>
                    <h3 className="text-white font-heading font-medium mb-4">Navigate</h3>
                    <ul className="space-y-3 text-sm font-light text-gray-400">
                        <li><Link to="/" className="hover:text-brand-accent-1 transition-colors">Home</Link></li>
                        <li><Link to="/playbook" className="hover:text-brand-accent-1 transition-colors">The Playbook</Link></li>
                        <li><Link to="/leire" className="hover:text-brand-accent-1 transition-colors">Leiré</Link></li>
                        <li><Link to="/manifesto" className="hover:text-brand-accent-1 transition-colors">Manifesto</Link></li>
                        <li><Link to="/signal-station" className="hover:text-brand-accent-1 transition-colors">Signal Station</Link></li>
                        <li><Link to="/our-work" className="hover:text-brand-accent-1 transition-colors">Our Work</Link></li>
                        <li><Link to="/citadel" className="hover:text-brand-accent-1 transition-colors">The Citadel</Link></li>
                        <li><Link to="/kin-feed" className="hover:text-brand-accent-1 transition-colors">Kin Feed</Link></li>
                        <li><Link to="/sign-station" className="hover:text-brand-accent-1 transition-colors">Reception</Link></li>
                    </ul>
                </div>

                {/* Column 4 — Signals & Legal */}
                <div>
                    <h3 className="text-white font-heading font-medium mb-4">Signals & Legal</h3>
                    <ul className="space-y-3 text-sm font-light text-gray-400">
                        <li><Link to="/signal-station" className="hover:text-brand-accent-3 transition-colors">Signal Station</Link></li>
                        <li><a href="#" className="hover:text-brand-accent-3 transition-colors">On the Record</a></li>
                        <li><Link to="/kin-feed" className="hover:text-brand-accent-3 transition-colors">Kin Feed</Link></li>
                        <li><a href="#" className="hover:text-brand-accent-3 transition-colors">Referrals</a></li>
                        <li><a href="#" className="hover:text-brand-accent-3 transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-brand-accent-3 transition-colors">Terms & Conditions</a></li>
                    </ul>
                </div>
            </div>

            {/* Contact Strip */}
            <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light tracking-wide text-gray-500">
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
                    <span>Email: <a href="mailto:shewa@kinstrategi.com" className="text-brand-accent-2 hover:underline">shewa@kinstrategi.com</a></span>
                    <span className="hidden md:inline">•</span>
                    <span>Location: Lagos, Nigeria</span>
                    <span className="hidden md:inline">•</span>
                    <span>We serve clients worldwide.</span>
                </div>
                <div>
                    © {new Date().getFullYear()} KinStrategi | Leiré Studio.
                </div>
            </div>
        </footer>
    );
}
