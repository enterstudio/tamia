var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var baseConfig = require('./webpack.config');


module.exports = merge.smart(baseConfig, {
	devtool: false,

	entry: './docs/src/docs.js',

	output: {
		path: path.resolve(__dirname, '../docs/public'),
		publicPath: '/build/',
		filename: 'bundle.js',
	},

	module: {
		loaders: [
			{
				test: /\.styl$/,
				loader: ExtractTextPlugin.extract(
					'style',
					['css', 'postcss', 'stylus']
				),
			},
		],
	},

	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false,
			compress: {
				warnings: false,
			},
			output: {
				comments: false,
			},
		}),
		new ExtractTextPlugin('styles.css'),
	],

	stylus: {
		import: [
			path.resolve(__dirname, '../docs/src/styles/config.styl'),
		],
	},
});
