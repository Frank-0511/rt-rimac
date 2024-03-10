import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['BR Sonoma', 'sans-serif']
      },
      colors: {
        gray: {
          light: '#F8F9FF'
        },
        slate: {
          blue: '#5E6488'
        },
        primary: '#03050F'
      },
      fontSize: {
        xs: ['0.75rem', '1rem'],
        sm: ['0.875rem', '1.25rem'],
        lg: ['1.125rem', '1.25rem'],
        xl: ['1.25rem', '1.5rem'],
        '2xl': ['1.75rem', '2.25rem'],
        '3xl': ['2rem', '1.25']
      }
    }
  },
  plugins: []
}
export default config
