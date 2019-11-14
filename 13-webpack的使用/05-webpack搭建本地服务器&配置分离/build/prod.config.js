const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config.js')

module.exports = webpackMerge(baseConfig, {
  plugins: [
    /* 丑化 js 代码 */
    new UglifyjsWebpackPlugin()
  ]
})
