/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./starter-code/**/*.{html,js}"],
  theme: {
    colors: {
      white: '#FFFFFF',
      blue: '#345FF6',
      gunmetal: '#253347',
      'dark-electric-blue': '#5E6E85'
    },
    fontSize: {
      'heading-xl': ['64px', {lineHeight: '1.1'}],
    },
    fontFamily: {
      'regular': 'Inter-Regular, sans-serif',
      'inter-semibold': 'Inter-SemiBold, sans-serif',
    },
    extend: {},
  },
  plugins: [],
}