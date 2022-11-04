/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'shuuenkan-blue': '#1d439a',
        'pearl': '#d8d8d8',
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
  plugins: [],
};
