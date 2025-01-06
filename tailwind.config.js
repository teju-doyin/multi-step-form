/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        deepBlue: 'hsl(213, 96%, 18%)',
        blue: 'hsl(243, 100%, 62%)',
        pastelBlue: 'hsl(228, 100%, 84%)',
        lightBlue: 'hsl(206, 94%, 87%)',
        red: 'hsl(354, 84%, 57%)',

        gray: 'hsl(231, 11%, 63%)',
        lightGray: 'hsl(229, 24%, 87%)',
        whiteBlue: 'hsl(217, 100%, 97%)',
        offWhite: 'hsl(231, 100%, 99%)',
        white: 'hsl(0, 0%, 100%)',
      }
    },
  },
  plugins: [],
}
