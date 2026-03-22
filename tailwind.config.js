/** @type {import('tailwindcss').Config} */
module.exports = {
  // 小程序不需要 preflight（即 base 层的 *、html、body 等选择器）
  corePlugins: {
    preflight: false,
  },
  content: ['./public/index.html', './src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
