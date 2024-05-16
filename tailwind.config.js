/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: [
          "Arial"
        ]
      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}

