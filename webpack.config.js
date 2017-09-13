var path    = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
    entry: ["whatwg-fetch", "babel-polyfill",  path.resolve(__dirname, './src/index.js')],
    output: {
        path: path.resolve(__dirname, './example'),
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        noParse: [],
        loaders: [
            {
                test: /\.js$|\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$|\.less$/,
                loader: 'style-loader!css-loader?modules&localIdentName=[local]-[hash:base64:5]!less-loader'
                // loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&localIdentName=[local]-[hash:base64:5]', 'less-loader')
            }
        ]
    },
	plugins: [
		new ExtractTextPlugin("index.css")
	]
};

module.exports = config;
