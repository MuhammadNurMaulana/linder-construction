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
        home5: "linear-gradient(to top, rgba(0,0,0,.5), rgba(0,0,0,.7)), url('/images/header5.webp')",
        home6: "linear-gradient(to top, rgba(0,0,0,.5), rgba(0,0,0,.7)), url('/images/header6.webp')",
        home7: "linear-gradient(to top, rgba(0,0,0,.5), rgba(0,0,0,.7)), url('/images/header7.webp')",
        home8: "linear-gradient(to top, rgba(0,0,0,.5), rgba(0,0,0,.7)), url('/images/header8.webp')",
        home9: "linear-gradient(to top, rgba(0,0,0,.5), rgba(0,0,0,.7)), url('/images/header9.webp')",
      },
    },
  },
  plugins: [],
};
