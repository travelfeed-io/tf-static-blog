module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'react/react-in-jsx-scope': ['off'],
    'react/jsx-filename-extension': ['off'],
  },
};
