/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#0b0b10",
          card: "#12121a",
          border: "rgba(255, 255, 255, 0.08)",
          hover: "#1a1a26",
        },
        vr: {
          purple: "#7952eb",
          neon: "#a78bfa",
          cyan: "#00f0ff",
          pink: "#ff007f",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Urbanist', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(121, 82, 235, 0.3)' },
          '100%': { boxShadow: '0 0 35px rgba(121, 82, 235, 0.7), 0 0 15px rgba(0, 240, 255, 0.4)' },
        }
      }
    },
  },
  plugins: [],
}
