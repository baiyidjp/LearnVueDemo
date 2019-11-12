const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // 通过 node 动态获取绝对路径
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        /*
        * css-loader 只负责将CSS文件进行加载
        * style-loader 负责将样式添加到DOM中
        * 使用多个loader时，webpack解析顺序是从右向左
        * */
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      }
    ]
  }
}

// 配置本地的webpack npm install --save-dev webpack@3.6.0
// 这样在 packpage.json 中配置的 script 的 build 首先会找本地的webpack执行 ，如果没有才会找全局的webpack执行
