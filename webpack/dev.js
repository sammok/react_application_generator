const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const util = require('util');
const path = require('path');

const commonConfig = require('./base.js');
const config = require('../package.json').config.dev;

const host = config.host;
const port = config.port;

module.exports = function(env) {
    return webpackMerge(commonConfig(), {
        entry: [
            'react-hot-loader/patch',
            // activate HMR for React

            util.format('webpack-dev-server/client?http://%s:%d', host, port),
            // bundle the client for webpack-dev-server
            // and connect to the provided endpoint

            'webpack/hot/only-dev-server',
            // bundle the client for hot reloading
            // only- means to only hot reload for successful updates

            '../app/index.jsx',
            // the entry point of our app
        ],

        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: "style-loader" // creates style nodes from JS strings
                        }, {
                            loader: "css-loader" // translates CSS into CommonJS
                        }, {
                            loader: "sass-loader" // compiles Sass to CSS
                        }
                    ]
                }
            ]
        },

        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            // enable HMR globally

            new webpack.NamedModulesPlugin(),
            // prints more readable module names in the browser console on HMR updates

            new webpack.NoEmitOnErrorsPlugin(),
            // do not emit compiled assets that include errors
        ],

        devtool: 'inline-source-map',

        devServer: {
            contentBase: path.resolve(__dirname, '../dist'),

            host: host,
            port: port,

            historyApiFallback: true,
            // respond to 404s with index.html

            hot: true,
            // enable HMR on the server
        }
    })
};
