var path    = require('path');

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
                exclude: /node_modules/
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader'
            },
            {
                test: /\.css$|\.less$/,
                loader: 'style-loader!css-loader?modules&sourceMap&localIdentName=[local]__[hash:base64:5]!less-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
};

module.exports = config;
