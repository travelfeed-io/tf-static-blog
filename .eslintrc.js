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
    'react/prop-types': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/no-unescaped-entities': ['off'],
    'react/destructuring-assignment': ['off'],
    'jsx-a11y/anchor-is-valid': ['off'],
  },
};
