module.exports = {
  root: true,
  env: {
    "browser": true,
    "amd": true,
    "node": true,
    "jest": true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/typescript",
    "plugin:jest/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: [
      "./tsconfig.eslint.json",
      "./packages/*/tsconfig.json"
    ],
    tsconfigRootDir: __dirname
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  plugins: [
    "react",
    "react-hooks",
    "jest",
    "@typescript-eslint",
    "import"
  ],
  rules: {
    "camelcase": 0,
    "quotes": [
      "error",
      "double"
    ],
    "import/no-unresolved": [
      0,
      {
        "caseSensitive": false
      }
    ],
    "no-case-declarations": 0,
    "react/no-children-prop": 0,
    "sort-imports": [
      "error",
      {
        "ignoreCase": false,
        "ignoreDeclarationSort": true,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
        "allowSeparatedGroups": true
      }
    ],
    "react/jsx-no-bind": [0, {
      "ignoreDOMComponents": false,
      "ignoreRefs": false,
      "allowArrowFunctions": false,
      "allowBind": false,
    }],
    // "import/no-named-as-default-member": "off",
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          ["sibling", "parent"],
          "index",
          "unknown"
        ],
        "newlines-between": "always",
        "pathGroups": [{
          "pattern": "react*",
          "group": "builtin",
          "position": "before"
        },
        {
          "pattern": "@/**",
          "group": "internal"
        },
        ],
        "pathGroupsExcludedImportTypes": [
          "react"
        ],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        },
      },
    ],
    "@typescript-eslint/no-this-alias": [
      "error",
      {
        "allowDestructuring": false,
        "allowedNames": [
          "self"
        ]
      }
    ],
    "@typescript-eslint/strict-boolean-expressions": [
      0,
      {
        "allowString": false,
        "allowNumber": false
      }
    ],
    "@typescript-eslint/member-ordering": [
      "error",
      {
        "default": [
          "public-instance-method",
          "public-static-field"
        ]
      }
    ],
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        "allowSingleExtends": false
      }
    ],
    "@typescript-eslint/padding-line-between-statements": [
      "error",
      {
        "blankLine": "always",
        "prev": "*",
        "next": ["interface", "type"]
      }
    ],
    "@typescript-eslint/no-unsafe-return": 0,
    "@typescript-eslint/no-unsafe-argument": 0,
    "@typescript-eslint/no-unsafe-call": 0,
    "@typescript-eslint/no-misused-promises": 0,
    "@typescript-eslint/restrict-template-expressions": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-unsafe-assignment": 0,
    "@typescript-eslint/no-unsafe-member-access": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/await-thenable": 0,
    "@typescript-eslint/object-curly-spacing": ["error", "always"],
    "@typescript-eslint/brace-style": "error",
    "@typescript-eslint/space-before-blocks": "error",
    "@typescript-eslint/space-before-function-paren": "error",
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/comma-spacing": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-throw-literal": "warn",
    "no-duplicate-imports": "error",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "warn",
    "@typescript-eslint/prefer-enum-initializers": "warn",
    "@typescript-eslint/prefer-optional-chain": "warn",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "warn",
    "@typescript-eslint/semi": "error",
    "react/no-unescaped-entities": [0, {
      "forbid": [">", "}"]
    }],
    "jest/expect-expect": "error"
  },
  "overrides": [
    {
      "files": ["tests/**", "**/*.test.*", "tests/*.js", "*.test.tsx", "packages/types/*"],
      "env": {
        "jest": true
      },
    }
  ]
};