import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import stylistic from "@stylistic/eslint-plugin";
import pluginImport from "eslint-plugin-import";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      curly: ["error", "multi-line"],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/consistent-type-imports": "error",
      "no-alert": "warn",
      "no-console": [
        "warn",
        {
          allow: [
            "warn",
            "error",
            "info",
          ],
        },
      ],
    },
  },
  {
    plugins: {
      import: pluginImport,
    },
    files: ["src/**/*.{ts,tsx}"],
    rules: {
      "import/no-default-export": "error",
    },
  },
  // Директивы Next.js
  {
    files: [
      "src/app/robots.ts",
      "src/app/sitemap.ts",
      "src/app/manifest.ts",
      "src/app/**/page.tsx",
      "src/app/**/layout.tsx",
      "src/app/**/template.tsx",
      "src/app/not-found.tsx",
      "src/app/error.tsx",
      "src/app/global-error.tsx",
    ],
    rules: {
      "import/no-default-export": "off",
    },
  },
  // Файлы Storybook
  {
    files: ["src/**/*.stories.{ts,tsx}"],
    rules: {
      "no-alert": "off",
      "import/no-default-export": "off",
    },
  },
  // Файлы декларации
  {
    files: ["**/*.d.ts"],
    rules: {
      "import/no-default-export": "off",
    },
  },
  // Кастомные правила
  stylistic.configs.customize({
    quotes: "double",
    semi: true,
    jsx: true,
    arrowParens: true,
    braceStyle: "1tbs",
    quoteProps: "as-needed",
  }),
  {
    plugins: {
      "jsx-a11y": pluginJsxA11y,
    },
    rules: {
      ...pluginJsxA11y.configs.recommended.rules,
      "@stylistic/indent": ["error", 2],
      "@stylistic/jsx-props-no-multi-spaces": "error",
      "@stylistic/max-len": [
        "error",
        {
          code: 120,
          ignoreStrings: true,
          ignoreUrls: true,
          ignoreComments: true,
          ignoreRegExpLiterals: true,
          ignoreTrailingComments: true,
          ignoreTemplateLiterals: true,
          ignorePattern: "^import .*",
        },
      ],
      "@stylistic/jsx-newline": ["error", {
        prevent: true,
      }],
      "@stylistic/jsx-sort-props": ["error", {
        multiline: "last",
        reservedFirst: ["key"],
        noSortAlphabetically: true,
      }],
      "@stylistic/jsx-curly-spacing": ["error", {
        when: "never",
        children: true,
        allowMultiline: false,
      }],
      "@stylistic/multiline-ternary": ["error", "always-multiline", {
        ignoreJSX: true,
      }],
      "@stylistic/jsx-self-closing-comp": ["error", {
        component: true,
        html: true,
      }],
      "@stylistic/jsx-max-props-per-line": ["error", {
        maximum: 1,
      }],
    },
  },
];

export default eslintConfig;
