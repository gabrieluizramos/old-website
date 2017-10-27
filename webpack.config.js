const webpack = require('webpack');

// Plugins
const autoprefixer = require('autoprefixer');
const ExtractCSS = require('extract-text-webpack-plugin');

// Path
const path = require('path');
const sourcePath = path.resolve(process.cwd(), 'assets');

const config = {

    // general config
    entry: './assets/index.js',
    output: {
        filename: 'dist.js',
        path: path.resolve(__dirname, 'assets/dist'),
        publicPath: path.resolve(__dirname, 'assets/dist')
    },

    // DevServer config
    devServer: {
      publicPath: '/assets/dist/',
      port: 8080
    },

    // rules config
    module: {
        rules: [
            { // babel config
                test: /\.jsx?$/,
                include: sourcePath,
                use: [
                  'babel-loader'
                ]
            },
            
            
            { // scss config
                test: /\.scss$/,
                include: sourcePath,
                use: ExtractCSS.extract({
                  fallback: 'style-loader',
                  use: [
                    'css-loader',
                    {
                      loader: 'postcss-loader',
                      options: {
                        plugins: [autoprefixer]
                      }
                    },
                    'sass-loader'
                  ]
                })
            }
        ]
    },

    // plugins config
    plugins: [
        new ExtractCSS('style.css')
    ]

};

module.exports = config;