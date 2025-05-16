/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}"
    ],
    theme: {
        extend: {
            transitionProperty: {
                height: 'height',
            },
            colors: {
                primary: '#0A2647',
                secondary: '#2C74B3',
                accent: '#F6C90E',
                light: '#F3F6FA',
                darkText: '#1C1C1C',
                mutedText: '#4B5563',
            },
        },
    },
    plugins: [],
}
