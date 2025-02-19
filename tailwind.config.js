/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			deepBlue: 'hsl(213, 96%, 18%)',
  			blue: 'hsl(243, 100%, 62%)',
  			pastelBlue: 'hsl(228, 100%, 84%)',
  			lightBlue: 'hsl(206, 94%, 87%)',
  			veryLightBlue: 'hsl(210, 22%, 96%)',
  			red: 'hsl(354, 84%, 57%)',
  			gray: 'hsl(231, 11%, 63%)',
  			lightGray: 'hsl(229, 24%, 87%)',
  			whiteBlue: 'hsl(217, 100%, 97%)',
  			offWhite: 'hsl(231, 100%, 99%)',
  			white: 'hsl(0, 0%, 100%)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
