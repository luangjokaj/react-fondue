const path = require('path');
const webpack = require('webpack');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
	.default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
	name: 'client',
	entry: {
		vendor: ['react', 'react-dom'],
		main: ['./src/main.js'],
	},
	mode: 'production',
	output: {
		filename: '[name]-bundle.[hash].js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/',
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					name: 'vendor',
					chunks: 'initial',
					minChunks: 2,
				},
			},
		},
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json', '.jsx', '.scss'],
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
				loader: 'awesome-typescript-loader',
				options: {
					useCache: true,
					getCustomTransformers: () => ({
						before: [styledComponentsTransformer],
					}),
				},
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: ExtractCssChunks.loader,
						options: {
							hot: true,
							modules: true,
						},
					},
					{
						loader: 'css-loader',
						options: {
							modules: {
								mode: 'local',
								localIdentName: '[hash:base64:5]',
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
				use: [
					{
						loader: ExtractCssChunks.loader,
						options: {
							hot: true,
							modules: true,
						},
					},
					{
						loader: 'css-loader',
						options: {
							modules: {
								mode: 'local',
								localIdentName: '[hash:base64:5]',
							},
						},
					},
					{
						loader: 'sass-loader',
						options: {
							// Prefer `dart-sass`
							implementation: require('sass'),
						},
					},
				],
			},
			{
				test: /\.(jpg|svg|png|ico|gif|eot|otf|woff|woff2|ttf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							esModule: false,
							name: 'images/[name].[ext]',
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
	plugins: [
		new ExtractCssChunks({
			filename: '[name].[contenthash].css',
			chunkFilename: '[name]-[hash:8].css',
		}),
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.css$/g,
			cssProcessor: require('cssnano'),
			cssProcessorOptions: { discardComments: { removeAll: true } },
			canPrint: true,
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
				WEBPACK: true,
			},
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: "./**", to: "./", context: "./public" },
			],
		}),
		new CompressionPlugin({
			algorithm: 'gzip',
		}),
		new BrotliPlugin(),
	],
};
