module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb',
		'airbnb/hooks',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
	],
	overrides: [],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		'arrow-body-style': 'off',
		'prefer-arrow-callback': 'off',
		'react/react-in-jsx-scope': 0,
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		quotes: 'off',
		'react/self-closing-comp': [
			'error',
			{
				component: true,
				html: true,
			},
		],
		'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
	},
};
