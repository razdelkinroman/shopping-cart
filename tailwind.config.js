module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.tsx', './public/index.html'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      visibility: ['group-hover'],
    },
  },
  plugins: [],
};
