"use client";

// Imports for animation and component functionality
import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Your existing UI component imports
import { Boxes } from "../ui/Background.jsx";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect.jsx";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card.jsx";

export function Home({ className }) {
    const wordCSS = '';
    const words = [
        { text: "Computer", className: wordCSS },
        { text: "Science", className: wordCSS },
        { text: "and", className: wordCSS },
        { text: "Engineering", className: wordCSS },
        { text: "-", className: wordCSS },
        { text: "AI", className: wordCSS },
        { text: "and", className: wordCSS },
        { text: "ML", className: wordCSS }
    ];

    // The ref and inView hook remain the same
    const animationRef = useRef(null);
    const isInView = useInView(animationRef, { once: true, amount: 0.25 });

    return (
        <>
            {/* ====== TOP HERO SECTION (No changes here) ====== */}
            <div className={className + 'relative h-screen w-full bg-[url(https://ik.imagekit.io/evkfzbhzw/mait.jpg?updatedAt=1754766013055)] object-cover opacity-65 ' } >

            </div>
            <div className="absolute w-screen text-center top-[17%] font-mono left-[50%] -translate-x-1/2 -translate-y-1/2 text-8xl font-stretch-expanded whitespace-nowrap leading-[0.9]">
                <h1 className="tracking-tight bg-gradient-to-r from-purple-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                    Department of
                </h1>
                <h1 className="text-lime-400 flex text-8xl flex-col font-thin font-sans items-center justify-center tracking-wider">
                    <TypewriterEffectSmooth words={words} className={'text-6xl font-extrabold scale-[1.1]'} />
                </h1>
                <h1 className="text-5xl tracking-tighter">
                    Maharaja Agrasen Institute of Technology, Delhi
                </h1>
            </div>

            {/* ====== SCROLLABLE SECTION WITH ANIMATION ====== */}
            <div className="relative h-screen w-full  overflow-hidden">
                <div className="flex" ref={animationRef}>
                    <div className="h-screen w-[55%] bg-yellow-400 flex items-center justify-center">
                        <h1 className="text-6xl font-bold text-gray-800">
                            Hello world
                        </h1>
                    </div>

                    {/* 1. The main container still slides in, but a bit faster */}
                    <motion.div
                        className="h-screen w-[45%] flex items-center justify-center"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{
                            opacity: isInView ? 1 : 0,
                            x: isInView ? 0 : '100%'
                        }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    >
                        <a href="#">
                            <CardContainer className="inter-var -mt-30">
                                <CardBody className="bg-transparent border-transparent relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">

                                    {/* 2. Animate the image with a delay */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{
                                            opacity: isInView ? 1 : 0,
                                            y: isInView ? 0 : 20,
                                        }}
                                        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                                    >
                                        <CardItem
                                            translateZ="220"
                                            rotateX={20}
                                            rotateZ={-10}
                                            className="w-full mt-4"
                                        >
                                            <img
                                                src="https://ik.imagekit.io/evkfzbhzw/magazine_1_lSkeMNFz-O.jpg?updatedAt=1754725791864"
                                                height="1000"
                                                width="1000"
                                                className="h-170 w-full scale-[0.8] object-cover rounded-xl group-hover/card:shadow-xl"
                                                alt="thumbnail"
                                            />
                                        </CardItem>
                                    </motion.div>

                                    {/* 3. Animate the button with a longer delay */}
                                    <motion.div
                                        className="-mt-3"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{
                                            opacity: isInView ? 1 : 0,
                                            y: isInView ? 0 : 20,
                                        }}
                                        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                                    >
                                        <CardItem>
                                            <button
                                                type="submit"
                                                className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                                            >
                                                Explore
                                                <svg
                                                    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                                                    viewBox="0 0 16 19"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                                        className="fill-gray-800 group-hover:fill-gray-800"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </CardItem>
                                    </motion.div>

                                </CardBody>
                            </CardContainer>
                        </a>
                    </motion.div>
                </div>
            </div>
        </>
    );
}