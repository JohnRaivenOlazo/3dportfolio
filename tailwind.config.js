/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        popupExpand: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLoop: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        'slide-loop': 'slideLoop 4s linear infinite',
        'popup-expand': 'popupExpand 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
      },
      colors: {
        gray: {
          200: "#D5DAE1"
        },
        black: {
          DEFAULT: "#000000",
          500: "#1D2235"
        },
        blue: {
          500: "#2b77e7"
        }
      },
      backgroundColor: {
        main: 'rgb(3,0,15, 1)'
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ['Poppins', "sans-serif"]
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
      }
    },
  },
  plugins: [],
}