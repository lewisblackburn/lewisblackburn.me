import nextPlugin from '@next/eslint-plugin-next'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
    {
        plugins: {
            '@next/next': nextPlugin,
            '@typescript-eslint': tsPlugin,
        },
        languageOptions: {
            parser: tsParser,
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs['core-web-vitals'].rules,
            ...tsPlugin.configs.recommended.rules,
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
    {
        ignores: ['components/magicui/*'],
    },
]
