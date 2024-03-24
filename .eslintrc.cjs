module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'no-console': 'off',
    'space-in-parens': 'off',
    'camelcase': 'off',
    'import/order': 'off',
    'require-await': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // set maximum line characters
    'max-len': [2, 180, 4, { 'ignoreUrls': true, 'ignoreTemplateLiterals': true, 'ignoreStrings': true }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-return-assign': 0,
    // disallow indentation using both tabs and spaces
    'no-mixed-spaces-and-tabs': 2,
    // ensure consistent 2 space indentation and indent cases under switch
    'object-curly-spacing': [2, 'always'],
    'max-statements': [1, 35],
    'semi': [2, 'always'],
    'prefer-const': ['error', {
      'destructuring': 'any',
      'ignoreReadBeforeAssign': false
    }],
    'unicorn/prefer-includes': 'off',
    'array-bracket-spacing': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'computed-property-spacing': 'off',
    'no-prototype-builtins': 'off',
    'quotes': 'off',
    'quote-props': 'off',
    'padded-blocks': 'off',
    'no-unused-vars': 'off',
    'no-case-declarations': 'off',
    'object-curly-newline': 'off',
    'no-useless-constructor': 'off',
    'vue/max-attributes-per-line': ['error', {
      "singleline": {
        "max": 4
      },
      "multiline": {
        "max": 1
      }
    }]
  },
  parser: "vue-eslint-parser",
  extends: ["@nuxt/eslint-config"],
};
