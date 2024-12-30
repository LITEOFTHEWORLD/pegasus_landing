/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        5: "5px", // Adds a custom border width of 5px
      },
    },
  },
  plugins: [],
};
