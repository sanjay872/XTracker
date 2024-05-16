/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    fontFamily: {
      satoshi: ['Satoshi', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      },
    colors: {
      'primary-color': '#0F172A',
      'secondary-color': '#ffffff',
      'tertiary-color': '##34AAE0',
      }
    },
  },
  plugins: [],
};
