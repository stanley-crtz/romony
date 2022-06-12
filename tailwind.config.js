module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        adaptable: "repeat(auto-fill, minmax( min(100%, 15rem), 1fr))"
      }
    },
  },
  plugins: [],
}
