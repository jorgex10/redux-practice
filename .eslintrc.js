module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  plugins: [
    'react',
  ],
  rules: {
    "no-console": 0,
    "react/jsx-filename-extension": 0,
    // "react/prefer-stateless-function": 0,
    // "react/jsx-props-no-spreading": 0,
    // "react/prop-types": 0,
    // "react/no-unused-state": 0
  },
};
