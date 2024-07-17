/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-image": "url('/main.jpg')",
        "blog-image": "url('/blog.jpg')",
      },
    },
  },
  plugins: [],
};
