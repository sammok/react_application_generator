var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var pkg = require('../package.json');

module.exports = function () {
    return {
        output: {
            filename: 'bundle.js',
            // the output bundle

            path: path.resolve(__dirname, '../dist'),

            publicPath: '/'
            // necessary for HMR to know where to load the hot update chunks
        },
        module: {
            rules: [
                {
                    test: /\.jsx|.js?$/,
                    use: ['babel-loader'],
                    exclude: /node_modules/
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: '../app/index.html',
                chunksSortMode: 'dependency'
            })
        ],

        resolve: {
            extensions: ['.js', '.jsx']
        }
    };
}
