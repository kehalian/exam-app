module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        dm: ['DM Mono'],
        lora: ['Lora'],
        play: 'Playfair Display',
        roboto: 'Roboto'

      },
      backgroundImage: {
        'background': "url('/img/background.jpg')",

      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
