module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    '@ridi',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript'
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
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/prop-types': 0,
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
