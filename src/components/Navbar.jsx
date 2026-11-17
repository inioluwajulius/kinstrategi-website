import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

import kinLogoWhite from '../assets/kinstrategi-logo-white.png';
import kinLogoColor from '../assets/kinstrategi-logo-color.png';

const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Playbook', path: '/playbook' },
    { name: 'Manifesto', path: '/manifesto' },
    { name: 'Kin Network', path: '/kin-network' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'Contact', path: '/contact' }
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 25) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={`fixed w-full top-0 left-0 right-0 z-[100] transition-all duration-500 ${
                scrolled
                    ? 'bg-[#0D0D11]/92 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.7)] py-0'
                    : 'bg-brand-dark/80 backdrop-blur-md border-b border-white/5 py-1'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20 transition-all duration-300">

                        {/* LEFT AREA: KinStrategi Logo */}
                        <div className="flex-1 flex items-center justify-start">
                            <Link to="/" className="flex-shrink-0 flex items-center gap-2 relative z-[110]">
                                <div className="h-6 md:h-8 w-40 md:w-56 relative group flex items-center">
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
                        </div>

                        {/* MIDDLE AREA: Grouped Navigation Links */}
                        <div className="hidden xl:flex items-center justify-center space-x-6 2xl:space-x-8 relative z-[110] px-4">
                            {NAV_LINKS.map(link => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className={`text-sm font-medium transition-all duration-300 relative group py-1.5 whitespace-nowrap tracking-wide ${
                                            isActive ? 'text-white font-semibold' : 'text-gray-300 hover:text-brand-accent-2'
                                        }`}
                                    >
                                        {link.name}
                                        {isActive && (
                                            <motion.div
                                                layoutId="navbar-indicator"
                                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-accent-2 shadow-[0_0_10px_rgba(212,175,55,0.9)]"
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* RIGHT AREA: WORK WITH US CTA Button */}
                        <div className="hidden xl:flex flex-1 items-center justify-end relative z-[110]">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-1.5 bg-brand-accent-2/15 border border-brand-accent-2/70 text-brand-accent-2 hover:bg-brand-accent-2 hover:text-brand-dark px-4.5 py-2 font-tech text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_22px_rgba(212,175,55,0.4)] font-bold rounded-sm whitespace-nowrap"
                            >
                                <span>Work With Us</span>
                                <ArrowUpRight size={13} />
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex items-center xl:hidden relative z-[110]">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-white hover:text-brand-accent-2 focus:outline-none p-2 bg-white/5 rounded-md border border-white/10 active:scale-95 transition-transform cursor-pointer"
                                aria-label="Toggle Menu"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[90] xl:hidden overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/85 backdrop-blur-md"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="absolute inset-y-0 left-0 w-80 max-w-[85vw] bg-brand-base/95 shadow-2xl border-r border-white/10 flex flex-col pt-24 px-8 pb-10 overflow-y-auto backdrop-blur-2xl"
                        >
                            <span className="font-tech text-xs uppercase tracking-[0.3em] text-brand-accent-2 mb-6 block font-medium">
                                Navigation
                            </span>

                            <div className="flex flex-col space-y-4 flex-grow">
                                {NAV_LINKS.map(link => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-lg font-heading tracking-wide transition-colors border-b border-white/5 pb-3 flex items-center justify-between ${
                                            location.pathname === link.path ? 'text-brand-accent-2 font-bold' : 'text-white hover:text-brand-accent-2'
                                        }`}
                                    >
                                        <span>{link.name}</span>
                                        {location.pathname === link.path && (
                                            <span className="text-brand-accent-2 text-xs">✦</span>
                                        )}
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10">
                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full bg-brand-accent-2 text-brand-dark py-3.5 px-4 font-tech uppercase text-xs tracking-widest font-bold flex items-center justify-center gap-2 hover:bg-white transition-colors"
                                >
                                    <span>Work With Us</span>
                                    <ArrowUpRight size={14} />
                                </Link>
                                <p className="font-tech text-[10px] text-gray-400 uppercase tracking-widest text-center mt-3">
                                    hello@kinstrategi.com
                                </p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
