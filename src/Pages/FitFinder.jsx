import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import fitFinderBg from '../assets/Fit Finder_ Interactive Diagnostic Tool-2.png';
import { clientQuiz, talentQuiz, clientIdentities, talentIdentities } from '../data/fitFinderData';

export default function FitFinder() {
    const [mode, setMode] = useState(null); // 'client' | 'talent'
    const [currentStep, setCurrentStep] = useState(0);
    const [points, setPoints] = useState({ A: 0, B: 0, C: 0, D: 0, E: 0 });
    const [q3Points, setQ3Points] = useState({ A: 0, B: 0, C: 0, D: 0, E: 0 });
    const [selected, setSelected] = useState([]); // Array of selected option labels
    const [result, setResult] = useState(null); // Final result key (A, B, C, D, E)

    const isClient = mode === 'client';
    const activeQuiz = isClient ? clientQuiz : talentQuiz;
    const activeIdentities = isClient ? clientIdentities : talentIdentities;

    const startQuiz = (selectedMode) => {
        setMode(selectedMode);
        setCurrentStep(0);
        setPoints({ A: 0, B: 0, C: 0, D: 0, E: 0 });
        setQ3Points({ A: 0, B: 0, C: 0, D: 0, E: 0 });
        setSelected([]);
        setResult(null);
    };

    const handleOptionSelect = (option, question) => {
        if (question.type === 'single') {
            setSelected([option]);
        } else {
            // Multi-select
            if (selected.includes(option)) {
                setSelected(selected.filter(i => i !== option));
            } else {
                if (!question.max || selected.length < question.max) {
                    setSelected([...selected, option]);
                }
            }
        }
    };

    const handleNext = () => {
        const question = activeQuiz[currentStep];
        if (selected.length === 0) return;

        // Calculate points for this question
        const newPoints = { ...points };
        const newQ3Points = { ...q3Points };

        selected.forEach(selOption => {
            const optData = question.options.find(o => o.label === selOption);
            if (optData && optData.points) {
                Object.keys(optData.points).forEach(identity => {
                    newPoints[identity] += optData.points[identity];
                    if (currentStep === 2) { // 0-indexed, so Q3 is index 2
                        newQ3Points[identity] += optData.points[identity];
                    }
                });
            }
        });

        setPoints(newPoints);
        if (currentStep === 2) setQ3Points(newQ3Points);

        if (currentStep < activeQuiz.length - 1) {
            setCurrentStep(currentStep + 1);
            setSelected([]);
        } else {
            // Calculate Result
            calculateResult(newPoints, newQ3Points);
        }
    };

    const calculateResult = (finalPoints, finalQ3Points) => {
        let maxScore = -1;
        let winners = [];

        Object.keys(finalPoints).forEach(key => {
            if (finalPoints[key] > maxScore) {
                maxScore = finalPoints[key];
                winners = [key];
            } else if (finalPoints[key] === maxScore) {
                winners.push(key);
            }
        });

        if (winners.length === 1) {
            setResult(winners[0]);
        } else {
            // Tie beaker based on Q3
            let tieBreakerWinner = winners[0];
            let maxQ3 = -1;
            winners.forEach(w => {
                if (finalQ3Points[w] > maxQ3) {
                    maxQ3 = finalQ3Points[w];
                    tieBreakerWinner = w;
                }
            });
            setResult(tieBreakerWinner);
        }
        setCurrentStep(currentStep + 1); // Move past last question
    };

    const renderLanding = () => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-4xl mx-auto px-4 text-center z-10 relative"
        >
            <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="font-tech text-brand-accent-2 tracking-widest uppercase text-sm mb-4 block"
            >
                Fit Finder
            </motion.span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8">
                Find Your <span className="text-brand-accent-2">Fit.</span>
            </h1>
            <p className="font-body text-xl text-gray-300 font-light mb-12 max-w-2xl mx-auto">
                Are you a brand looking for the right creative team? Or a creative looking for the right clients?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                {/* Path 1 — The Client */}
                <div
                    onClick={() => startQuiz('client')}
                    className="flex flex-col items-center text-center p-12 border border-white/10 bg-black/50 hover:border-brand-accent-2 transition-all group cursor-pointer"
                >
                    <span className="font-tech text-sm text-brand-accent-2 tracking-widest uppercase mb-4 block">
                        Path 1 — The Client
                    </span>
                    <p className="font-body text-gray-300 font-light mb-8 flex-grow">
                        "I'm building a brand and I need the right team."
                    </p>
                    <button className="uppercase font-tech text-xs tracking-widest border border-brand-accent-2 text-brand-accent-2 px-6 py-4 group-hover:bg-brand-accent-2 group-hover:text-brand-dark transition-all w-full">
                        I Need a Creative Team
                    </button>
                </div>

                {/* Path 2 — The Talent */}
                <div
                    onClick={() => startQuiz('talent')}
                    className="flex flex-col items-center text-center p-12 border border-white/10 bg-black/50 hover:border-brand-accent-3 transition-all group cursor-pointer"
                >
                    <span className="font-tech text-sm text-brand-accent-3 tracking-widest uppercase mb-4 block">
                        Path 2 — The Talent
                    </span>
                    <p className="font-body text-gray-300 font-light mb-8 flex-grow">
                        "I'm a creative looking for rooms that actually value my work."
                    </p>
                    <button className="uppercase font-tech text-xs tracking-widest border border-brand-accent-3 text-brand-accent-3 px-6 py-4 group-hover:bg-brand-accent-3 group-hover:text-brand-dark transition-all w-full">
                        I'm a Creative
                    </button>
                    <p className="text-[10px] text-gray-500 mt-4 leading-relaxed font-body">Disclaimer: Joining the Citadel does not guarantee placement. It means you're in our trusted network.</p>
                </div>
            </div>
        </motion.div>
    );

    const renderQuiz = () => {
        if (!activeQuiz[currentStep]) return null;
        const question = activeQuiz[currentStep];
        const accentColor = isClient ? 'text-brand-accent-2' : 'text-brand-accent-3';
        const borderColor = isClient ? 'border-brand-accent-2' : 'border-brand-accent-3';
        const bgColorHover = isClient ? 'hover:bg-brand-accent-2/10' : 'hover:bg-brand-accent-3/10';

        return (
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full max-w-3xl mx-auto px-4 z-10 relative"
            >
                <div className="mb-12 text-center">
                    <span className={`font-tech text-xs tracking-widest uppercase ${accentColor} mb-2 block`}>
                        Question {currentStep + 1} of {activeQuiz.length}
                    </span>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">{question.title}</h2>
                    <p className="font-body text-xl text-gray-300 font-light">{question.subtitle}</p>
                    {question.type === 'multi' && (
                        <p className="font-tech text-xs text-brand-accent-1 mt-4 tracking-wider uppercase">
                            Select up to {question.max} options
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {question.options.map((opt, idx) => {
                        const isSelected = selected.includes(opt.label);
                        return (
                            <motion.div
                                key={idx}
                                onClick={() => handleOptionSelect(opt.label, question)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`p-6 border cursor-pointer transition-all flex items-center justify-between ${isSelected
                                        ? `bg-black/80 ${borderColor} shadow-[0_0_15px_rgba(255,255,255,0.1)]`
                                        : `bg-brand-base/40 border-white/10 ${bgColorHover}`
                                    }`}
                            >
                                <span className="font-body text-lg font-light">{opt.label}</span>
                                <div className={`w-6 h-6 rounded-sm border flex items-center justify-center ${isSelected ? borderColor : 'border-white/20'}`}>
                                    {isSelected && <Check size={16} className={accentColor} />}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-12 flex justify-between items-center border-t border-white/10 pt-8">
                    <button
                        onClick={() => startQuiz(null)}
                        className="font-tech text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-colors"
                    >
                        Back to Start
                    </button>

                    <button
                        onClick={handleNext}
                        disabled={selected.length === 0}
                        className={`font-tech text-xs tracking-widest uppercase px-8 py-4 border transition-all ${selected.length > 0
                                ? `${borderColor} ${accentColor} hover:bg-white/5`
                                : 'border-white/10 text-white/30 cursor-not-allowed'
                            }`}
                    >
                        {currentStep === activeQuiz.length - 1 ? 'Analyze Identity' : 'Next Sequence'}
                    </button>
                </div>
            </motion.div>
        );
    };

    const renderResult = () => {
        const finalIdentity = activeIdentities[result];
        const accentColor = isClient ? 'text-brand-accent-2' : 'text-brand-accent-3';
        const borderColor = isClient ? 'border-brand-accent-2' : 'border-brand-accent-3';
        const bgAccent = isClient ? 'bg-brand-accent-2' : 'bg-brand-accent-3';

        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-3xl mx-auto px-4 z-10 relative text-center"
            >
                <div className="mb-12">
                    <span className="font-tech text-xs tracking-widest uppercase text-brand-accent-1 mb-4 block">
                        Diagnostic Complete
                    </span>
                    <h2 className="font-heading text-5xl md:text-7xl font-bold mb-6">
                        You are <br /><span className={accentColor}>{finalIdentity.title}</span>
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100px" }}
                        className={`h-1 ${bgAccent} mx-auto mb-8`}
                    />
                    <p className="font-body text-xl md:text-2xl text-gray-200 font-light leading-relaxed mb-12">
                        {finalIdentity.description}
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    {isClient ? (
                        <button onClick={() => window.open('mailto:hello@kinstrategi.com?subject=Fit Finder: The ' + finalIdentity.title, '_blank')} className={`${bgAccent} text-brand-dark font-tech font-bold text-sm tracking-widest uppercase px-10 py-5 hover:scale-105 transition-transform`}>
                            Kini Your Strategi
                        </button>
                    ) : (
                        <button onClick={() => window.open('mailto:hello@kinstrategi.com?subject=Citadel Application: The ' + finalIdentity.title, '_blank')} className={`${bgAccent} text-brand-dark font-tech font-bold text-sm tracking-widest uppercase px-10 py-5 hover:scale-105 transition-transform`}>
                            Secure My Spot in the Citadel
                        </button>
                    )}

                    <button
                        onClick={() => startQuiz(null)}
                        className={`border ${borderColor} ${accentColor} font-tech text-sm tracking-widest uppercase px-10 py-5 hover:bg-white/5 transition-colors`}
                    >
                        Retake Assessment
                    </button>
                </div>
            </motion.div>
        );
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-32 bg-brand-dark">
            {/* Background with slow zoom effect */}
            <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-15 mix-blend-screen"
                style={{ backgroundImage: `url('${fitFinderBg}')` }}
            />

            <div className="absolute inset-0 z-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark" />

            {/* Content Area */}
            <AnimatePresence mode="wait">
                {mode === null && (
                    <motion.div key="landing" className="w-full">
                        {renderLanding()}
                    </motion.div>
                )}
                {mode && !result && (
                    <motion.div key="quiz" className="w-full">
                        {renderQuiz()}
                    </motion.div>
                )}
                {result && (
                    <motion.div key="result" className="w-full">
                        {renderResult()}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}