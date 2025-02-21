/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'gradient-slow': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
      colors: {
        // Light mode custom colors (Dark Neutral theme)
        soft: {
          50: '#2C2927',  // Background paling gelap
          100: '#363230', // Background sekunder
          200: '#403B38', // Border halus
          300: '#4A4441', // Border tegas
          400: '#544D4A', // Text muted
          500: '#625A56', // Text sekunder
          600: '#776E69', // Text primer
          700: '#8C827C', // Heading
          800: '#A19790', // Heading bold
          900: '#B6ACA4', // Text terang
        },
        // Dark mode custom colors (Brown theme)
        brown: {
          950: '#261008',
          900: '#2C1810',
          800: '#351D12',
          700: '#3C2415',
          600: '#4A2D1B',
          500: '#5C3821',
          400: '#8B5E34',
          300: '#A67B4B',
          200: '#C19B6C',
          100: '#E6B17E',
        },
      },
    },
  },
  plugins: [],
} 