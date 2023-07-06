/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      height: {
        '68': '17rem',
      }
    },

    fontFamily: {
      RobotoSlab: 'Roboto Slab'
    },

    fontWeight: {
      roboto200: 200,
      roboto300: 300
    }
  },
  plugins: [],
}

