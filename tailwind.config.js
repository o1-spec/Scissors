/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "rgba(0, 101, 254, 1)",
      navBlack: "rgba(20, 20, 20, 1)",
      white: "#ffffff",
      chainBlack: "rgba(254, 254, 254, 0.1)",
      usersWhite: "#f9fbfd",
      scissorsBlack: "rgba(50, 132, 255, 0.13)",
      validRed: "#ff0000",
      linkGray: "#B2BEB5",
      box2: "linear-gradient(180deg, #1E3448 99.99%, rgba(30, 52, 72, 0) 100%);",
    },
    extend: {
      fontFamily: {
        customFont: ["gilroy-medium", "sans-serif"],
        designFont: ["Butterfly Kids", "sans-serif"],
      },
      backgroundImage: {
        inputBg: "../images/Group 3 (1).png",
      },
    },
  },
  plugins: [],
};
