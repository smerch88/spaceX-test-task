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
      xl: '1280px',
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '2rem',
          sm: '1.5rem',
          md: '2rem',
          xl: '2rem',
        },
      },
      // backgroundImage: {
      //   cardBg:
      //     'linear-gradient(290.55deg, #2565D0 15.48%, #2769B3 53.63%, #3CC9CD 93.52%, #42E8E0 102.2%)',
      //   contacts: "url('/images/contacts.svg')",
      // },
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
      boxShadow: {
        // sticky: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)',
        // header: '1px 2px 8px rgba(37, 101, 208, 0.14)',
        // card: '1px 2px 8px rgba(37, 101, 208, 0.14)',
        // card_hover: '6px 8px 12px rgba(37, 101, 208, 0.18)',
        // button_hover: '1px 2px 8px rgba(255, 255, 255, 0.54)',
      },
    },
  },
  plugins: [
    require('@headlessui/tailwindcss'),
    require('@tailwindcss/line-clamp'),
  ],
};