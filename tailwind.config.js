/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // if you're using App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // for Pages Router (optional)
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-geist-mono)'], // Connects to the CSS variable from the font
        sour:['var(--font-sour)']
      },
    },
  },
  plugins: [

  ],
};
