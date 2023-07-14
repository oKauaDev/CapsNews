/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        vw128: "10vw",
        vw304: "23.75vw",
      },
      colors: {
        primary: {
          100: "#B3DBFC",
          200: "#5FB0F5",
          300: "#1188EE",
          400: "#03559C",
          500: "#011021",
        },
        secundary: {
          100: "#F2F4F5",
          200: "#CCD1D6",
          300: "#A5A9AD",
          400: "#9BA2A8",
          500: "#83898F",
          600: "#6C7278",
          700: "#6F7780",
          800: "#4A4E52",
          900: "#252729",
          1000: "#0E0F0F",
        },
        utils: {
          orange: "#E46C14",
          purple: "#7000FF",
          green: "#10F80B",
          blue: "#074CFC",
          gray: "#6F7780",
        },
      },
      fontSize: {
        "14px": "0.875rem",
        "16px": "1rem",
        "20px": "1.25rem",
        "24px": "1.5rem",
        "28px": "1.75rem",
        "32px": "2rem",
        "40px": "2.5rem",
      },
    },
    boxShadow: {
      button: "5px 5px 0px 0px rgba(95,176,245,1)",
    },
    screens: {
      phone: { max: "450px" },
      tablet: { max: "640px" },
      laptop: { max: "1024px" },
      desktop: { max: "1280px" },
    },
  },
  plugins: [],
};
