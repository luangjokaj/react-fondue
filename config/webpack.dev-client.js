const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	name: 'client',
	entry: {
		vendor: ['react', 'react-dom'],
		main: [
			'react-hot-loader/patch',
			'@babel/runtime/regenerator',
			'webpack-hot-middleware/client?reload=true',
			'./src/main.js',
		],
	},
	mode: 'development',
	output: {
		filename: '[name]-bundle.[hash].js',
		chunkFilename: '[name].[hash].js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/',
	},
	devtool: 'source-map',
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
				test: /\.css$/,
				use: [
					'css-hot-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[name]__[local]--[hash:base64:5]',
							importLoaders: 1,
							sourceMap: true,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							ident: 'postcss',
						},
					},
				],
			},
			{
				test: /\.(jpg|svg|png|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
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
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[name].css',
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
				WEBPACK: true,
			},
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
};
