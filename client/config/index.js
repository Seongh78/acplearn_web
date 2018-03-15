'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
    build: {
        env: require('./prod.env'),
        // Template for index.html
        index: path.resolve(__dirname, '../../server/public/index.html'),

        // Paths
        assetsRoot: path.resolve(__dirname, '../../server/public'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',

        // proxyTable: {
        //     '/api': {
        //         target: 'http://localhost:3000/api',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //       }
        // },

        /**
         * Source Maps
         */

        productionSourceMap: true,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map',
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],

        bundleAnalyzerReport: process.env.npm_config_report
    },

    dev: {
        // Paths
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',

        proxyTable: {
            '/api': {
                target: 'http://localhost:3000/api',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
              }
        },

        // Various Dev Server settings
        host: 'localhost',
        port: 8080,
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false,


        /**
         * Source Maps
         */

        // https://webpack.js.org/configuration/devtool/#development
        devtool: 'cheap-module-eval-source-map',

        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cacheBusting: true,

        cssSourceMap: true
    }
}
