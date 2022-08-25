/** @type {import('tailwindcss').Config} */
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

            // built in
            'white': '#ffffff',
            'purple': '#3f3cbb',
            'midnight': '#121063',
            'metal': '#565584',
            'tahiti': '#3ab7bf',
            'silver': '#ecebff',
            'bubble-gum': '#ff77e9',
            'bermuda': '#78dcca',
        },
        fontFamily: {
            'khula': ['Khula', 'sans-serif'],
            'kulim': ['Kulim Park', 'sans-serif']
        }
    },
    plugins: [],
};
