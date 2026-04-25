/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B5ED7',
        secondary: '#20C997',
        accent: '#FFC107',
        background: '#F8F9FA',
        danger: '#DC3545',
      },
      fontFamily: {
        heading: ['Inter', 'Poppins', 'sans-serif'],
        body: ['Roboto', 'Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
