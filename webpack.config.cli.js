'use strict';

var webpack = require('webpack');

module.exports = {
    entry: './src/app.js', // putting array here will throw an exception
    output: {
        path: __dirname + '/public/build/',
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel?experimental']
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};

