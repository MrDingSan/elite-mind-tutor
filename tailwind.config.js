const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.gray, // ✅ add this line to fix border-gray-200
        // Add more if needed: e.g. slate: colors.slate, etc.
      },
    },
  },
  plugins: [],
};
