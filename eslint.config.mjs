// eslint.config.js
import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin-js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...globals.browser, // remove this line if you're only doing backend
      },
    },
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      ...js.configs.recommended.rules,
      // stylistic rules
      "@stylistic/indent": ["error", 2],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/space-before-function-paren": ["error", "never"],
      "no-console": "off"
    },
  },
]);
