import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            animation: {
                fadeIn: 'fadeIn 0.5s ease-in-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0%' },
                    '100%': { opacity: '100%' },
                },
            },
            fontFamily: {
                rawline: ['var(--font-rawline)'],
                inter: ['var(--font-inter)'],
            },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                secondary: {
                    DEFAULT: 'var(--secondary-background)',
                    foreground: 'var(--secondary-foreground)',
                },
                header: {
                    DEFAULT: 'var(--header-background)',
                },
                gov: {
                    'blue-warm-vivid': {
                        10: 'var(--blue-warm-vivid-10)',
                        50: 'var(--blue-warm-vivid-50)',
                        70: 'var(--blue-warm-vivid-70)',
                        90: 'var(--blue-warm-vivid-90)',
                    },
                    pure: {
                        0: 'var(--pure-0)',
                        100: 'var(--pure-100)',
                    },
                    gray: {
                        1: 'var(--gray-1)',
                        10: 'var(--gray-10)',
                        20: 'var(--gray-20)',
                        30: 'var(--gray-30)',
                        60: 'var(--gray-60)',
                        80: 'var(--gray-80)',
                    },
                    'red-vivid': {
                        10: 'var(--red-vivid-10)',
                        30: 'var(--red-vivid-30)',
                        50: 'var(--red-vivid-50)',
                        70: 'var(--red-vivid-70)',
                    },
                    'yellow-vivid': {
                        5: 'var(--yellow-vivid-5)',
                        20: 'var(--yellow-vivid-20)',
                        40: 'var(--yellow-vivid-40)',
                        70: 'var(--yellow-vivid-70)',
                    },
                    'green-cool-vivid': {
                        5: 'var(--green-cool-vivid-5)',
                        30: 'var(--green-cool-vivid-30)',
                        50: 'var(--green-cool-vivid-50)',
                        60: 'var(--green-cool-vivid-60)',
                    },
                },
            },
            screens: {
                xs: '576px',
            },
        },
    },
    plugins: [],
};
export default config;
