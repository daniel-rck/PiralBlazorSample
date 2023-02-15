module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./**/*.{razor,html,cshtml}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'my-green': '#258f64',
        'error': '#e3342f',
      },
      minWidth: {
        '96': '24rem'
      }
    }
  },
  plugins: [],
}
