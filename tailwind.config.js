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
    fontFamily: {
      'regular': 'Inter-Regular, sans-serif',
      'inter-semibold': 'Inter-SemiBold, sans-serif',
    },
    boxShadow: {
      main: 'shadow-[0px_4px_10px_8px_rgba(0,_0,_0,_0.1)]'
    },
    extend: {
      fontSize: {
        'heading-xl': ['64px', {lineHeight: '1.1'}],
      },
      height: {
        'logo-sm': '36.72px',
        17: '69px'
      },
      width: {
        'logo-sm': '36.72px'
      }
    },
  },
  plugins: [],
}