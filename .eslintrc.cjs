/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
  ],
  rules: {
    // These opinionated rules are enabled in stylistic-type-checked above.
    // Feel free to reconfigure them to your own preference.
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/no-unsafe-return" : 'off',
    "@typescript-eslint/no-unsafe-member-access" : "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-explicit-any" : "off",
    "@typescript-eslint/no-unsafe-argument" : "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/unbound-method" : "off",
    "@react/no-unescaped-entities": "off",
    "@typescript-eslint/no-unused-vars" : "off",
    "@next/next/no-img-element" : "off",
    "@next/next/inline-script-id" : "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-empty-interface" : "off",
    "@typescript-eslint/consistent-type-imports": [
      "off",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-misused-promises": [
      2,
      {
        checksVoidReturn: { attributes: false },
      },
    ],
  },
};

module.exports = config;
