/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // primary:'#0069ff',
        // textPrimary: '#2D3142'
        espandarRed:'#ed1c24',
        espandarBlack: '#231f20'
      },
      fontFamily:{
        Yekan:['Yekan', 'Poppins'],
        // Poppins:['Poppins','sans-serif'],
      }
    },
  },
  plugins: [],
}

