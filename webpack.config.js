"use strict"

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/js/game',
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100,
    },
    devtool: "source-map",
};