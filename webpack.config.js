const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	mode: 'development',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	},
	devServer: {
		contentBase: './dist'
	},
	plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ],
}