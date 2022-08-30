/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'header': '0px 4px 6px rgba(0, 0, 0, 0.06)',
      },
      width: {
        'wrapper': '1280px',
        'logo': '103px',
        'line' : '93.5%'
      },
      height: {
        'logo': '24px',
        'baldoria': '690px'
      },
      fontFamily: {
        lato: "Lato-Regular",
        serif: 'SourceSerifPro-Bold'
      },
      fontSize: {
        '45': "39px"
      }
    },
  },
  plugins: [],
}