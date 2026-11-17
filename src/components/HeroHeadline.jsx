import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.16,
            delayChildren: 0.2
        }
    }
};

const lineVariants = {
    hidden: { 
        opacity: 0, 
        y: 22 
    },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.75, 
            ease: [0.16, 1, 0.3, 1] 
        } 
    }
};

export default function HeroHeadline() {
    return (
        <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-white max-w-4xl lg:max-w-[920px] leading-[1.18] sm:leading-[1.16] md:leading-[1.14] mx-auto text-center"
            aria-label="We build brands, shape campaigns and manage the creative work that builds what makes them matter."
        >
            <motion.span variants={lineVariants} className="block">
                <span>We build brands, </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-3 via-teal-200 to-brand-accent-2 font-semibold">
                    shape campaigns
                </span>
            </motion.span>
            
            <motion.span variants={lineVariants} className="block mt-1 sm:mt-1.5">
                <span>and manage the creative work</span>
            </motion.span>

            <motion.span variants={lineVariants} className="block mt-1 sm:mt-1.5">
                <span>that </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-2 via-amber-200 to-brand-accent-2 drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                    builds what makes them matter.
                </span>
            </motion.span>
        </motion.h1>
    );
}
