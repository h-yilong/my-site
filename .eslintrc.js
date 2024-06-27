module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  rules: {
    'no-underscore-dangle': 'off',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        // caughtErrorsIgnorePattern: '^_',
      },
    ],
    'no-param-reassign': 'error',
    'no-console': 'warn',
    'no-undef': 'error',
    'prefer-const': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/display-name': 1,
  },
};
