/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueColor: '#2a68ff',
        greyIsh: '#f1f4f8',
        cardShadow: '#f7f8f9',
        textColor: '#252b36',
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      },
      spacing: {
        '18':'4.5rem', // Custom spacing value
      }, 
      theme: {
        screens: {
          'xs': '475px',
        },
      },
    },
  },
  plugins: [],
}