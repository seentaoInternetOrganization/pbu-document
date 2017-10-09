const path    = require('path');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

const theme = require('./src/theme');

const config = {
    entry: path.resolve(__dirname, './src/index.js'),
    devtool: "source-map",
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
                test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader'
            },
            {
                test: /\.css$|\.less$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader?modules&sourceMap&localIdentName=[local]__[hash:base64:5]!postcss-loader!less-loader'
                // loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&localIdentName=[local]-[hash:base64:5]!less-loader')
            },
            {
                test: /\.css$|\.less$/,
                include: /node_modules/,
                loader: 'style-loader!css-loader!'
                        + `less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify(theme)}}`
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
