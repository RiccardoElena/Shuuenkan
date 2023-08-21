/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Barlow Condensed', ...defaultTheme.fontFamily.sans],
      cursive: ['Aboreto', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        'shuuenkan-blue': '#1d439a',
        pearl: '#d8d8d8',
      },
    },
    screens: {
      xsm: '440px',
      sm: '640px',
      md: '768px',
      hmd: '896px',
      lg: '1024px',
      hlg: '1152px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
