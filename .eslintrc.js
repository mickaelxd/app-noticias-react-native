module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    '@react-native-community',
    'airbnb',
    'plugin:react-native/all',
    'prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
    },
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'import', 'jsx-a11y'],
  rules: {
    camelcase: 'off',
    'react-native/no-unused-styles': 'off',
    'no-unused-vars': 'off',
    'global-require': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    'react/jsx-props-no-spreading': ['off'],
    'prettier/prettier': 'error',
    'import/extensions': [0, 'never'],
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'no-console': ['error', { allow: ['tron'] }],
    'no-unused-expressions': ['error', { allowTaggedTemplates: true, allowShortCircuit: true }],
    'react/prop-types': [0],
    'react-native/no-raw-text': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    'guard-for-in': 0,
    'no-prototype-builtins': 0,
    'prefer-destructuring': ['error', { object: true, array: false }],
    'no-await-in-loop': 0,
    'no-continue': 0,
    'no-bitwise': 0,
    "react-hooks/exhaustive-deps": 1,
    'react/no-array-index-key': 'off',
  },
};
