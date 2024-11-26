module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:@typescript-eslint/recommended'],
  rules: {
    // 'react/no-unstable-nested-components': 'off',
    'react-native/no-inline-styles': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': ['off', {argsIgnorePattern: '^_'}],
  },
};
