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
  },
  plugins: [],
};
