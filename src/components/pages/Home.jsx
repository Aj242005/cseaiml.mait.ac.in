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
            <div className={className + "relative h-170 w-full hero-bg-card "} >
                <div className={'absolute h-150  w-320 rounded-4xl top-[55%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-[url(https://ik.imagekit.io/evkfzbhzw/ai.jpg?updatedAt=1754772597181)] object-cover opacity-35 hero-bg '} >
                </div>
                <div className="hero-blob" >

                </div>

            </div>
            <div className="absolute w-screen text-center top-[21%] font-mono left-[50%] -translate-x-1/2 -translate-y-1/2 text-8xl font-stretch-expanded whitespace-nowrap scale-[0.8]  leading-[0.9]">
                <h1 className="tracking-tight text-[#00B4D8] text-extrabold">
                    Department of
                </h1>
                <h1 className="bg-gradient-to-r from-[#FF6FD8] via-[#6A11CB] to-[#00C9A7] text-transparent bg-clip-text flex text-8xl flex-col font-thin font-sans items-center justify-center tracking-wider">
                    <TypewriterEffectSmooth words={words} className={'text-6xl font-extrabold scale-[1.1]'} />
                </h1>
                <h1 className="text-5xl tracking-tighter">
                    Maharaja Agrasen Institute of Technology, Delhi
                </h1>
            </div>

            {/* ====== SCROLLABLE SECTION WITH ANIMATION ====== */}
            <div className="h-screen w-full flex" >
                <div className=" absolute h-161 w-[95%] top-[5%] left-[50%] -translate-x-1/2 rounded-xl flex newsletter-card shadow-amber-400 inset-shadow-sm shadow-2xl" >
                    <div className="absolute h-158.5 w-[55%] z-[2] right-[43%]" >
                        <div class=" absolute top-[30%] scale-[1.5] left-[27.5%] card">
                            <span class="card__title">Newsletter</span>
                            <p class="card__content">
                                Explore the latest advancements in AI and Machine Learning, featuring
                            </p>
                            <form class="card__form">
                                <button class="card__button">Read Now</button>
                            </form>
                        </div>
                    </div>

                    <div className=" absolute h-158.5 w-[40%] z-[2] bg-amber-50 left-[55%] rounded-3xl" >
                        <CardContainer className=" absolute top-[1%] inter-var">
                            <CardBody className="  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] w-auto sm:w-[30rem] h-150 rounded-xl p-6">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <a href="https://www.mait.ac.in" className="cursor-pointer " target="_blank" >
                                        <img
                                            src="https://ik.imagekit.io/evkfzbhzw/newsletter.jpg?updatedAt=1754808643370"
                                            height="1000"
                                            width="1000"
                                            className="h-130 object-cover rounded-xl group-hover/card:shadow-xl"
                                            alt="thumbnail"
                                        />
                                    </a>
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>
                </div>
            </div>
        </>
    );
}