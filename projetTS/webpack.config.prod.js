const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.ts",
	output: {
		filename: "bundle.[contenthash].js", //contenthash est optionnel
		clean: true,
		path: path.resolve(__dirname, "dist"), //chemin absolu
	},
	mode: "production",
	module: {
		rules: [
			//Configuration compilation TS
			{
				test: /\.ts$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
		plugins: [
			new HtmlWebpackPlugin({
				template: "./src/html/index.html",
			}),

			new CopyWebpackPlugin({
				patterns: [{ from: "src/images", to: "images" }],
			}),
		],
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
};
