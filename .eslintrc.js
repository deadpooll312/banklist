module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  settings: {
    react: {
      pragma: 'React',
    },
  },
  plugins: [
    'react'
  ],
  rules: {
    "react/prop-types": 0,
    "promise/param-names": 0,
    "no-case-declarations": 0,
    "no-trailing-spaces": 0,
    "padded-blocks": 0,
  }
}
