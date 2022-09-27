/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#E5E5E5",
        "button-primary": "#FF452B",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
