var path    = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
    entry: ["whatwg-fetch", "babel-polyfill",  path.resolve(__dirname, './src/index.js')],
    devtool: "sourceMap",
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
                exclude: /node_modules/,
                options: {
                  "presets": [
                    "es2015",
                    "stage-2",
                    "react"
                  ],
                  "plugins": [["import", { "libraryName": "antd", "style": true }]]
                }
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader'
            },
            {
                test: /\.css$|\.less$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader?modules&sourceMap&localIdentName=[local]__[hash:base64:5]!less-loader'
                // loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&localIdentName=[local]-[hash:base64:5]!less-loader')
            },
            {
                test: /\.css$|\.less$/,
                include: /node_modules/,
                loader: 'style-loader!css-loader!less-loader'
                // loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    // plugins: [
    //     new ExtractTextPlugin("index.css")
    // ]
};

module.exports = config;
