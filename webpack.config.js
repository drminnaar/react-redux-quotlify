const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebPackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'eslint-loader',
                options: {
                    failOnWarning: true,
                    failOnerror: true
                },
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: [
                    /node_modules/
                ]
            },
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                }),
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebPackPlugin(
            [ 'public' ],
            {
                root: path.resolve(__dirname)
            }
        ),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            favicon: './src/favicon.ico',
            inject: 'body'
        }),
        new ExtractTextPlugin('app.css'),
        new Dotenv({
            path: './.env',
            safe: false
        })
    ],
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        compress: true,
        port: 9000,
        historyApiFallback: true,
        inline: true
    }
};