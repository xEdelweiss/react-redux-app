var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        // from right to left and from bottom to top
        loaders: [
            {
                loader: 'react-hot',
                include: [
                    path.resolve(__dirname, "src"),
                ],
                test: /\.jsx?$/
            },
            {
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, "src"),
                ],
                test: /\.jsx?$/,
                plugins: ['transform-runtime'],
                query: {
                    cacheDirectory: true,
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0', 'react'],
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}