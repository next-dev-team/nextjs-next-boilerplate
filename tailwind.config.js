// tailwind.config.js
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/components-next/lib/**/*.{js,ts,jsx,tsx}',
    './node_modules/components-next/**/*.{js,ts,jsx,tsx}',
    './node_modules/components-next/*/*.{js,ts,jsx,tsx}',

  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
};
