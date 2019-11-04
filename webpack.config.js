const path = require('path')

module.exports = {
    entry: {
        index: ['babel-polyfill','./src/index.js']
    },
    output: {
        path: path.resolve(__dirname, 'public_html/scripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env'],
                    plugins: ['transform-object-rest-spread']
                }
            }
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public_html'),
        publicPath: '/scripts/'
    },
    devtool: 'hidden-source-map'
}