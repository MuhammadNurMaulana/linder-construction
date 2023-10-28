/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        home1: "linear-gradient(to top, rgba(0,0,0,.5), rgba(0,0,0,.7)), url('/images/header1.webp')",
        home2: "linear-gradient(to top, rgba(0,0,0,.5), rgba(0,0,0,.7)), url('/images/header2.webp')",
        home3: "linear-gradient(to top, rgba(0,0,0,.5), rgba(0,0,0,.7)), url('/images/header3.webp')",
        home4: "linear-gradient(to top, rgba(0,0,0,.5), rgba(0,0,0,.7)), url('/images/header4.webp')",
      },
    },
  },
  plugins: [],
};
