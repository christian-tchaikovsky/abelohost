/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard-scss",
  ],
  plugins: [
    "@stylistic/stylelint-plugin",
  ],
  rules: {
    "declaration-block-no-redundant-longhand-properties": null,
    "property-no-vendor-prefix": null,
    "alpha-value-notation": null,
    "selector-class-pattern": null,
    "no-descending-specificity": null,
    "@stylistic/indentation": 2,
    "@stylistic/string-quotes": "double",
    "@stylistic/block-opening-brace-space-before": "always",
  },
};
