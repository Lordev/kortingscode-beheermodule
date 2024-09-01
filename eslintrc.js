module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	extends: [
		'airbnb',
		'airbnb/hooks',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
	],
	plugins: ['@typescript-eslint', 'react', 'react-hooks'],
	settings: {
		react: {
			version: 'detect',
		},
	},
};
