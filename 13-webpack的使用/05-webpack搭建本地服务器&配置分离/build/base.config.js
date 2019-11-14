const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'), // 通过 node 动态获取绝对路径,并且找到上层目录
    filename: 'bundle.js',
    /* 打包后的使用的图片路径 当使用了这个插件（html-webpack-plugin - 将index.html打包到dist文件中）后不需要这个路径了 */
    // publicPath: 'dist/'
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
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      /* 安装的是运行时的Vue,如果想使用完整版的需要加上这个配置 */
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin('可以给打包的js文件添加额外信息'),
    /* 将index.html 打包到dist文件中 */
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}
