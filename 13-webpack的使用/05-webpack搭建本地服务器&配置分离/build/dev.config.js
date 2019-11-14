const path = require('path')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config.js')

module.exports = webpackMerge(baseConfig, {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true
  }
})
