/**
 * @file webpack.config.dev.js
 * @description webpack 开发环境配置文件, 启动了devServer
 */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');
const WebpackBar = require('webpackbar');

module.exports = () => {
    return merge(baseConfig('dev'), {
        mode: 'development',
        devtool: 'inline-source-map',
        plugins: [
            new webpack.DefinePlugin({
                baseData: JSON.stringify(require('../src/baseData/baseData.dev'))
            })
        ],
        devServer: {
            contentBase: path.resolve('./'),
            open: true,
            historyApiFallback: true,
            proxy: [
                {
                    target: 'http://dev.qq.com:8888',
                    context: [
                        '/index',
                        '/search'
                    ],
                    headers: {
                        cookie: ''
                    },
                    secure: true,
                    changeOrigin: true,
                    ws: true,
                    xfwd: true
                }
            ]
        },
        performance: {
            hints: false
        }
    });
};