const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require ('clean-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'source'),
    mode:'development',
    entry:{
        main:'./javascript/index.js',
    },
    output: {
        filename:'[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions:['.js', 'json', 'png'],
        alias: {
            '@models': path.resolve(__dirname, 'source/models'),
            '@': path.resolve(__dirname, 'source'),
        }
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:'./index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif|jpeg)$/,
                use: {
                    loader: 'file-loader',
                    options:{
                        esModule: false,
                        name: '[path][name].[ext]'
                    }   
                }
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            }
        ]
    }
}