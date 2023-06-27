/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctortheme:{
          primary: '#0FCFEC',
          secondary: '#19D3AE',
          accent: "#3A4256",         
          neutral: "#23282f",   
          base: "#212121",
        }
      }
    ]
  },
  theme: {
    extend: {
      colors: {
        'dental-text': '#3A4256',
      },
    }    
  },
  plugins: [require("daisyui")],

}
