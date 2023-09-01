/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './evoke-creative/**/*.html'
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1300px',
    },
    fontFamily: {
      'sans': 'var(--primary-font-family)',
      'serif': 'var(--secondary-font-family)'
    },
    extend: {
      colors: {
        'primary': 'var(--primary-color)',
        'secondary': 'var(--secondary-color)',
        'tertiary': 'var(--tertiary-color)',
        'black': 'var(--black-color)',
        'dark-grey': 'var(--dark-grey-color)',
        'light-grey': 'var(--light-grey-color)',
        'white': 'var(--white-color)'
      },
      fontSize: {
        'x-small': 'var(--body-font-size-small)',
        'small': 'var(--body-font-size-mobile)',
        'medium': 'var(--body-font-size)', 
        'large': 'var(--body-font-size-large)',
        'x-large': 'var(--body-font-size-x-large)'
      }
    }
  },
  plugins: []
}


