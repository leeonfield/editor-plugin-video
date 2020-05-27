module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
  },
  extends: ['eslint:recommended'],
  plugins: ['prettier'],
  globals: {
    fixture: true,
  },
  rules: {
    'lines-around-directive': 0,
    'newline-before-return': 0,
    'padding-line-between-statements': [
      2,
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
    'no-useless-rename': 'error',
    'no-duplicate-imports': ['error', { includeExports: true }],
    'dot-notation': ['error', { allowKeywords: true }],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: true,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: true }],
    'object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
  },
};
