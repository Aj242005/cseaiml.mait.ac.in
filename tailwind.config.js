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
                'border-spin': 'border-spin 4s linear infinite',
                'hue-rotate-slow': 'hue-rotate 5s linear infinite'
            },
            keyframes: {
                'border-spin': { // Defines the animation steps
                    '0%': { '--tw-gradient-from-position': '0deg' },
                    '100%': { '--tw-gradient-from-position': '360deg' }
                },
                "spin-around": {
                    "0%": {
                        transform: "translateZ(0) rotate(0)",
                    },
                    "100%": {
                        transform: "translateZ(0) rotate(360deg)",
                    },
                },
                'hue-rotate': {
                    '0%': { filter: 'hue-rotate(0deg)' },
                    '100%': { filter: 'hue-rotate(360deg)' 
                    },
                }
            },
        },
    },
    plugins: []
};