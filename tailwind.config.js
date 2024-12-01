export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        handwriting: ["'Dancing Script', cursive"],
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/aspect-ratio"), // Add this plugin
  ],
};
