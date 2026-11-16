import { useState, useEffect, useRef } from 'react';

const DEFAULT_PREFIX = "We build brands, shape campaigns and manage the creative work that ";
const PHRASES = [
    "moves businesses forward.",
    "builds what makes them matter.",
    "brings vision to execution."
];

export default function TypewriterHeadline({
    prefix = DEFAULT_PREFIX,
    phrases = PHRASES,
    typingSpeed = 42,      // ms per character (smooth & natural)
    deletingSpeed = 24,    // ms per character when deleting
    pauseDuration = 3800   // ms to pause after typing a complete phrase
}) {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typedCount, setTypedCount] = useState(0);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    const fullCurrentText = prefix + phrases[currentPhraseIndex];
    const prefixLength = prefix.length;

    // Check for reduced motion preference
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(mediaQuery.matches);

        const handleChange = (e) => setPrefersReducedMotion(e.matches);
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        if (prefersReducedMotion) return;

        let timer;
        const currentTargetText = fullCurrentText;

        if (!isDeleting) {
            // Typing forward
            if (typedCount < currentTargetText.length) {
                // Add natural slight human variance (±8ms)
                const jitter = (Math.random() - 0.5) * 12;
                const speed = Math.max(25, typingSpeed + jitter);

                timer = setTimeout(() => {
                    setTypedCount((prev) => prev + 1);
                }, speed);
            } else {
                // Finished typing full phrase: pause before deleting
                timer = setTimeout(() => {
                    setIsDeleting(true);
                }, pauseDuration);
            }
        } else {
            // Deleting backwards: delete back to prefix so prefix stays visible
            if (typedCount > prefixLength) {
                timer = setTimeout(() => {
                    setTypedCount((prev) => prev - 1);
                }, deletingSpeed);
            } else {
                // Suffix is deleted: pause briefly, then advance to next phrase
                timer = setTimeout(() => {
                    setIsDeleting(false);
                    setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
                }, 450);
            }
        }

        return () => clearTimeout(timer);
    }, [typedCount, isDeleting, fullCurrentText, currentPhraseIndex, prefixLength, phrases.length, typingSpeed, deletingSpeed, pauseDuration, prefersReducedMotion]);

    // If reduced motion is preferred, render static full headline
    if (prefersReducedMotion) {
        return (
            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight mx-auto text-center">
                <span>{prefix}</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-2 via-white to-brand-accent-3">
                    {phrases[0]}
                </span>
            </h1>
        );
    }

    // Split currently displayed characters into prefix (white) and suffix (gradient)
    const displayedPrefix = fullCurrentText.slice(0, Math.min(typedCount, prefixLength));
    const displayedSuffix = typedCount > prefixLength ? fullCurrentText.slice(prefixLength, typedCount) : "";

    return (
        <h1
            className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight mx-auto text-center relative"
            aria-label={fullCurrentText}
        >
            {/* 
              Ghost / Spacer element: Keeps DOM dimensions 100% constant 
              so elements below never jump or shift during typing.
            */}
            <span
                className="invisible select-none pointer-events-none block aria-hidden"
                aria-hidden="true"
            >
                <span>{prefix}</span>
                <span className="text-transparent">
                    {phrases[0]}
                </span>
            </span>

            {/* Active animated text (positioned directly on top of ghost space) */}
            <span className="absolute inset-x-0 top-0 block" aria-hidden="true">
                <span className="text-white">{displayedPrefix}</span>
                {displayedSuffix && (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-2 via-white to-brand-accent-3">
                        {displayedSuffix}
                    </span>
                )}
                {/* Blinking Typewriter Cursor */}
                <span
                    className="inline-block w-[3px] md:w-[4.5px] h-[0.9em] bg-brand-accent-2 ml-1 align-middle animate-pulse shadow-[0_0_12px_rgba(212,175,55,0.9)]"
                    style={{ animationDuration: '0.8s' }}
                />
            </span>
        </h1>
    );
}
