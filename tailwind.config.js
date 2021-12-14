const colors = require('tailwindcss/colors');

// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/components-next/lib/**/*.{js,ts,jsx,tsx}',
    './node_modules/components-next/**/*.{js,ts,jsx,tsx}',
    './node_modules/components-next/*/*.{js,ts,jsx,tsx}',

  ],
  theme: {
    extend: {
      colors: {
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
        gray: colors.neutral,
      },
    },
    variants: {
      extend: {},
    },
  }
}
