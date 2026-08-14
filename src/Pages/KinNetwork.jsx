import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import kinBg from '../assets/kin-network-bg.png';

export default function KinNetwork() {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-24 md:py-24 bg-brand-dark">
            {/* Background Image Setup */}
            <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${kinBg}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 via-brand-dark/60 to-brand-dark" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 w-full max-w-4xl mx-auto px-4 mt-4 md:mt-16 text-center"
            >
                <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-white">
                    Your next opportunity starts with the <span className="text-brand-accent-1">right community.</span>
                </h1>
                
                <p className="font-body text-xl md:text-2xl text-white font-light mb-8 drop-shadow-md leading-relaxed max-w-3xl mx-auto">
                    We share opportunities directly with our community first.
                </p>
                <p className="font-body text-lg text-white/70 font-light mb-16 drop-shadow-md leading-relaxed max-w-3xl mx-auto">
                    Become part of the Kin Network to receive project opportunities, hiring announcements, casting calls, collaborations, and exclusive updates from brands building across Africa and beyond.
                </p>

                <motion.a
                    href="https://chat.whatsapp.com/JtoaHGNKMjRIP2T43R4RT4?s=cl&p=i&mlu=4&amv=2"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-brand-accent-1 text-white px-10 py-5 font-heading uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(91,62,150,0.3)] hover:shadow-[0_0_30px_rgba(91,62,150,0.6)] transition-all"
                >
                    Become Part of the Kin Network →
                </motion.a>
            </motion.div>
        </div>
    );
}