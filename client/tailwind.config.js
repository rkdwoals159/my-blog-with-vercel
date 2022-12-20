/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  content: [],
  theme: {
    extend: {},
    screens: {
      sm: '465px',
      md: '768px',
      lg: '1024px',
      xl: '1640px'
    }
  },
  plugins: []
}
