module.exports = {
  "plugins": [
    "stylelint-less",
    "stylelint-order"
  ],
  "extends": [
    "stylelint-config-standard"
  ],
  "customSyntax": "postcss-less",
  "rules": {
    "at-rule-no-unknown": null,
    "color-no-invalid-hex": true,
    "less/color-no-invalid-hex": true,
    "order/properties-alphabetical-order": true
  },
  "overrides": [
    {
      "files": ["*.js"],
      "customSyntax": "postcss-lit"
    }
  ]
}