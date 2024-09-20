import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default [
    // Ignores
    {
        ignores: ['**/dist/*', '**/.docusaurus/*'],
    },

    // External
    eslintConfigPrettier,
    ...tseslint.configs.recommended,

    // Base config
    {
        languageOptions: {
            globals: globals.node,
        },
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
];
