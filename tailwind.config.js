/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
            clifford: '#da373d',
            'bike-primary': '#E76F51',
            'bike-primary-bg': 'rgba(231, 111, 81, 0.10)',
          }
      },
    },
    plugins: [],
  }