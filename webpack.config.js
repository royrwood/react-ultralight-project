var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, './build');
var JSX_DIR = path.resolve(__dirname, './src/jsx');
var CSS_DIR = path.resolve(__dirname, './src/css');
var HTML_DIR = path.resolve(__dirname, './src/html');

var config = {
    entry: JSX_DIR + '/index.jsx',

    output: {
        path: BUILD_DIR,
        filename: 'bundle.jsx'
    },

    module: {
        loaders: [
            { test: /\.jsx?/, include: JSX_DIR, loader: 'babel-loader' },
            // { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: "file-loader" },
        ]
    },

    plugins: [
        new CopyWebpackPlugin([
            { from: HTML_DIR + '/index.html', to: BUILD_DIR },
            { from: CSS_DIR + '/index.css', to: BUILD_DIR }
        ])
    ],

    devtool: "source-map"

};

module.exports = config;