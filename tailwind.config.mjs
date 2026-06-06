/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
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
                accent: '#e67e22',
                // Custom darker gray scale for better text readability
                gray: {
                    50: '#f9fafb',   // unchanged
                    100: '#f3f4f6',  // unchanged
                    200: '#e5e7eb',  // unchanged
                    300: '#9ca3af',  // darker border/placeholder
                    400: '#4b5563',  // very dark gray for "muted" text
                    500: '#1f2937',  // nearly black for body text (was 800)
                    600: '#111827',  // nearly black (was 900)
                    700: '#030712',  // black
                    800: '#000000',  // pure black
                    900: '#000000',  // pure black
                },
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
