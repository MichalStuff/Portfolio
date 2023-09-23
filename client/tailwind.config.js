/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary : '#FF4B57',
      white : '#FFFFFF',
      navy : '#23263A',
      navy_dark: '#212336',
      navy_light: '#363b5a',

    },
    fontFamily:{
      'roboto' : ['roboto','sans-serif']
    },
    boxShadow:{
      'icon-broder-left' : ' 5px 0px 0px 0px #23263A',
      'icon-broder-right' : ' -5px 0px 0px 0px #23263A'
    }
  },
  plugins: [],
} 

