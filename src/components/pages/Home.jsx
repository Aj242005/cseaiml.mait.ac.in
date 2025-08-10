"use client";

import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";

import { TypewriterEffectSmooth } from "../ui/typewriter-effect.jsx";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card.jsx";
import { Timeline } from "../ui/timeline.jsx";
import HoverRevealCard from '../HoverRevealCard.jsx'
import IsometricCubes from "../ui/IsometricCubes.jsx";


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

    const timelineData = [
        {
            title: "04 Sep 2025",
            content: {
                description: "A deep dive into neural networks and large language models.",
                title: "AI & Machine Learning Workshop",
                src: "https://ik.imagekit.io/evkfzbhzw/HOD.jpg?updatedAt=1754851971597",
                ctaText: "Register",
                ctaLink: "#",
                content: () => (
                    <p>
                        Join our comprehensive workshop on Artificial Intelligence and Machine Learning. This event is designed for students and professionals looking to get hands-on experience with cutting-edge technologies. <br /> <br /> Topics include supervised and unsupervised learning, deep learning fundamentals, and practical applications using Python, TensorFlow, and PyTorch. No prior experience is required, but a basic understanding of programming concepts is recommended.
                    </p>
                ),
            }
        },
        {
            title: "28 Oct 2025",
            content: {
                description: "A 24-hour innovation challenge for coders and creators.",
                title: "MAIT Hackathon 2025",
                src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop",
                ctaText: "Learn More",
                ctaLink: "#",
                content: () => (
                    <p>
                        Get ready for the most anticipated event of the year! The MAIT Hackathon 2025 brings together the brightest minds to solve real-world problems. <br /> <br /> Form a team, pick a challenge, and build something amazing in 24 hours. We have exciting prizes, mentorship from industry experts, and plenty of networking opportunities. Tracks include Sustainable Tech, Healthcare AI, and FinTech Solutions.
                    </p>
                ),
            },
        },
        {
            title: "15 Nov 2025",
            content: {
                description: "By renowned physicist Dr. Evelyn Reed.",
                title: "Guest Lecture on Quantum Computing",
                src: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=2070&auto=format&fit=crop",
                ctaText: "Join",
                ctaLink: "#",
                content: () => (
                    <p>
                        Explore the future of computation with Dr. Evelyn Reed, a leading researcher in quantum mechanics. This lecture will demystify the principles of quantum computing, including qubits, superposition, and entanglement. <br /> <br /> Dr. Reed will also discuss the potential impact of quantum computers on fields like cryptography, medicine, and materials science. This is a rare opportunity to learn from a pioneer in the field.
                    </p>
                ),
            }
        },
    ];
    const hodMessage = {
        title: "Message from HOD",
        description: "Academic excellence is the foundation of our department. Our curriculum is meticulously designed to cater to the demands of the industry while also laying a strong foundation for research and higher studies. We offer a broad spectrum of courses that cover both the fundamental principles of computer science and the latest advancements in areas such as Artificial Intelligence, Machine Learning, Data Science. Our faculty comprises a dynamic mix of experienced educators and emerging researchers who bring both extensive knowledge and fresh perspectives to the classroom. They are not just teachers but also mentors, guiding students through their academic journey and helping them achieve their full potential. We believe in a student-centric approach to education, where learning is not confined to the classroom but extends to hands-on projects, internships, workshops, and seminars. Our state-of-the-art laboratories and infrastructure provide an ideal environment for practical learning and experimentation.",
        imgUrl: 'https://ik.imagekit.io/evkfzbhzw/HOD.jpg?updatedAt=1754848809209'
    }
    const animationRef = useRef(null);
    const isInView = useInView(animationRef, { once: true, amount: 0.25 });

    return (
        <>
            {/* Hero Section */}
            <div className={className + "relative h-screen md:h-170 w-full hero-bg-card "} >
                <div className={'absolute h-[60vh] md:h-150 w-[90%] md:w-320 rounded-4xl top-[67%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-[url(https://ik.imagekit.io/evkfzbhzw/ai.jpg?updatedAt=1754772597181)] object-cover opacity-35 hero-bg '} >
                </div>
                <div className="hero-blob" >
                </div>
            </div>

            {/* Hero Text */}
            <div className="absolute w-screen text-center top-[62%] font-mono left-[50%] -translate-x-1/2 -translate-y-1/2 text-3xl md:text-6xl lg:text-8xl font-stretch-expanded whitespace-nowrap scale-[0.6] md:scale-[0.8] leading-[0.9] px-4">
                <h1 className="tracking-tight text-[#00B4D8] text-extrabold">
                    Department of
                </h1>
                <h1 className="bg-gradient-to-r from-[#FF6FD8] via-[#6A11CB] to-[#00C9A7] text-transparent bg-clip-text flex text-4xl md:text-6xl lg:text-8xl flex-col font-thin font-sans items-center justify-center tracking-wider">
                    <TypewriterEffectSmooth words={words} className={'text-2xl md:text-4xl lg:text-6xl font-extrabold scale-[1.1]'} />
                </h1>
                <h1 className="text-2xl md:text-3xl lg:text-5xl tracking-tighter">
                    Maharaja Agrasen Institute of Technology, Delhi
                </h1>
            </div>

            {/* Newsletter Section */}
            <div className="h-screen w-full flex" >
                <div className="absolute h-auto md:h-161 w-[95%] md:w-[90%] top-[5%] left-[50%] -translate-x-1/2 rounded-xl flex flex-col md:flex-row newsletter-card shadow-amber-400 inset-shadow-sm shadow-xl p-4 md:p-0" >
                    {/* Newsletter Text */}
                    <div className="w-full md:w-[55%] md:absolute md:h-158.5 z-[2] md:right-[43%] mb-6 md:mb-0" >
                        <div className="relative md:absolute top-[10%] md:top-[30%] scale-[1] md:scale-[1.5] left-0 md:left-[27.5%] card">
                            <span className="card__title">Newsletter</span>
                            <p className="card__content">
                                Explore the latest advancements in AI and Machine Learning, featuring student projects, faculty research, and industry insights in our newest edition
                            </p>
                            <form className="card__form">
                                <button className="card__button">Read Now</button>
                            </form>
                        </div>
                    </div>

                    {/* Newsletter Image */}
                    <div className="w-full md:w-[44.5%] md:absolute md:h-161 z-[2] bg-amber-50 md:left-[54.7%] rounded-[20px]" >
                        <CardContainer className="relative md:absolute top-0 md:top-[8%] left-0 md:left-[12%] inter-var">
                            <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] w-full md:w-auto sm:w-[30rem] h-60 md:h-150 rounded-xl p-6">
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <a href="https://www.mait.ac.in" className="cursor-pointer " target="_blank" rel="noopener noreferrer">
                                        <img
                                            src="https://ik.imagekit.io/evkfzbhzw/newsletter.jpg?updatedAt=1754808643370"
                                            height="1000"
                                            width="1000"
                                            className="h-48 md:h-130 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                            alt="thumbnail"
                                        />
                                    </a>
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>
                </div>
            </div>

            {/* Upcoming Events */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-mono font-semibold bg-gradient-to-r from-[#ff218c] via-[#ffd800] to-[#e121ff] object-contain text-transparent bg-clip-text absolute top-[220%] left-[50%] -translate-x-1/2 z-[2] text-center px-4">
                Upcoming Events
            </h1>
            <div className="absolute top-[220%] h-full left-[50%] w-[95%] -translate-x-1/2" >
                <Timeline data={timelineData} />
            </div>

            {/* HOD Message Section */}
            <div className="absolute top-[370%] overflow-hidden h-full w-[95%] md:w-[90%] left-[50%] -translate-x-1/2" >
                <h1 className=" hidden relative top-[2%] font-sans text-transparent bg-clip-text bg-gradient-to-r from-[#bf0fff] to-[#cbff49] text-5xl lg:inline-block left-[6%] z-[2] font-semibold ">
                    Hod's Message
                </h1>
                <div className="relative top-[8%]  md:left-[10%] flex flex-col lg:flex-row items-center lg:items-start" >
                    <div className="w-full lg:w-auto mb-8 lg:mb-0">
                        <HoverRevealCard
                            imageUrl={hodMessage.imgUrl}
                            title={hodMessage.title}
                            description={hodMessage.description}
                        />
                    </div>
                    <div className="hidden lg:block h-screen w-screen relative lg:-top-[80%] lg:left-[26%]" >
                        <div className="relative h-full top-[13%]">
                            <IsometricCubes />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}