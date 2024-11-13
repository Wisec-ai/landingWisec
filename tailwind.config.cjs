/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      primary: '#012130',
      secondary: '#42E8B4',
      text: '#000',
      marked: '#012130'
    },
    extend: {
      fontFamily: {
        sans: ["DM Sans Variable", "DM Sans", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'hero': "url('../src/assets/banner_background_cta.png')",
      },
      lineHeight: {
        '100': '100%',
        '110': '110%',
      },
      keyframes:
      {
        pulseloop: {
          '0%': { transform: 'scale(1) translateZ(0)', opacity: '.15' },
          '30%': { opacity: '.15' },
          '60%': { opacity: '0' },
          '80%': { transform: 'scale(1.8) translateZ(0)', opacity: '0' },
        },

      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('flowbite/plugin'),
    require('tailwindcss-animated')
  ],
};
