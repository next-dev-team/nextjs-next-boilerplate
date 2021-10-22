module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint'), 'plugin:@next/next/recommended'],
  globals: {},

  rules: {
    // your rules
    '@typescript-eslint/consistent-type-imports': 0,
  },
};
