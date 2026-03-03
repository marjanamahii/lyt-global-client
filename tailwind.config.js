/** @type {import('tailwindcss').Config} */
export default {
  important: true, // Keep this to ensure Tailwind overrides Bootstrap locally
  corePlugins: {
    preflight: false, // This prevents Tailwind from breaking your existing layout
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "lyt-green": "#29a469",
        "lyt-dark-green": "#1a5d40",
        "lyt-bg": "#e9f5ee",
      },
    },
  },
  plugins: [],
};
