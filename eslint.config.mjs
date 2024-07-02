import globals from 'globals';
import pluginJs from '@eslint/js';


export default [
  {files: ['**/*.js'], languageOptions: {sourceType: 'script'}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'indent': [
        'warn', 2
      ],
      // 'linebreak-style': [
      // 	'error',
      // 	'unix'
      // ],
      'quotes': [
        'warn',
        'single'
      ],
      'semi': [
        'error',
        'always'
      ],
    }
  }
];
