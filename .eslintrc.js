const eslintcfg = {
	parser: 'babel-eslint',
	plugins: ['react', 'typescript'],
	rules: {
		'global-require': 0,
		'no-console': 0,
		'no-underscore-dangle': 0,
		'import/prefer-default-export': 0,
		'no-duplicate-imports': 0,
		'react/jsx-filename-extension': 0,
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		indent: [2, 'tab', { SwitchCase: 1 }],
		'import/no-extraneous-dependencies': 0,
		'import/newline-after-import': 0,
		'comma-dangle': [
			2,
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'always-multiline',
			},
		],
	},
};

module.exports = eslintcfg;
