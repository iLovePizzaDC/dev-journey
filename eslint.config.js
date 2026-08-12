import js from '@eslint/js';
import vitest from '@vitest/eslint-plugin';
import prettier from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const unusedVarsRule = [
	'error',
	{
		argsIgnorePattern: '^_',
		varsIgnorePattern: '^_',
		caughtErrorsIgnorePattern: '^_',
	},
];

export default defineConfig([
	globalIgnores(['dist', 'coverage']),
	{
		files: ['**/*.{ts,tsx}'],
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			reactHooks.configs.flat.recommended,
			reactRefresh.configs.vite,
			prettier,
		],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		rules: {
			'@typescript-eslint/no-unused-vars': unusedVarsRule,
		},
	},
	{
		files: ['**/*.{test,spec}.{ts,tsx}'],
		plugins: { vitest },
		languageOptions: {
			globals: {
				...globals.browser,
				...vitest.environments.env.globals,
			},
		},
		rules: {
			...vitest.configs.recommended.rules,
			'@typescript-eslint/no-unused-vars': unusedVarsRule,
		},
	},
]);
