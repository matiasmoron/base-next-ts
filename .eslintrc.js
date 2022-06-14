// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error',
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/extensions': ['.ts', '.tsx'],
    'import/resolver': {
      typescript: {
        project: [path.resolve(__dirname, 'tsconfig.json')],
      },
    },
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    // project: './tsconfig.json',
    // tsconfigRootDir: __dirname,
  },
  plugins: ['react', 'import', '@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension

      // You should extend TypeScript plugins here,
      // instead of extending them outside the `overrides`.
      // If you don't want to extend any rules, you don't need an `extends` attribute.
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],

      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
  rules: {
    'react/react-in-jsx-scope': RULES.OFF,
    'react/prop-types': RULES.OFF,
    'react-hooks/rules-of-hooks': RULES.ERROR,
    'react-hooks/exhaustive-deps': RULES.WARN,
    'import/newline-after-import': RULES.ERROR,
    'react/jsx-filename-extension': RULES.OFF,
    'react/function-component-definition': RULES.OFF,
    'import/extensions': [RULES.ERROR, { tsx: 'never', scss: 'always' }],
    'import/order': [
      RULES.ERROR,
      {
        alphabetize: { order: 'asc' },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            // CSS should be loaded last so that it can override components in common folder
            pattern: './*.module.css',
            group: 'sibling',
            position: 'after',
          },
        ],
        'newlines-between': 'never',
      },
    ],
    'import/prefer-default-export': RULES.OFF,
    '@typescript-eslint/camelcase': RULES.OFF,
    '@typescript-eslint/explicit-function-return-type': RULES.OFF,
    '@typescript-eslint/explicit-member-accessibility': [
      RULES.ERROR,
      { accessibility: 'no-public' },
    ],
    '@typescript-eslint/indent': RULES.OFF,
    '@typescript-eslint/member-delimiter-style': RULES.OFF,
    '@typescript-eslint/explicit-module-boundary-types': RULES.OFF,

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md
    'no-redeclare': RULES.OFF,
    '@typescript-eslint/no-redeclare': [RULES.ERROR],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
    'no-empty-function': RULES.OFF,
    '@typescript-eslint/no-empty-function': [RULES.ERROR],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
    'no-shadow': RULES.OFF,
    '@typescript-eslint/no-shadow': [RULES.ERROR],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    'no-use-before-define': RULES.OFF,
    '@typescript-eslint/no-use-before-define': RULES.ERROR,

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-duplicate-imports.md
    'no-duplicate-imports': RULES.OFF,
    '@typescript-eslint/no-duplicate-imports': RULES.ERROR,

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
    'no-unused-expressions': RULES.OFF,
    '@typescript-eslint/no-unused-expressions': [RULES.ERROR],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    'no-unused-vars': RULES.OFF,
    '@typescript-eslint/no-unused-vars': [RULES.ERROR],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
    // 'return-await': RULES.OFF,
    // '@typescript-eslint/return-await': [RULES.ERROR],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md
    'no-invalid-this': RULES.OFF,
    '@typescript-eslint/no-invalid-this': [RULES.ERROR],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/init-declarations.md
    'init-declarations': RULES.OFF,
    '@typescript-eslint/init-declarations': RULES.OFF,

    'jsx-a11y/label-has-associated-control': RULES.OFF,
    'eslint-disable react/jsx-props-no-spreading': RULES.OFF,
    'react/require-default-props': RULES.OFF,
    'no-multi-assign': RULES.OFF,
  },
};
