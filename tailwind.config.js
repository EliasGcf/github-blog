/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },

    fontWeight: {
      normal: 400,
      bold: 700,
    },

    colors: {
      blue: '#3294F8',

      'base-title': '#E7EDF4',
      'base-subtitle': '#C4D4E3',
      'base-text': '#AFC2D4',
      'base-span': '#7B96B2',
      'base-label': '#3A536B',
      'base-border': '#1C2F41',
      'base-post': '#112131',
      'base-profile': '#0B1B2B',
      'base-background': '#071422',
      'base-input': '#040F1A',
    },
  },
  plugins: [],
};
