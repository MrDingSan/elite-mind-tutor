const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.gray, // ✅ add this line to fix border-gray-200
        navy: {
          DEFAULT: '#1F2A44',
          50: '#4A5A7A',
          100: '#435373',
          200: '#354666',
          300: '#2A3853',
          400: '#1F2A44',
          500: '#1A2340',
          600: '#151C3C',
          700: '#101538',
          800: '#0B0E34',
          900: '#060730',
        },
        // Add more if needed: e.g. slate: colors.slate, etc.
      },
    },
  },
  plugins: [],
};
