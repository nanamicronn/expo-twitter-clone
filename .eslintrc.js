module.exports = {
  env: {
    "browser": true,
    "es6": true,
    "node": true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "airbnb",
    "prettier",
  ],
  globals: {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  parserOptions: {
    "ecmaFeatures": {
    "jsx": true
  },
  "ecmaVersion": 2018,
  "sourceType": "module"
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "jsx-a11y",
    "import",
    "eslint-plugin-prettier",
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx", "ts"] }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx",
          ".json",
          ".ts",
          ".tsx"
        ]
      }
    }
  }
};
