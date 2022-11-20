/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
     container: {
     center: true,
     screens: {
      xl: '1174px',
      },
    },
    extend: {
         fontFamily: {
        'sans': ['Epilogue'],
        'serif': ['Epilogue'],
        'mono': ['Epilogue'],
        'display': ['Epilogue'],
        'body': ['Epilogue'],
      },
    },
    fontSize: {
    xs: ['16px', '32px'],
    sm: ['20px', '32px'],
    base: ['24px', '32px'],
    lg: ['40px', '48px'],
    xl: ['56px', '64px'],
    xxl: ['72px', '80px'],
    tombol: ['14px','14px'],
    },
  },
  plugins: [require('flowbite/plugin')],
}
