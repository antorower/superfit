/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        mansalva: ["var(--font-mansalva)"],
        geologica: ["var(--font-geologica)"],
        roboto: ["var(--font-roboto)"],
      },
      colors: {
        primary: "#f2f20c",
        primaryHover: "black",
        textLight: "#ffffff",
        textDark: "#0a0a0a",
        backgroundDark: "#000000",
        backgroundLight: "#ffffff",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideDown: {
          "0%": { transform: "translateY(-50%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(50%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideLeft: {
          "0%": { transform: "translateX(50%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideRight: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        slideDown: "slideDown 0.8s ease-in-out",
        slideUp: "slideUp 0.8s ease-in-out",
        slideLeft: "slideLeft 0.8s ease-in-out",
        slideRight: "slideRight 0.8s ease-in-out",
      },
    },
  },
  plugins: [],
};
