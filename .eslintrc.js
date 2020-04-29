module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
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
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "ecmaFeatures": {
      "jsx": true
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "jsx-a11y",
    "import",
    "eslint-plugin-prettier",
    "prettier",
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx", "ts"] }],
    "react/jsx-curly-newline": 0,
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": 0,
    "import/no-cycle": 0,
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
    "no-use-before-define": ["error", { "variables": false }],
    'camelcase': [ 'off' ],
    'func-names': [ 'off' ],
    "global-require": 0,
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      optionalDependencies: false,
    }],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"]
  },
  "settings": {
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
