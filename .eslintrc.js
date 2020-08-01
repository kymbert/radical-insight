module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  extends: ["eslint:recommended", "plugin:mocha/recommended"],
  plugins: ["mocha"],
  rules: {
    eqeqeq: "error",
    "mocha/no-mocha-arrows": "off",
    "mocha/no-top-level-hooks": "off",
    "prefer-arrow-callback": "warn",
    quotes: ["warn", "double"],
    semi: [
      "error",
      "always",
      {
        omitLastInOneLineBlock: true
      }
    ]
  }
};
