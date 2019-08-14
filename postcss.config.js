const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
	plugins: [
		require('postcss-flexbugs-fixes'),
		require('postcss-import'),
		require('postcss-for'),
		require('postcss-mixins'),
		require('postcss-calc'),
		postcssPresetEnv({
			stage: 0,
			features: {
				'nesting-rules': true,
				'color-mod-function': true,
				'custom-media': true,
			},
		}),
	],
};
