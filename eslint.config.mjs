import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['node_modules', '**/*.test.js'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettier.rules,
      'prettier/prettier': 'error',
    },
  },
];
