/** @type {import("prettier").Config} */
const config = {
  singleQuote: true,
  trailingComma: 'es5',
  jsxSingleQuote: true,
  tabWidth: 2,
  bracketSameLine: true,
  plugins: [
    require.resolve('prettier-plugin-tailwindcss'),
    require.resolve('prettier-plugin-organize-imports'),
  ],
};

module.exports = config;
