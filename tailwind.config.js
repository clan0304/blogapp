/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',

    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'wh-50': '#f9fafb',
        'wh-100': '#f3f4f6',
        'wh-300': '#d1d5db',
        'wh-950': '#030712',
        'sky-light': '#7dd3fc',
        'sky-main': '#0284c7',
        'sky-dark': '#0c4a6e',
      },
      screens: {
        xs: '480px',
        sm: '768px',
        md: '1060px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
