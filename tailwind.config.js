// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        // your content paths
    ],
    theme: {
        extend: {
            animation: {
                "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
            },
            keyframes: {
                "spin-around": {
                    "0%": {
                        transform: "translateZ(0) rotate(0)",
                    },
                    "100%": {
                        transform: "translateZ(0) rotate(360deg)",
                    },
                },
            },
        },
    },
    plugins: [],
};