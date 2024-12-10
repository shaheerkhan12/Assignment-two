/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Specify the paths to all of your template and TypeScript files
  ],
  theme: {
    screens:{
      xs:'320px',
      sm:	'640px',	
      md:	'768px'	,
      lg:	'1024px',	
      xl:	'1280px'
    },
    extend: {
      fontFamily: {
        Poppins: ['Poppins'],
        PoppinsLight: ['PoppinsLight'], // Add your custom font here
      },
    },
  },
  plugins: [],
};
