import typography from '@tailwindcss/typography';


/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },

        colors: {
    sakura: '#FCE7F3',     // rose très doux
    ink: '#020617',        // noir encre
    vermillion: '#E11D48', // rouge profond
  },
    },
  },
  plugins: [

    typography
  ],
};



