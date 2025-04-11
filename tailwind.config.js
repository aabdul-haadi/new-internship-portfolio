/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'police-blue': '#1e40af',
        'police-blue-light': '#2563eb',
      },
    },
  },
  plugins: [],
};