const path = require('path');
const webpack = require('webpack');
const theme = require('./src/theme');
const getEntries = require('./build/getCommonConfig').getEntries;

const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
    entry: getEntries('./src/lib'),
    output: {
        path: path.resolve(__dirname, './lib'),
        library: 'pbu-document',
        libraryTarget: 'umd',
        filename: '[name].js',
    },
    plugins: [
        new webpack.DefinePlugin({
            // 消除警告
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: false,
        //     compress: {
        //         warnings: false
        //     }
        // }),
        // new webpack.optimize.DedupePlugin(),
        // new webpack.optimize.OccurrenceOrderPlugin(),
        // new BundleAnalyzerPlugin()
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
                exclude: /node_modules/
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader'
            },
            {
                test: /\.css$|\.less$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader?modules&minimize&localIdentName=[local]__[hash:base64:5]!less-loader'
            },
            {
                test: /\.css$|\.less$/,
                include: /node_modules/,
                loader: 'style-loader!css-loader!'
                        + `less-loader?{"modifyVars":${JSON.stringify(theme)}}`
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    externals: [
        {
            'react'       : 'umd react',
            'react-dom'   : 'umd react-dom',
            'antd'        : 'antd',
        },
        /^antd*/,
        /^rc-*/,
        'prop-types',
        'classnames',
        'whatwg-fetch',

    ]
};

module.exports = config;
