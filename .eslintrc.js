module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6
  },
  env: {
    browser: true
  },
  extends: [
    'plugin:vue/essential', 
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "indent": [0, "tab"],
    "no-tabs": "off",
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': [0, 'always']
  }
}
