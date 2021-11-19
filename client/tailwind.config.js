 // tailwind.config.js
 module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     boxShadow: {
       bottomBar: '0 5px 4px -2px rgb(0 0 0 / 50%)',
     },
     extend: {
      width: {
         axieCard: '420px'
       },
      minWidth : {
        axieCard: '420px'
      }
       // spacing: {
       //   '72': '18rem',
       //   '84': '21rem',
       //   '96': '24rem',
       // }

     }
  },
   variants: {
     extend: {},
   },
   plugins: [],
 }