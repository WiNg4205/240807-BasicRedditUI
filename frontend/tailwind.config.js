/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "redditGray:": "#e7e7e7",
        "redditLogo": "#ff4500",
        "search": "#e5ebee",
        "searchHover": "#dbe4e9",
      },
    },
  },
  plugins: [],
}

