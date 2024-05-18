/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        'blackchade': 'rgba(0, 0, 0, 0.17)',
        'testred': 'rgba(233, 11, 11,0.40)',
        'testlime': 'rgba(45, 255, 3,0.40)'
      },
      spacing: {
        '400': '400px'
      }
      
    },

  },
  plugins: [],
}

