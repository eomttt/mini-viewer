module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    '@ridi',
    '@ridi/eslint-config/typescript',
    '@ridi/eslint-config/react'
  ],
  rules: {
    'react/jsx-props-no-spreading': 0
  },
};
