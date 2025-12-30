import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Navy palette inspired by Adler but warmer
        navy: {
          50: '#E8F1F5',
          100: '#D1E3EB',
          200: '#A3C7D7',
          300: '#75ABC3',
          400: '#4A6B7C',
          500: '#1A3A4A',
          600: '#0F2A3D',
          700: '#0A1F2E',
          800: '#061520',
          900: '#030A10',
        },
        // Warm cream backgrounds
        cream: {
          50: '#FEFEFE',
          100: '#FAFAFA',
          200: '#F5F3F0',
          300: '#EBE7E2',
          400: '#DDD7CF',
        },
        // Slate blue for accents
        slate: {
          blue: '#4A6B7C',
          dark: '#3A5566',
        },
        // Light blue accent
        accent: {
          light: '#E8F1F5',
          medium: '#D1E3EB',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['5.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['4.5rem', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-md': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'display-sm': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {
        'nav': '0.08em',
        'button': '0.12em',
        'wide-custom': '0.15em',
      },
      transitionTimingFunction: {
        'elegant': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
