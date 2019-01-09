const webpack = require("webpack");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

    // plugins: [
    //     new ExtractTextPlugin('app.css')
    // ],
    // plugins: ['transform-object-rest-spread']

    // ,
    //         {
    //             test: /.css$/,
    //             loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    //         }
module.exports = {
    entry: './ex/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8081,
        contentBase: './public'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: 'node_modules',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}