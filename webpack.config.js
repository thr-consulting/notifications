var webpack = require('webpack');
var path = require('path');
var nodeExternals = require('webpack-node-externals');

const root = path.resolve(__dirname);

module.exports = {
	entry: './src/index.js',
	target: 'node',
	devtool: 'source-map',
	externals: [nodeExternals()],
	output: {
		path: path.resolve(root, 'lib'),
		filename: "index.js",
		library: "notifications",
		libraryTarget: "umd"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								['es2015', {loose: true, modules: false}],
								'stage-1',
								'react'
							]
						}
					}
				],
			},
		]
	},
	plugins: [
		// new webpack.optimize.UglifyJsPlugin({
		// 	compress: {
		// 		warnings: false,
		// 	},
		// 	sourceMap: true,
		// }),
	],
};
