/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'mobile-m' : '375px',
      'mobile-l' : '425px',
      'sm' : '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px', 
    },
    extend: {
      boxShadow: {
        'text': '0px 3px 0px 0px rgba(0, 0, 0, 0.25)'
      }
    }
  },
  plugins: [],
}
