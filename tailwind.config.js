
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       "./pages/**/*.{js,ts,jsx,tsx}",
       "./components/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {
         colors: {
           'charcoal': {
             800: '#2d3748',
             900: '#1a202c',
           },
           'burgundy': {
             500: '#991b1b',
           },
           'amber': {
             400: '#fbbf24',
           },
         },
         fontFamily: {
           sans: ['Inter', 'sans-serif'],
         },
       },
     },
     plugins: [],
   }

