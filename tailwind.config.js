/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#00a6f7',

          secondary: '#0054ff',

          accent: '#00f3ff',

          neutral: '#262626',

          'base-100': '#f2fcff',

          info: '#0088c5',

          success: '#00ffcb',

          warning: '#ff8d00',

          error: '#db002c',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
