// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  {
    ignores: ['eslint.config.ts'],
  },

  eslint.configs.recommended,

  // TS
  ...tseslint.configs.recommendedTypeChecked,

  // prettier
  prettier,

  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: process.cwd(),
      },
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'module',
    },
  },

  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },
);
