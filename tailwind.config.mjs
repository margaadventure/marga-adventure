/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Montserrat"', 'sans-serif'],
                heading: ['"Plus Jakarta Sans"', 'sans-serif'],
                serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
            },
            colors: {
                brand: {
                    light: '#5a9dc9',
                    DEFAULT: '#1E73BE',
                    dark: '#165a94',
                },
                accent: '#e67e22'
            },
            animation: {
                'vertical-scroll': 'vertical-scroll 45s linear infinite',
                'slow-zoom': 'slow-zoom 45s cubic-bezier(0.1, 0, 0.9, 1) infinite alternate',
                'fade-in': 'fade-in 2.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
                'fade-in-up': 'fade-in-up 2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
                // Defined in CSS because of initial opacity needing to be 0
            },
            keyframes: {
                'vertical-scroll': {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(-50%)' },
                },
                'slow-zoom': {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(1.15)' },
                },
                'fade-in': {
                    'from': { opacity: 0, transform: 'scale(0.95)' },
                    'to': { opacity: 1, transform: 'scale(1)' },
                },
                'fade-in-up': {
                    'from': { opacity: 0, transform: 'translateY(60px)' },
                    'to': { opacity: 1, transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
