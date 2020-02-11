module.exports = {
	apps: [
		{
			name: 'reactfondue',
			script: './src/server/main.js',
			watch: false,
			wait_ready: true,
			env: {
				NODE_ENV: 'production',
				PORT: 8081,
			},
		},
	],
};
