"use client";
import React from "react";
import { Boxes } from "../ui/Background.jsx";
import { TypewriterEffectSmooth, TypewriterEffect } from "../ui/typewriter-effect.jsx";

export function Home({className}) {
    const wordCSS = '';
    const words = [
        {
            text: "Computer",
            className : wordCSS
        },
        {
            text: "Science",
            className: wordCSS
        },
        {
            text: "and",
            className: wordCSS
        },
        {
            text: "Engineering",
            className: wordCSS
        },
        {
            text: "-",
            className : wordCSS
        },
        {
            text: "AI",
            className: wordCSS
        },
        {
            text: "and",
            className: wordCSS
        },
        {
            text: "ML",
            className: wordCSS
        }
    ];
    return (<>
        <div className={className} >
            <Boxes className='h-screen w-screen relative' />
        </div>
        <div className=" absolute w-screen text-center top-[43%] font-mono left-[50%] -translate-x-1/2 -translate-y-1/2 text-8xl font-stretch-expanded whitespace-nowrap leading-[0.9] " >
            <h1 className=" tracking-tight bg-gradient-to-r from-purple-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent  " >
                Department of
            </h1>
            <h1 className=" text-lime-400 flex text-8xl flex-col font-thin font-sans items-center justify-center tracking-wider" >
                <TypewriterEffectSmooth words={words} className={'text-6xl font-extrabold scale-[1.1]'} />
            </h1>
            <h1 className="text-5xl tracking-tighter " >
                Maharaja Agrasen Institute of Technology
            </h1>
        </div>
    </>
    );
}