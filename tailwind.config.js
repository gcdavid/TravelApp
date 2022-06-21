/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal': '#014d4e',
        'green': '#1ec28b',
        'red': '#ffcccb',
        'primary': '#bbf4e2'
      }
    },
  },
  plugins: [],
}
