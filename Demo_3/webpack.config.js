const {resolve} = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ProvidePlugin} = require('webpack');

const title = 'DEMO Outdoor - powered by FACT-Finder®';
const template = 'src/views/layout/default.html';

module.exports = function (env, options) {
    const mode = options.mode || 'development';
    return {
        mode: mode,
        entry: {
            app: './src/app.js',
        },
        devtool: mode === 'development' ? 'inline-source-map' : false,
        module: {
            rules: [
                {test: /\.(sa|sc|c)ss$/,use: [MiniCssExtractPlugin.loader, 'css-loader', 'csso-loader', 'sass-loader']},
                {test: /\.(png|svg|jpe?g|gif)$/, loader: 'file-loader', options: {name: 'img/[name].[hash].[ext]'}},
                {test: /\.(eot|woff2?|ttf)$/, loader: 'file-loader', options: {name: 'fonts/[name].[hash].[ext]'}},
            ],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new ProvidePlugin({jQuery: 'jquery'}),
            new CopyPlugin([{
                from: '**/*',
                to: 'js/ff-web-components/',
                context: './node_modules/ff-web-components/dist',
                ignore: ['*.css']
            }], {copyUnmodified: true}),
            new HtmlWebpackPlugin({title, template, filename: 'index.html'}),
            new HtmlWebpackPlugin({title, template, filename: 'cart.html'}),
            new HtmlWebpackPlugin({title, template, filename: 'product.html'}),
            new HtmlWebpackPlugin({title, template, filename: 'search.html'}),
            new MiniCssExtractPlugin({filename: 'css/[name].[hash].css'}),
        ],
        output: {
            filename: '[name].bundle.js',
            path: resolve('dist'),
            publicPath: mode === 'development' ? '/' : '/shop-designs/Demo_3/dist/'
        },
    };
};
