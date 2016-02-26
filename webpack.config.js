var path = require('path')
var webpack = require('webpack')
var npmInstallPlugin = require('npm-install-webpack-plugin')
var autoprefixer = require('autoprefixer')
var ProvidePlugin = require('webpack/lib/ProvidePlugin')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        'bootstrap-loader',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new npmInstallPlugin(),
        new ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery',
            "Tether": 'tether',
            "window.Tether": "tether"
        })
    ],
    module: {
        preLoaders: [
            {
                loaders: ['eslint'],
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "src"),
                ],
            }
        ],
        // from right to left and from bottom to top
        loaders: [
            {
                loader: 'react-hot',
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "src"),
                ],
            },
            {
                loader: 'babel-loader',
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "src"),
                ],
                plugins: ['transform-runtime'],
                query: {
                    cacheDirectory: true,
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0', 'react'],
                },
            },
            {
                test: /\.css$/,
                loaders: [
                    'style',
                    'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
                    'postcss',
                ],
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style',
                    'css?modules&importLoaders=2&localIdentName=[name]__[local]__[hash:base64:5]',
                    'postcss',
                    'sass',
                ],
            },
            {
                test: /\.(woff2?|ttf|eot|svg)$/,
                loaders: [ 'url?limit=10000' ],
            },
            {
                test: /bootstrap[\\\/]dist[\\\/]js[\\\/]umd[\\\/]/,
                loader: 'imports?jQuery=jquery'
            },
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    postcss: [ autoprefixer ]
}