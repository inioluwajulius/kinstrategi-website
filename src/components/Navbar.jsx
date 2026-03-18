import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import kinLogoWhite from '../assets/kinstrategi-logo-white.png';
import kinLogoColor from '../assets/kinstrategi-logo-color.png';
import leireLogo from '../assets/Leire icon.png';

const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'The Playbook', path: '/playbook' },
    { name: 'Leiré', path: '/leire' },
    { name: 'Manifesto', path: '/manifesto' },
    { name: 'Signal Station', path: '/signal-station' },
    { name: 'Fit Finder', path: '/fit-finder' },
    { name: 'The Citadel', path: '/citadel' },
    { name: 'Kin Feed', path: '/kin-feed' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'Reception', path: '/sign-station' }
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isLeire = location.pathname === '/leire';

    return (
        <>
            <nav className="fixed w-full top-0 left-0 right-0 z-[100] bg-brand-dark/90 backdrop-blur-md border-b border-white/5 transition-colors duration-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">

                        <Link to="/" className="flex-shrink-0 flex items-center gap-2 relative z-[110]">
                            {isLeire ? (
                                <div className="flex items-center gap-1">
                                    <img
                                        src={leireLogo}
                                        alt="Leiré Studio Logo"
                                        className="h-12 md:h-16 w-auto object-contain"
                                    />
                                    <span className="font-heading text-xl md:text-2xl font-bold tracking-tight text-white drop-shadow-lg">
                                        Leiré Studio
                                    </span>
                                </div>
                            ) : (
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
                            )}
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden xl:flex space-x-6 relative z-[110]">
                            {NAV_LINKS.map(link => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="text-sm font-medium hover:text-brand-accent-2 transition-colors duration-300 relative group"
                                >
                                    {link.name}
                                    {location.pathname === link.path && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute -bottom-2 left-0 right-0 h-0.5 bg-brand-accent-2"
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button - Ensures visibility on smaller devices */}
                        <div className="flex items-center xl:hidden relative z-[110]">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-white hover:text-brand-accent-2 focus:outline-none p-2 bg-white/5 rounded-md border border-white/10 active:scale-95 transition-transform"
                                aria-label="Toggle Menu"
                            >
                                {isOpen ? <X size={28} /> : <Menu size={28} />}
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
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="absolute inset-y-0 left-0 w-72 max-w-[80vw] bg-brand-base shadow-2xl border-r border-white/10 flex flex-col pt-28 px-8 pb-10 overflow-y-auto"
                        >
                            <div className="flex flex-col space-y-6">
                                {NAV_LINKS.map(link => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className="text-xl font-heading tracking-wide text-white hover:text-brand-accent-2 transition-colors border-b border-white/5 pb-4"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
