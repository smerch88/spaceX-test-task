/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './page-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1440px',
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1439.98px' },
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '2rem',
          sm: '1.5rem',
          md: '2rem',
          xl: '80px',
        },
      },
      backgroundImage: {
        heroTemp: "url('/images/slider/guy.png')",
      },
      colors: {
        dark: '#1E1E1E',
        very_dark: '#000000',
        primary: '#556B84',
        white_light: '#FFFFFF',
        button: '#D3EAFF',
        heart: '#ECECEC',
        heart_hover: '#DD377D',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
      },
      dropShadow: {
        button_hover: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [
    require('@headlessui/tailwindcss'),
    require('@tailwindcss/line-clamp'),
  ],
};
