// Study copy only: yeh explained version hai, app build is file se nahi hota.
// Har original line ke neeche Hinglish explanation di gayi hai.
import js from '@eslint/js'
// Yeh line js ko @eslint/js se import kar rahi hai taaki yahan use kar sakein.
import globals from 'globals'
// Yeh line globals ko globals se import kar rahi hai taaki yahan use kar sakein.
import reactHooks from 'eslint-plugin-react-hooks'
// Yeh line reactHooks ko eslint-plugin-react-hooks se import kar rahi hai taaki yahan use kar sakein.
import reactRefresh from 'eslint-plugin-react-refresh'
// Yeh line reactRefresh ko eslint-plugin-react-refresh se import kar rahi hai taaki yahan use kar sakein.
import { defineConfig, globalIgnores } from 'eslint/config'
// Yeh line { defineConfig, globalIgnores } ko eslint/config se import kar rahi hai taaki yahan use kar sakein.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
export default defineConfig([
// Yeh line defineConfig([ ko is file ka default export bana rahi hai.
  globalIgnores(['dist']),
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
  {
// Yahan code block start ho raha hai.
    files: ['**/*.{js,jsx}'],
// Yeh object ka files field define kar rahi hai.
    extends: [
// Yeh object ka extends field define kar rahi hai.
      js.configs.recommended,
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
      reactHooks.configs.flat.recommended,
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
      reactRefresh.configs.vite,
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
    ],
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
    languageOptions: {
// Yeh object ka languageOptions field define kar rahi hai.
      ecmaVersion: 2020,
// Yeh object ka ecmaVersion field define kar rahi hai.
      globals: globals.browser,
// Yeh object ka globals field define kar rahi hai.
      parserOptions: {
// Yeh object ka parserOptions field define kar rahi hai.
        ecmaVersion: 'latest',
// Yeh object ka ecmaVersion field define kar rahi hai.
        ecmaFeatures: { jsx: true },
// Yeh object ka ecmaFeatures field define kar rahi hai.
        sourceType: 'module',
// Yeh object ka sourceType field define kar rahi hai.
      },
// Yeh line current statement ya block ko close kar rahi hai.
    },
// Yeh line current statement ya block ko close kar rahi hai.
    rules: {
// Yeh object ka rules field define kar rahi hai.
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
// Yeh object ka no-unused-vars field define kar rahi hai.
    },
// Yeh line current statement ya block ko close kar rahi hai.
  },
// Yeh line current statement ya block ko close kar rahi hai.
])
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
