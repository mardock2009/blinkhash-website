module.exports = {
  'parser': 'babel-eslint',
  'extends': ['eslint:recommended'],
  'plugins': ['react', 'react-hooks'],
  'env': {
    'browser': true,
    'node': true,
    'jest': true,
    'es2021': true
  },
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'rules': {
    'no-var': 2,
    'semi': [2, 'always'],
    'no-multi-spaces': 2,
    'no-unused-vars': 2,
    'space-in-parens': 2,
    'quotes': [2, 'single'],
    'brace-style': [2, '1tbs'],
    'no-multiple-empty-lines': 2,
    'prefer-const': 2,
    'prefer-arrow-callback': 2,
    'no-use-before-define': 2,
    'react/destructuring-assignment': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-closing-tag-location': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-filename-extension': 0,
    'react/jsx-no-target-blank': 0,
    'react/jsx-uses-vars': 2,
    'react/require-default-props': 0,
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'react/sort-comp': 0,
    'react-hooks/exhaustive-deps': 0,
    'react-hooks/rules-of-hooks': 'error',
    'indent': ['error', 2, {
      'ignoredNodes': ['TemplateLiteral']
    }],
  }
};
