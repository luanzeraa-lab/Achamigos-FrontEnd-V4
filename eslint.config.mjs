// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js';
import next from 'eslint-config-next';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

export default [js.configs.recommended, next(), prettier, {
  plugins: {
    prettier: pluginPrettier,
  },
  rules: {
    'prettier/prettier': 'warn', 
  },
}, ...storybook.configs["flat/recommended"]];
