var path = require('path')
var projectRoot = path.resolve(__dirname, '../')

module.exports = {
    entry: './src/main.js',
    output: {
        path: './dev',
        publicPath: '/dev/',
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue'
        }
    },
    module: {
        preLoaders: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                include: projectRoot,
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                include: projectRoot,
                exclude: /node_modules/
            },
            {
                test: /\.svg$/,
                loader: 'raw',
                include: projectRoot,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        proxy: {
            '/guiderank-web/*': {
                target: 'http://localhost:8080/',
                secure: false
            }
        }
    },
    eslint: {
        configFile: './.eslintrc'
    }
};