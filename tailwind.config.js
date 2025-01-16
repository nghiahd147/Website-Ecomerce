/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust paths based on your project structure
    './public/index.html',
  ],
  theme: {
    extend: {
      width : {
        '400' : '400px'
      },
      height: {
        '100' : '100vh'
      },
      screens: {
        'mobile': {'max': '739px'}, // Mobile - Kích thước màn hình từ 0 đến 739px
        'tablet': {'min': '740px', 'max': '1023px'}, // Tablet - PC low resolution
        'low-pc': {'min': '1024px', 'max': '1500px'}, // > PC low resolution
      },
    },
  },
  plugins: [],
}

