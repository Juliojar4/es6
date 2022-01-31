module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'cslas-methods-use-this': 'off',
    'import/extensions': 'off',
    'object-shorthand': 'off',
  },
};
