import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'myInner': 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset',
      },
      animation: {
        fade: 'fadeIn 1s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { 
            opacity: '0',
          },
          '100%': { 
            opacity: '1',
          },
        },
      },
    },
    fontFamily: {
      bungee: ['Bungee Spice', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif'],
      cairo: ['Cairo Play', 'sans-serif'],
      outfit: ['Outfit', 'sans-serif'],
      money: ['Rubik Doodle Shadow', 'system-ui'],
      badaboom: ['BadaBoom BB', 'sans-serif']
    },
  },
  plugins: [],
}
export default config
