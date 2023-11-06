/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}","./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      primary: '#071c42',
      secondary: '#80e704',
      marked: '#3dcab1'
    },
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'hero': "url('../src/assets/banner_background_cta.png')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('flowbite/plugin')
  ],
};
