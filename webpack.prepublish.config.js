var path = require('path');
var webpack = require('webpack');

var config = {
    entry: path.resolve(__dirname, './src/container.js'),
    output: {
        path: path.resolve(__dirname, './lib'),
        library: 'pbu-document',
        libraryTarget: 'umd',
        filename: 'PBUDocument.js'
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new webpack.DefinePlugin({
            // 消除警告
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
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
                query: {
                    presets: ['es2015', 'react', 'stage-2']
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
            },
            {
                test: /\.css$|\.less$/,
                include: /node_modules/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    externals: {
        'react'       : 'umd react',
        'react-dom'   : 'umd react-dom'
    }
};

module.exports = config;
