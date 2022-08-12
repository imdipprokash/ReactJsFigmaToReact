/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        logo: "20px",
      },
      transformOrigin: {
        "top-left-50": "50% 50%",
      },
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      textFont: ["Edu SA Beginner", "cursive"],
    },
  },
  plugins: [],
};
