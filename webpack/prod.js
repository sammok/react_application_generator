const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const commonConfig = require('./base.js');
const config = require('../package.json').config.prod;

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = function(env) {
    return webpackMerge(commonConfig(), {
        entry: {
            app: '../app/index.jsx',
            vendor: ['react']
        },
        output: {
            filename: '[name].[chunkhash].bundle.js',
            // the output bundle

            publicPath: config.cdnHost
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    loader: extractSass.extract({
                        loader: [
                            {
                                loader: "css-loader"
                            }, {
                                loader: "sass-loader"
                            }
                        ],
                        // use style-loader in development
                        fallback: "style-loader"
                    })
                },
                {
                    test: /\.(png|jpg)$/,
                    loader: 'url?limit=' + 1024*14 //  14Kb limit
                }
            ]
        },
        plugins: [
            new webpack.LoaderOptionsPlugin({minimize: true, debug: false}),

            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),

            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                mangle: {
                    screw_ie8: true,
                    keep_fnames: true
                },
                compress: {
                    screw_ie8: true
                },
                comments: false
            }),

            extractSass,

            new webpack.optimize.CommonsChunkPlugin({
                names: ['vendor'],
                chunks: ['app'],
                filename: 'vendor.[chunkhash].bundle.js'
            })
        ]
    })};
