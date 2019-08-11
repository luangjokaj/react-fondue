const path = require('path');
const webpack = require('webpack');
const externals = require('./node-externals');

const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
	.default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
	name: 'server',
	target: 'node',
	externals,
	entry: './src/server/render.js',
	mode: 'development',
	output: {
		filename: 'dev-server-bundle.js',
		chunkFilename: '[name].js',
		path: path.resolve(__dirname, '../build'),
		libraryTarget: 'commonjs2',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					},
				],
			},
			{
				test: /\.tsx?$/,
				loader: [
					'babel-loader',
					{
						loader: 'awesome-typescript-loader',
						options: {
							useCache: true,
							getCustomTransformers: () => ({
								before: [styledComponentsTransformer],
							}),
						},
					},
				],
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'css-loader',
						options: {
							onlyLocals: true,
							modules: {
								mode: 'local',
								localIdentName:
									'[name]__[local]--[hash:base64:5]',
							},
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
						},
					},
				],
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(jpg|svg|png|ico|gif|eot|woff|ttf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '/images/[name].[ext]',
							emitFile: false,
						},
					},
				],
			},
			{
				test: /\.md$/,
				use: [
					{
						loader: 'markdown-with-front-matter-loader',
					},
				],
			},
		],
	},
	resolve: {
		alias: {
			'react-dom': '@hot-loader/react-dom',
		},
		extensions: ['.ts', '.tsx', '.js', '.json', '.jsx', '.scss'],
	},
	plugins: [
		new webpack.optimize.LimitChunkCountPlugin({
			maxChunks: 1,
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
			},
		}),
	],
};
