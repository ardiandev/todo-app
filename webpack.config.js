const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: path.resolve(__dirname, "./src/index.js"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		clean: true
	},
	devServer: {
		static: path.resolve(__dirname, "dist"),
		open: true,
		hot: true
	},
	plugins: [
		new htmlWebpackPlugin({
			title: "Todo Js",
			template: path.resolve(__dirname, "./src/index.html")
		})
	],
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	}
	
	
}
