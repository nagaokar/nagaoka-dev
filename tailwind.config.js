/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        MoreSugar: ['More Sugar', 'sans-serif'],
        TegakiZatsu: ['Tegaki Zatsu', 'sans-serif'],
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin.cjs')],
}
