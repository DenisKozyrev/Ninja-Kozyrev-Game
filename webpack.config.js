"use strict"

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './js/game',
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    // module: {
    //     rules: [{
    //             test: /\.css$/,
    //             use: [
    //                 MiniCssExtractPlugin.loader,
    //                 "css-loader"
    //             ]
    //         },
    //         {
    //             test: /\.(html)$/,
    //             use: {
    //                 loader: 'html-loader',
    //                 options: {
    //                     attrs: [':data-src']
    //                 }
    //             }
    //         }
    //     ]
    // },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100,
    },
    devtool: "source-map",
    // plugins: [
    //     new MiniCssExtractPlugin({
    //         filename: "style.css"
    //     })
    // ]
};


// new HtmlWebpackPlugin({
//     title: 'Rss-Prodigy-Game',
//     filename: 'index.html',
// }),