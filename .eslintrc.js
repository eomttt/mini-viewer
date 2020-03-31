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
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', '/']
      }
    }
  },
  parserOptions: {
    project: './tsconfig.json',
    createDefaultProgram: true,
  },
  rules: {
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'import/prefer-default-export': 0,
    'no-underscore-dangle': 0,
    'no-await-in-loop': 0,
    'global-require': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'neve',
      }
   ]
  },
};
