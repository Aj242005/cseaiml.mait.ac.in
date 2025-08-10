// File: components/ui/timeline.jsx (or your existing path)

"use client";

import React, { useEffect, useRef, useState, useId } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useOutsideClick } from "../../hooks/use-outside-click"; // Make sure this path is correct

export const Timeline = ({ data }) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);
    const [active, setActive] = useState(null);
    const cardRef = useRef(null);
    const id = useId();

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref, data]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });
    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    // **FIX 1: SCROLL ISSUE**
    // The cleanup function in this useEffect now ensures the scroll is always restored.
    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === "Escape") {
                setActive(null);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);

        // This cleanup function now runs when the component unmounts.
        return () => {
            // This line is the crucial fix for the scroll lock issue.
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [active]);

    useOutsideClick(cardRef, () => setActive(null));

    return (
        // **FIX 2: TIMELINE LINE**
        // The `pb-20` class was moved to this outer container.
        <div className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10 pb-20" ref={containerRef}>
            {/* Expanded Card Modal UI (No changes here) */}
            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-[60]"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0 grid place-items-center z-[100] p-4">
                        <motion.button
                            key={`button-close-${active.title}-${id}`}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.05 } }}
                            className="flex absolute top-4 right-4 lg:hidden items-center justify-center bg-white rounded-full h-8 w-8 z-[110]"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={cardRef}
                            className="w-full max-w-[600px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                        >
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <img
                                    src={active.src}
                                    alt={active.title}
                                    className="w-full h-60 md:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover"
                                />
                            </motion.div>
                            <div className="p-4">
                                <div className="flex justify-between items-start">
                                    <div className="flex-grow pr-4">
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-bold text-2xl text-neutral-700 dark:text-neutral-200"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400 mt-1"
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>
                                    <motion.a
                                        layoutId={`button-${active.ctaText}-${id}`}
                                        href={active.ctaLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white whitespace-nowrap"
                                    >
                                        {active.ctaText}
                                    </motion.a>
                                </div>
                                <div className="pt-4 relative">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-600 text-sm md:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                    >
                                        {typeof active.content === "function" ? active.content() : active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>

            {/* **FIX 2: TIMELINE LINE** */}
            {/* The `pb-20` class was removed from this inner `div`. Now the height calculation is correct. */}
            <div ref={ref} className="relative max-w-6xl mx-auto">
                {data.map((item, index) => {
                    const card = item.content;
                    return (
                        <div key={`timeline-item-${index}`} className="flex justify-start pt-10 md:pt-40 md:gap-10">
                            {/* Sticky Date Title */}
                            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                                    <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                                </div>
                                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Un-expanded Card as Timeline Content */}
                            <div className="relative pl-20 pr-4 md:pl-4 w-full">
                                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                                    {item.title}
                                </h3>
                                {/* This is the larger card from your last request */}
                                <motion.div
                                    layoutId={`card-${card.title}-${id}`}
                                    onClick={() => setActive(card)}
                                    className="p-6 w-full hover:bg-neutral-100 dark:hover:bg-neutral-800/50 rounded-2xl cursor-pointer border border-neutral-200 dark:border-neutral-800"
                                >
                                    <div className="flex gap-6 flex-col md:flex-row items-center w-full">
                                        <motion.div layoutId={`image-${card.title}-${id}`}>
                                            <img
                                                src={card.src}
                                                alt={card.title}
                                                className="h-48 w-48 md:h-28 md:w-28 rounded-lg object-cover flex-shrink-0"
                                            />
                                        </motion.div>
                                        <div className="flex-grow">
                                            <motion.h3
                                                layoutId={`title-${card.title}-${id}`}
                                                className="font-bold text-2xl text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                                            >
                                                {card.title}
                                            </motion.h3>
                                            <motion.p
                                                layoutId={`description-${card.description}-${id}`}
                                                className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base mt-1"
                                            >
                                                {card.description}
                                            </motion.p>
                                        </div>
                                        <motion.div layoutId={`button-${card.ctaText}-${id}`} className="hidden md:block px-5 py-2.5 text-base rounded-full font-bold bg-gray-200 dark:bg-neutral-700 text-black dark:text-white mt-4 md:mt-0">
                                            Details
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    );
                })}

                {/* Animated Line on the Left */}
                <div
                    style={{ height: `${height}px` }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]"
                >
                    <motion.div
                        style={{ height: heightTransform, opacity: opacityTransform }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

const CloseIcon = () => {
    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};