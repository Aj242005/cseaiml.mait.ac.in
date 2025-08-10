import React, { useEffect, useState, useRef } from 'react';

// Utility function to combine class names
const cn = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

export const TypewriterEffect = ({
    words,
    className,
    cursorClassName
}) => {
    const [visibleChars, setVisibleChars] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const containerRef = useRef(null);

    // Split text inside of words into array of characters with spaces
    const wordsArray = words.map((word) => {
        return {
            ...word,
            text: word.text.split(""),
        };
    });

    // Calculate total characters including spaces
    const totalChars = wordsArray.reduce((acc, word, idx) => {
        return acc + word.text.length + (idx < wordsArray.length - 1 ? 1 : 0);
    }, 0);

    // Intersection Observer for triggering animation when in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    // Typewriter animation effect
    useEffect(() => {
        if (isInView && visibleChars < totalChars) {
            const timer = setTimeout(() => {
                setVisibleChars(prev => prev + 1);
            }, 100); // Adjust speed here
            return () => clearTimeout(timer);
        }
    }, [isInView, visibleChars, totalChars]);

    const renderWords = () => {
        let charCount = 0;
        return (
            <div ref={containerRef} className="inline">
                {wordsArray.map((word, idx) => {
                    return (
                        <div key={`word-${idx}`} className="inline-block">
                            {word.text.map((char, index) => {
                                charCount++;
                                return (
                                    <span
                                        key={`char-${index}`}
                                        className={cn(
                                            `dark:text-white text-black inline-block`,
                                            word.className
                                        )}
                                        style={{
                                            opacity: charCount <= visibleChars ? 1 : 0,
                                            transition: 'opacity 0.3s ease-in-out'
                                        }}>
                                        {char}
                                    </span>
                                );
                            })}
                            {/* Add space after each word except the last one */}
                            {idx < wordsArray.length - 1 && (
                                <span
                                    className="dark:text-white text-black inline-block"
                                    style={{
                                        opacity: (charCount + 1) <= visibleChars ? 1 : 0,
                                        transition: 'opacity 0.3s ease-in-out'
                                    }}>
                                    &nbsp;
                                    {(() => { charCount++; return null; })()}
                                </span>
                            )}
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div
            className={cn(
                "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
                className
            )}>
            {renderWords()}
            <span
                className={cn(
                    "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
                    cursorClassName
                )}
                style={{
                    animation: 'blink 1.6s infinite'
                }}>
            </span>
            <style jsx>{`
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
            `}</style>
        </div>
    );
};

export const TypewriterEffectSmooth = ({
    words,
    className,
    cursorClassName
}) => {
    const [isInView, setIsInView] = useState(false);
    const [width, setWidth] = useState('0%');
    const containerRef = useRef(null);

    // Split text inside of words into array of characters
    const wordsArray = words.map((word) => {
        return {
            ...word,
            text: word.text.split(""),
        };
    });

    // Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isInView) {
                    setIsInView(true);
                    setTimeout(() => {
                        setWidth('100%');
                    }, 1000); // 1 second delay
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [isInView]);

    const renderWords = () => {
        return (
            <div>
                {wordsArray.map((word, idx) => {
                    return (
                        <div key={`word-${idx}`} className="inline-block">
                            {word.text.map((char, index) => (
                                <span
                                    key={`char-${index}`}
                                    className={cn(`font-normal bg-gradient-to-r from-[#FF6FD8] via-[#6A11CB] to-[#00C9A7] text-transparent bg-clip-text transition-colors tracking-tighter text-7xl`, className)}>
                                    {char}
                                </span>
                            ))}
                            {/* Add space after each word except the last one */}
                            {idx < wordsArray.length - 1 && (
                                <span className="dark:text-white text-black">
                                    &nbsp;
                                </span>
                            )}
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className={cn("flex space-x-1 my-6", className)} ref={containerRef}>
            <div
                className="overflow-hidden pb-2"
                style={{
                    width: width,
                    transition: 'width 3s linear',
                    whiteSpace: 'nowrap'
                }}>
                <div
                    className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold"
                    style={{
                        whiteSpace: "nowrap",
                    }}>
                    {renderWords()}{" "}
                </div>{" "}
            </div>
            <span
                className={cn(
                    "block rounded-sm w-[4px] h-12 -mt-3 sm:h-6 xl:h-25 bg-red-600",
                    cursorClassName
                )}
                style={{
                    animation: 'blink 0.7s infinite'
                }}>
            </span>
            <style jsx>{`
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
            `}</style>
        </div>
    );
};

// Example usage component
export default function TypewriterDemo() {
    const words = [
        { text: "Hello", className: "text-blue-500" },
        { text: "World!", className: "text-green-500" },
        { text: "This", className: "text-purple-500" },
        { text: "is", className: "text-red-500" },
        { text: "Typewriter", className: "text-yellow-500" },
        { text: "Effect", className: "text-pink-500" }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center justify-center gap-10 p-4">
            <div>
                <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">Typewriter Effect</h2>
                <TypewriterEffect words={words} />
            </div>
            
            <div>
                <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">Typewriter Effect Smooth</h2>
                <TypewriterEffectSmooth words={words} />
            </div>
        </div>
    );
}