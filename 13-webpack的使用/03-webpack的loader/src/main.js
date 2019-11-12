import {sum, mul} from "./js/utils.js";

console.log(sum(20, 540))
console.log(mul(2, 80))

/* 依赖css文件 */
// 安装了 css-loader style-loader 才可以正确打包 css 文件
require('./css/normal.css')

// 依赖 less 文件
require('./css/special.less')

document.writeln('<h2>Hello Less</h2>')
