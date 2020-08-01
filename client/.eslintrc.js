module.exports = {
  env: {
    browser: "true",
    es6: "true",
    node: "true"
  },
  extends: ["plugin:react/recommended", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: "true"
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    quotes: ["error", "double"],
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
