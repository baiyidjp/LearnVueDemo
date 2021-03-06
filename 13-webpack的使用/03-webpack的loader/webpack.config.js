const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // 通过 node 动态获取绝对路径
    filename: 'bundle.js',
    /* 打包后的使用的图片路径 */
    publicPath: 'dist/'
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
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片小于limit时，会将图片编译成base64的字符串形式
              // 当加载的图片大于limit时，需要file-loader模块进行加载，并在编译后将图片存到dist中，需要在output中配置publicPath才能正确使用图片
              limit: 8192,
              /* 配置打包图片的选项 */
              // [变量] => 打包的图片地址是在 /dist/img/原图片名/8位的哈希值.原图片的后缀
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          /* 将bundle.js中的ES6语法转成ES5语法 */
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
}

// 配置本地的webpack npm install --save-dev webpack@3.6.0
// 这样在 packpage.json 中配置的 script 的 build 首先会找本地的webpack执行 ，如果没有才会找全局的webpack执行
