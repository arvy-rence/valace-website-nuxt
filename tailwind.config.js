/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

module.exports = {
    content: [
        './assets/**/*.{vue,js,css}',
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
    ],
    variants: {
        extend: {},
    },
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',

            // custom
            'primary': '#00104A',
            'secondary': '#E10909',
            'tertiary': '#000D3E',

            // built in
            'black': colors.black,
            'white': colors.white,
            'gray': colors.gray,
            'emerald': colors.emerald,
            'indigo': colors.indigo,
            'yellow': colors.yellow,
            'purple': colors.purple,
            'slate': colors.slate,
            'red': colors.red,
            'tahiti': '#3ab7bf',
            'silver': '#ecebff',
            'bubble-gum': '#ff77e9',
            'bermuda': '#78dcca',
        },
        fontFamily: {
            'khula': ['Khula', 'sans-serif'],
            'kulim': ['Kulim Park', 'sans-serif']
        },

        backgroundImage: {
            // 'sistercities-bg': "url('~/assets/images/book-bg.png')",
        }
    },
    plugins: [],
};
