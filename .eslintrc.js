module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jsdoc/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  plugins: ['prettier', 'jsdoc'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-shadow': 0,
    'no-param-reassign': ['error', { props: false }],
    'arrow-parens': ['error', 'as-needed'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'prettier/prettier': 'error',
  },
};
